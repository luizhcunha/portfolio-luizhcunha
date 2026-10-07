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
      'Portfólio de Luiz Henrique Cunha do Nascimento, tecnólogo em Análise e Desenvolvimento de Sistemas em Manaus. Sistemas internos em React e Node.js, automações e infraestrutura de TI.',
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
      'Transformo processos manuais em sistemas automatizados, da infraestrutura de TI ao código que economiza horas de trabalho.',
    local: 'Manaus, AM, Brasil',
    ctaProjetos: 'Ver projetos',
    ctaCurriculo: 'Baixar currículo',
    // Arquivo em public/ e o nome com que ele chega no computador de quem baixa.
    curriculo: {
      arquivo: 'curriculo-luiz-henrique-cunha-do-nascimento.pdf',
      nomeDownload: 'Curriculo-Luiz-Henrique-Cunha-do-Nascimento.pdf',
    },
  },

  sobre: {
    rotulo: '01 / Sobre',
    titulo: 'Sobre mim',
    corpo:
      'Sou profissional de TI e uno desenvolvimento de sistemas e infraestrutura. Desenvolvo sistemas internos em React e Node.js usados na operação da empresa, do controle financeiro ao acompanhamento da frota em tempo real, e administro Active Directory, Microsoft 365 e o suporte N1/N2. Sou formado em Análise e Desenvolvimento de Sistemas.',
  },

  habilidades: {
    rotulo: '02 / Habilidades',
    titulo: 'O que eu uso no dia a dia',
    tituloLinguagens: 'Linguagens',
    grupos: [
      {
        titulo: 'Front-end',
        itens: ['React', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Recharts', 'HTML', 'CSS'],
      },
      {
        titulo: 'Back-end',
        itens: [
          'Node.js',
          'Express',
          'APIs REST',
          'Socket.IO',
          'Autenticação por sessão',
          'RBAC',
        ],
      },
      {
        titulo: 'Banco de dados',
        itens: ['PostgreSQL (Supabase)', 'SQLite', 'MySQL', 'Redis'],
      },
      {
        titulo: 'Nuvem & DevOps',
        itens: ['Docker', 'Vercel', 'Railway', 'Cloudflare', 'Git', 'GitHub'],
      },
      {
        titulo: 'Mobile & Mapas',
        itens: ['Capacitor (Android)', 'Google Maps Platform', 'Routes API', 'Geocoding API'],
      },
      {
        titulo: 'Infraestrutura & Suporte',
        itens: [
          'Active Directory',
          'Windows Server',
          'Microsoft 365',
          'SharePoint',
          'Power Automate',
          'Snipe-IT',
          'Suporte N1/N2',
        ],
      },
      { titulo: 'Metodologias', itens: ['Scrum', 'Kanban'] },
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
        id: 'rotas',
        tag: 'Sistema Interno',
        titulo: 'Sistema de Rotas da Frota',
        subtitulo: 'Planejamento e acompanhamento de rotas em tempo real, com OCR',
        descricao:
          'Substituiu o planejamento em papel por uma interface web, com acompanhamento das rotas em tempo real e pontuação de desempenho baseada no trajeto e no tempo percorrido. Inclui controle de acesso por perfil e um app Android para quem está na rua.',
        stack: [
          'React',
          'Tailwind CSS',
          'Node.js',
          'Socket.IO',
          'SQLite',
          'Google Maps',
          'Capacitor',
          'Docker',
        ],
        legendaImagem: 'Sistema interno, sem capturas públicas',
      },
      {
        id: 'caixas',
        tag: 'Sistema Interno',
        titulo: 'Controle de Caixas',
        subtitulo: 'De horas de planilha para 3 a 5 minutos por dia',
        descricao:
          'Eliminou o preenchimento manual diário de uma planilha com cerca de 80 linhas e colunas. O trabalho que levava horas passou a levar de 3 a 5 minutos, mais de 95% de ganho de produtividade, com gráficos para acompanhar os números.',
        stack: ['React', 'Recharts', 'Node.js', 'Vercel', 'Supabase', 'PostgreSQL', 'Redis'],
        legendaImagem: 'Sistema interno, sem capturas públicas',
      },
      {
        id: 'chatbot',
        tag: 'Automação · Estágio',
        titulo: 'Chatbot de Atendimento',
        subtitulo: 'Respostas automáticas pelo WhatsApp oficial',
        descricao:
          'Chatbot de atendimento ao cliente construído com Meta Business e a API oficial do WhatsApp, automatizando as respostas às dúvidas mais frequentes.',
        stack: ['JavaScript', 'WhatsApp API', 'Meta Business'],
        legendaImagem: 'Sistema interno, sem capturas públicas',
      },
      {
        id: 'meutea',
        tag: 'Projeto Acadêmico · Técnico em Informática',
        titulo: 'MeuTEA',
        subtitulo: 'App para crianças com TEA',
        descricao:
          'Aplicativo Android desenvolvido do zero como projeto de conclusão do técnico em informática, voltado para crianças com TEA (Transtorno do Espectro Autista), para apoiar e facilitar a comunicação.',
        stack: ['Java', 'Kotlin', 'Android'],
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
          'Desenvolvi o sistema de rotas da frota com OCR, com acompanhamento em tempo real e pontuação de desempenho.',
          'Desenvolvi o sistema de controle de caixas, reduzindo horas de trabalho manual para 3 a 5 minutos.',
          'Administro Active Directory, Windows Server e Microsoft 365, e presto suporte N1 e N2.',
          'Automatizo fluxos com Power Automate e elaboro procedimentos e documentação técnica de TI.',
        ],
        stack: ['React', 'Node.js', 'Supabase', 'Docker', 'Power Automate'],
      },
      {
        id: 'auxiliar-ti',
        periodo: 'Jan 2025 - Jun 2026',
        tipo: 'Trabalho',
        cargo: 'Auxiliar de TI',
        organizacao: 'Zona Azul Manaus',
        atividades: [
          'Implementei o Snipe-IT para gerenciar mais de 350 ativos de TI, substituindo planilhas descentralizadas.',
          'Desenvolvi os primeiros sistemas internos em JavaScript e automações em Power Automate da área.',
          'Atuei na administração de AD, Microsoft 365 e SharePoint e no suporte N2.',
        ],
        stack: ['JavaScript', 'Power Automate', 'Snipe-IT'],
      },
      {
        id: 'estagiario-ti',
        periodo: 'Jul 2024 - Dez 2024',
        tipo: 'Trabalho',
        cargo: 'Estagiário de TI',
        organizacao: 'Zona Azul Manaus',
        atividades: [
          'Desenvolvi um chatbot de atendimento com Meta Business e a API oficial do WhatsApp.',
          'Prestei suporte helpdesk N1 e fiz manutenção e modernização de computadores.',
        ],
        stack: ['JavaScript', 'WhatsApp API'],
      },
      {
        id: 'ads-uniesbam',
        periodo: 'Jun 2023 - Dez 2025',
        tipo: 'Formação',
        cargo: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        organizacao: 'UNIESBAM, Centro Universitário ESBAM',
        atividades: [
          'Representante do projeto de extensão do curso, organizando as entregas da equipe e a comunicação com orientadores. O projeto recebeu nota máxima 10.',
        ],
        stack: [],
      },
      {
        id: 'tecnico-fucapi',
        periodo: 'Jul 2022 - Dez 2023',
        tipo: 'Formação',
        cargo: 'Técnico em Informática com Ênfase em Programação',
        organizacao: 'FUCAPI',
        atividades: ['Projeto de conclusão: MeuTEA, app Android para crianças com TEA.'],
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
