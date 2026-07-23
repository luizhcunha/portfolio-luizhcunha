import { useIdioma } from '../context/language.js'
import { Section } from './Section.jsx'
import estilos from './Projects.module.css'

/*
  Grade com os projetos principais.

  Cada card tem uma faixa superior no lugar da captura de tela. Farol fica sem
  imagem em definitivo, por ser sistema proprietário sob NDA. Os outros dois
  recebem a captura quando eu terminar de preparar.
*/
export function Projects() {
  const { t } = useIdioma()

  return (
    <Section
      id="projetos"
      rotulo={t.projetos.rotulo}
      titulo={t.projetos.titulo}
      subtitulo={t.projetos.subtitulo}
    >
      <div className={estilos.grade}>
        {t.projetos.itens.map((projeto, indice) => (
          <article
            key={projeto.id}
            className={estilos.card}
            /*
              Cada card entra um pouco depois do anterior. O atraso é calculado
              pela posição na lista, então adicionar um quarto projeto mantém a
              cascata sem tocar no CSS.
            */
            style={{ '--atraso': `${indice * 0.12}s` }}
          >
            <div className={estilos.capa}>
              <span className={estilos.legendaCapa}>{projeto.legendaImagem}</span>
            </div>

            <div className={estilos.corpo}>
              <p className={estilos.tag}>{projeto.tag}</p>
              <h3 className={estilos.titulo}>{projeto.titulo}</h3>
              <p className={estilos.subtitulo}>{projeto.subtitulo}</p>
              <p className={estilos.descricao}>{projeto.descricao}</p>

              <ul className={estilos.stack}>
                {projeto.stack.map((tecnologia) => (
                  <li key={tecnologia} className={estilos.tecnologia}>
                    {tecnologia}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
