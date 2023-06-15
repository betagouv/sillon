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
    title: 'Corporis eligendi qui',
    Svg: require('@site/static/img/pictograms/book.svg').default,
    description: (
      <>
        Quod quasi ducimus perferendis ut sequi sunt occaecati. Et et et qui iste. Consequatur ut quia praesentium facilis officia molestiae. Sunt
        ipsam quia hic sed sunt. Sapiente dignissimos harum voluptates iste distinctio doloremque saepe ut.
      </>
    ),
  },
  {
    title: 'Eos voluptates distinctio',
    Svg: require('@site/static/img/pictograms/paint.svg').default,
    description: (
      <>
        Et repudiandae fugiat sunt ut distinctio natus vel. Sed molestiae delectus eveniet ipsum pariatur aut. Corrupti ex quo iusto. Qui iusto alias
        est rerum repellat fugiat. Amet minima omnis et commodi necessitatibus.
      </>
    ),
  },
  {
    title: 'Maiores fugiat velit',
    Svg: require('@site/static/img/pictograms/community.svg').default,
    description: (
      <>
        Quia tenetur quia consequatur sed reprehenderit aut id itaque. Impedit nulla reiciendis et tenetur tempore sit quos quibusdam. Molestiae
        suscipit adipisci quia minima pariatur eum. Rerum modi veritatis.
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
