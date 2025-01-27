/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import * as THREE from "three";

export function Model2({ texture, bodyColor, extrasColor, soleColor, lacesColor, ...props }) {
  const { nodes, materials } = useGLTF('/models/nike_tc_7900_sail (1).glb')
  const loadedTexture = texture ? new THREE.TextureLoader().load(texture) : null;

  const laces = lacesColor
    ? new THREE.MeshStandardMaterial({ color: lacesColor })
    : materials['Material.004'];

  const sole1 = soleColor
    ? new THREE.MeshStandardMaterial({ color: soleColor })
    : materials.sko_sula_underdel;

  const sole2 = soleColor
    ? new THREE.MeshStandardMaterial({ color: soleColor })
    : materials.sko_sula_sida;

  const sole3 = soleColor
    ? new THREE.MeshStandardMaterial({ color: soleColor })
    : materials.sko_sula_framifrn;

  const body1 = loadedTexture
    ? new THREE.MeshStandardMaterial({ map: loadedTexture })
    : materials.material_grund;

  const body2 = loadedTexture
    ? new THREE.MeshStandardMaterial({ map: loadedTexture })
    : materials.nike_logga;

  const body3 = loadedTexture
    ? new THREE.MeshStandardMaterial({ map: loadedTexture })
    : materials.baksida_logga;

  const body4 = loadedTexture
    ? new THREE.MeshStandardMaterial({ map: loadedTexture })
    : materials.framsida;

  const body5 = loadedTexture
    ? new THREE.MeshStandardMaterial({ map: loadedTexture })
    : materials.verdel;

  const body6 = loadedTexture
    ? new THREE.MeshStandardMaterial({ map: loadedTexture })
    : materials.framsida_vre;

  const extra1 = extrasColor
    ? new THREE.MeshStandardMaterial({ color: extrasColor })
    : materials['Material.001'];

  const extra2 = extrasColor
    ? new THREE.MeshStandardMaterial({ color: extrasColor })
    : materials.Material;

  const extra3 = extrasColor
    ? new THREE.MeshStandardMaterial({ color: extrasColor })
    : materials['Material.003'];

  const extra4 = extrasColor
    ? new THREE.MeshStandardMaterial({ color: extrasColor })
    : materials.sula_insida;

  return (
    <group {...props} dispose={null}>
      <group scale={0.108}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={body1}
          material-color={bodyColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={body2}
          material-color={bodyColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={body3}
          material-color={bodyColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={body4}
          material-color={bodyColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={body5}
          material-color={bodyColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={body6}
          material-color={bodyColor}
        />
      </group>
      <group scale={0.108}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={sole1}
          material-color={soleColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={sole2}
          material-color={soleColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={sole3}
          material-color={soleColor}
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
        material={laces}
        material-color={lacesColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={extra1}
        material-color={extrasColor}
        scale={0.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={extra2}
        material-color={extrasColor}
        scale={0.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={extra3}
        material-color={extrasColor}
        position={[0.017, 0.116, -0.112]}
        rotation={[0.045, -0.145, 0.007]}
        scale={[0.108, 0.108, 0.103]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={extra4}
        material-color={extrasColor}
        scale={[0.11, 0.108, 0.108]}
      />
    </group>
  )
}

useGLTF.preload('/models/nike_tc_7900_sail (1).glb')