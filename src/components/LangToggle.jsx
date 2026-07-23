import { idiomasDisponiveis } from '../content/index.js'
import { useIdioma } from '../context/language.js'
import estilos from './LangToggle.module.css'

/*
  Pílula com os botões PT e EN.

  Os botões são gerados a partir de idiomasDisponiveis em vez de escritos na
  mão. Se um terceiro idioma for adicionado ao conteúdo, ele aparece aqui
  sozinho, sem tocar neste arquivo.
*/
export function LangToggle() {
  const { idioma, alternarIdioma, t } = useIdioma()

  return (
    <div className={estilos.pilula} role="group" aria-label={t.acessibilidade.selecionarIdioma}>
      {idiomasDisponiveis.map((codigo) => {
        const ativo = codigo === idioma

        return (
          <button
            key={codigo}
            type="button"
            onClick={() => alternarIdioma(codigo)}
            className={ativo ? estilos.botaoAtivo : estilos.botao}
            /*
              aria-pressed comunica o estado a quem usa leitor de tela. Sem isso,
              a única pista de qual idioma está ativo seria a cor de fundo, que
              é invisível para essas pessoas.
            */
            aria-pressed={ativo}
          >
            {codigo.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
