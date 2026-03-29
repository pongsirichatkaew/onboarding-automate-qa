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
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'E2E Docs',
      logo: {
        alt: 'E2E Docs Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs', label: 'Docs', position: 'left' },
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