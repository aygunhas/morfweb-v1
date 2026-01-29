"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";

// Lerp (Linear Interpolation) fonksiyonu - yumuşak geçiş için
function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

interface RotatingIcosahedronProps {
  position: [number, number, number];
  baseScale: number;
  rotationSpeedX: number;
  rotationSpeedY: number;
  scrollScale: number;
}

function RotatingIcosahedron({
  position,
  baseScale,
  rotationSpeedX,
  rotationSpeedY,
  scrollScale,
}: RotatingIcosahedronProps) {
  const meshRef = React.useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const currentScale = React.useRef(baseScale);
  const targetScale = React.useRef(baseScale);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    targetScale.current = baseScale * scrollScale;
  }, [baseScale, scrollScale]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Yumuşak scale geçişi (lerp)
      currentScale.current = lerp(
        currentScale.current,
        targetScale.current,
        0.05
      );
      meshRef.current.scale.setScalar(currentScale.current);

      // Çok yavaş, hipnotik döndürme
      meshRef.current.rotation.x += delta * rotationSpeedX;
      meshRef.current.rotation.y += delta * rotationSpeedY;
    }
  });

  if (!mounted) {
    return null;
  }

  // Light mode: açık gri, Dark mode: açık gri (biraz daha belirgin)
  const wireframeColor = theme === "dark" ? "#a1a1aa" : "#a1a1aa"; // zinc-400 : zinc-400
  const wireframeOpacity = theme === "dark" ? 0.35 : 0.3; // Dark mode'da biraz daha belirgin

  return (
    <Icosahedron ref={meshRef} args={[1, 0]} position={position}>
      <meshStandardMaterial
        wireframe
        color={wireframeColor}
        opacity={wireframeOpacity}
        transparent
      />
    </Icosahedron>
  );
}

interface Hero3DBackgroundProps {
  onReady?: (ready: boolean) => void;
}

export function Hero3DBackground({ onReady }: Hero3DBackgroundProps = {}) {
  const [mounted, setMounted] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const scrollProgressRef = React.useRef(0);
  const targetScrollProgress = React.useRef(0);

  React.useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      // Hero section'ın yüksekliğini hesapla
      const heroHeight = window.innerHeight - 64; // Navbar yüksekliği düşülüyor
      const scrollY = window.scrollY;
      
      // Scroll progress: 0 (en üstte) -> 1 (hero section'ın sonunda)
      const progress = Math.min(scrollY / heroHeight, 1);
      targetScrollProgress.current = progress;
    };

    // Smooth scroll progress update
    const updateScrollProgress = () => {
      scrollProgressRef.current = lerp(
        scrollProgressRef.current,
        targetScrollProgress.current,
        0.1
      );
      setScrollProgress(scrollProgressRef.current);
      requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  // Scroll'a göre scale: 1 (en üstte) -> 0.3 (aşağı kaydırınca)
  const scrollScale = 1 - scrollProgress * 0.7;

  return (
    <div className={`absolute inset-0 -z-10 h-full w-full transition-opacity duration-[2000ms] ease-in-out ${isReady ? "opacity-100" : "opacity-0"}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={() => {
          setIsReady(true);
          onReady?.(true);
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />

        {/* Şekil 1 - Ana (Büyük, sol üst köşe) */}
        <RotatingIcosahedron
          position={[-4, 3, -1]}
          baseScale={3}
          rotationSpeedX={0.1}
          rotationSpeedY={0.15}
          scrollScale={scrollScale}
        />

        {/* Şekil 2 - Orta (Orta boy, sağ alt köşe) */}
        <RotatingIcosahedron
          position={[4, -3, -2]}
          baseScale={2}
          rotationSpeedX={-0.08}
          rotationSpeedY={0.12}
          scrollScale={scrollScale}
        />

        {/* Şekil 3 - Küçük (Küçük boy, sağ üst, uzakta) */}
        <RotatingIcosahedron
          position={[5, 2.5, 2]}
          baseScale={1.5}
          rotationSpeedX={0.12}
          rotationSpeedY={-0.1}
          scrollScale={scrollScale}
        />
      </Canvas>
    </div>
  );
}
