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
      'Portfolio of Luiz Henrique Cunha do Nascimento, Systems Analysis and Development graduate based in Manaus, Brazil. Internal systems in React and Node.js, automation and IT infrastructure.',
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
      'I turn manual processes into automated systems, from IT infrastructure to code that saves hours of work.',
    local: 'Manaus, Brazil',
    ctaProjetos: 'View projects',
    ctaCurriculo: 'Download résumé',
    curriculo: {
      arquivo: 'resume-luiz-henrique-cunha-do-nascimento.pdf',
      nomeDownload: 'Resume-Luiz-Henrique-Cunha-do-Nascimento.pdf',
    },
  },

  sobre: {
    rotulo: '01 / About',
    titulo: 'About me',
    corpo:
      'I am an IT professional combining software development and infrastructure. I build internal systems in React and Node.js used in the company’s daily operations, from financial control to real-time fleet tracking, and I manage Active Directory, Microsoft 365 and L1/L2 support. I hold a degree in Systems Analysis and Development.',
  },

  habilidades: {
    rotulo: '02 / Skills',
    titulo: 'What I use day to day',
    tituloLinguagens: 'Languages',
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
          'REST APIs',
          'Socket.IO',
          'Session-based auth',
          'RBAC',
        ],
      },
      {
        titulo: 'Databases',
        itens: ['PostgreSQL (Supabase)', 'SQLite', 'MySQL', 'Redis'],
      },
      {
        titulo: 'Cloud & DevOps',
        itens: ['Docker', 'Vercel', 'Railway', 'Cloudflare', 'Git', 'GitHub'],
      },
      {
        titulo: 'Mobile & Maps',
        itens: ['Capacitor (Android)', 'Google Maps Platform', 'Routes API', 'Geocoding API'],
      },
      {
        titulo: 'Infrastructure & Support',
        itens: [
          'Active Directory',
          'Windows Server',
          'Microsoft 365',
          'SharePoint',
          'Power Automate',
          'Snipe-IT',
          'L1/L2 Support',
        ],
      },
      { titulo: 'Methodologies', itens: ['Scrum', 'Kanban'] },
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
        id: 'rotas',
        tag: 'Internal System',
        titulo: 'Fleet Route System',
        subtitulo: 'Real-time route planning and tracking, with OCR',
        descricao:
          'Replaced paper-based planning with a web interface, real-time route tracking and a performance score based on the route and time driven. Includes role-based access control and an Android app for drivers on the road.',
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
        legendaImagem: 'Internal system, no public screenshots',
      },
      {
        id: 'caixas',
        tag: 'Internal System',
        titulo: 'Cash Register Control',
        subtitulo: 'From hours of spreadsheets to 3 to 5 minutes a day',
        descricao:
          'Eliminated the daily manual filling of a spreadsheet with about 80 rows and columns. Work that took hours now takes 3 to 5 minutes, over 95% productivity gain, with charts to follow the numbers.',
        stack: ['React', 'Recharts', 'Node.js', 'Vercel', 'Supabase', 'PostgreSQL', 'Redis'],
        legendaImagem: 'Internal system, no public screenshots',
      },
      {
        id: 'chatbot',
        tag: 'Automation · Internship',
        titulo: 'Customer Service Chatbot',
        subtitulo: 'Automated answers through the official WhatsApp API',
        descricao:
          'Customer service chatbot built with Meta Business and the official WhatsApp API, automating answers to the most frequently asked questions.',
        stack: ['JavaScript', 'WhatsApp API', 'Meta Business'],
        legendaImagem: 'Internal system, no public screenshots',
      },
      {
        id: 'meutea',
        tag: 'Academic Project · IT Technical Program',
        titulo: 'MeuTEA',
        subtitulo: 'App for children with ASD',
        descricao:
          'Android app built from scratch as the capstone of my IT technical program, designed for children with ASD (Autism Spectrum Disorder) to support and ease communication.',
        stack: ['Java', 'Kotlin', 'Android'],
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
          'Built the fleet route system with OCR, with real-time tracking and performance scoring.',
          'Built the cash register control system, cutting hours of manual work down to 3 to 5 minutes.',
          'Manage Active Directory, Windows Server and Microsoft 365, and provide L1 and L2 support.',
          'Automate workflows with Power Automate and write IT procedures and technical documentation.',
        ],
        stack: ['React', 'Node.js', 'Supabase', 'Docker', 'Power Automate'],
      },
      {
        id: 'auxiliar-ti',
        periodo: 'Jan 2025 - Jun 2026',
        tipo: 'Work',
        cargo: 'Junior IT Assistant',
        organizacao: 'Zona Azul Manaus',
        atividades: [
          'Implemented Snipe-IT to manage over 350 IT assets, replacing scattered spreadsheets.',
          'Developed the department’s first internal JavaScript systems and Power Automate automations.',
          'Supported AD, Microsoft 365 and SharePoint administration and provided L2 support.',
        ],
        stack: ['JavaScript', 'Power Automate', 'Snipe-IT'],
      },
      {
        id: 'estagiario-ti',
        periodo: 'Jul 2024 - Dec 2024',
        tipo: 'Work',
        cargo: 'IT Intern',
        organizacao: 'Zona Azul Manaus',
        atividades: [
          'Built a customer service chatbot with Meta Business and the official WhatsApp API.',
          'Provided L1 helpdesk support and maintained and upgraded computers.',
        ],
        stack: ['JavaScript', 'WhatsApp API'],
      },
      {
        id: 'ads-uniesbam',
        periodo: 'Jun 2023 - Dec 2025',
        tipo: 'Education',
        cargo: 'Associate Degree in Systems Analysis and Development',
        organizacao: 'UNIESBAM, ESBAM University Center',
        atividades: [
          'Student lead of the program’s community outreach project, organizing team deliverables and communication with advisors. The project received the top grade (10/10).',
        ],
        stack: [],
      },
      {
        id: 'tecnico-fucapi',
        periodo: 'Jul 2022 - Dec 2023',
        tipo: 'Education',
        cargo: 'Technical Diploma in IT, Programming Track',
        organizacao: 'FUCAPI',
        atividades: ['Capstone project: MeuTEA, an Android app for children with ASD.'],
        stack: ['Java', 'Kotlin'],
      },
    ],
  },

  contato: {
    titulo: 'Let’s talk?',
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
