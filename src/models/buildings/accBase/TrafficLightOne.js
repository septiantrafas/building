/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/buildings/accBase/trafficLightOne.glb"
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          geometry={nodes.ObjObject_1.geometry}
          material={materials.palette}
        />
        <mesh
          castShadow
          geometry={nodes.ObjObject_2.geometry}
          material={materials.merah}
        />
        <mesh
          castShadow
          geometry={nodes.ObjObject_3.geometry}
          material={materials.kuning}
        />
        <mesh
          castShadow
          geometry={nodes.ObjObject_4.geometry}
          material={materials.hijau}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/buildings/accBase/trafficLightOne.glb");
