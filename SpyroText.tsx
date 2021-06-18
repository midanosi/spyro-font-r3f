import React, { Suspense } from "react";
import { H, E, L, O } from "./letterComponents";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
  Environment,
  OrthographicCamera,
  useHelper
} from "@react-three/drei";
import * as THREE from "three";

const components = {
  H,
  E,
  L,
  O
};

const getLetterComponent = (letter: string) => {
  if (["H", "E", "L", "O"].includes(letter)) {
    return components[letter];
  }

  return null;
};

const Lights = () => {
  const spotlightRef = React.useRef();
  useHelper(spotlightRef, THREE.SpotLightHelper);
  return (
    <>
      <ambientLight intensity={3} />
      <spotLight ref={spotlightRef} position={[-8, 0, 20]} penumbra={1} />
      {/* <pointLight position={[-50, 0, 10]} /> */}
    </>
  );
};

export default ({ text }) => {
  console.log(text);
  if (text === "") {
    return null;
  }

  return (
    <Canvas
      shadows
      // dpr={[1, 2]}
      // camera={{ position: [0, 0, 2], fov: 150, type }}
      style={{ height: "50vh" }}
    >
      <Suspense fallback={null}>
        <OrthographicCamera position={[0, 0, 20]} makeDefault zoom={20} />
        <group position={[0, 0, 0]}>
          {text.split("").map((char, idx) => {
            if (char === "") {
              return null;
            }
            const LetterComponent = getLetterComponent(char);
            console.log(`LetterComponent`, LetterComponent);

            return (
              <LetterComponent
                position={[idx * 6, 10, 1]}
                rotation-x={Math.PI}
                rotation-y={0.2}
              />
            );
          })}
        </group>
      </Suspense>
      <Lights />
      <OrbitControls />
    </Canvas>
  );
};
