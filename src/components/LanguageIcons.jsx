/*
  Os seis ícones de linguagem, desenhados em SVG diretamente no JSX.

  A escolha por SVG inline em vez de arquivos de imagem tem três motivos: nenhuma
  requisição de rede extra, nitidez em qualquer densidade de tela, e as cores
  ficam sob controle do código em vez de congeladas dentro de um PNG.

  Um SVG é uma malha de coordenadas. O viewBox define o sistema interno, aqui
  sempre de 0 a 38 nos dois eixos, e todas as formas se posicionam nesse espaço,
  independente do tamanho final na tela.
*/

// A moldura arredondada é igual nos seis, então vale extrair.
function Badge({ children, cor }) {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      /*
        O ícone é decorativo: o nome da linguagem já aparece como texto logo
        abaixo. Sem aria-hidden, um leitor de tela anunciaria a mesma informação
        duas vezes.
      */
      aria-hidden="true"
      focusable="false"
    >
      <rect width="38" height="38" rx="9" fill={cor} />
      {children}
    </svg>
  )
}

// Estilo comum aos glifos escritos com texto dentro do SVG.
const textoGlifo = {
  textAnchor: 'middle',
  fontFamily: 'IBM Plex Mono, monospace',
  fontWeight: 700,
}

function IconeJavaScript() {
  return (
    <Badge cor="#f0db4f">
      <text x="19" y="25" fontSize="13" fill="#1a1a1a" {...textoGlifo}>
        JS
      </text>
    </Badge>
  )
}

function IconeJava() {
  // Xícara de café com a fumaça saindo, traçada só com contorno.
  return (
    <Badge cor="#fef6ef">
      <g fill="none" stroke="#e0722a" strokeWidth="2">
        <path d="M13 15h12v8a6 6 0 0 1-6 6 6 6 0 0 1-6-6v-8z" />
        <path d="M25 17c3 0 5 1.5 5 3.5s-2 3.5-5 3.5" />
        <path d="M16 10c-1 1-1 2 0 3M20 10c-1 1-1 2 0 3" strokeWidth="1.6" strokeLinecap="round" />
      </g>
    </Badge>
  )
}

function IconeKotlin() {
  /*
    O K do Kotlin é um polígono de cinco pontos com o degradê diagonal da marca.
    O id do degradê precisa ser único no documento inteiro, e não apenas neste
    arquivo, porque defs de SVG compartilham o mesmo espaço de nomes da página.
  */
  return (
    <Badge cor="#ffffff">
      <defs>
        <linearGradient id="degradeKotlin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e54857" />
          <stop offset="0.5" stopColor="#c711e1" />
          <stop offset="1" stopColor="#7f52ff" />
        </linearGradient>
      </defs>
      <polygon points="8,8 30,8 19,19 30,30 8,30" fill="url(#degradeKotlin)" />
    </Badge>
  )
}

function IconeHtml() {
  return (
    <Badge cor="#e34c26">
      <text x="19" y="25" fontSize="12" fill="#ffffff" {...textoGlifo}>
        {'</>'}
      </text>
    </Badge>
  )
}

function IconeCss() {
  return (
    <Badge cor="#2965f1">
      <text x="19" y="25" fontSize="13" fill="#ffffff" {...textoGlifo}>
        {'{ }'}
      </text>
    </Badge>
  )
}

function IconeSql() {
  // Cilindro de banco de dados: uma elipse no topo, as laterais e uma faixa.
  return (
    <Badge cor="#eef2f6">
      <g fill="none" stroke="#2f6f6a" strokeWidth="2">
        <ellipse cx="19" cy="12" rx="8" ry="3.2" />
        <path d="M11 12v12c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2V12" />
        <path d="M11 18c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2" />
      </g>
    </Badge>
  )
}

/*
  Lista exportada em vez de seis exports soltos: quem usa faz um map e não
  precisa saber o nome de cada componente.
*/
export const LINGUAGENS = [
  { nome: 'JavaScript', Icone: IconeJavaScript },
  { nome: 'Java', Icone: IconeJava },
  { nome: 'Kotlin', Icone: IconeKotlin },
  { nome: 'HTML', Icone: IconeHtml },
  { nome: 'CSS', Icone: IconeCss },
  { nome: 'SQL', Icone: IconeSql },
]
