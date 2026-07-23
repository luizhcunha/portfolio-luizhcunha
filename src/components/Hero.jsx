import { useIdioma } from '../context/language.js'
import estilos from './Hero.module.css'

/*
  Primeira dobra da página: função, nome, uma frase de posicionamento,
  localização e dois caminhos possíveis para quem chegou.

  A entrada é animada por CSS puro, e não por scroll, porque este bloco já está
  visível quando a página carrega. Cada linha recebe um atraso diferente pela
  variável --atraso, o que produz a cascata de cima para baixo.
*/
export function Hero() {
  const { t } = useIdioma()

  return (
    <section id="topo" className={`container ${estilos.hero}`}>
      <p className={estilos.eyebrow} style={{ '--atraso': '0s' }}>
        {t.hero.eyebrow}
      </p>

      <h1 className={estilos.nome} style={{ '--atraso': '0.08s' }}>
        {t.hero.nome}
      </h1>

      <p className={estilos.subtitulo} style={{ '--atraso': '0.16s' }}>
        {t.hero.subtitulo}
      </p>

      <p className={estilos.local} style={{ '--atraso': '0.2s' }}>
        {t.hero.local}
      </p>

      <div className={estilos.acoes} style={{ '--atraso': '0.26s' }}>
        <a href="#projetos" className={estilos.botaoPrimario}>
          {t.hero.ctaProjetos}
        </a>

        {/*
          O atributo download instrui o navegador a salvar o arquivo em vez de
          abrir no visualizador embutido, e o valor dele define o nome com que o
          PDF chega no computador de quem baixou.
        */}
        <a
          href="/curriculo-luiz-henrique-cunha-do-nascimento.pdf"
          download="Curriculo-Luiz-Henrique-Cunha-do-Nascimento.pdf"
          className={estilos.botaoSecundario}
        >
          {t.hero.ctaCurriculo}
        </a>
      </div>
    </section>
  )
}
