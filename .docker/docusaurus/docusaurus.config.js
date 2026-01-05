const config = {
  title: 'Uprodit wiki',
  tagline: 'Public documentation of uprodit',
  url: 'https://doc.uprodit.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  plugins: [],

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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      metadata: [
        {
          name: 'description', 
          content: 'Public documentation of uprodit'
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
          content: 'Public documentation of uprodit'
        },
        {
          property: 'og:description',
          content: 'Public documentation of uprodit'
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
          content: 'Public documentation of uprodit'
        },
        {
          property: 'twitter:title',
          content: 'Public documentation of uprodit'
        },
        {
          property: 'og:type',
          content: 'Public documentation of uprodit'
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
            to: 'https://gitlab.cwcloud.tech/public_resources/uprodit',
            label: 'Gitlab',
            position: 'right',
          },
          {
            to: 'https://join.slack.com/t/uprodit-tech/shared_invite/zt-1h3hh21tf-Rxb4zbSiRz8GFVwXvqLHMA',
            label: 'Slack',
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
                to: 'https://gitlab.cwcloud.tech/public_resources/uprodit',
              },
              {
                label: 'Slack',
                to: 'https://join.slack.com/t/uprodit-tech/shared_invite/zt-1h3hh21tf-Rxb4zbSiRz8GFVwXvqLHMA',
              },
              {
                html: `<img src="https://cloud-api.comwork.io/v1/tracker/img/doc.uprodit.com" style="display: none"></img>`
              },
            ],
          },
        ],
        copyright: `Copyright © 2015 - ${new Date().getFullYear()} Uprodit.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;
