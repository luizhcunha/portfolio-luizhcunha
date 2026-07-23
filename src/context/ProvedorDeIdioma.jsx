import { useCallback, useEffect, useMemo } from 'react'

import { IDIOMA_PADRAO, idiomas, idiomasDisponiveis } from '../content/index.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import { IdiomaContext } from './language.js'

/*
  Descobre o idioma do navegador na primeira visita. navigator.language devolve
  algo como "pt-BR" ou "en-US", então cortamos no hífen e ficamos com o código
  base. Qualquer coisa que não seja português cai em inglês.
*/
function idiomaPreferidoDoNavegador() {
  const codigo = (navigator.language || IDIOMA_PADRAO).slice(0, 2).toLowerCase()
  return idiomasDisponiveis.includes(codigo) ? codigo : IDIOMA_PADRAO
}

export function ProvedorDeIdioma({ children }) {
  const [idioma, definirIdioma] = useLocalStorage(
    'portfolio:idioma',
    idiomaPreferidoDoNavegador,
  )

  /*
    O valor vem do localStorage, que qualquer pessoa pode editar pelo DevTools.
    Se vier lixo, o site quebraria ao tentar ler t.hero.nome de um objeto que não
    existe. Esta linha garante que sempre haja um objeto de conteúdo válido.
  */
  const idiomaValido = idiomasDisponiveis.includes(idioma) ? idioma : IDIOMA_PADRAO
  const t = idiomas[idiomaValido]

  /*
    Mantém o documento coerente com o idioma escolhido. O atributo lang não é
    detalhe: leitores de tela usam ele para escolher a pronúncia, e buscadores
    usam para saber em que idioma indexar a página.
  */
  useEffect(() => {
    document.documentElement.lang = t.meta.lang
    document.title = t.meta.titulo

    const descricao = document.querySelector('meta[name="description"]')
    if (descricao) {
      descricao.setAttribute('content', t.meta.descricao)
    }
  }, [t])

  const alternarIdioma = useCallback(
    (novoIdioma) => {
      if (idiomasDisponiveis.includes(novoIdioma)) {
        definirIdioma(novoIdioma)
      }
    },
    [definirIdioma],
  )

  const valor = useMemo(
    () => ({ idioma: idiomaValido, alternarIdioma, t }),
    [idiomaValido, alternarIdioma, t],
  )

  return <IdiomaContext.Provider value={valor}>{children}</IdiomaContext.Provider>
}
