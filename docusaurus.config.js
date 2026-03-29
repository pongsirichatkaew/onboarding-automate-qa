// @ts-check

const config = {
  title: 'E2E Automation Docs',
  tagline: 'Documentation portal for Cucumber-based E2E project',
  favicon: 'img/favicon.ico',

  url: 'https://pongsirichatkaew.github.io/',
  baseUrl: '/onboarding-automate-qa',


  organizationName: 'pongsirichatkaew',
  projectName: 'onboarding-automate-qa',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/fwd-logo.png',
    navbar: {
      title: 'E2E Docs',
      items: [
        { to: '/docs/getting-started/start-here', label: 'Docs', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `E2E Automation Docs`,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;