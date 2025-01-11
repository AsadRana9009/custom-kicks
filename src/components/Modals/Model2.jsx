/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'

export function Model2(props) {
  const { nodes, materials } = useGLTF('/models/nike_tc_7900_sail (1).glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.108}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.material_grund}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.nike_logga}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.baksida_logga}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.framsida}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.verdel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.framsida_vre}
        />
      </group>
      <group scale={0.108}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.sko_sula_underdel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.sko_sula_sida}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.sko_sula_framifrn}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.metall_svart}
        position={[0.067, 0.044, -0.048]}
        rotation={[-3.008, -0.005, -2.218]}
        scale={[-0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials['Material.006']}
        scale={[0.11, 0.108, 0.108]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials['Material.004']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials['Material.001']}
        scale={0.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.Material}
        scale={0.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials['Material.003']}
        position={[0.017, 0.116, -0.112]}
        rotation={[0.045, -0.145, 0.007]}
        scale={[0.108, 0.108, 0.103]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials.sula_insida}
        scale={[0.11, 0.108, 0.108]}
      />
    </group>
  )
}

useGLTF.preload('/models/nike_tc_7900_sail (1).glb')