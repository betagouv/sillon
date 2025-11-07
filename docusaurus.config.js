// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sillon',
  tagline: `Propositions pour réaliser un produit numérique`,
  favicon: 'img/favicon.svg',

  url: 'https://sillon.incubateur.net/',
  baseUrl: '/',

  // Since deployed on Netlify it redirects pathnames like `/path` to `/path/` so we explicitely
  // tell to Docusaurus to write links with the trailing slash. It will also prevent warnings from
  // search engines that don't like to see 2 kinds of URL for the exact same content
  trailingSlash: true,

  customFields: {
    crispWebsiteId: process.env.CRISP_WEBSITE_ID || 'no_crisp_settings',
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/betagouv/sillon/tree/main/',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('dsfr-connect/dist/infima-v1/index.css'), require.resolve('./src/css/main.scss')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
      image: 'img/social-card.png',
      navbar: {
        title: 'Sillon',
        logo: {
          alt: '',
          src: 'assets/logo/betagouv.png',
        },
        items: [
          {
            type: 'custom-pdfVersion',
            position: 'right',
          },
          {
            type: 'custom-liveChat',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          src: 'assets/logo/betagouv.png',
        },
        links: [
          {
            label: 'Mentions légales',
            to: 'legal-notice',
          },
          {
            label: 'Code source',
            href: 'https://github.com/betagouv/sillon',
          },
          {
            label: 'beta.gouv',
            href: 'https://beta.gouv.fr',
          },
        ],
        copyright: `Sauf mention contraire, tous les contenus de ce site sont sous <a href="https://raw.githubusercontent.com/betagouv/sillon/main/LICENSE">licence MIT</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      matomo: {
        matomoUrl: 'https://stats.beta.gouv.fr/',
        siteId: '52',
      },
    }),

  plugins: ['docusaurus-plugin-sass', 'docusaurus-plugin-matomo'],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      // /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        language: ['fr'],
      },
    ],
  ],
};

module.exports = config;
