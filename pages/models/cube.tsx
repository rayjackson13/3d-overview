import type { NextPage } from 'next';
import Head from 'next/head';

import { Cube } from 'components/Cube';
import { ModelPreview } from 'components/ModelPreview';
import styles from 'styles/Model.module.css';

const CubePage: NextPage = () => (
  <div className={styles.page}>
    <Head>
      <title>Cube | 3D Models</title>
    </Head>

    <ModelPreview>
      <Cube color="orange" position={[0, 1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2} />
    </ModelPreview>
  </div>
);

export default CubePage;
