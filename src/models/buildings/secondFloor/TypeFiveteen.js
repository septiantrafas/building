/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/buildings/secondFloor/typeFiveteen.glb"
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
          material={materials.biru}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/buildings/secondFloor/typeFiveteen.glb");
