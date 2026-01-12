"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface ParticlesProps {
  count?: number;
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
}

function Particles({ count = 500, mousePosition }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  // Generate particle positions
  const [positions, velocities, originalPositions] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spread particles across a wider area
      positions[i3] = (Math.random() - 0.5) * 15;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 8;

      // Store original positions for return animation
      originalPositions[i3] = positions[i3];
      originalPositions[i3 + 1] = positions[i3 + 1];
      originalPositions[i3 + 2] = positions[i3 + 2];

      // Random velocities for floating effect
      velocities[i3] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.005;
    }

    return [positions, velocities, originalPositions];
  }, [count]);

  // Generate random sizes for particles
  const sizes = useMemo(() => {
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      sizes[i] = Math.random() * 2 + 0.5;
    }
    return sizes;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;

    const positions = mesh.current.geometry.attributes.position
      .array as Float32Array;
    const time = state.clock.elapsedTime;

    // Convert mouse position to 3D space
    const mouseX = (mousePosition.current.x - 0.5) * viewport.width * 1.5;
    const mouseY = (mousePosition.current.y - 0.5) * viewport.height * 1.5;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Gentle floating animation
      positions[i3] +=
        Math.sin(time * 0.3 + i * 0.1) * 0.002 + velocities[i3] * 0.5;
      positions[i3 + 1] +=
        Math.cos(time * 0.2 + i * 0.1) * 0.002 + velocities[i3 + 1] * 0.5;
      positions[i3 + 2] += Math.sin(time * 0.1 + i * 0.05) * 0.001;

      // Mouse repulsion effect
      const dx = positions[i3] - mouseX;
      const dy = positions[i3 + 1] + mouseY; // Invert Y
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 3;

      if (distance < maxDistance) {
        const force = (1 - distance / maxDistance) * 0.02;
        positions[i3] += dx * force;
        positions[i3 + 1] += dy * force;
      }

      // Slowly return to original position
      positions[i3] += (originalPositions[i3] - positions[i3]) * 0.01;
      positions[i3 + 1] += (originalPositions[i3 + 1] - positions[i3 + 1]) * 0.01;
      positions[i3 + 2] += (originalPositions[i3 + 2] - positions[i3 + 2]) * 0.01;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
          count={count}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}


interface ParticleFieldProps {
  className?: string;
}

export function ParticleField({ className }: ParticleFieldProps) {
  const mousePosition = useRef({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mousePosition.current = {
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Particles count={600} mousePosition={mousePosition} />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
}

export default ParticleField;
