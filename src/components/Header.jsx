import { useEffect, useRef } from 'react'

import { useIdioma } from '../context/language.js'
import { LangToggle } from './LangToggle.jsx'
import { ThemeToggle } from './ThemeToggle.jsx'
import estilos from './Header.module.css'

/*
  Os itens do menu vivem em um array porque o texto muda com o idioma, mas o
  destino não. A chave aponta para dentro de t.nav e o href para o id da seção.
*/
const ITENS_DO_MENU = [
  { chave: 'sobre', href: '#sobre' },
  { chave: 'habilidades', href: '#habilidades' },
  { chave: 'projetos', href: '#projetos' },
  { chave: 'trajetoria', href: '#trajetoria' },
  { chave: 'contato', href: '#contato' },
]

/*
  Barra fixa no topo, com a marca à esquerda, a navegação no meio e os
  alternadores de idioma e tema à direita.
*/
export function Header() {
  const { t } = useIdioma()
  const referencia = useRef(null)

  /*
    A barra é fixa, então sai do fluxo e não empurra o conteúdo para baixo. O
    hero precisa reservar esse espaço na mão, e a altura muda: em telas
    estreitas o menu quebra em três linhas e a barra passa de 70px para mais de
    200px. Chutar um valor fixo esconderia a primeira linha do hero no celular.

    Aqui o header mede a si mesmo e publica o resultado em uma variável CSS
    global, que o restante do layout consome. O ResizeObserver avisa a cada
    mudança de tamanho, inclusive quando o menu reflui ao girar o aparelho.
  */
  useEffect(() => {
    const elemento = referencia.current
    if (!elemento) return

    const publicarAltura = () => {
      const altura = elemento.getBoundingClientRect().height
      document.documentElement.style.setProperty('--altura-header', `${altura}px`)
    }

    publicarAltura()

    const observador = new ResizeObserver(publicarAltura)
    observador.observe(elemento)

    return () => observador.disconnect()
  }, [])

  return (
    <header ref={referencia} className={estilos.header}>
      <a href="#topo" className={estilos.marca}>
        LH.
      </a>

      <nav className={estilos.nav} aria-label={t.acessibilidade.navegacaoPrincipal}>
        {ITENS_DO_MENU.map((item) => (
          <a key={item.chave} href={item.href} className={estilos.link}>
            {t.nav[item.chave]}
          </a>
        ))}
      </nav>

      <div className={estilos.controles}>
        <LangToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}
