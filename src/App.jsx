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
*/

function Pagina() {
  const { t } = useIdioma()

  return (
    <main className="container" style={{ paddingBlock: '120px' }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '40px' }}>
        {t.hero.nome}
      </h1>

      <p style={{ color: 'var(--color-muted)', marginTop: '12px', lineHeight: 1.6 }}>
        {t.hero.subtitulo}
      </p>
    </main>
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
