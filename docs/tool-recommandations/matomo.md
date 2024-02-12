# Matomo

# [![Sanity-check: B](https://img.shields.io/badge/sanity_check-B-lightblue)](https://sanity-check.numericite.eu/posts/3034a20a-dafd-4349-98da-14e5344fb13d) ![type: SAAS](https://img.shields.io/badge/type-SAAS-blue) ![feature: analytics](https://img.shields.io/badge/feature-analytics-blue)

Matomo est un logiciel d'analyse de sites web qui permet de collecter, suivre et analyser les données relatives aux visiteurs et à leur comportement sur un site web. Il s'agit d'une alternative open source à des solutions commerciales telles que Google Analytics. C'est un outil en ligne géré par beta.gouv et proposé sur https://stats.beta.gouv.fr.

Une formation complète à l'usage de l'interface est [disponible ici](https://ronan-hello.fr/series/matomo).

## Plugins disponibles

| nom                                                                           | description                                         |
| ----------------------------------------------------------------------------- | --------------------------------------------------- |
| [HeatmapSessionRecording](https://plugins.matomo.org/HeatmapSessionRecording) | tracking de l'activité et replay de sessions        |
| [FormAnalytics](https://plugins.matomo.org/FormAnalytics)                     | tracking automatique du churn des formulaires       |
| [Funnels](https://plugins.matomo.org/Funnels)                                 | tracking de conversion et de drop dans des parcours |

## Recommandations

:::caution Sécurité
N'envoyez jamais de données personnelles dans Matomo
:::

| type         | description                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RGPD         | [J'exclue les champs sensibles du tracking matomo](https://matomo.org/faq/heatmap-session-recording/faq_24214/)                                                                                                                                                                                                                                                                                                       |
| RGPD         | Je ne log pas de données personnelles (ex: dans les urls ou titre des pages)                                                                                                                                                                                                                                                                                                                                          |
| Legal        | La politique de confidentialité mentionne la collecte des informations de tracking et [proposer un opt-out](https://fr.matomo.org/faq/general/faq_20000/). Cela peut se faire facilement via [l'insertion d'un iframe par exemple](https://github.com/SocialGouv/code-du-travail-numerique/blob/68974a92bb034317eaa5b29454040ebe83770b19/packages/code-du-travail-frontend/pages/politique-confidentialite.tsx#L203). |
| Legal        | J'ai suivi le [guide d'exemption de bandeau cookie de la CNIL](https://www.cnil.fr/sites/cnil/files/atoms/files/matomo_analytics_-_exemption_-_guide_de_configuration.pdf)
| Transparence | Je rends mes stats matomo publiques                                                                                                                                                                                                                                                                                                                                                                                   |

## Installation

Vous pouvez utiliser le tracker officiel matomo ou un SDK adapté type [vue-matomo](https://www.npmjs.com/package/vue-matomo), [matomo-tracker-react](https://www.npmjs.com/package/@datapunt/matomo-tracker-react) ou [matomo-next](https://www.npmjs.com/package/@socialgouv/matomo-next).

La documentation officielle du tracker matomo est disponible sur https://developer.matomo.org/guides/tracking-javascript-guide.

## Ressources

- [formation matomo complète en Français](https://ronan-hello.fr/series/matomo)
- [documentation officielle de l'interface Matomo](https://fr.matomo.org/help)
- [documentation officielle du tracker JavaScript](https://developer.matomo.org/guides/tracking-javascript-guide)
