/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'

export function Model1(props) {
  const { nodes, materials } = useGLTF('/models/oxford_style_leather_shoe_for_men.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_BlackLeather_0.geometry}
        material={materials.BlackLeather}
        position={[132.139, 90.486, 0]}
        scale={30.369}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus_BlackLeather_0.geometry}
        material={materials.BlackLeather}
        position={[17.017, 144.908, 15.767]}
        rotation={[-0.981, -0.431, 0.262]}
        scale={2.643}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve_Cord_0.geometry}
        material={materials.Cord}
        position={[0, 238.076, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve001_Cord_0.geometry}
        material={materials.Cord}
        position={[-15.808, 229.943, -0.536]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus006_BlackLeather_0.geometry}
        material={materials.BlackLeather}
        position={[16.937, 145.006, -14.271]}
        rotation={[-2.18, -0.371, -0.089]}
        scale={2.643}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve002_Cord_0.geometry}
        material={materials.Cord}
        position={[-31.963, 219.478, -0.536]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve003_Cord_0.geometry}
        material={materials.Cord}
        position={[-49.181, 209.214, -0.536]}
        rotation={[0, 0, 0.02]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve004_Cord_0.geometry}
        material={materials.Cord}
        position={[-46.926, 109.731, -1.438]}
        rotation={[0, 0, 0.095]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve005_Cord_0.geometry}
        material={materials.Cord}
        position={[-62.483, 100.088, -1.438]}
        rotation={[0, 0, 0.095]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_BlackLeather_0.geometry}
        material={materials.BlackLeather}
        position={[8.434, 140.824, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/models/oxford_style_leather_shoe_for_men.glb')