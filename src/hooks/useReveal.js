import { useEffect, useRef, useState } from 'react'

/*
  Revela um elemento quando ele entra na tela pela primeira vez.

  Devolve uma referência, que deve ser presa ao elemento observado, e um booleano
  que vira true no momento da entrada e nunca mais volta atrás. Rolar para cima
  não esconde a seção de novo, porque um conteúdo que pisca a cada passagem
  incomoda mais do que impressiona.

  A alternativa antiga era escutar o evento de scroll e calcular posições na mão,
  o que dispara centenas de vezes por segundo e trava a rolagem. O
  IntersectionObserver é resolvido pelo próprio navegador, fora da thread
  principal, e só avisa quando o cruzamento realmente acontece.
*/
export function useReveal({ limiar = 0.15 } = {}) {
  const referencia = useRef(null)
  const [visivel, definirVisivel] = useState(false)

  useEffect(() => {
    const elemento = referencia.current
    if (!elemento) return

    /*
      Navegadores muito antigos não têm IntersectionObserver. Em vez de deixar a
      página em branco, o conteúdo aparece de uma vez, sem animação.
    */
    if (!('IntersectionObserver' in window)) {
      definirVisivel(true)
      return
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          definirVisivel(true)

          // Já revelou, então parar de observar economiza trabalho do navegador.
          observador.unobserve(entrada.target)
        }
      },
      // Dispara quando 15% do elemento estiver visível, e não no primeiro pixel.
      { threshold: limiar },
    )

    observador.observe(elemento)

    /*
      Função de limpeza. O React a executa quando o componente sai da tela, e
      também entre montagens no modo estrito. Sem ela, observadores antigos
      ficariam vivos e vazando memória.
    */
    return () => observador.disconnect()
  }, [limiar])

  return [referencia, visivel]
}
