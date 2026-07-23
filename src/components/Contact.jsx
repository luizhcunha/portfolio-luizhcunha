import { EMAIL, GITHUB, LINKEDIN } from '../content/links.js'
import { useIdioma } from '../context/language.js'
import { useReveal } from '../hooks/useReveal.js'
import estilos from './Contact.module.css'

/*
  Fechamento da página, em faixa azul ocupando a largura inteira da tela.

  É a única quebra de cor do site. A página toda é neutra justamente para que
  este bloco chame atenção sozinho, sem precisar de nenhum outro artifício.

  Não reaproveita o componente Section porque a estrutura é diferente: o fundo
  precisa vazar até as bordas da janela, enquanto as outras seções ficam presas
  ao container de 1100px.
*/
export function Contact() {
  const [referencia, visivel] = useReveal()
  const { t } = useIdioma()

  return (
    <section id="contato" ref={referencia} className={estilos.faixa} data-visivel={visivel}>
      <div className={estilos.conteudo}>
        <h2 className={estilos.titulo}>{t.contato.titulo}</h2>
        <p className={estilos.corpo}>{t.contato.corpo}</p>

        <div className={estilos.acoes}>
          <a href={`mailto:${EMAIL}`} className={estilos.botaoPrimario}>
            {t.contato.ctaEmail}
          </a>

          {/*
            target="_blank" abre em outra aba. O rel evita dois problemas: o
            noopener impede que a página aberta manipule esta pelo window.opener,
            e o noreferrer não entrega o endereço de origem no cabeçalho.
          */}
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className={estilos.botaoSecundario}
          >
            {t.contato.ctaLinkedin}
          </a>

          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className={estilos.botaoSecundario}
          >
            {t.contato.ctaGithub}
          </a>
        </div>
      </div>
    </section>
  )
}
