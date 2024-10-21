// components/Hero3D.tsx

import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { useTheme } from "next-themes";

// Define the structure for each model's data
interface ModelData {
  path: string;
  scale: [number, number, number];
  position: [number, number, number];
}

// Array containing data for each camera model
const models: ModelData[] = [
  {
    path: "/models/cameras/camera1.glb",
    scale: [10, 10, 10],
    position: [0, 0, 0],
  },
  {
    path: "/models/cameras/camera2.glb",
    scale: [8, 7, 8],
    position: [0, -2, 0],
  },
  {
    path: "/models/cameras/camera3.glb",
    scale: [8, 8, 8],
    position: [0, 0, 0],
  },
];

// Props for individual camera models
interface CameraModelProps {
  modelPath: string;
  isActive: boolean;
  scale: [number, number, number];
  position: [number, number, number];
}

// Component to load and render individual camera models
const CameraModel: React.FC<CameraModelProps> = ({
  modelPath,
  isActive,
  scale,
  position,
}) => {
  const { scene } = useGLTF(modelPath);
  const ref = useRef<THREE.Group>(null);

  // Rotate the model if it's active
  useFrame(() => {
    if (ref.current && isActive) {
      ref.current.rotation.y += 0.01; // Adjust rotation speed as needed
    }
  });

  // Render the model only if it's active, with specific scale and position
  return isActive ? (
    <primitive object={scene} ref={ref} scale={scale} position={position} />
  ) : null;
};

// Scene component that manages model rotation and switching
const Scene: React.FC = () => {
  const { theme } = useTheme(); // Access the current theme
  const [activeModel, setActiveModel] = useState(0);
  const cumulativeRotationRef = useRef<number>(0);

  const rotationSpeed = 0.01; // Must match the rotation speed in CameraModel

  // useFrame hook to track rotation and switch models
  useFrame(() => {
    cumulativeRotationRef.current += rotationSpeed;

    // Switch model every 120 degrees (2π/3 radians)
    if (cumulativeRotationRef.current >= (2 * Math.PI) / 3) {
      cumulativeRotationRef.current = 0;
      setActiveModel((prev) => (prev + 1) % models.length);
    }
  });

  return (
    <>
      {/* Adjust lighting based on the theme */}
      <ambientLight intensity={theme === "dark" ? 1 : 4} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={theme === "dark" ? 3 : 1}
      />
      {/* Render all camera models, but only the active one is visible */}
      {models.map((model, index) => (
        <CameraModel
          key={index}
          modelPath={model.path}
          isActive={index === activeModel}
          scale={model.scale}
          position={model.position}
        />
      ))}
      {/* Optional: OrbitControls for user interaction */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

// Main Hero3D component
const Hero3D: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Canvas is the root for all 3D content */}
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Suspense to handle loading states */}
        <Suspense
          fallback={
            <Html center>
              <div className="text-white dark:text-gray-200">Loading...</div>
            </Html>
          }
        >
          {/* Scene component handles models and rotation */}
          <Scene />
        </Suspense>
      </Canvas>

      {/* Overlay content on top of the 3D scene */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
          <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl animate-fade-in">
            Welcome to <span className="text-indigo-500">Gokil Studio</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-gray-200 max-w-3xl leading-relaxed animate-fade-in delay-500">
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
