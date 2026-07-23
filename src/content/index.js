import pt from './pt.js'
import en from './en.js'

/*
  Ponto único de entrada do conteúdo. Quem precisa de texto importa daqui e não
  dos arquivos de idioma direto, então adicionar um terceiro idioma no futuro
  seria mexer só neste arquivo.
*/

export const idiomas = { pt, en }

// Usado para validar o que vem do localStorage e para montar os botões PT/EN.
export const idiomasDisponiveis = Object.keys(idiomas)

export const IDIOMA_PADRAO = 'pt'
