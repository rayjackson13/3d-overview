import type { NextPage } from 'next';
import Head from 'next/head';

import { Cola } from 'components/Cola';
import { ModelPreview } from 'components/ModelPreview';
import styles from 'styles/Model.module.css';

const ColaPage: NextPage = () => (
  <div className={styles.page}>
    <Head>
      <title>Cola | 3D Models</title>
    </Head>

    <ModelPreview>
      <Cola position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2} />
    </ModelPreview>
  </div>
);

export default ColaPage;
