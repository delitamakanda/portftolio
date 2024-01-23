// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Délita MAKANDA',
  tagline: 'I am a front-end developer. I love learning new things. Also, I am interested in the cloud, coding, gaming and psychological thriller books.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://delita-makanda.github.io',
  baseUrl: '/',

  organizationName: 'delitamakanda', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },

  trailingSlash: true,

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString', 'standalone'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/favicon.ico',
          },
          {
            tagName: 'link',
            rel:'manifest',
            href: 'manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#3eaf7c',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/docusaurus.png,'
          },
          {
            tagName: 'link',
            rel:'mask-icon',
            href: 'img/docusaurus.svg',
            color: '#3eaf7c',
          },
          {
            tagName: 'meta',
            name:'msapplication-TileImage',
            content: 'img/docusaurus.png',
          },
          {
            tagName:'meta',
            name:'msapplication-TileColor',
            content: '#000000',
          }
        ]
      },
    ]
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: 'all',
          },
          editUrl: 'https://github.com/delitamakanda/portfolio/edit/main/',
          postsPerPage: 3,
          truncateMarker: /<!--\s*(truncate)\s*-->/,
        },
        gtag: {
          trackingID: 'G-VJXQMEGQTD',
          anonymizeIP: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Délita MAKANDA',
        logo: {
          alt: 'Délita MAKANDA Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/delitamakanda',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Délita MAKANDA, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        {
          name: 'robots',
          content: 'max-image-preview:large'
        },
      ]
    }),
};

export default config;