import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import RootChakra from './components/3d/Root';
import { Hud } from '@react-three/drei';
import SacralChakra from './components/3d/Sacral';
import Chakras from './components/3d/Chakras';
import Title from './components/Texts/title';

export default function App() {
  return (
    <div className='App'>
      <Title />
     <Chakras />
   </div>
  );
}

