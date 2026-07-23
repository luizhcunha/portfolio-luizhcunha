import { useIdioma } from '../context/language.js'
import { LINGUAGENS } from './LanguageIcons.jsx'
import { Section } from './Section.jsx'
import estilos from './Skills.module.css'

/*
  Duas partes: um card destacando as linguagens de programação, com ícone, e
  abaixo uma grade de cards agrupando o resto por categoria.

  A lista de linguagens é fixa porque os nomes não se traduzem. Já os grupos vêm
  do conteúdo, já que os títulos e alguns itens mudam de idioma.
*/
export function Skills() {
  const { t } = useIdioma()

  return (
    <Section id="habilidades" rotulo={t.habilidades.rotulo} titulo={t.habilidades.titulo}>
      <div className={estilos.cardLinguagens}>
        <p className={estilos.rotuloCard}>{t.habilidades.tituloLinguagens}</p>

        <ul className={estilos.gradeLinguagens}>
          {LINGUAGENS.map(({ nome, Icone }) => (
            /*
              A prop key não é decoração. O React usa ela para saber qual item da
              lista é qual entre uma renderização e outra. Sem key estável, ele
              recria elementos à toa e pode embaralhar estado interno.
            */
            <li key={nome} className={estilos.linguagem}>
              <Icone />
              <span className={estilos.nomeLinguagem}>{nome}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={estilos.gradeGrupos}>
        {t.habilidades.grupos.map((grupo) => (
          <div key={grupo.titulo} className={estilos.card}>
            <p className={estilos.rotuloCard}>{grupo.titulo}</p>

            <ul className={estilos.tags}>
              {grupo.itens.map((item) => (
                <li key={item} className={estilos.tag}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
