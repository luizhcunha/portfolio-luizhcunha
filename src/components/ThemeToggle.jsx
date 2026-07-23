import { useIdioma } from '../context/language.js'
import { useTema } from '../context/theme.js'
import estilos from './ThemeToggle.module.css'

/*
  Interruptor de tema claro e escuro.

  Visualmente é um trilho com uma bolinha que desliza. Semanticamente é um
  botão com role de switch, para que leitores de tela anunciem "ligado" ou
  "desligado" em vez de apenas "botão".
*/
export function ThemeToggle() {
  const { tema, alternarTema } = useTema()
  const { t } = useIdioma()

  const estaEscuro = tema === 'dark'

  return (
    <button
      type="button"
      onClick={alternarTema}
      className={estilos.trilho}
      role="switch"
      aria-checked={estaEscuro}
      aria-label={t.acessibilidade.alternarTema}
    >
      {/*
        A posição da bolinha vem de uma variável CSS em vez de uma classe
        condicional. A transição do CSS anima entre os dois valores sozinha.
      */}
      <span
        className={estilos.bolinha}
        style={{ '--posicao': estaEscuro ? '22px' : '2px' }}
      />
    </button>
  )
}
