import type { NextPage } from 'next';
import Head from 'next/head';

import { Martini } from 'components/Martini';
import { ModelPreview } from 'components/ModelPreview';
import styles from 'styles/Model.module.css';

const MartiniPage: NextPage = () => (
  <div className={styles.page}>
    <Head>
      <title>Candle | 3D Models</title>
    </Head>

    <ModelPreview>
      <Martini position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2} />
    </ModelPreview>
  </div>
);

export default MartiniPage;
