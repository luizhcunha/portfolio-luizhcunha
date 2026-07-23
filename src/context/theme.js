import { createContext, useContext } from 'react'

/*
  Criação do contexto de tema e o hook que o consome.

  Este arquivo é .js e não .jsx de propósito: ele não exporta nenhum componente.
  Manter a criação do contexto separada do provedor evita que o recarregamento
  automático do Vite perca o estado a cada salvamento.
*/

export const TemaContext = createContext(null)

export function useTema() {
  const contexto = useContext(TemaContext)

  /*
    Se algum componente for usado fora do provedor, o contexto vem nulo e o erro
    apareceria lá na frente, como "não consigo ler propriedade de null". Falhar
    aqui, com uma mensagem clara, economiza tempo de depuração.
  */
  if (contexto === null) {
    throw new Error('useTema precisa ser usado dentro de <ProvedorDeTema>')
  }

  return contexto
}
