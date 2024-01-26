# Recommandations metabase

# [![Sanity-check: B](https://img.shields.io/badge/sanity_check-B-lightblue)](https://sanity-check.numericite.eu/posts/1da94d73-7210-445c-b058-a4d294e4b716) ![type: self-hosted](https://img.shields.io/badge/type-self_hosted-blue) ![feature: analytics](https://img.shields.io/badge/feature-dataviz-blue)

Metabase propose une interface web qui permet de connecter des bases de données puis de générer facilement des dashboards et data-visualisations, de les organiser, les maintenir à jour et les partager.

Ce composant peut-être intégré dans votre infrastructure et se doit d'être correctement protégé.

## Recommandations

:::caution Sécurité
Ne connectez pas directement votre base de données de prod à Metabase

Ajoutez la variable d’environnement `MB_ENCRYPTION_SECRET_KEY` à l’app metabase
:::

:::info Sécurité
Il est recommandé d'exporter des données dédiées pour Metabase, anonymisées ou consolidées, dans une base dédiée et isolée de votre production.
:::

### Accès contrôlé

Il est conseillé de créer des utilisateurs Postgres dédiés pour Metabase, et en `read-only`.

ex:

```sql
CREATE ROLE readonly;
GRANT USAGE ON SCHEMA public TO readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO readonly;
CREATE USER read WITH PASSWORD 'someCr@zyP4ssw0rd';
GRANT readonly TO read;
```

### Déploiement

:::caution Sécurité
Utilisez la dernière version de metabase et mettez-la à jour régulièrement.
:::

:::info Scalingo
Si vous utilisez Scalingo, consultez la [doc de déploiement scalingo avec anonymisation](./metabase-scalingo)
:::

#### Protection contre les failles Metabase

Pour se prémunir d'éventuelles failles sur Metabase ou de vol d'accès, protégez-le derrière un proxy d'authentification.

Ex : [oauth2-proxy](https://oauth2-proxy.github.io/oauth2-proxy/) qui permet de limiter l'accès à une orga/team GitHub ou autre provider.

Si vous souhaitez tout de même exposer les pages publiques, vous aurez besoin d'allow-lister les endpoints suivants avec `--skip-auth-route` :

`^/public/.*,^/app/dist/.*,^/api/public/.*,^/api/session/.*,^/app/assets/.*`

## Ressources

- Une [présentation vidéo Metabase en Français](https://youtu.be/3sEmPG3Ydrg?si=l3emB4_dC253R2JP&t=193)
- Exemples d'outils d'anonymisation:
  - [datanymizer](https://github.com/datanymizer/datanymizer)
  - [postgresql-anonymizer](https://postgresql-anonymizer.readthedocs.io/en/stable/)
