import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const ModelPreview = ({ children }: Props): JSX.Element => (
  <Canvas dpr={[1, 2]} shadows>
    <color args={['#020202']} attach="background" />
    <fog args={['#020202', 0, 30]} attach="fog" />
    <group position={[0, -1, 0]}>
      {children}

      {/* <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[10, 32]} />
          <meshBasicMaterial color="#a2a2a2" reflectivity={1} />
        </mesh> */}

      <mesh position={[0, 0.001, 0]} receiveShadow rotation-x={-Math.PI / 2}>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial color="black" opacity={0.4} transparent />
      </mesh>
    </group>

    <OrbitControls
      autoRotate
      autoRotateSpeed={1}
      enablePan={false}
      enableZoom={false}
      makeDefault
      maxPolarAngle={Math.PI / 2.3}
      minPolarAngle={Math.PI / 2.3}
    />

    <PerspectiveCamera fov={70} makeDefault position={[0, 0, 5]}>
      <ambientLight intensity={0.3} />
      <spotLight
        angle={0.15}
        castShadow
        intensity={1}
        penumbra={1}
        position={[10, 10, 10]}
        shadow-mapSize={[2048, 2048]}
      />
    </PerspectiveCamera>

    <EffectComposer>
      <DepthOfField bokehScale={10} focalLength={12} focusDistance={0} height={480} />
      <Bloom intensity={0.3} luminanceSmoothing={0.9} luminanceThreshold={0} />
      <Noise opacity={0.02} />
      <Vignette darkness={0.3} eskil={false} offset={0.1} />
    </EffectComposer>
  </Canvas>
);
