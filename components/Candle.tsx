import React, { useRef, useEffect, useState } from 'react';
import THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { getFileLink } from 'utils/firebase';

type Props = JSX.IntrinsicElements['mesh'] & {
  color?: string | undefined;
};

const loader = new GLTFLoader();

export const Candle = ({ color, ...props }: Props): JSX.Element => {
  const ref = useRef<THREE.Mesh>();
  const [file, setFile] = useState<GLTF>();

  // TODO: rewrite to utils hook.
  useEffect(() => {
    const loadModel = async (): Promise<void> => {
      const link = await getFileLink('models/candle1.gltf');
      if (!link) {
        return;
      }

      loader.load(link, (blob): void => setFile(blob));
    };

    loadModel();
  }, []);

  return (
    <>
      <mesh {...props} castShadow receiveShadow ref={ref} rotation={[0, Math.PI / 2, 0]} scale={20}>
        {file && <primitive object={file.scene} />}
        <meshStandardMaterial color={color || '#c4c4c4'} />
      </mesh>
    </>
  );
};
