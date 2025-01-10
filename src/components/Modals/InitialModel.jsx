import React from 'react';
import { useGLTF } from '@react-three/drei';

export function InitialModel(props) {
  const { nodes, materials } = useGLTF('/models/stylized_cartoon_shoes.glb');
  return (
    <group {...props} dispose={null}>
      <group position={[0, 2.565, 0.001]} rotation={[0.702, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Blue_Jeans}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Metalic}
        />
      </group>
      <group position={[-2.243, 0.812, -0.316]} rotation={[0, -0.284, 0]} scale={[-1, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.Blue_Jeans}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Metalic}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/stylized_cartoon_shoes.glb');
