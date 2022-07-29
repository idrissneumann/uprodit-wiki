const theme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Uprodit wiki',
  tagline: 'Documentation publique de uprodit',
  url: 'https://doc.uprodit.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/uprodit_logo.png',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'description', 
          content: 'Documentation publique de uprodit'
        },
        {
          name: 'keywords', 
          content: 'uprodit, restful, api'
        },
        {
          property: 'og:image', 
          content: 'img/uprodit_logo.png'
        },
        {
          property: 'og:image:width', 
          content: '300'
        },
        {
          property: 'og:image:height', 
          content: '300'
        },
        {
          property: 'og:site_name',
          content: 'Documentation publique de uprodit'
        },
        {
          property: 'og:description',
          content: 'Documentation publique de uprodit'
        },
        {
          property: 'og:url',
          content: 'https://doc.uprodit.com'
        },
        {
          property: 'twitter:card',
          content: 'canonical'
        },
        {
          property: 'twitter:description',
          content: 'Documentation publique de uprodit'
        },
        {
          property: 'twitter:title',
          content: 'Documentation publique de uprodit'
        },
        {
          property: 'og:type',
          content: 'Documentation publique de uprodit'
        },
      ],
      navbar: {
        title: 'Uprodit doc',
        logo: {
          alt: 'Comwork logo',
          src: 'img/uprodit_logo.png',
        },
        items: [
          {
            to: 'https://www.uprodit.com',
            label: 'Uprodit',
            position: 'left',
          },
          {
            to: 'https://gitlab.comwork.io/comwork_public/uprodit',
            label: 'Gitlab',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Uprodit',
            items: [
              {
                label: 'Home',
                to: 'https://www.uprodit.com',
              },
              {
                label: 'Gitlab',
                to: 'https://gitlab.comwork.io/comwork_public/uprodit',
              },
            ],
          },
        ],
        copyright: `Copyright © 2015 - ${new Date().getFullYear()} Uprodit.`,
      },
      prism: {
        theme: theme
      },
    }),
};

module.exports = config;
