// components/Hero3D.tsx

import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import { useTheme } from 'next-themes';

// Define the structure for each model's data
interface ModelData {
  path: string;
  scale: [number, number, number];
  position: [number, number, number];
}

// Array containing data for each camera model
const models: ModelData[] = [
  {
    path: '/models/cameras/camera1.glb',
    scale: [2, 2, 2],
    position: [0, 0, 0],
  },
  {
    path: '/models/cameras/camera2.glb',
    scale: [1.8, 1.8, 1.8],
    position: [0.5, 0, 0],
  },
  {
    path: '/models/cameras/camera3.glb',
    scale: [2.2, 2.2, 2.2],
    position: [-0.5, 0, 0],
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
const CameraModel: React.FC<CameraModelProps> = ({ modelPath, isActive, scale, position }) => {
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
    <primitive
      object={scene}
      ref={ref}
      scale={scale}
      position={position}
    />
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
      <ambientLight intensity={theme === 'dark' ? 0.8 : 0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={theme === 'dark' ? 1.5 : 1}
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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white dark:text-gray-200 px-4">
        <h1 className="text-5xl font-bold">Welcome to Gokil Studio</h1>
        <p className="mt-4 text-2xl">Capturing Moments, Creating Memories</p>
        {/* Add additional content or buttons here */}
      </div>
    </section>
  );
};

export default Hero3D;
