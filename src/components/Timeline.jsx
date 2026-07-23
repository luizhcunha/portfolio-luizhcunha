import { useIdioma } from '../context/language.js'
import { Section } from './Section.jsx'
import estilos from './Timeline.module.css'

/*
  Experiência e formação em uma lista única, do mais recente para o mais antigo.

  Trabalho, liderança e formação convivem na mesma coluna porque aconteceram em
  paralelo na vida real. O selo colorido é o que diferencia cada tipo, em vez de
  quebrar tudo em três listas separadas.
*/
export function Timeline() {
  const { t } = useIdioma()

  return (
    <Section id="trajetoria" rotulo={t.trajetoria.rotulo} titulo={t.trajetoria.titulo}>
      <ol className={estilos.lista}>
        {t.trajetoria.itens.map((item, indice) => (
          <li
            key={item.id}
            className={estilos.item}
            style={{ '--atraso': `${indice * 0.08}s` }}
          >
            {/*
              A tag time com dateTime não é obrigatória aqui, mas o elemento
              certo comunica ao navegador e a leitores de tela que aquilo é um
              período, e não um texto qualquer.
            */}
            <time className={estilos.periodo}>{item.periodo}</time>

            <div className={estilos.conteudo}>
              <div className={estilos.cabecalho}>
                <span className={estilos.selo}>{item.tipo}</span>
                <h3 className={estilos.cargo}>{item.cargo}</h3>
              </div>

              <p className={estilos.organizacao}>{item.organizacao}</p>

              {/*
                Formações sem detalhamento não têm atividades, e cursos e cargos
                de liderança não têm stack. O && evita gerar uma lista vazia
                nesses casos, que apareceria como um espaço em branco estranho.
              */}
              {item.atividades.length > 0 && (
                <ul className={estilos.atividades}>
                  {item.atividades.map((atividade) => (
                    <li key={atividade}>{atividade}</li>
                  ))}
                </ul>
              )}

              {item.stack.length > 0 && (
                <ul className={estilos.stack}>
                  {item.stack.map((tecnologia) => (
                    <li key={tecnologia} className={estilos.tecnologia}>
                      {tecnologia}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
