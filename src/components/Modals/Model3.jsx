/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Model3({ texture, bodyColor, soleColor, ...props }) {
  const { nodes, materials } = useGLTF("/models/shoes.glb");
  const loadedTexture = texture ? new THREE.TextureLoader().load(texture) : null;

  const bodyMaterial = loadedTexture
    ? new THREE.MeshStandardMaterial({ map: loadedTexture })
    : materials.lambert1;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sneakers_2_low_poly3sneakers_2_low_poly_lambert1_0.geometry}
        material={bodyMaterial}
        material-color={bodyColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sneakers_2_low_poly3solle1_lambert1_0.geometry}
        material={new THREE.MeshStandardMaterial({ color: soleColor })}
      />
    </group>
  );
}

useGLTF.preload("/models/shoes.glb");
