import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

// Procedural Kitchen Components
const Room = ({ progress }) => {
  const floorRef = useRef();
  const wallRef = useRef();
  const ceilingRef = useRef();

  useFrame(() => {
    if (floorRef.current) {
      floorRef.current.position.y = THREE.MathUtils.lerp(-0.5, -0.5, progress);
    }
  });

  return (
    <group>
      {/* Floor */}
      <mesh ref={floorRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          color="#f5f0e6"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Back Wall */}
      <mesh ref={wallRef} position={[0, 2.5, -5]}>
        <boxGeometry args={[20, 6, 0.2]} />
        <meshStandardMaterial color="#ffffff" roughness={0.9} />
      </mesh>

      {/* Ceiling */}
      <mesh ref={ceilingRef} position={[0, 5.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#ffffff" roughness={0.9} />
      </mesh>
    </group>
  );
};

const Cabinet = ({ position, scale, color, progress, delay = 0 }) => {
  const groupRef = useRef();
  const targetPosition = useRef(position);
  const targetScale = useRef(scale);
  const startPosition = useRef([position[0], position[1] + 3, position[2]]);
  const startScale = useRef([0, 0, 0]);

  useFrame(() => {
    if (groupRef.current) {
      const localProgress = Math.max(0, Math.min(1, (progress - delay) / 0.2));
      groupRef.current.position.x = THREE.MathUtils.lerp(
        startPosition.current[0],
        targetPosition.current[0],
        localProgress
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        startPosition.current[1],
        targetPosition.current[1],
        localProgress
      );
      groupRef.current.position.z = THREE.MathUtils.lerp(
        startPosition.current[2],
        targetPosition.current[2],
        localProgress
      );
      groupRef.current.scale.x = THREE.MathUtils.lerp(
        startScale.current[0],
        targetScale.current[0],
        localProgress
      );
      groupRef.current.scale.y = THREE.MathUtils.lerp(
        startScale.current[1],
        targetScale.current[1],
        localProgress
      );
      groupRef.current.scale.z = THREE.MathUtils.lerp(
        startScale.current[2],
        targetScale.current[2],
        localProgress
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Cabinet Body */}
      <mesh>
        <boxGeometry args={scale} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.1} />
      </mesh>
      {/* Cabinet Door */}
      <mesh position={[0, 0, scale[2] / 2 + 0.02]}>
        <boxGeometry args={[scale[0] - 0.1, scale[1] - 0.1, 0.05]} />
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.15} />
      </mesh>
      {/* Handle */}
      <mesh position={[scale[0] / 2 - 0.15, 0, scale[2] / 2 + 0.05]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3]} rotation={[0, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#c9a962" roughness={0.3} metalness={0.8} />
      </mesh>
    </group>
  );
};

const Island = ({ progress }) => {
  const groupRef = useRef();
  const targetPosition = useRef([0, 0, 0]);
  const startPosition = useRef([0, -2, 0]);

  useFrame(() => {
    if (groupRef.current) {
      const localProgress = Math.max(0, Math.min(1, (progress - 0.4) / 0.15));
      groupRef.current.position.y = THREE.MathUtils.lerp(
        startPosition.current[1],
        targetPosition.current[1],
        localProgress
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 1]}>
      {/* Island Base */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2.5, 1, 1.2]} />
        <meshStandardMaterial color="#2c3e50" roughness={0.7} metalness={0.1} />
      </mesh>
      {/* Worktop */}
      <mesh position={[0, 1.05, 0]}>
        <boxGeometry args={[2.7, 0.1, 1.4]} />
        <meshStandardMaterial
          color="#e8d5a3"
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
      {/* Stools */}
      {[[-0.8, 0, 0.8], [0.8, 0, 0.8]].map((pos, i) => (
        <group key={i} position={pos}>
          <mesh position={[0, 0.6, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 1.2]} />
            <meshStandardMaterial color="#1a2a3a" roughness={0.6} />
          </mesh>
          <mesh position={[0, 1.25, 0]}>
            <cylinderGeometry args={[0.25, 0.25, 0.1]} />
            <meshStandardMaterial color="#c9a962" roughness={0.4} metalness={0.6} />
          </mesh>
        </group>
      ))}
    </group>
  );
};

const PendantLight = ({ position, progress, delay = 0 }) => {
  const groupRef = useRef();
  const targetPosition = useRef(position);
  const startPosition = useRef([position[0], position[1] + 2, position[2]]);

  useFrame(() => {
    if (groupRef.current) {
      const localProgress = Math.max(0, Math.min(1, (progress - delay) / 0.1));
      groupRef.current.position.y = THREE.MathUtils.lerp(
        startPosition.current[1],
        targetPosition.current[1],
        localProgress
      );
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Cord */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 2]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      {/* Shade */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.2, 0.4, 32]} />
        <meshStandardMaterial color="#1a2a3a" roughness={0.4} metalness={0.6} />
      </mesh>
      {/* Light Bulb */}
      <mesh position={[0, -0.15, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial
          color="#fff5e6"
          emissive="#fff5e6"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};

const DecorativeItems = ({ progress }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      const localProgress = Math.max(0, Math.min(1, (progress - 0.7) / 0.15));
      groupRef.current.visible = localProgress > 0.5;
      groupRef.current.scale.setScalar(localProgress);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Plant */}
      <group position={[2, 0.5, -4]}>
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.2, 0.15, 0.6]} />
          <meshStandardMaterial color="#8b7355" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.7, 0]}>
          <coneGeometry args={[0.3, 0.8, 8]} />
          <meshStandardMaterial color="#2d5a27" roughness={0.7} />
        </mesh>
      </group>
      {/* Fruit Bowl */}
      <group position={[0, 1.1, 1]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#c9a962" roughness={0.5} metalness={0.3} />
        </mesh>
        <mesh position={[0.15, 0.1, 0.05]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ff6b6b" roughness={0.6} />
        </mesh>
        <mesh position={[-0.1, 0.15, -0.05]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#ffd93d" roughness={0.6} />
        </mesh>
      </group>
    </group>
  );
};

// Main Scene Component
const KitchenScene = ({ progress, onMouseMove }) => {
  const cameraRef = useRef();
  const groupRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
      if (onMouseMove) onMouseMove(mouseRef.current);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [onMouseMove]);

  useFrame(() => {
    if (cameraRef.current && groupRef.current) {
      // Camera movement based on scroll progress
      const cameraProgress = Math.min(1, progress / 0.8);
      
      // Initial push in
      cameraRef.current.position.z = THREE.MathUtils.lerp(8, 5, cameraProgress);
      cameraRef.current.position.y = THREE.MathUtils.lerp(3, 2.5, cameraProgress);
      
      // Orbit effect in final stage
      if (progress > 0.8) {
        const orbitProgress = (progress - 0.8) / 0.2;
        cameraRef.current.position.x = THREE.MathUtils.lerp(0, 2, orbitProgress);
        cameraRef.current.position.y = THREE.MathUtils.lerp(2.5, 3, orbitProgress);
        cameraRef.current.lookAt(0, 1, 0);
      } else {
        cameraRef.current.lookAt(0, 1, 0);
      }

      // Subtle parallax on mouse move
      const parallaxX = mouseRef.current.x * 0.3;
      const parallaxY = mouseRef.current.y * 0.2;
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        parallaxX,
        0.05
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        parallaxY,
        0.05
      );
    }
  });

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 3, 8]} fov={50} />
      <group ref={groupRef}>
        <Room progress={progress} />
        
        {/* Base Cabinets */}
        <Cabinet position={[-3, 0.5, -4.5]} scale={[1.5, 2.2, 0.6]} color="#2c3e50" progress={progress} delay={0.1} />
        <Cabinet position={[-1, 0.5, -4.5]} scale={[1.5, 2.2, 0.6]} color="#2c3e50" progress={progress} delay={0.15} />
        <Cabinet position={[1, 0.5, -4.5]} scale={[1.5, 2.2, 0.6]} color="#2c3e50" progress={progress} delay={0.2} />
        <Cabinet position={[3, 0.5, -4.5]} scale={[1.5, 2.2, 0.6]} color="#2c3e50" progress={progress} delay={0.25} />
        
        {/* Wall Cabinets */}
        <Cabinet position={[-2, 3.5, -4.8]} scale={[1.2, 0.8, 0.4]} color="#ffffff" progress={progress} delay={0.3} />
        <Cabinet position={[0, 3.5, -4.8]} scale={[1.2, 0.8, 0.4]} color="#ffffff" progress={progress} delay={0.35} />
        <Cabinet position={[2, 3.5, -4.8]} scale={[1.2, 0.8, 0.4]} color="#ffffff" progress={progress} delay={0.4} />
        
        {/* Island */}
        <Island progress={progress} />
        
        {/* Pendant Lights */}
        <PendantLight position={[-1.5, 4.5, 0]} progress={progress} delay={0.5} />
        <PendantLight position={[1.5, 4.5, 0]} progress={progress} delay={0.55} />
        
        {/* Decorative Items */}
        <DecorativeItems progress={progress} />
        
        <ContactShadows position={[0, -0.49, 0]} opacity={0.5} scale={20} blur={2} far={5} />
      </group>
    </>
  );
};

// Loading Screen Component
const LoadingScreen = ({ progress, onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (progress >= 1 && !fadeOut) {
      setFadeOut(true);
      setTimeout(onComplete, 500);
    }
  }, [progress, fadeOut, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-primary-dark flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center text-white">
        <div className="w-20 h-20 mx-auto mb-6 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        <div className="font-heading text-2xl mb-2">Loading Experience</div>
        <div className="text-neutral-400">{Math.round(progress * 100)}%</div>
      </div>
    </div>
  );
};

// Progress Indicator
const ScrollProgress = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-200 z-50">
      <div
        className="h-full bg-accent transition-all duration-100 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
};

// Main Hero Scene Component
const HeroScene = () => {
  const [progress, setProgress] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [webglSupported, setWebglSupported] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);

  // Check for WebGL support and preferences
  useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
      } catch (e) {
        return false;
      }
    };

    setWebglSupported(checkWebGL());
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setIsMobile(window.innerWidth < 768);

    // Simulate loading
    const loadingInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 1) {
          clearInterval(loadingInterval);
          return 1;
        }
        return prev + 0.05;
      });
    }, 50);

    return () => clearInterval(loadingInterval);
  }, []);

  // Scroll-triggered animation using scroll event
  useEffect(() => {
    if (!webglSupported || prefersReducedMotion || isLoading) return;

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const rect = scrollContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = scrollContainer.offsetHeight;
      
      // Calculate progress based on scroll position
      const scrolled = -rect.top;
      const totalScroll = containerHeight - windowHeight;
      const newProgress = totalScroll > 0 ? Math.max(0, Math.min(1, scrolled / totalScroll)) : 0;
      
      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [webglSupported, prefersReducedMotion, isLoading]);

  // Fallback for reduced motion or no WebGL
  if (!webglSupported || prefersReducedMotion) {
    return (
      <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl overflow-hidden flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          <p className="text-primary-dark font-heading text-xl mb-2">
            Premium Kitchen Design
          </p>
          <p className="text-text-light text-sm">
            {prefersReducedMotion
              ? "Interactive 3D experience disabled for accessibility"
              : "3D experience not available on this device"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <LoadingScreen
          progress={loadingProgress}
          onComplete={() => setIsLoading(false)}
        />
      )}
      <ScrollProgress progress={progress} />
      <div
        ref={scrollContainerRef}
        className="relative w-full h-full min-h-[400px] md:min-h-[500px] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl overflow-hidden"
        style={{ height: isMobile ? "600px" : "1200px" }}
      >
        <div className="absolute inset-0">
          <Canvas
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
            performance={{ min: 0.5 }}
          >
            <Suspense fallback={null}>
              <Environment preset="apartment" />
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
              <KitchenScene progress={progress} />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
              />
            </Suspense>
          </Canvas>
        </div>

        {/* Text Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4 transition-opacity duration-500">
              <h2
                className={`font-heading text-2xl md:text-3xl font-bold text-primary-dark transition-all duration-500 ${
                  progress < 0.2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Design
              </h2>
              <h2
                className={`font-heading text-2xl md:text-3xl font-bold text-primary-dark transition-all duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                  progress >= 0.2 && progress < 0.5
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                Build
              </h2>
              <h2
                className={`font-heading text-2xl md:text-3xl font-bold text-primary-dark transition-all duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                  progress >= 0.5 && progress < 0.8
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                Finish
              </h2>
              <h2
                className={`font-heading text-2xl md:text-3xl font-bold text-primary-dark transition-all duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                  progress >= 0.8 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Enjoy
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroScene;
