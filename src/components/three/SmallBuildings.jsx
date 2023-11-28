import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function SmallBuildings(props) {
  const { nodes, materials } = useGLTF(
    '/models/building/buildings-transformed.glb',
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material.011']}
        position={[0, 0.673, -4.707]}
        scale={[0.194, 0.665, 0.194]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials['Material.013']}
        position={[0, 0.994, -7.075]}
        scale={[0.216, 1, 0.216]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials['Material.014']}
        position={[0, 0.897, -3.655]}
        scale={[0.246, 0.893, 0.346]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials['Material.015']}
        position={[0, 0.688, -8.545]}
        scale={[0.235, 0.69, 0.654]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials['Material.015']}
        position={[0, 0.688, -5.90]}
        scale={[0.235, 0.69, 0.654]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials['Material.016']}
        position={[0, 1.014, -2.099]}
        scale={[0.392, 1, 0.557]}
      />
    </group>
  );
}

useGLTF.preload('/models/building/buildings-transformed.glb');
