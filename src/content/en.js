/*
  Versão em inglês do conteúdo.

  As chaves são idênticas às de pt.js de propósito. Como os componentes leem
  sempre pelo mesmo caminho (t.hero.subtitulo, por exemplo), trocar de idioma é
  só apontar para o outro objeto, sem nenhum if espalhado pela interface.

  Os nomes das chaves seguem em português porque descrevem a estrutura do site,
  não o texto em si.
*/

const en = {
  meta: {
    lang: 'en',
    titulo: 'Luiz Henrique Cunha do Nascimento | Developer & IT Support',
    descricao:
      'Portfolio of Luiz Henrique Cunha do Nascimento, Systems Analysis and Development graduate based in Manaus, Brazil. Internal systems, automation and IT infrastructure.',
  },

  nav: {
    sobre: 'About',
    habilidades: 'Skills',
    projetos: 'Projects',
    trajetoria: 'Journey',
    contato: 'Contact',
  },

  hero: {
    eyebrow: 'DEVELOPER & IT SUPPORT',
    nome: 'Luiz Henrique Cunha do Nascimento',
    subtitulo:
      'I turn manual processes into automated systems, from IT infrastructure to code that saves days of work.',
    local: 'Manaus, Brazil',
    ctaProjetos: 'View projects',
    ctaCurriculo: 'Download résumé',
  },

  sobre: {
    rotulo: '01 / About',
    titulo: 'About me',
    corpo:
      'I hold a degree in Systems Analysis and Development and work in IT support and infrastructure, while building my own systems in JavaScript, Java and Kotlin. I like solving real problems: automating tasks that used to take days down to minutes, building internal tools from scratch, and creating applications with real impact.',
  },

  habilidades: {
    rotulo: '02 / Skills',
    titulo: 'What I use day to day',
    tituloLinguagens: 'Languages',
    grupos: [
      { titulo: 'Databases', itens: ['MySQL', 'SQLite'] },
      {
        titulo: 'Tools & Platforms',
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
        titulo: 'Infrastructure & Support',
        itens: [
          'N1/N2 Support',
          'Helpdesk',
          'IT asset management',
          'User & access administration',
        ],
      },
      {
        titulo: 'Concepts',
        itens: [
          'REST APIs',
          'Systems integration',
          'Cloud computing',
          'Scrum',
          'Kanban',
        ],
      },
      {
        titulo: 'Spoken languages',
        itens: ['Portuguese: native', 'English: B2 (upper-intermediate)'],
      },
    ],
  },

  projetos: {
    rotulo: '03 / Projects',
    titulo: 'Featured projects',
    subtitulo:
      'A selection of systems I have built, from internal tools to academic work.',
    itens: [
      {
        id: 'farol',
        tag: 'Internal System · NDA',
        titulo: 'Farol',
        subtitulo:
          'Insight & Information Extraction System for Productivity Assessment',
        descricao:
          'Internal platform that turns raw operational data into productivity insights, automating extraction that used to be manual. As a proprietary company system, technical details and screenshots are under NDA.',
        stack: ['JavaScript', 'REST APIs', 'Cloud'],
        legendaImagem: 'Under NDA, no public screenshots',
      },
      {
        id: 'jolustore',
        tag: 'Institutional Website',
        titulo: 'Jolustore',
        subtitulo: 'Static site with a pet module',
        descricao:
          'Static institutional website with a dedicated module for the pet product line, presenting products and store information with a focus on performance and simplicity.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        legendaImagem: 'Screenshot coming soon',
      },
      {
        id: 'meutea',
        tag: 'Academic Project · IT Technical Program',
        titulo: 'MeuTEA',
        subtitulo: 'App for children with ASD',
        descricao:
          'Mobile app built from scratch during my IT technical program with a focus on programming, designed for children with ASD (Autism Spectrum Disorder) to support and ease communication.',
        stack: ['Java', 'Kotlin'],
        legendaImagem: 'Screenshot coming soon',
      },
    ],
  },

  trajetoria: {
    rotulo: '04 / Journey',
    titulo: 'Experience & Education',
    itens: [
      {
        id: 'assistente-ti',
        periodo: 'Jul 2026 - Present',
        tipo: 'Work',
        cargo: 'IT Assistant',
        organizacao: 'Zona Azul Manaus',
        atividades: [
          'Manage Active Directory, Microsoft 365 and SharePoint for the whole operation.',
          'Build internal JavaScript systems that automate administrative processes.',
        ],
        stack: ['JavaScript', 'Power Automate'],
      },
      {
        id: 'auxiliar-ti',
        periodo: 'Jan 2025 - Jun 2026',
        tipo: 'Work',
        cargo: 'IT Support Analyst',
        organizacao: 'Zona Azul Manaus',
        atividades: [
          'Implemented Snipe-IT to manage 350+ IT assets, centralizing controls previously kept in spreadsheets.',
          'Built internal JavaScript systems, cutting routines from days to minutes.',
        ],
        stack: ['JavaScript', 'SQL'],
      },
      {
        id: 'estagiario-ti',
        periodo: 'Jul 2024 - Dec 2024',
        tipo: 'Work',
        cargo: 'IT Intern',
        organizacao: 'Zona Azul Manaus',
        atividades: [
          'Built a customer service chatbot using the official WhatsApp API.',
          'Provided N1 helpdesk support and modernized legacy equipment.',
        ],
        stack: ['JavaScript'],
      },
      {
        id: 'extensao-esbam',
        periodo: 'Jun 2023 - Dec 2025',
        tipo: 'Leadership',
        cargo: 'Extension Project Representative',
        organizacao: 'ESBAM University Center',
        atividades: [
          'Represented the student group in meetings with professors and coordination.',
          'Project completed with a top score of 10 in the final evaluation.',
        ],
        stack: [],
      },
      {
        id: 'ads-uniesbam',
        periodo: 'Jun 2023 - Dec 2025',
        tipo: 'Education',
        cargo: 'Systems Analysis and Development (Associate Degree)',
        organizacao: 'UNIESBAM',
        atividades: [],
        stack: [],
      },
      {
        id: 'tecnico-fucapi',
        periodo: 'Jul 2022 - Dec 2023',
        tipo: 'Education',
        cargo: 'IT Technical Program, Programming Track',
        organizacao: 'FUCAPI',
        atividades: ['Capstone project: MeuTEA'],
        stack: ['Java', 'Kotlin'],
      },
    ],
  },

  contato: {
    titulo: 'Let us talk?',
    corpo:
      'I am open to developer and IT opportunities. Send a message, I reply fast.',
    ctaEmail: 'Send email',
    ctaLinkedin: 'LinkedIn',
    ctaGithub: 'GitHub',
  },

  rodape: {
    direitos: '© 2026 Luiz Henrique Cunha do Nascimento',
  },

  acessibilidade: {
    alternarTema: 'Toggle between light and dark theme',
    navegacaoPrincipal: 'Main navigation',
    selecionarIdioma: 'Select language',
    irParaConteudo: 'Skip to content',
  },
}

export default en
