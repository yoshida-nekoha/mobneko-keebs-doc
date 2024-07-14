import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  to: string;
  imgProps: { src: string, width: string, height: string, alt: string };
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '禊シリーズ',
    to: '/mobneko-keebs-doc/docs/build-guide',
    imgProps: { src: '/mobneko-keebs-doc/img/misogi-v2.jpg', width: '720px', height: '480px', alt: '禊' },
    description: (
      <>
        片手で持てる、A5よりも小さなサイズ。<br />
        シンプルな34キー、オーソリニアタイプです。
      </>
    ),
  },
];

function Feature({ title, to, imgProps, description }: FeatureItem) {
  return (
    <Link to={to}>
      <div className={clsx('col col--12')}>
        <div className="text--center">
          <img {...imgProps} />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function xHomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div /* className="row" */>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
