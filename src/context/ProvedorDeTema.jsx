import { useCallback, useEffect, useMemo } from 'react'

import { useLocalStorage } from '../hooks/useLocalStorage.js'
import { TemaContext } from './theme.js'

/*
  Descobre a preferência do sistema operacional. Quem já usa o Windows ou o
  celular em modo escuro abre o site em modo escuro, sem precisar clicar em nada.

  Só é consultado na primeira visita: depois disso, a escolha salva no
  localStorage tem prioridade.
*/
function temaPreferidoDoSistema() {
  const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefereEscuro ? 'dark' : 'light'
}

/*
  Provedor que segura o estado do tema e o disponibiliza para a árvore inteira
  de componentes.

  Sem contexto, o valor do tema teria que ser passado de props em props até
  chegar no botão que fica lá dentro do header. Com contexto, qualquer
  componente descendente chama useTema() e recebe o valor direto.
*/
export function ProvedorDeTema({ children }) {
  const [tema, definirTema] = useLocalStorage('portfolio:tema', temaPreferidoDoSistema)

  /*
    Todo o CSS de tema reage ao atributo data-theme no elemento html. Este efeito
    é a única ponte entre o estado do React e o documento: o JavaScript escreve o
    atributo e o navegador recalcula as cores sozinho.
  */
  useEffect(() => {
    document.documentElement.dataset.theme = tema
  }, [tema])

  /*
    useCallback evita recriar esta função a cada renderização. Sozinho não muda
    nada visível, mas mantém estável a identidade do objeto entregue no contexto,
    logo abaixo.
  */
  const alternarTema = useCallback(() => {
    definirTema((atual) => (atual === 'light' ? 'dark' : 'light'))
  }, [definirTema])

  /*
    Sem useMemo, este objeto seria novo a cada renderização e todos os
    componentes que leem o contexto seriam redesenhados sem necessidade, mesmo
    com o tema inalterado.
  */
  const valor = useMemo(() => ({ tema, alternarTema }), [tema, alternarTema])

  return <TemaContext.Provider value={valor}>{children}</TemaContext.Provider>
}
