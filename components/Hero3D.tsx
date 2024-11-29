import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { useTheme } from "next-themes";

interface ModelData {
  path: string;
  scale: [number, number, number];
  position: [number, number, number];
}

const models: ModelData[] = [
  {
    path: "/models/cameras/camera1.glb",
    scale: [20, 20, 20],
    position: [2, 0, 0],
  },
  {
    path: "/models/cameras/camera2.glb",
    scale: [18, 17, 18],
    position: [2, -2, 0],
  },
  {
    path: "/models/cameras/camera3.glb",
    scale: [18, 18, 18],
    position: [2, 0, 0],
  },
];

interface CameraModelProps {
  modelPath: string;
  isActive: boolean;
  scale: [number, number, number];
  position: [number, number, number];
}

const CameraModel: React.FC<CameraModelProps> = ({
  modelPath,
  isActive,
  scale,
  position,
}) => {
  const { scene } = useGLTF(modelPath);
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (ref.current && isActive) {
      ref.current.rotation.y += 0.01;
    }
  });

  return isActive ? (
    <primitive object={scene} ref={ref} scale={scale} position={position} />
  ) : null;
};

const Scene: React.FC = () => {
  const { theme } = useTheme();
  const [activeModel, setActiveModel] = useState(0);
  const cumulativeRotationRef = useRef<number>(0);

  const rotationSpeed = 0.01;

  useFrame(() => {
    cumulativeRotationRef.current += rotationSpeed;

    if (cumulativeRotationRef.current >= (2 * Math.PI) / 3) {
      cumulativeRotationRef.current = 0;
      setActiveModel((prev) => (prev + 1) % models.length);
    }
  });

  return (
    <>
      <ambientLight intensity={theme === "dark" ? 1 : 4} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={theme === "dark" ? 3 : 1}
      />
      {models.map((model, index) => (
        <CameraModel
          key={index}
          modelPath={model.path}
          isActive={index === activeModel}
          scale={model.scale}
          position={model.position}
        />
      ))}
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

const Hero3D: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Canvas camera={{ position: [-3, 5, 5], fov: 50 }}>
        <Suspense
          fallback={
            <Html center>
              <div className="text-white dark:text-gray-200">Loading...</div>
            </Html>
          }
        >
          <Scene />
        </Suspense>
      </Canvas>

      {/* Overlay content on top of the 3D scene */}
      <div className="absolute inset-0 flex flex-col items-start justify-center px-4 z-10">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
          <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl animate-fade-in text-left">
            Welcome to <span className="text-indigo-500">Gokil Studio</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-gray-200 max-w-3xl leading-relaxed animate-fade-in delay-500 text-left">
            Capturing Moments, Crafting Lifelong Memories with Every Click
          </p>
          <div className="mt-6 flex space-x-4 animate-fade-in delay-1000">
            <a
              href="#contact"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md text-lg font-medium hover:bg-indigo-500 transition duration-300 shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
