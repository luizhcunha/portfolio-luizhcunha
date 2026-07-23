import { createContext, useContext } from 'react'

/*
  Criação do contexto de idioma e o hook que o consome. Mesmo motivo do contexto
  de tema para estar em um arquivo separado do provedor.
*/

export const IdiomaContext = createContext(null)

export function useIdioma() {
  const contexto = useContext(IdiomaContext)

  if (contexto === null) {
    throw new Error('useIdioma precisa ser usado dentro de <ProvedorDeIdioma>')
  }

  return contexto
}
