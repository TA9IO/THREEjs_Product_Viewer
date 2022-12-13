import React from "react";
import {
  Sky,
  OrbitControls,
  PerspectiveCamera,
  Environment,
  MeshReflectorMaterial,
  PresentationControls
} from "@react-three/drei";
import  {useControls} from 'leva'
import * as THREE from 'three'

function Experience() {


    const { position } = useControls({
        position: {
          value: 5,
          min: 0,
          max: 10,
          step: 0.01,
        },
    })
  return (
    <>
      {/* <Sky sunPosition={[0, -0.5, 0]} inclination={3} azimuth={1} ></Sky> */}
      <fog attach='fog' args={["#101010", 0, 10]} />
      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <MeshReflectorMaterial
          blur={[400, 100]}
          resolution={1024}
          mixBlur={1}
          opacity={2}
          depthScale={1.1}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.25}
          roughness={1}
          side={THREE.DoubleSide}
          
        />
      </mesh> */}
      <OrbitControls></OrbitControls>
        <mesh scale={position} >
          <boxGeometry></boxGeometry>
          <meshNormalMaterial></meshNormalMaterial>
        </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={50}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
      </mesh>

      {/* <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, 0.001, 0]}>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial transparent color='black' opacity={0.4} />
      </mesh> */}
     
      {/* <PerspectiveCamera makeDefault fov={65} position={[0, 0, 4]}>
        <spotLight
          position={[10, 10, 5]}
          angle={0.15}
          penumbra={1}
          intensity={0.1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
      </PerspectiveCamera> */}
    </>
  );
}

export default Experience;
