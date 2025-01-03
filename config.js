var overview = [
  {
    title: 'Design Tools',
    count: '5+',
    categories: ['art', 'design', 'photo edit'],
  },
  {
    title: 'Tech Stacks',
    count: '20+',
    categories: [
      'languages',
      'frameworks',
      'libraries',
      'unit testing',
      'docs',
      'dev tools',
      'pkg managers',
      'IDE',
      'utility',
    ],
  },
  {
    title: 'Experience',
    count: '14',
    categories: ['infosys', 'skava'],
  },
  {
    title: 'Awards',
    count: '8+',
    categories: ['star', 'best employee', 'founder', 'distinguised'],
  },
  {
    title: 'Own Libraries',
    count: '14+',
    categories: ['automation', 'product', 'js libs', 'tools'],
  },
  {
    title: 'Works',
    count: '50+',
    categories: ['art', 'designs', '2D'],
  },
]

const designTools = [
  {
    title: 'Photoshop',
    url: 'logos/logo_ps.jpg',
  },
  {
    title: 'XD',
    url: 'logos/logo_xd.png',
  },
  {
    title: 'Sketch',
    url: 'logos/logo_sketch.jpg',
  },
  {
    title: 'Flash',
    url: 'logos/logo_flash.jpg',
  },
  {
    title: 'Autodesk',
    url: 'logos/logo_autodesk.png',
  },
  {
    title: 'Lightroom',
    url: 'logos/logo_lr.png',
  },
]

const techStacks = {
  runtime: [
    {
      url: 'logos/logo_nodejs.png',
      title: 'NodeJS',
    },
  ],
  languages: [
    { url: 'logos/logo_html.png', title: 'HTML/HTML5' },
    { url: 'logos/logo_css.png', title: 'CSS/CSS3' },
    { url: 'logos/logo_js.jpeg', title: 'JS/ES6+' },
    {
      url: 'logos/logo_ts.jpg',
      title: 'Typescript',
    },
    // {
    //   url: 'logos/logo_graphql.png',
    //   title: 'GraphQL',
    // },
    { url: 'logos/logo_sass.png', title: 'SASS' },
    // { url: 'logos/logo_ftl.jpg', title: 'FTL' },
    // { url: 'logos/logo_xml.png', title: 'XML' },
    // {
    //   url: 'logos/logo_hb.png',
    //   title: 'Handlebars',
    // },
    { url: 'logos/logo_md.png', title: 'Markdown' },
    // { url: 'logos/logo_yaml.png', title: 'YAML' },
    // { url: 'logos/logo_as3.png', title: 'AS3' },
  ],
  frameworks: [
    // { url: 'logos/logo_cra.png', title: 'CRA' },
    {
      url: 'logos/logo_nextjs.png',
      title: 'Next.js ',
    },
    {
      url: 'logos/logo_mui.png',
      title: 'Material UI',
    },
    {
      url: 'logos/logo_mdbreact.png',
      title: 'MDB React',
    },
    {
      url: 'logos/logo_reactbootstrap.png',
      title: 'React Bootstrap',
    },
  ],
  libraries: [
    {
      url: 'logos/logo_expressjs.png',
      title: 'Express.js',
    },
    { url: 'logos/logo_react.png', title: 'React' },
    // { url: 'logos/logo_redux.png', title: 'Redux' },
    { url: 'logos/logo_mobx.png', title: 'Mobx' },
    {
      url: 'logos/logo_styledcomp.png',
      title: 'Styled Components',
    },
    {
      url: 'logos/logo_webpack.png',
      title: 'Webpack',
    },
    {
      url: 'logos/logo_rollup.jpg',
      title: 'Rollup',
    },
    {
      url: 'logos/logo_jquery.jpg',
      title: 'jQuery',
    },
    {
      url: 'logos/logo_jquery_ui.png',
      title: 'jQuery UI',
    },
    // {
    //   url: 'logos/logo_apollo.png',
    //   title: 'Apollo Link State',
    // },
  ],
  unittesting: [
    { url: 'logos/logo_jest.png', title: 'Jest' },
    {
      url: 'logos/logo_cypress.webp',
      title: 'Cypress',
    },
    // {
    //   url: 'logos/logo_puppeteer.png',
    //   title: 'Puppeteer',
    // },
    // {
    //   url: 'logos/logo_rtl.png',
    //   title: 'React Testing Library',
    // },
  ],
  docs: [
    {
      url: 'logos/logo_docsify.png',
      title: 'Docsify',
    },
    { url: 'logos/logo_md.png', title: 'Markdown' },
    { url: 'logos/logo_nextra.png', title: 'Nextura' },
    // {
    //   url: 'logos/logo_jsdoc3.png',
    //   title: 'JS Docs',
    // },
  ],
  devtools: [
    { url: 'logos/logo_git.png', title: 'GIT' },
    { url: 'logos/logo_babel.png', title: 'Babel' },
    {
      url: 'logos/logo_prettier.jpg',
      title: 'Prettier',
    },
    {
      url: 'logos/logo_editorconfig.png',
      title: 'Editor Config',
    },
    { url: 'logos/logo_make.png', title: 'Make' },
    {
      url: 'logos/logo_eslint.jpg',
      title: 'ES Lint',
    },
    // {
    //   url: 'logos/logo_tslint.png',
    //   title: 'TS Lint',
    // },
    {
      url: 'logos/logo_sonarlint.png',
      title: 'Sonar Lint',
    },
    {
      url: 'logos/logo_storybook.png',
      title: 'Storybook',
    },
  ],
  packagemanagers: [
    { url: 'logos/logo_npm.png', title: 'NPM' },
    { url: 'logos/logo_yarn.jpg', title: 'Yarn' },
    { url: 'logos/logo_pnpm.png', title: 'PNPM' },
    {
      url: 'logos/logo_verdaccio.jpg',
      title: 'Verdaccio',
    },
    { url: 'logos/logo_lerna.jpg', title: 'Lerna' },
  ],
}

const businessTools = {
  ide: [
    { url: 'logos/logo_vs.png', title: 'VS Code' },
    // {
    //   url: 'logos/logo_sublime.jpg',
    //   title: 'Sublime',
    // },
    // {
    //   url: 'logos/logo_eclipse.png',
    //   title: 'Eclipse',
    // },
    {
      url: 'logos/logo_notepad.png',
      title: 'Notepad++',
    },
  ],
  utility: [
    {
      url: 'logos/logo_github.png',
      title: 'Git Hub',
    },
    // {
    //   url: 'logos/logo_codesandbox.png',
    //   title: 'Code sandbox',
    // },
    {
      url: 'logos/logo_bitbucket.jpg',
      title: 'Bitbucket',
    },
    {
      url: 'logos/logo_tortoisegit.jpg',
      title: 'Tortoise Git',
    },
    { url: 'logos/logo_tower.png', title: 'Tower' },

    {
      url: 'logos/logo_sourcetree.png',
      title: 'Source Tree',
    },
    { url: 'logos/logo_jira.jpg', title: 'JIRA' },
    // {
    //   url: 'logos/logo_confluence.jpg',
    //   title: 'Confluence',
    // },
    // {
    //   url: 'logos/logo_trello.jpg',
    //   title: 'Trello',
    // },
    // {
    //   url: 'logos/logo_gitlab.png',
    //   title: 'GitLab',
    // },
    {
      url: 'logos/logo_gdrive.jpg',
      title: 'G Drive',
    },
  ],
}

const experience = [
  {
    id: 'infosys',
    company: 'Infosys, Coimbatore',
    url: 'logos/logo_infy.jpg',
    role: 'Architect',
    duration: 'From Aug 2020 to Till Date',
    startDate: '15 Aug 2020',
    endDate: 'till',
    status: 'Active',
    rolesPlayed: ['Creative Manager', 'Architect'],
    responsibilities: [
      'Leading a small development team to create interactive and dynamic web applications for the business.',
      'Technology Stack: Modern Javascript (ES6+), React JS with Hooks, Typescript, HTML5, CSS3, Next.js, Material Bootstrap, Tanstack React Query, Express.js, i18next, Webpack, Storybook, Docsify, Lints, etc.,',
      'Building web applications with MFE (Micro-frontend based architecture)',
      'Creating the Build system for Web App development with CICD Integrated for multiple environments.',
      'Having Daily stand up meeting with team, peer programming and live coding.',
      'Code reviews, merge and deployments.',
      'Identify design alternatives and conduct technical feasibility.',
      'Solving Technical Issues.',
      'Creating Flow diagrams, architecture diagrams, documentations etc.,',
      'Driving team which includes from fresh college grads to experienced laterals.',
      'Building UI/UX components based on the Atomic Design Methodology.',
    ],
    clients: ['NuSkin', 'Young Living'],
  },
  {
    id: 'skava',
    company: 'Skava an Infosys, Coimbatore',
    url: 'logos/logo_skava.png',
    role: 'Creative Manager and Sr. Frontend Lead',
    duration: 'From March 2009 to Aug 2020',
    status: 'Acquired by Infosys',
    rolesPlayed: [
      'Creative Engineer',
      'Sr.Creative Engineer',
      'Creative Lead',
      'Sr.Creative Lead',
      'Creative Manager',
    ],
    responsibilities: [
      'Leading a small development team to create interactive and dynamic web applications for the business.',
      'Technology Stack: Modern Javascript (ES6+), React JS with Hooks, Typescript, HTML5, CSS3, Next.js, Material Bootstrap, Express.js, i18next, Webpack, Storybook, Docsify, Lints, etc.,',
      'Creating the Build system for Web App development with CICD Integrated for multiple environments.',
      'Having Daily stand up meeting with team, peer programming and live coding.',
      'Creating the wire frames',
      'Creating the design & video presentation for multiple products to promote them for sales perspective.',
      'Tech stacks training to the team',
      'Code reviews, merge and deployments.',
      'Building automation tools for reducing the development and developer efforts',
      'Designs & prototype reviews',
      'Elicit requirements from BA team and executing in Agile sprints',
      'Identify design alternatives and conduct technical feasibility.',
      'Solving Technical Issues.',
      'Driving team which includes from fresh college grads to experienced laterals.',
      'Building UI/UX components based on the Atomic Design Methodology.',
    ],
    clients: [],
  },
]

const works = {
  arts: [
    'works/arts/1.jpg',
    // 'works/arts/2.jpg',
    'works/arts/3.jpg',
    'works/arts/4.jpg',
    'works/arts/5.jpg',
    'works/arts/6.jpg',
    // 'works/arts/7.jpg',
    'works/arts/8.jpg',
    'works/arts/9.jpg',
    // 'works/arts/10.jpg',
    'works/arts/11.jpg',
    'works/arts/12.jpg',
    // 'works/arts/13.jpg',
    'works/arts/14.jpg',
    'works/arts/15.jpg',
    'works/arts/16.jpg',
    'works/arts/17.jpg',
  ],
  pencil: [
    'works/arts/pencil/p1.jpg',
    'works/arts/pencil/p2.jpg',
    'works/arts/pencil/p3.jpg',
    'works/arts/pencil/p4.jpg',
    'works/arts/pencil/p5.jpg',
    'works/arts/pencil/p8.jpg',
    'works/arts/pencil/p9.jpg',
    'works/arts/pencil/p10.jpg',
    'works/arts/pencil/p11.jpg',
    'works/arts/pencil/p12.jpg',
    'works/arts/pencil/p13.jpg',
    'works/arts/pencil/p14.jpg',
    'works/arts/pencil/p15.jpg',
    'works/arts/pencil/p16.jpg',
    'works/arts/pencil/p17.jpg',
    'works/arts/pencil/p18.jpg',
    'works/arts/pencil/p19.jpg',
    'works/arts/pencil/p20.jpg',
    'works/arts/pencil/p21.jpg',
    'works/arts/pencil/p22.jpg',
    'works/arts/pencil/p23.jpg',
    'works/arts/pencil/p24.jpg',
    'works/arts/pencil/p25.jpg',
    'works/arts/pencil/p26.jpg',
    'works/arts/pencil/p27.jpg',
    'works/arts/pencil/p28.jpg',
    'works/arts/pencil/p29.jpg',
    'works/arts/pencil/p30.jpg',
    'works/arts/pencil/p31.jpg',
    'works/arts/pencil/p32.jpg',
  ],
  sketch: [
    'works/arts/sketch/s1.jpg',
    'works/arts/sketch/s2.jpg',
    'works/arts/18.jpg',
    'works/arts/19.jpg',
    'works/arts/20.jpg',
    'works/arts/21.jpg',
    'works/arts/22.jpg',
    'works/arts/23.jpg',
  ],
  ps: [
    'works/ps/001.jpg',
    'works/ps/002.jpg',
    'works/ps/003.jpg',
    'works/ps/004.jpg',
    'works/ps/005.jpg',
    'works/ps/006.jpg',
    'works/ps/007.jpg',
    'works/ps/008.jpg',
    'works/ps/009.jpg',
    'works/ps/010.jpg',
    'works/ps/011.jpg',
    'works/ps/012.jpg',
    'works/ps/013.jpg',
    'works/ps/014.jpg',
    'works/ps/015.jpg',
    'works/ps/016.jpg',
    'works/ps/017.jpg',
    'works/ps/018.jpg',
    'works/ps/019.jpg',
    'works/ps/020.jpg',
    'works/ps/021.jpg',
    'works/ps/022.jpg',
    'works/ps/023.jpg',
    'works/ps/024.jpg',
    'works/ps/025.jpg',
    'works/ps/026.jpg',
    'works/ps/027.jpg',
    'works/ps/028.jpg',
    'works/ps/029.jpg',
  ],
}
