/*
  Todo o texto do site em português, em um objeto só.

  Nenhum componente escreve uma frase direto no JSX. Isso mantém a tradução
  sincronizada: en.js tem exatamente as mesmas chaves, então trocar de idioma é
  apenas apontar para o outro objeto.
*/

const pt = {
  // Usado no <title>, na meta description e no atributo lang do html.
  meta: {
    lang: 'pt-BR',
    titulo: 'Luiz Henrique Cunha do Nascimento | Desenvolvedor e Suporte de TI',
    descricao:
      'Portfólio de Luiz Henrique Cunha do Nascimento, tecnólogo em Análise e Desenvolvimento de Sistemas em Manaus. Sistemas internos, automações e infraestrutura de TI.',
  },

  nav: {
    sobre: 'Sobre',
    habilidades: 'Habilidades',
    projetos: 'Projetos',
    trajetoria: 'Trajetória',
    contato: 'Contato',
  },

  hero: {
    eyebrow: 'DESENVOLVEDOR & SUPORTE DE TI',
    nome: 'Luiz Henrique Cunha do Nascimento',
    subtitulo:
      'Transformo processos manuais em sistemas automatizados, da infraestrutura de TI ao código que economiza dias de trabalho.',
    local: 'Manaus, AM, Brasil',
    ctaProjetos: 'Ver projetos',
    ctaCurriculo: 'Baixar currículo',
  },

  sobre: {
    rotulo: '01 / Sobre',
    titulo: 'Sobre mim',
    corpo:
      'Sou tecnólogo em Análise e Desenvolvimento de Sistemas e atuo com suporte e infraestrutura de TI, enquanto desenvolvo sistemas próprios em JavaScript, Java e Kotlin. Gosto de resolver problemas reais: automatizar tarefas que levavam dias e reduzi-las a minutos, construir ferramentas internas do zero e criar aplicações com impacto de verdade.',
  },

  habilidades: {
    rotulo: '02 / Habilidades',
    titulo: 'O que eu uso no dia a dia',
    tituloLinguagens: 'Linguagens',
    grupos: [
      { titulo: 'Bancos de dados', itens: ['MySQL', 'SQLite'] },
      {
        titulo: 'Ferramentas & Plataformas',
        itens: [
          'Git',
          'GitHub',
          'Figma',
          'Notion',
          'Microsoft 365',
          'SharePoint',
          'Power Automate',
          'Active Directory',
          'Windows Server',
          'Snipe-IT',
        ],
      },
      {
        titulo: 'Infraestrutura & Suporte',
        itens: [
          'Suporte N1/N2',
          'Helpdesk',
          'Gestão de ativos de TI',
          'Administração de usuários e acessos',
        ],
      },
      {
        titulo: 'Conceitos',
        itens: [
          'APIs REST',
          'Integração de sistemas',
          'Computação em nuvem',
          'Scrum',
          'Kanban',
        ],
      },
      {
        titulo: 'Idiomas',
        itens: ['Português: nativo', 'Inglês: B2 (intermediário avançado)'],
      },
    ],
  },

  projetos: {
    rotulo: '03 / Projetos',
    titulo: 'Projetos principais',
    subtitulo: 'Uma seleção de sistemas que desenvolvi, do interno ao acadêmico.',
    itens: [
      {
        id: 'farol',
        tag: 'Sistema Interno · NDA',
        titulo: 'Farol',
        subtitulo:
          'Sistema de Insights e Extração de Informações para Avaliação de Produtividade',
        descricao:
          'Plataforma interna que transforma dados operacionais brutos em insights de produtividade, automatizando extrações que antes eram feitas manualmente. Por ser um sistema proprietário da empresa, detalhes técnicos e capturas de tela estão sob NDA.',
        stack: ['JavaScript', 'APIs REST', 'Cloud'],
        legendaImagem: 'Sob NDA, sem capturas públicas',
      },
      {
        id: 'jolustore',
        tag: 'Site Institucional',
        titulo: 'Jolustore',
        subtitulo: 'Site estático com módulo pet',
        descricao:
          'Site institucional estático com um módulo dedicado à linha pet, apresentando produtos e informações da loja com foco em performance e simplicidade.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        legendaImagem: 'Captura em breve',
      },
      {
        id: 'meutea',
        tag: 'Projeto Acadêmico · Técnico em Informática',
        titulo: 'MeuTEA',
        subtitulo: 'App para crianças com TEA',
        descricao:
          'Aplicativo mobile desenvolvido do zero durante o técnico em informática com ênfase em programação, voltado para crianças com TEA (Transtorno do Espectro Autista), para apoiar e facilitar a comunicação.',
        stack: ['Java', 'Kotlin'],
        legendaImagem: 'Captura em breve',
      },
    ],
  },

  trajetoria: {
    rotulo: '04 / Trajetória',
    titulo: 'Experiência & Formação',
    itens: [
      {
        id: 'assistente-ti',
        periodo: 'Jul 2026 - Atual',
        tipo: 'Trabalho',
        cargo: 'Assistente de TI',
        organizacao: 'Zona Azul Manaus',
        atividades: [
          'Administro Active Directory, Microsoft 365 e SharePoint para toda a operação.',
          'Desenvolvo sistemas internos em JavaScript que automatizam processos administrativos.',
        ],
        stack: ['JavaScript', 'Power Automate'],
      },
      {
        id: 'auxiliar-ti',
        periodo: 'Jan 2025 - Jun 2026',
        tipo: 'Trabalho',
        cargo: 'Auxiliar de TI',
        organizacao: 'Zona Azul Manaus',
        atividades: [
          'Implementei o Snipe-IT para gerenciar mais de 350 ativos de TI, centralizando controles antes feitos em planilhas.',
          'Desenvolvi sistemas internos em JavaScript, reduzindo rotinas de dias para minutos.',
        ],
        stack: ['JavaScript', 'SQL'],
      },
      {
        id: 'estagiario-ti',
        periodo: 'Jul 2024 - Dez 2024',
        tipo: 'Trabalho',
        cargo: 'Estagiário de TI',
        organizacao: 'Zona Azul Manaus',
        atividades: [
          'Desenvolvi um chatbot de atendimento com a API oficial do WhatsApp.',
          'Prestei suporte de helpdesk N1 e modernizei equipamentos antigos.',
        ],
        stack: ['JavaScript'],
      },
      {
        id: 'extensao-esbam',
        periodo: 'Jun 2023 - Dez 2025',
        tipo: 'Liderança',
        cargo: 'Representante de Projeto de Extensão',
        organizacao: 'Centro Universitário ESBAM',
        atividades: [
          'Representei o grupo de alunos em reuniões com professores e coordenação.',
          'Projeto concluído com nota máxima 10 na avaliação final.',
        ],
        stack: [],
      },
      {
        id: 'ads-uniesbam',
        periodo: 'Jun 2023 - Dez 2025',
        tipo: 'Formação',
        cargo: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        organizacao: 'UNIESBAM',
        atividades: [],
        stack: [],
      },
      {
        id: 'tecnico-fucapi',
        periodo: 'Jul 2022 - Dez 2023',
        tipo: 'Formação',
        cargo: 'Técnico em Informática com Ênfase em Programação',
        organizacao: 'FUCAPI',
        atividades: ['Projeto de conclusão: MeuTEA'],
        stack: ['Java', 'Kotlin'],
      },
    ],
  },

  contato: {
    titulo: 'Vamos conversar?',
    corpo:
      'Estou aberto a oportunidades como desenvolvedor e na área de TI. Envie uma mensagem, respondo rápido.',
    ctaEmail: 'Enviar e-mail',
    ctaLinkedin: 'LinkedIn',
    ctaGithub: 'GitHub',
  },

  rodape: {
    direitos: '© 2026 Luiz Henrique Cunha do Nascimento',
  },

  // Rótulos que só existem para leitores de tela ou tecnologias assistivas.
  acessibilidade: {
    alternarTema: 'Alternar entre tema claro e escuro',
    navegacaoPrincipal: 'Navegação principal',
    selecionarIdioma: 'Selecionar idioma',
    irParaConteudo: 'Pular para o conteúdo',
  },
}

export default pt
