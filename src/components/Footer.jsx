import { EMAIL, GITHUB, LINKEDIN } from '../content/links.js'
import { useIdioma } from '../context/language.js'
import estilos from './Footer.module.css'

/*
  Rodapé discreto: crédito à esquerda e os mesmos contatos da faixa azul à
  direita, agora como links de texto.

  A repetição é intencional. Quem rola até o fim procurando o contato não
  deveria precisar voltar para achar.
*/
export function Footer() {
  const { t } = useIdioma()

  return (
    <footer className={`container ${estilos.rodape}`}>
      <p className={estilos.direitos}>{t.rodape.direitos}</p>

      <nav className={estilos.links}>
        <a href={`mailto:${EMAIL}`} className={estilos.link}>
          Email
        </a>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={estilos.link}>
          LinkedIn
        </a>
        <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={estilos.link}>
          GitHub
        </a>
      </nav>
    </footer>
  )
}
