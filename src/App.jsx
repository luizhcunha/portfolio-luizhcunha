import { About } from './components/About.jsx'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { Skills } from './components/Skills.jsx'
import { ProvedorDeIdioma } from './context/ProvedorDeIdioma.jsx'
import { ProvedorDeTema } from './context/ProvedorDeTema.jsx'

/*
  Componente raiz do site.

  Um componente React é uma função comum que devolve JSX. A única regra é que o
  nome comece com letra maiúscula, porque é assim que o React diferencia um
  componente meu (<App />) de uma tag nativa do HTML (<div />).

  Os provedores ficam por fora de tudo para que qualquer seção, em qualquer
  profundidade, consiga ler o tema e o idioma sem receber nada por props.
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
        </main>
      </ProvedorDeIdioma>
    </ProvedorDeTema>
  )
}
