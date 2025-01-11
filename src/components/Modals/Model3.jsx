/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'

export function Model3(props) {
  const { nodes, materials } = useGLTF('/models/shoes.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sneakers_2_low_poly3sneakers_2_low_poly_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sneakers_2_low_poly3solle1_lambert1_0.geometry}
        material={materials.lambert1}
      />
    </group>
  )
}

useGLTF.preload('/models/shoes.glb')