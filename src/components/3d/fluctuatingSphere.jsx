import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

export default function FluctuatingSphere({ size, color, opacity, wireframe, rotationSpeed, fluctuationSpeed }) {
    const mesh = useRef();
    const scale = useRef(0);
  
    useFrame(() => {
      scale.current += fluctuationSpeed;
      const fluctuation = 1 + Math.sin(scale.current) * 0.02;  
  
      mesh.current.scale.set(fluctuation, fluctuation, fluctuation);
  
      
      mesh.current.rotation.x += rotationSpeed.x;
      mesh.current.rotation.y += rotationSpeed.y;
      mesh.current.rotation.z += rotationSpeed.z;
    });
  
    return (
      <mesh ref={mesh}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshBasicMaterial color={color} wireframe={wireframe} transparent opacity={opacity} />
      </mesh>
    );
  }