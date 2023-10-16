import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Axé pour les services publics',
    Svg: require('@site/static/img/pictograms/city-hall.svg').default,
    description: (
      <>
        Les aspects abordés sont applicables à tout produit numérique. Mais nous les raccrochons au contexte d'une structure publique peu importe sa
        taille.
      </>
    ),
  },
  {
    title: 'Approche holistique',
    Svg: require('@site/static/img/pictograms/book.svg').default,
    description: (
      <>
        L'étendue des thématiques est large, et des connexions entre les différents chapitres sont faites pour penser la réalisation du produit dans
        son ensemble.
      </>
    ),
  },
  {
    title: `Un fil conducteur à adapter`,
    Svg: require('@site/static/img/pictograms/map.svg').default,
    description: (
      <>
        Tel un sillon agricole, ce "guide" est une voie préparatoire parmi tant d'autres pour vos projets numériques ! Vous êtes libre de faire une
        sélection ciblée de nos recommandations.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
