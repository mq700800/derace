import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Building2(props) {
  const { nodes, materials } = useGLTF(
    '/models/building/buildings-transformed.glb',
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials.empire_state}
        position={[-0.137, 4.094, 3.054]}
        scale={0.052}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials.metlife}
        position={[-0.048, 0.992, 5.192]}
        scale={[0.275, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials['tower_one.001']}
        position={[-0.226, 1.015, 1.77]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.335, 1, 0.376]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_33.geometry}
        material={materials.tower_antenna}
        position={[-0.226, 1.015, 1.77]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.335, 1, 0.376]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_35.geometry}
        material={materials.Material}
        position={[0, 0.61, 7.271]}
        scale={[-0.34, 1, 0.35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_37.geometry}
        material={materials['Material.001']}
        position={[0, 0, 8.585]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_39.geometry}
        material={materials['tower_antenna.001']}
        position={[0, 1.001, 10.179]}
        scale={[0.236, 1, 0.404]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials['Material.002']}
        position={[0, 1.001, 10.179]}
        scale={[0.236, 1, 0.404]}
      />
    </group>
  );
}

useGLTF.preload('/models/building/buildings-transformed.glb');
