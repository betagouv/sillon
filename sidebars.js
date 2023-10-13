//
// [WORKAROUND] We set a slug to each category to be able to use links despite the labels
// ... the only drawback is Docusaurus won't check for their existence whereas when pointing
// to `.mdx` it will. We did not find a find to create fake category to replicate indexation of items
//

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'presentation/index',
    {
      type: 'category',
      label: 'Préambule',
      link: {
        type: 'generated-index',
        slug: 'preamble',
      },
      items: ['preamble/expertise', 'preamble/glossary', 'preamble/no-stack', 'preamble/validity'],
    },
    {
      type: 'category',
      label: 'Amorce du projet',
      link: {
        type: 'generated-index',
        slug: 'project-start',
      },
      items: [
        'project-start/time-and-costs',
        'project-start/is-your-project-new',
        'project-start/meet-the-need',
        'project-start/investigation',
        'project-start/budget-needed',
      ],
    },
    {
      type: 'category',
      label: 'Prototypage',
      link: {
        type: 'generated-index',
        slug: 'prototyping',
      },
      items: ['prototyping/modeling', 'prototyping/scope', 'prototyping/team-skills', 'prototyping/technical-prototype-or-not'],
    },
    {
      type: 'category',
      label: 'Développement du produit',
      link: {
        type: 'generated-index',
        slug: 'development',
      },
      items: [
        'development/avoid-overengineering-and-marketing',
        'development/minimum-viable-product',
        'development/no-code-low-code',
        'development/start',
        'development/team-is-key',
      ],
    },
    {
      type: 'category',
      label: 'Documenter votre projet',
      link: {
        type: 'generated-index',
        slug: 'document',
        description: `Au même titre que les spécifications, les aspects techniques doivent être décrits et historisés. Cela facilite l'embarquement de nouvelles recrues, et cela vous sauvera quand dans 1 an vous vous direz “mince, c'est organisé comment ? Et pourquoi ?”.`,
      },
      items: ['document/code', 'document/macro', 'document/database-schema', 'document/commit-naming'],
    },
    {
      type: 'category',
      label: 'Communauté & open source',
      link: {
        type: 'generated-index',
        slug: 'community-and-open-source',
      },
      items: [
        'community-and-open-source/internet-base',
        'community-and-open-source/opening-source-constraints',
        'community-and-open-source/code-hosting-platforms',
        'community-and-open-source/dependencies',
        'community-and-open-source/promote-your-work',
        'community-and-open-source/english-or-french',
        'community-and-open-source/peer-programming',
      ],
    },
    {
      type: 'category',
      label: 'Souveraineté du projet',
      link: {
        type: 'generated-index',
        slug: 'sovereignty',
      },
      items: ['sovereignty/national-issue', 'sovereignty/portability'],
    },
    {
      type: 'category',
      label: `Utiliser la charte graphique de l'État`,
      link: {
        type: 'generated-index',
        slug: 'state-identity',
      },
      items: ['state-identity/dsfr', 'state-identity/implementations', 'state-identity/usage-constraints', 'state-identity/get-help'],
    },
    {
      type: 'category',
      label: 'Recommandations techniques argumentées',
      link: {
        type: 'generated-index',
        slug: 'technical-recommandations',
        description: `Les recommandations qui vont suivre permettent selon nous d'allier robustesse et efficacité lors du développement logiciel pour un produit numérique.`,
      },
      items: [
        {
          type: 'category',
          label: 'Rapprocher le frontend du backend',
          link: {
            type: 'generated-index',
            slug: 'frontend-backend-close',
          },
          items: ['frontend-backend-close/same-language', 'frontend-backend-close/monorepository', 'frontend-backend-close/unique-frontend'],
        },
        {
          type: 'category',
          label: 'Un langage typé',
          link: {
            type: 'generated-index',
            slug: 'typed-language',
          },
          items: ['typed-language/no-more-stupid-bugs', 'typed-language/avoid-extra-documentation', 'typed-language/typescript-not-compiled'],
        },
        {
          type: 'category',
          label: 'Une même stratégie : un framework web',
          link: {
            type: 'generated-index',
            slug: 'web-framework-strategy',
          },
          items: ['web-framework-strategy/components', 'web-framework-strategy/react', 'web-framework-strategy/native-application-compatibility'],
        },
        {
          type: 'category',
          label: 'Toujours utiliser un module i18n',
          link: {
            type: 'generated-index',
            slug: 'i18n-recommended',
          },
          items: ['i18n-recommended/even-if-monolingual', 'i18n-recommended/i18next'],
        },
        'backend-framework/index',
        {
          type: 'category',
          label: 'Communications client-serveur',
          link: {
            type: 'generated-index',
            slug: 'client-server-communication',
          },
          items: [
            'client-server-communication/reduce-intermediaries',
            'client-server-communication/trpc',
            'client-server-communication/allow-evolutivity',
            'client-server-communication/input-validation',
            'client-server-communication/prefer-api-to-frontend-caching',
            'client-server-communication/reactivity-with-traditional-api',
          ],
        },
        {
          type: 'category',
          label: 'Une base de données qui fait tout (vraiment)',
          link: {
            type: 'generated-index',
            slug: 'database-for-everything',
          },
          items: [
            'database-for-everything/relational-databases',
            'database-for-everything/orm',
            'database-for-everything/postgresql-rather-than-mysql',
            'database-for-everything/dream-of-unique-storage',
            'database-for-everything/file-storage',
            'database-for-everything/jobs',
            'database-for-everything/cache',
            'database-for-everything/search-engine',
            'database-for-everything/maintenance',
            'database-for-everything/portability-checks',
          ],
        },
        {
          type: 'category',
          label: 'Un hébergeur simple et souverain',
          link: {
            type: 'generated-index',
            slug: 'simple-and-sovereign-cloud-provider',
          },
          items: [
            'simple-and-sovereign-cloud-provider/what-is-simple',
            'simple-and-sovereign-cloud-provider/sensitive-data',
            'simple-and-sovereign-cloud-provider/providers',
            'simple-and-sovereign-cloud-provider/offload-non-sensitive-tools',
          ],
        },
        'user-authentication/index',
        'continuous-integration-and-continuous-deployment/index',
        'environments/index',
        'tests-and-the-mock-limit/index',
        {
          type: 'category',
          label: 'Backups',
          link: {
            type: 'generated-index',
            slug: 'backups',
          },
          items: ['backups/source-code', 'backups/3-2-1-strategy', 'backups/incident-plan'],
        },
        'design-patterns/index',
      ],
    },
    {
      type: 'category',
      label: 'Sécurité primaire',
      link: {
        type: 'generated-index',
        slug: 'security',
      },
      items: [
        'security/raise-awareness',
        'security/enable-ssl',
        'security/password-strength',
        'security/password-manager',
        'security/two-factor-authentication',
        'security/manage-access-and-monitor',
        'security/officer',
        'security/cve-monitoring',
        'security/data-leak-actions',
        'security/security-audits',
        'security/http-headers',
        'security/secure-hosted-files-urls',
        'security/avoid-infected-files',
      ],
    },
    {
      type: 'category',
      label: 'Faire la vigie en étant outillé',
      link: {
        type: 'generated-index',
        slug: 'monitoring',
        description: `Pour maintenir un service de qualité dans la bonne direction il faut avoir des capteurs qui vous signalent quand quelque chose se passe mal. Mais rappelez-vous de ne pas fournir d'informations sensibles à ces outils.`,
      },
      items: ['monitoring/for-technical-needs', 'monitoring/for-business-needs'],
    },
    'accessibility-is-mandatory/index',
    {
      type: 'category',
      label: `L'écriture inclusive`,
      link: {
        type: 'generated-index',
        slug: 'inclusive-writing',
      },
      items: ['inclusive-writing/falc', 'inclusive-writing/gender-inclusion'],
    },
    {
      type: 'category',
      label: 'Le légal',
      link: {
        type: 'generated-index',
        slug: 'legal',
      },
      items: [
        'legal/license',
        'legal/dependencies-also-have-licenses',
        'legal/data-protection',
        'legal/data-lifecycle',
        'legal/required-documents',
        'legal/secure-the-product-brand',
      ],
    },
    {
      type: 'category',
      label: 'Aller plus loin',
      link: {
        type: 'generated-index',
        slug: 'go-further',
      },
      items: ['go-further/multiple-products-stategy', 'go-further/contribute-this-knowledge-base', 'go-further/decline-this-knowledge-base'],
    },
  ],
};

module.exports = sidebars;
