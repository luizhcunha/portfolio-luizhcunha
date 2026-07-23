import { useIdioma } from '../context/language.js'
import { Section } from './Section.jsx'
import estilos from './About.module.css'

/*
  Um parágrafo só, mas em seção própria: assim ele ganha o mesmo ritmo visual
  das outras e entra na navegação do menu.
*/
export function About() {
  const { t } = useIdioma()

  return (
    <Section id="sobre" rotulo={t.sobre.rotulo} titulo={t.sobre.titulo}>
      <p className={estilos.corpo}>{t.sobre.corpo}</p>
    </Section>
  )
}
