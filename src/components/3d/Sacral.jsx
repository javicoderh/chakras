import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import FluctuatingSphere from './fluctuatingSphere';
import ArcLine from './arcLine';

export default function SacralChakra() {
  return (
    <Canvas
      camera={{
        position: [26, 0, 25], // You might need to adjust the z value.
    fov: 15,
      }}
      style={{ width: '176px', height: '156px', backgroundColor: 'transparent' }}  
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <group scale={[0.4, 0.4, 0.4]} position={[0, 0, 0]}>
        <FluctuatingSphere size={8} color="rgb(255, 176, 102)" opacity={0.3} wireframe={true} rotationSpeed={{x: 0.004, y: 0, z: 0.004}} fluctuationSpeed={0.06} />
        <FluctuatingSphere size={5} color="orange" opacity={0.4} wireframe={true} rotationSpeed={{x: 0.004, y: 0, z: 0.004}} fluctuationSpeed={0.06} />
        <FluctuatingSphere size={3} color="rgb(255, 60, 60)" opacity={0.4} wireframe={true} rotationSpeed={{x: 0, y: 0.004, z: 0}} fluctuationSpeed={0.03} />
        <FluctuatingSphere size={1.1} color="rgb(189, 91, 0)" opacity={0.06} wireframe={true} rotationSpeed={{x: 0, y: 0.004, z: 0}} fluctuationSpeed={0} />
        <FluctuatingSphere size={0.5} color="rgb(189, 91, 0)" opacity={1} wireframe={true} rotationSpeed={{x: 0.004, y: 0, z: 0}} fluctuationSpeed={0} />
        <ArcLine />
      </group>
    </Canvas>
  );
}
