import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, SpotLight } from "@react-three/drei";
import { useTheme } from "next-themes";
import dynamic from 'next/dynamic';

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
      scene.rotation.y += 0.002;
    }
  });

  return isActive ? (
    <primitive object={scene} scale={scale} position={position} />
  ) : null;
};

const Scene: React.FC = () => {
  const { theme } = useTheme();
  const model = models[0]; // Use only the first model

  return (
    <>
      {/* Lighting setup */}
      <ambientLight intensity={theme === "dark" ? 0.3 : 0.7} />
      <spotLight
        position={[15, 20, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
      />
      <spotLight
        position={[-15, 20, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
      />
      <directionalLight
        position={[0, 10, -10]}
        intensity={theme === "dark" ? 1.2 : 0.8}
        color={theme === "dark" ? "white" : "#ffe6cc"}
      />
      <pointLight position={[0, -10, 10]} intensity={0.5} />
      <CameraModel
        modelPath={model.path}
        isActive={true}
        scale={model.scale}
        position={model.position}
      />
      <OrbitControls enableZoom={false} enablePan={true} />
    </>
  );
};

const StarsBackground: React.FC = () => {
  const [stars, setStars] = useState<{ x: number; y: number; opacity: number }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: Math.random(),
        });
      }
      setStars(newStars);
    };

    generateStars();
    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStars((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          opacity: Math.random(),
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {stars.map((star, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: star.y,
            left: star.x,
            width: "2px",
            height: "2px",
            backgroundColor: "white",
            opacity: star.opacity,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}
    </div>
  );
};

interface Hero3DProps {
  onContactClick: () => void;
}

const Hero3D: React.FC<Hero3DProps> = ({ onContactClick }) => {
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
      <StarsBackground />
      <Canvas
        style={{ background: "transparent" }}
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
            <h1 className="text-8xl font-light tracking-wide text-gray-300 font-bebas-neue-bold text-center">
              GOKIL STUDIO
            </h1>
            <p className="mt-6 text-2xl text-gray-300 font-montserrat-light leading-relaxed text-center">
              Capturing Moments, Crafting Lifelong Memories
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <button
                onClick={onContactClick}
                className="button-hover-effect px-8 py-4 bg-yellow-500 text-white rounded-full text-lg font-medium shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                Contact Me
              </button>
              <a
                href="#gallery-rows"
                className="button-hover-effect px-8 py-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-300 text-gray-300 rounded-full text-lg font-medium shadow-lg hover:bg-opacity-20 hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .button-hover-effect {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .button-hover-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.3s ease-out;
        }

        .button-hover-effect:hover::before {
          transform: scaleY(1);
        }
      `}</style>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Hero3D), { ssr: false });
