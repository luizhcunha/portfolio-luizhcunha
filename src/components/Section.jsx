import { useReveal } from '../hooks/useReveal.js'
import estilos from './Section.module.css'

/*
  Casca comum a todas as seções internas da página.

  Concentra três coisas que se repetiriam cinco vezes: o container centralizado,
  o par de rótulo numerado e título, e a revelação no scroll.

  A propriedade children é especial no React: representa tudo que foi escrito
  entre a abertura e o fechamento da tag. Isto aqui

    <Section titulo="Sobre mim"><p>texto</p></Section>

  entrega o parágrafo para este componente através de children, o que permite
  reaproveitar a moldura com qualquer conteúdo dentro.
*/
export function Section({ id, rotulo, titulo, subtitulo, children }) {
  const [referencia, visivel] = useReveal()

  return (
    <section
      id={id}
      ref={referencia}
      className={`container ${estilos.secao} ${visivel ? estilos.visivel : ''}`}
    >
      <div className={estilos.cabecalho}>
        <p className={estilos.rotulo}>{rotulo}</p>
        <h2 className={estilos.titulo}>{titulo}</h2>

        {/*
          Renderização condicional: o && só avalia o lado direito se o esquerdo
          for verdadeiro. Como subtitulo é opcional, seções sem ele simplesmente
          não geram o parágrafo.
        */}
        {subtitulo && <p className={estilos.subtitulo}>{subtitulo}</p>}
      </div>

      {children}
    </section>
  )
}
