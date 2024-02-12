# Sentry

# [![Sanity-check: B](https://img.shields.io/badge/sanity_check-B-lightblue)](https://sanity-check.numericite.eu/posts/134c814b-5fec-4d7d-9795-27e01a071ceb) ![type: SAAS](https://img.shields.io/badge/type-SAAS-blue) ![feature: quality](https://img.shields.io/badge/feature-quality-blue)

Outil de monitoring d'erreurs et d'analyse de performances à destination des équipes de développement. Permettant de réagir rapidement en cas d'incident, d'analyser un incident passé ou de debugger des problèmes de performance (APM).

Service proposé sur https://sentry.incubateur.net

👉 [Sentry in 6 minutes](https://www.youtube.com/watch?v=4djseRVSan8)

## Recommandations

:::caution Sécurité
N'envoyez jamais de données personnelles dans Sentry.
:::

| Type | Description                                                                                                                                                        |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RGPD | J'ai lu la documentation sur [le comportement par défaut de Sentry avec les données](https://docs.sentry.io/platforms/javascript/data-management/sensitive-data/?) |
| RGPD | Je n'ingère pas de données personnelles                                                                                                                            |
| Tech | J'ajuste [mon `tracesSampleRate` pour la production](https://develop.sentry.dev/sdk/performance/#sdk-configuration)                                                |
| Tech | Je m'abonne aux alertes de mon projet                                                                                                                              |

## Installation

Vous pouvez utiliser le SDK officiel Sentry de votre plateforme : https://docs.sentry.io/platforms

:::tip Intégration
Pensez à préciser les variables `environment`et `version` dans votre client pour pouvoir filtrer dans l'interface.
:::

## Ressources

- [Sentry in 6 minutes](https://www.youtube.com/watch?v=4djseRVSan8)
- [Monitoring 101 for React Developers](https://www.youtube.com/watch?v=VVQ6akO9dqw)
