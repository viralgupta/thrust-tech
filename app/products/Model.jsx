"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

function Model({ zoomLevel = 1, modelLocation }) {
  const gltf = useGLTF(modelLocation);
  const MaxPolarAngle = window.innerWidth <= 1023 ? 1.5 : 2;
  const MinPolarAngle = window.innerWidth <= 1023 ? 1.5 : 1;
  return (
    <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen p-2 rounded-lg border">

      <Canvas
        className="w-full h-full"
        camera={{
          fov: 75,
          near: 0.1,
          far: 100,
          position: [0, 50, 0],
          zoom: zoomLevel,
        }}
        style={{ width: `100%`, height: `100%`, position: "" }}
        dpr={Math.min(window.devicePixelRatio, 2)}
        color="white"
      >
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxZoom={zoomLevel + zoomLevel/2}
          minZoom={zoomLevel/2}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={MaxPolarAngle}
          minPolarAngle={MinPolarAngle}
          enableDamping={true}
        />
        <primitive
          object={gltf.scene}
          children-0-material-opacity={1}
          children-0-material-transparent={true}
        />
        <ambientLight intensity={2} color={"white"}/>
        <directionalLight intensity={3} color={"beige"}/>
      </Canvas>
    </div>
  );
}

export default Model;
