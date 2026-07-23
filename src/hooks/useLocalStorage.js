import { useEffect, useState } from 'react'

/*
  Funciona igual ao useState, mas grava o valor no localStorage e o recupera no
  próximo carregamento. É o que faz a escolha de tema e de idioma sobreviver ao
  refresh da página.

  Um hook customizado é só uma função que começa com "use" e chama outros hooks
  por dentro. Serve para tirar lógica repetida de dentro dos componentes.
*/
export function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    /*
      Passar uma função para o useState em vez do valor direto faz o React
      executá-la só na primeira renderização. Sem isso, o localStorage seria
      lido em toda renderização, e leitura de disco não é de graça.
    */
    const padrao = typeof valorInicial === 'function' ? valorInicial() : valorInicial

    try {
      const salvo = window.localStorage.getItem(chave)
      return salvo !== null ? JSON.parse(salvo) : padrao
    } catch {
      /*
        O localStorage lança exceção em navegação anônima de alguns navegadores
        e quando a cota está cheia. Nesse caso o site ainda deve abrir, só perde
        a persistência.
      */
      return padrao
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(chave, JSON.stringify(valor))
    } catch {
      // Mesmo motivo acima: falhar em gravar não pode derrubar a interface.
    }
  }, [chave, valor])

  return [valor, setValor]
}
