import type { NextPage } from 'next';
import Head from 'next/head';

import { Candle } from 'components/Candle';
import { ModelPreview } from 'components/ModelPreview';
import styles from 'styles/Model.module.css';

const CandlePage: NextPage = () => (
  <div className={styles.page}>
    <Head>
      <title>Candle | 3D Models</title>
    </Head>

    <ModelPreview>
      <Candle position={[0, 1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2} />
    </ModelPreview>
  </div>
);

export default CandlePage;
