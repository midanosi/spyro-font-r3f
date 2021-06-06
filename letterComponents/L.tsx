import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    Letter_L: THREE.Mesh;
  };
  materials: {
    ["Default OBJ"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/letterL.gltf") as GLTFResult;
  console.log(`materials`, materials);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node.geometry}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial />
      </mesh>
    </group>
  );
}

useGLTF.preload("/letterL.gltf");
