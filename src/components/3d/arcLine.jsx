import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

export default function ArcLine() {
    const curve = new Array(100).fill(0).map((_, index) => {
      const t = index / 100;
      const angle = Math.PI * 2 * t;
      const radius = 5; 
      return new Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
    });
  
    return (
      <line>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={['attributes', 'position']}
            array={new Float32Array(curve.flatMap(v => [v.x, v.y, v.z]))}
            count={curve.length}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color="sun" />
      </line>
    );
  }