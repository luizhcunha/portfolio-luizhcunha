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

/*
  Componente raiz do site.

  Um componente React é uma função comum que devolve JSX. A única regra é que o
  nome comece com letra maiúscula, porque é assim que o React diferencia um
  componente meu (<App />) de uma tag nativa do HTML (<div />).

  Os provedores ficam por fora de tudo para que qualquer seção, em qualquer
  profundidade, consiga ler o tema e o idioma sem receber nada por props.

  Daqui para baixo é só composição: a ordem das linhas é a ordem da página.
*/
export default function App() {
  return (
    <ProvedorDeTema>
      <ProvedorDeIdioma>
        <Header />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Contact />
        </main>

        <Footer />
      </ProvedorDeIdioma>
    </ProvedorDeTema>
  )
}
