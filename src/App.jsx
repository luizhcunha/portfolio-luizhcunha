import { About } from './components/About.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { Projects } from './components/Projects.jsx'
import { Skills } from './components/Skills.jsx'
import { Timeline } from './components/Timeline.jsx'
import { ProvedorDeIdioma } from './context/ProvedorDeIdioma.jsx'
import { ProvedorDeTema } from './context/ProvedorDeTema.jsx'
import { useIdioma } from './context/language.js'

/*
  Componente raiz do site.

  Um componente React é uma função comum que devolve JSX. A única regra é que o
  nome comece com letra maiúscula, porque é assim que o React diferencia um
  componente meu (<App />) de uma tag nativa do HTML (<div />).

  Os provedores ficam por fora de tudo para que qualquer seção, em qualquer
  profundidade, consiga ler o tema e o idioma sem receber nada por props.

  Daqui para baixo é só composição: a ordem das linhas é a ordem da página.
*/
/*
  A página em si. Fica separada do App porque precisa ler o idioma, e para isso
  tem que estar por dentro do provedor, não ao lado dele.
*/
function Pagina() {
  const { t } = useIdioma()

  return (
    <>
      <a href="#conteudo" className="pular-navegacao">
        {t.acessibilidade.irParaConteudo}
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ProvedorDeTema>
      <ProvedorDeIdioma>
        <Pagina />
      </ProvedorDeIdioma>
    </ProvedorDeTema>
  )
}
