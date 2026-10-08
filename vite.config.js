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

    Com o domínio próprio, o site mora na raiz de luizhcn.com.br, então o
    prefixo é só a barra. Se um dia ele voltar a ser publicado num subdiretório,
    como luizhcunha.github.io/portfolio-luizhcunha/, este valor precisa virar o
    nome do subdiretório, senão o HTML pede os arquivos no lugar errado e a
    página fica em branco.
  */
  base: '/',
})
