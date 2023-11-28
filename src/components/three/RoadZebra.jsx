import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function RoadZebra(props) {
  const { nodes, materials } = useGLTF('/models/roads/road.glb');
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 50]} scale={0.01}>
        <mesh
          geometry={nodes.Road_X_Intersection_City_Intersection_mat_0.geometry}
          material={materials.City_Intersection_mat}
        />
        <mesh
          geometry={nodes.Road_X_Intersection_City_Road_mat_0.geometry}
          material={materials.City_Road_mat}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/roads/road.glb');
