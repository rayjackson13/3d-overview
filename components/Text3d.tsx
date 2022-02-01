import { Text } from '@react-three/drei';
import React, { useRef } from 'react';
import THREE from 'three';

type Props = JSX.IntrinsicElements['mesh'] & {
  children?: string;
  color?: string | undefined;
  outline?: boolean;
  size?: number;
};

export const Text3d = (props: Props): JSX.Element => {
  const { size = 1, outline = false, color = '#fff', children, ...other } = props;
  const ref = useRef<THREE.Mesh>();

  const outlineColor = outline ? color : undefined;
  const outlineWidth = outline ? 0.01 : 0;
  const strokeColor = outline ? '#010101' : color;

  return (
    <mesh {...other} castShadow receiveShadow ref={ref}>
      <Text
        fontSize={size}
        outlineColor={outlineColor}
        outlineWidth={outlineWidth}
        strokeColor={strokeColor}
        strokeOpacity={1}
        strokeWidth={1}
        textAlign="left"
      >
        {children}
      </Text>
    </mesh>
  );
};
