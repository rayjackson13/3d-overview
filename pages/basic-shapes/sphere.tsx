import type { NextPage } from 'next';
import Head from 'next/head';

import { ModelPreview } from 'components/ModelPreview';
import { Sphere } from 'components/Sphere';
import styles from 'styles/Model.module.css';

const CubePage: NextPage = () => (
  <div className={styles.page}>
    <Head>
      <title>Sphere | 3D Models</title>
    </Head>

    <ModelPreview>
      <Sphere color="violet" position={[0, 1.25, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1.5} />
    </ModelPreview>
  </div>
);

export default CubePage;
