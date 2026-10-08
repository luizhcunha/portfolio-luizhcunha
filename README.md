# Portfólio | Luiz Henrique Cunha do Nascimento

Portfólio pessoal de página única, com alternância entre português e inglês, tema claro e escuro, e animações
de entrada acionadas pelo scroll.

**Site no ar:** [luizhcn.com.br](https://luizhcn.com.br)

## Stack

- **React 19** para a composição da interface em componentes
- **Vite 8** como servidor de desenvolvimento e bundler
- **CSS Modules** para estilos isolados por componente
- **Custom properties do CSS** para os tokens de design e o sistema de temas
- **GitHub Actions** para build e publicação automáticos

Sem dependências de runtime além do React. Sem biblioteca de UI, sem framework de CSS, sem gerenciador de
estado externo.

## Decisões de implementação

**Temas por atributo, não por JavaScript.** Todas as cores vivem como custom properties em
[tokens.css](src/styles/tokens.css), definidas duas vezes: uma no `:root` e outra em `[data-theme="dark"]`.
Trocar de tema é escrever um atributo no elemento `html`, e o navegador recalcula a página inteira sozinho.
Nenhum componente sabe que existe tema.

**Cores em OKLCH.** Diferente do HSL, a luminosidade no OKLCH corresponde ao brilho percebido pelo olho, o que
mantém o contraste previsível ao inverter a paleta. O azul de destaque tem 52% de luminosidade no tema claro e
70% no escuro, justamente para manter a mesma legibilidade contra fundos opostos.

**Conteúdo separado da apresentação.** Nenhum componente escreve uma frase no JSX. Todo o texto sai de
[pt.js](src/content/pt.js) e [en.js](src/content/en.js), que compartilham exatamente as mesmas chaves, então
trocar de idioma é apontar para o outro objeto sem nenhum `if` espalhado pela interface.

**Revelação com IntersectionObserver.** O hook [useReveal](src/hooks/useReveal.js) observa cada seção, dispara
uma única vez e para de observar. A alternativa clássica, escutar o evento de scroll e calcular posições,
dispara centenas de vezes por segundo e trava a rolagem.

**Header que se mede.** A barra é fixa, então não ocupa espaço no fluxo e o conteúdo abaixo precisa reservá-lo
manualmente. Como a altura muda conforme o menu reflui, o header se mede com `ResizeObserver` e publica o
resultado na variável `--altura-header`, consumida pelo hero e pelo `scroll-padding` das âncoras.

**Acessibilidade.** Link de pular navegação como primeiro elemento focável, `role="switch"` com `aria-checked`
no alternador de tema, `aria-pressed` nos botões de idioma, atributo `lang` acompanhando o conteúdo, foco
visível em toda a navegação por teclado e suporte a `prefers-reduced-motion`.

## Rodando localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

O site fica disponível em `http://localhost:5173`.

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Sobe o servidor de desenvolvimento com recarga automática |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Serve a pasta `dist/` para conferir o build antes de publicar |

## Estrutura

```
src/
├─ main.jsx        ponto de entrada, conecta o React ao index.html
├─ App.jsx         composição da página
├─ styles/         tokens de design, reset e estilos globais
├─ content/        textos em português e inglês, e os links de contato
├─ context/        estado compartilhado de tema e idioma
├─ hooks/          useLocalStorage e useReveal
└─ components/     um arquivo por seção, com o CSS Module ao lado
```

## Publicação

Cada envio para a `main` dispara o workflow em [deploy.yml](.github/workflows/deploy.yml), que instala as
dependências com `npm ci`, gera o build e publica a pasta `dist` no GitHub Pages. Se o build falhar, nada é
publicado e o site no ar permanece intacto.

## Contato

- Email: luizcunha123001@gmail.com
- LinkedIn: [linkedin.com/in/luizhcunha](https://linkedin.com/in/luizhcunha)
- GitHub: [github.com/luizhcunha](https://github.com/luizhcunha)
