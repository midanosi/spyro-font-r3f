import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    Letter_E: THREE.Mesh;
  };
  materials: {
    ["Default OBJ"]: THREE.MeshNormalMaterial;
  };
};

export default function Model(props) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/letterE.glb") as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Letter_E.geometry}
        material={THREE.MeshNormalMaterial}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial metalness={1} color={"#9d946b"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/letterE.glb");
