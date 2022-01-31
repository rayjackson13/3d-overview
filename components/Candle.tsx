import React, { useRef } from 'react';
import THREE from 'three';

import { Model } from './Model';

import { useModel } from 'utils/useModel';

type Props = JSX.IntrinsicElements['mesh'] & {
  color?: string | undefined;
};

export const Candle = ({ color, ...props }: Props): JSX.Element => {
  const ref = useRef<THREE.Mesh>();
  const model = useModel('models/candle1.gltf');

  return (
    <>
      <mesh {...props} castShadow receiveShadow ref={ref} rotation={[0, Math.PI / 2, 0]} scale={20}>
        <Model model={model} />
      </mesh>
    </>
  );
};
