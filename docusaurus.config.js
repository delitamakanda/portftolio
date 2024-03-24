// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
require('dotenv').config({ path: '.env', override: true  });

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Délita MAKANDA',
  tagline: 'Développeuse front-end passionnée. J\'aime apprendre de nouvelles choses. Je m\'intéresse également au cloud, au code, au gaming et aux romans noirs.',
  favicon: 'img/favicon.ico',
  customFields: {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },

  // Set the production url of your site here
  url: 'https://delitamakanda.github.io',
  baseUrl: '/portftolio',

  organizationName: 'delitamakanda', // Usually your GitHub org/user name.
  projectName: 'portftolio', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".

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
            href: 'img/docusaurus.png',
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
        blog: false,
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
          {
            href: 'https://github.com/delitamakanda',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
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
        {
          name: 'googlebot',
          content: 'index,follow'
        },
        {
          name: 'google',
          content: 'notranslate'
        },
        {
          name: 'keywords',
          content: 'Délita MAKANDA, Développeur Full Stack, Développeur web, Développeur front-end, frontend, HTML, CSS, JavaScript, Coldfusion, React, Vue.js, AngularJS, Angular, Ionic, Django, .NET, Azure, GitHub, Node.js, Express, Node.js, MongoDB, PostgreSQL, MySQL'
        }
      ]
    }),
};

export default config;
