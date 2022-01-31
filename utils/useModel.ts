import { useState, useEffect } from 'react';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { getFileLink } from './firebase';

const loader = new GLTFLoader();

export const useModel = (path: string): GLTF | undefined => {
  const [model, setModel] = useState<GLTF>();

  useEffect(() => {
    const loadModel = async (): Promise<void> => {
      const link = await getFileLink(path);
      if (!link) return;

      loader.load(link, (blob): void => setModel(blob));
    };

    loadModel();
  }, [path]);

  return model;
};
