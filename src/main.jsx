import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './styles/global.css'

/*
  Ponto de entrada da aplicação. É o primeiro arquivo que o navegador executa,
  porque o index.html aponta para ele na tag <script type="module">.

  Ele encontra a div#root vazia do index.html, cria uma raiz do React em cima
  dela e manda desenhar o componente App ali dentro.

  O import de CSS dentro de um arquivo JavaScript não é sintaxe da linguagem, e
  sim uma capacidade do Vite: em desenvolvimento ele injeta o estilo na página,
  e no build extrai tudo para um arquivo .css separado.

  O StrictMode não aparece na tela. É um modo de desenvolvimento que monta cada
  componente duas vezes de propósito, para expor efeitos colaterais mal escritos
  (por exemplo, um observer criado e nunca destruído). Em produção ele some.
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
