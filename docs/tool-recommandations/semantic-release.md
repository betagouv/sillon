# semantic-release

# ![type: tooling](https://img.shields.io/badge/type-tooling-blue) ![feature: standards](https://img.shields.io/badge/feature-standards-blue)

[semantic-release](https://semantic-release.gitbook.io/semantic-release/) permet d'automatiser les releases grâce à l'adoption de conventions GIT.

:::tip No silver bullet
D'autre outils similaires existent : [TODO]
:::

En adoptant les [commits conventionnels](https://www.conventionalcommits.org/fr/v1.0.0/), semantic-release va pouvoir :

- créer les tags GIT et releases GitHub
- générer des changelogs
- notifier les issues associées
- publier sur des éventuels registry
- ...

## Recommandations

| type    | description                                                                                                       |
| ------- | ----------------------------------------------------------------------------------------------------------------- |
| Qualité | J'automatise mes releases et documente le process si besoin                                                       |
| Qualité | Je documente mes releases en Français; [exemple](https://github.com/betagouv/mon-entreprise/releases/tag/v1.28.0) |

## Installation

cf [Exemple de workflow pour GitHub](https://github.com/betagouv/preuve-covoiturage/blob/main/.github/workflows/release.yml)
