import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";

import Experience from "./Experience";

function App() {


  return (
    <div className='app'>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 70, position: [0, 5, 10] }}>
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
