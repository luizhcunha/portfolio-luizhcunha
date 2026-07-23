/*
  Componente raiz do site.

  Um componente React é uma função comum que devolve JSX. A única regra é que o
  nome comece com letra maiúscula, porque é assim que o React diferencia um
  componente meu (<App />) de uma tag nativa do HTML (<div />).

  A partir daqui o App vira só a composição das seções, na ordem em que aparecem
  na página.
*/

export default function App() {
  return (
    <main className="container" style={{ paddingBlock: '120px' }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '40px' }}>
        Luiz Henrique Cunha do Nascimento
      </h1>

      <p style={{ color: 'var(--color-muted)', marginTop: '12px', lineHeight: 1.6 }}>
        Desenvolvedor e suporte de TI, em Manaus.
      </p>
    </main>
  )
}
