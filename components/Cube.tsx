import React, { useRef } from 'react';
import THREE from 'three';

type Props = JSX.IntrinsicElements['mesh'] & {
  color?: string | undefined;
};

export const Cube = ({ color, ...props }: Props): JSX.Element => {
  const ref = useRef<THREE.Mesh>();

  return (
    <mesh {...props} castShadow receiveShadow ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color || '#c4c4c4'} />
    </mesh>
  );
};
