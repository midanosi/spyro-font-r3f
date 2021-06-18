import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    Letter_H: THREE.Mesh;
  };
  materials: {
    ["Default OBJ"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/letterHold.glb") as GLTFResult;
  console.log(`nodes`, nodes);
  console.log(`materials`, materials);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Letter_H.geometry}
        material={materials["Default OBJ"]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial metalness={1} color={"#9d946b"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/letterHold.glb");
