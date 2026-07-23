import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração do Vite, a ferramenta que serve o projeto em desenvolvimento e
// gera os arquivos finais em produção.
export default defineConfig({
  // O plugin do React é o que ensina o Vite a entender arquivos .jsx, a sintaxe
  // que permite escrever HTML dentro do JavaScript. Navegador nenhum entende
  // JSX nativamente, então ele precisa ser traduzido antes.
  plugins: [react()],

  /*
    Prefixo aplicado a todo caminho de arquivo gerado no build.

    O GitHub Pages publica o site em /portfolio-luizhcunha/ e não na raiz do
    domínio. Sem este prefixo, o HTML pediria /assets/index.js, o servidor
    procuraria na raiz, não acharia nada, e o resultado seria uma página branca
    com erro 404 no console.

    Em desenvolvimento o Vite ignora este valor e serve tudo a partir da raiz.
  */
  base: '/portfolio-luizhcunha/',
})
