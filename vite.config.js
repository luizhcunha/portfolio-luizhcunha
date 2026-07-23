import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração do Vite, a ferramenta que serve o projeto em desenvolvimento e
// gera os arquivos finais em produção.
//
// O plugin do React é o que ensina o Vite a entender arquivos .jsx, a sintaxe
// que permite escrever HTML dentro do JavaScript. Navegador nenhum entende JSX
// nativamente, então ele precisa ser traduzido antes.
export default defineConfig({
  plugins: [react()],
})
