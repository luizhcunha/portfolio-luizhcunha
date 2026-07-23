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

  return (
    <header className={estilos.header}>
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
