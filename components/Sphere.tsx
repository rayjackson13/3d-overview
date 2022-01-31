import React, { useRef } from 'react';
import THREE from 'three';

type Props = JSX.IntrinsicElements['mesh'] & {
  color?: string | undefined;
};

export const Sphere = ({ color, ...props }: Props): JSX.Element => {
  const ref = useRef<THREE.Mesh>();

  return (
    <mesh {...props} castShadow receiveShadow ref={ref}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color || '#c4c4c4'} />
    </mesh>
  );
};
