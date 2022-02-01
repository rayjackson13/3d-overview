import { OrbitControls, PerspectiveCamera, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';

import { Particles } from 'components/Particles';
import { Text3d } from 'components/Text3d';

export const Hero = (): JSX.Element => (
  <Canvas dpr={[1, 2]} shadows>
    <color args={['#010101']} attach="background" />
    {/* <fog args={['#020202', 0, 10]} attach="fog" /> */}

    <Text3d color="#a83254" outline position={[-2.2, 0.7, 0]} size={0.3}>
      KOSTYA&apos;S
    </Text3d>
    <Text3d color="#a2a2a2">3D Collection</Text3d>

    <Particles count={1000} />

    <OrbitControls
      enablePan={false}
      enableZoom={false}
      makeDefault
      maxPolarAngle={Math.PI / 2.3}
      minPolarAngle={Math.PI / 2.3}
    />

    <PerspectiveCamera fov={70} makeDefault position={[0, 0, 5]}>
      <ambientLight intensity={10} />
    </PerspectiveCamera>

    <EffectComposer>
      <DepthOfField bokehScale={10} focalLength={12} focusDistance={0} height={480} />
      <Bloom intensity={0.3} luminanceSmoothing={0.9} luminanceThreshold={0} />
      <Noise opacity={0.02} />
      <Vignette darkness={0.3} eskil={false} offset={0.1} />
    </EffectComposer>

    <Stats showPanel={0} />
  </Canvas>
);
