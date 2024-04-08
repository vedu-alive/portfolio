import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
// @ts-ignore
import skyScene from '../assets/3d/sky.glb'
import { useFrame } from '@react-three/fiber';
const Sky = ({isRotating}) => {
    const skyModal = useGLTF(skyScene);
    const skyRef = useRef(null);
    useFrame((_,delta) => {
      if (isRotating) {
            // @ts-ignore
            skyRef.current.rotation.y += 0.15 * delta;
        }
    }) 
  return (
    <mesh ref={skyRef}>
        <primitive object={skyModal.scene} />
    </mesh>
  )
}

export default Sky