import React, { Suspense } from "react";
import { LetterH } from "./letterComponents";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

const getLetterComponent = (letter: string) => {
  console.log("getletter", letter);
  // if (['H', 'E', 'L', 'O'].includes(letter)) {
  //   return
  // }

  if (letter === "H") {
    return <LetterH />;
  }
};

export default ({ text }) => {
  console.log(text);
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 150], fov: 50 }}>
      <Suspense fallback={null}>
        <Stage
          environment="city"
          intensity={0.5}
          contactShadowOpacity={0.6}
          contactShadowBlur={1}
        >
          {/* {text.split("").map((char) => {
            return getLetterComponent(char);
          })} */}
          <LetterH position={[0, 100, 100]} />
        </Stage>
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  );
};
