import React from 'react';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type Props = {
  model: GLTF | undefined;
};

export const Model = ({ model }: Props): JSX.Element | null => {
  if (!model) return null;

  return <primitive object={model.scene} />;
};
