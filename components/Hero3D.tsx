import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, SpotLight } from "@react-three/drei";
import { useTheme } from "next-themes";

interface ModelData {
  path: string;
  scale: [number, number, number];
  position: [number, number, number];
}

const models: ModelData[] = [
  {
    path: "/models/cameras/camera1.glb",
    scale: [10, 10, 10],
    position: [0, 0, 0],
  },
  {
    path: "/models/cameras/camera2.glb",
    scale: [10, 10, 10],
    position: [0, -3, 0],
  },
  {
    path: "/models/cameras/camera3.glb",
    scale: [10, 10, 10],
    position: [0, 0, 0],
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

  useFrame(() => {
    if (isActive && scene) {
      scene.rotation.y += 0.01;
    }
  });

  return isActive ? (
    <primitive object={scene} scale={scale} position={position} />
  ) : null;
};

const Scene: React.FC = () => {
  const { theme } = useTheme();
  const [activeModel, setActiveModel] = useState(0);
  const cumulativeRotationRef = React.useRef(0);

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
      {/* Lighting setup */}
      <ambientLight intensity={theme === "dark" ? 0.2 : 0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <spotLight
        position={[-10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <directionalLight
        position={[0, 5, -5]}
        intensity={theme === "dark" ? 1 : 0.5}
        color={theme === "dark" ? "white" : "#ffe6cc"}
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
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fadeOutStart = 0;
      const fadeOutEnd = 300;
      const newOpacity = Math.max(
        0,
        1 - (scrollPosition - fadeOutStart) / (fadeOutEnd - fadeOutStart)
      );
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="sticky top-0 h-screen w-full overflow-hidden z-0">
      <Canvas
        style={{
          background: "linear-gradient(135deg, #1d3557, #457b9d, #a8dadc)",
        }}
        camera={{ position: [-3, 2, 5], fov: 35 }}
      >
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

      {/* Overlay content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10"
        style={{ opacity, transition: "opacity 0.3s ease-out" }}
      >
        <div className="relative p-8">
          <div className="relative z-10">
            <h1 className="text-8xl font-bold tracking-wide text-white font-bebas text-center">
              Welcome to{" "}
              <span className="text-indigo-400 drop-shadow-lg">Gokil Studio</span>
            </h1>
            <p className="mt-6 text-2xl text-gray-200 leading-relaxed text-center">
              Capturing Moments, Crafting Lifelong Memories
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="#contact"
                className="px-8 py-4 bg-indigo-600 text-white rounded-full text-lg font-medium shadow-lg hover:bg-indigo-500 hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                Contact Me
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 bg-transparent border border-indigo-600 text-indigo-600 rounded-full text-lg font-medium shadow-lg hover:bg-indigo-600 hover:text-white hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
