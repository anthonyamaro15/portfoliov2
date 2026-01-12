"use client";

import { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import type { RootState } from "@react-three/fiber";
import * as THREE from "three";

// Component to force resize after mounting
function ResizeHandler() {
  const { gl, invalidate } = useThree();

  useEffect(() => {
    // Force resize after a short delay to ensure proper dimensions
    const timeout = setTimeout(() => {
      gl.setSize(gl.domElement.clientWidth, gl.domElement.clientHeight);
      invalidate();
    }, 100);

    return () => clearTimeout(timeout);
  }, [gl, invalidate]);

  return null;
}

// Simple 3D noise function for vertex displacement
function noise3D(x: number, y: number, z: number, time: number): number {
  const scale = 0.8;
  return (
    Math.sin(x * scale + time * 0.5) *
    Math.cos(y * scale + time * 0.3) *
    Math.sin(z * scale + time * 0.4) *
    0.5 +
    Math.sin(x * scale * 2 + time * 0.2) * 0.25 +
    Math.cos(y * scale * 1.5 + time * 0.4) * 0.25
  );
}

interface MorphingShapeProps {
  position?: [number, number, number];
  scale?: number;
  color?: string;
  wireframe?: boolean;
  morphSpeed?: number;
  morphIntensity?: number;
}

function MorphingIcosahedron({
  position = [0, 0, 0],
  scale = 1,
  color = "#ffffff",
  wireframe = true,
  morphSpeed = 1,
  morphIntensity = 0.3,
}: MorphingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometryRef = useRef<THREE.IcosahedronGeometry>(null);

  // Store original vertex positions
  const originalPositions = useMemo(() => {
    const geometry = new THREE.IcosahedronGeometry(1, 2);
    return new Float32Array(geometry.attributes.position.array);
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !geometryRef.current) return;

    const time = state.clock.elapsedTime * morphSpeed;
    const positions = geometryRef.current.attributes.position.array as Float32Array;

    // Morph each vertex using noise
    for (let i = 0; i < positions.length; i += 3) {
      const ox = originalPositions[i];
      const oy = originalPositions[i + 1];
      const oz = originalPositions[i + 2];

      // Calculate displacement using 3D noise
      const displacement = noise3D(ox * 2, oy * 2, oz * 2, time) * morphIntensity;

      // Apply displacement along the vertex normal (radially outward for sphere-like shapes)
      const length = Math.sqrt(ox * ox + oy * oy + oz * oz);
      const nx = ox / length;
      const ny = oy / length;
      const nz = oz / length;

      positions[i] = ox + nx * displacement;
      positions[i + 1] = oy + ny * displacement;
      positions[i + 2] = oz + nz * displacement;
    }

    geometryRef.current.attributes.position.needsUpdate = true;
    geometryRef.current.computeVertexNormals();

    // Slow rotation
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry ref={geometryRef} args={[1, 2]} />
      <meshBasicMaterial
        color={color}
        wireframe={wireframe}
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

function MorphingTorus({
  position = [0, 0, 0],
  scale = 1,
  color = "#ffffff",
  wireframe = true,
  morphSpeed = 1,
  morphIntensity = 0.2,
}: MorphingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometryRef = useRef<THREE.TorusGeometry>(null);

  const originalPositions = useMemo(() => {
    const geometry = new THREE.TorusGeometry(1, 0.4, 16, 32);
    return new Float32Array(geometry.attributes.position.array);
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !geometryRef.current) return;

    const time = state.clock.elapsedTime * morphSpeed;
    const positions = geometryRef.current.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      const ox = originalPositions[i];
      const oy = originalPositions[i + 1];
      const oz = originalPositions[i + 2];

      const displacement = noise3D(ox * 3, oy * 3, oz * 3, time * 0.8) * morphIntensity;

      positions[i] = ox + displacement * 0.5;
      positions[i + 1] = oy + displacement;
      positions[i + 2] = oz + displacement * 0.5;
    }

    geometryRef.current.attributes.position.needsUpdate = true;

    // Slow rotation
    meshRef.current.rotation.x += 0.001;
    meshRef.current.rotation.z += 0.002;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry ref={geometryRef} args={[1, 0.4, 16, 32]} />
      <meshBasicMaterial
        color={color}
        wireframe={wireframe}
        transparent
        opacity={0.1}
      />
    </mesh>
  );
}

function MorphingOctahedron({
  position = [0, 0, 0],
  scale = 1,
  color = "#ffffff",
  wireframe = true,
  morphSpeed = 1,
  morphIntensity = 0.25,
}: MorphingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometryRef = useRef<THREE.OctahedronGeometry>(null);

  const originalPositions = useMemo(() => {
    const geometry = new THREE.OctahedronGeometry(1, 1);
    return new Float32Array(geometry.attributes.position.array);
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !geometryRef.current) return;

    const time = state.clock.elapsedTime * morphSpeed;
    const positions = geometryRef.current.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      const ox = originalPositions[i];
      const oy = originalPositions[i + 1];
      const oz = originalPositions[i + 2];

      const displacement = noise3D(ox * 2.5, oy * 2.5, oz * 2.5, time * 1.2) * morphIntensity;

      const length = Math.sqrt(ox * ox + oy * oy + oz * oz) || 1;
      const nx = ox / length;
      const ny = oy / length;
      const nz = oz / length;

      positions[i] = ox + nx * displacement;
      positions[i + 1] = oy + ny * displacement;
      positions[i + 2] = oz + nz * displacement;
    }

    geometryRef.current.attributes.position.needsUpdate = true;

    meshRef.current.rotation.y += 0.004;
    meshRef.current.rotation.z += 0.002;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <octahedronGeometry ref={geometryRef} args={[1, 1]} />
      <meshBasicMaterial
        color={color}
        wireframe={wireframe}
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}

// ============ NEW SHAPES ============

// Point Cloud Sphere - dots forming a sphere
function PointSphere({
  position = [0, 0, 0],
  scale = 1,
  color = "#ffffff",
}: MorphingShapeProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, originalPositions] = useMemo(() => {
    const count = 800;
    const positions = new Float32Array(count * 3);
    const original = new Float32Array(count * 3);

    // Fibonacci sphere distribution for even spacing
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const i3 = i * 3;
      positions[i3] = Math.cos(theta) * radius;
      positions[i3 + 1] = y;
      positions[i3 + 2] = Math.sin(theta) * radius;

      original[i3] = positions[i3];
      original[i3 + 1] = positions[i3 + 1];
      original[i3 + 2] = positions[i3 + 2];
    }
    return [positions, original];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.elapsedTime;
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < pos.length; i += 3) {
      const ox = originalPositions[i];
      const oy = originalPositions[i + 1];
      const oz = originalPositions[i + 2];

      // Pulsing effect
      const pulse = 1 + Math.sin(time * 0.5 + ox * 2 + oy * 2) * 0.1;
      pos[i] = ox * pulse;
      pos[i + 1] = oy * pulse;
      pos[i + 2] = oz * pulse;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y += 0.002;
  });

  return (
    <points ref={pointsRef} position={position} scale={scale}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={positions.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color={color} transparent opacity={0.6} sizeAttenuation depthWrite={false} />
    </points>
  );
}

// Point Cloud Cube - dots forming cube edges
function PointCube({
  position = [0, 0, 0],
  scale = 1,
  color = "#ffffff",
}: MorphingShapeProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, originalPositions] = useMemo(() => {
    const pointsPerEdge = 20;
    const edges: [number, number, number, number, number, number][] = [
      // Bottom face edges
      [-1, -1, -1, 1, -1, -1], [-1, -1, -1, -1, -1, 1], [1, -1, -1, 1, -1, 1], [-1, -1, 1, 1, -1, 1],
      // Top face edges
      [-1, 1, -1, 1, 1, -1], [-1, 1, -1, -1, 1, 1], [1, 1, -1, 1, 1, 1], [-1, 1, 1, 1, 1, 1],
      // Vertical edges
      [-1, -1, -1, -1, 1, -1], [1, -1, -1, 1, 1, -1], [-1, -1, 1, -1, 1, 1], [1, -1, 1, 1, 1, 1],
    ];

    const count = edges.length * pointsPerEdge;
    const positions = new Float32Array(count * 3);
    const original = new Float32Array(count * 3);

    let idx = 0;
    for (const edge of edges) {
      for (let i = 0; i < pointsPerEdge; i++) {
        const t = i / (pointsPerEdge - 1);
        const i3 = idx * 3;
        positions[i3] = edge[0] + (edge[3] - edge[0]) * t;
        positions[i3 + 1] = edge[1] + (edge[4] - edge[1]) * t;
        positions[i3 + 2] = edge[2] + (edge[5] - edge[2]) * t;
        original[i3] = positions[i3];
        original[i3 + 1] = positions[i3 + 1];
        original[i3 + 2] = positions[i3 + 2];
        idx++;
      }
    }
    return [positions, original];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.elapsedTime;
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < pos.length; i += 3) {
      const ox = originalPositions[i];
      const oy = originalPositions[i + 1];
      const oz = originalPositions[i + 2];

      // Breathing effect
      const breathe = 1 + Math.sin(time * 0.8) * 0.05;
      pos[i] = ox * breathe;
      pos[i + 1] = oy * breathe;
      pos[i + 2] = oz * breathe;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.x += 0.003;
    pointsRef.current.rotation.y += 0.002;
  });

  return (
    <points ref={pointsRef} position={position} scale={scale}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={positions.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color={color} transparent opacity={0.5} sizeAttenuation depthWrite={false} />
    </points>
  );
}

// Torus Knot - twisted mathematical shape
function TorusKnot({
  position = [0, 0, 0],
  scale = 1,
  color = "#ffffff",
  morphSpeed = 1,
  morphIntensity = 0.15,
}: MorphingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometryRef = useRef<THREE.TorusKnotGeometry>(null);

  const originalPositions = useMemo(() => {
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    return new Float32Array(geometry.attributes.position.array);
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !geometryRef.current) return;
    const time = state.clock.elapsedTime * morphSpeed;
    const positions = geometryRef.current.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      const ox = originalPositions[i];
      const oy = originalPositions[i + 1];
      const oz = originalPositions[i + 2];
      const displacement = noise3D(ox * 2, oy * 2, oz * 2, time) * morphIntensity;
      positions[i] = ox + displacement * 0.3;
      positions[i + 1] = oy + displacement * 0.3;
      positions[i + 2] = oz + displacement * 0.3;
    }

    geometryRef.current.attributes.position.needsUpdate = true;
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusKnotGeometry ref={geometryRef} args={[1, 0.3, 100, 16]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.12} />
    </mesh>
  );
}

// DNA Helix - double helix spiral made of dots
function DNAHelix({
  position = [0, 0, 0],
  scale = 1,
  color = "#ffffff",
}: MorphingShapeProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3 * 2); // Two strands

    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 4;
      const y = (i / count) * 4 - 2;
      const radius = 0.5;

      // First strand
      const i3 = i * 3;
      positions[i3] = Math.cos(t) * radius;
      positions[i3 + 1] = y;
      positions[i3 + 2] = Math.sin(t) * radius;

      // Second strand (offset by PI)
      const i3b = (count + i) * 3;
      positions[i3b] = Math.cos(t + Math.PI) * radius;
      positions[i3b + 1] = y;
      positions[i3b + 2] = Math.sin(t + Math.PI) * radius;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <points ref={pointsRef} position={position} scale={scale}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={positions.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color={color} transparent opacity={0.6} sizeAttenuation depthWrite={false} />
    </points>
  );
}

// Matrix Grid - floating grid plane with wave animation
function MatrixGrid({
  position = [0, 0, 0],
  scale = 1,
  color = "#ffffff",
}: MorphingShapeProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, originalPositions] = useMemo(() => {
    const gridSize = 20;
    const spacing = 0.3;
    const count = gridSize * gridSize;
    const positions = new Float32Array(count * 3);
    const original = new Float32Array(count * 3);

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const idx = (i * gridSize + j) * 3;
        positions[idx] = (i - gridSize / 2) * spacing;
        positions[idx + 1] = 0;
        positions[idx + 2] = (j - gridSize / 2) * spacing;
        original[idx] = positions[idx];
        original[idx + 1] = positions[idx + 1];
        original[idx + 2] = positions[idx + 2];
      }
    }
    return [positions, original];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.elapsedTime;
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < pos.length; i += 3) {
      const ox = originalPositions[i];
      const oz = originalPositions[i + 2];
      // Wave effect
      pos[i + 1] = Math.sin(ox * 2 + time) * 0.2 + Math.cos(oz * 2 + time * 0.8) * 0.2;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.x = -0.5;
  });

  return (
    <points ref={pointsRef} position={position} scale={scale}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={positions.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color={color} transparent opacity={0.4} sizeAttenuation depthWrite={false} />
    </points>
  );
}

// Dodecahedron - 12-faced polyhedron
function MorphingDodecahedron({
  position = [0, 0, 0],
  scale = 1,
  color = "#ffffff",
  morphSpeed = 1,
  morphIntensity = 0.25,
}: MorphingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometryRef = useRef<THREE.DodecahedronGeometry>(null);

  const originalPositions = useMemo(() => {
    const geometry = new THREE.DodecahedronGeometry(1, 0);
    return new Float32Array(geometry.attributes.position.array);
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !geometryRef.current) return;
    const time = state.clock.elapsedTime * morphSpeed;
    const positions = geometryRef.current.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      const ox = originalPositions[i];
      const oy = originalPositions[i + 1];
      const oz = originalPositions[i + 2];
      const displacement = noise3D(ox * 2, oy * 2, oz * 2, time) * morphIntensity;
      const length = Math.sqrt(ox * ox + oy * oy + oz * oz) || 1;
      positions[i] = ox + (ox / length) * displacement;
      positions[i + 1] = oy + (oy / length) * displacement;
      positions[i + 2] = oz + (oz / length) * displacement;
    }

    geometryRef.current.attributes.position.needsUpdate = true;
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <dodecahedronGeometry ref={geometryRef} args={[1, 0]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.15} />
    </mesh>
  );
}

// ============ EXPORTS ============

export type ShapeType =
  | "icosahedron"
  | "torus"
  | "octahedron"
  | "pointSphere"
  | "pointCube"
  | "torusKnot"
  | "dnaHelix"
  | "matrixGrid"
  | "dodecahedron";

interface MorphingGeometryProps {
  className?: string;
  shapes?: ShapeType[];
  showAll?: boolean;
}

export function MorphingGeometry({
  className,
  shapes = ["icosahedron"],
  showAll = false,
}: MorphingGeometryProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Delay mounting with setTimeout to ensure DOM is fully ready
  useEffect(() => {
    // Use setTimeout instead of RAF for more reliable timing
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

  // Handle Canvas creation - force initial render
  const handleCreated = useCallback((state: RootState) => {
    // Force immediate render
    state.gl.render(state.scene, state.camera);
    // Trigger resize after creation
    state.gl.setSize(
      state.gl.domElement.clientWidth,
      state.gl.domElement.clientHeight
    );
  }, []);

  // Original shapes
  const showIcosahedron = showAll || shapes.includes("icosahedron");
  const showTorus = showAll || shapes.includes("torus");
  const showOctahedron = showAll || shapes.includes("octahedron");

  // New shapes
  const showPointSphere = shapes.includes("pointSphere");
  const showPointCube = shapes.includes("pointCube");
  const showTorusKnot = shapes.includes("torusKnot");
  const showDNAHelix = shapes.includes("dnaHelix");
  const showMatrixGrid = shapes.includes("matrixGrid");
  const showDodecahedron = shapes.includes("dodecahedron");

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        minHeight: "90vh",
      }}
    >
      {isMounted && (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          style={{
            background: "transparent",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
          dpr={[1, 1.5]}
          frameloop="always"
          resize={{ scroll: false, debounce: { scroll: 0, resize: 0 } }}
          onCreated={handleCreated}
        >
          <ResizeHandler />
          {/* Original wireframe shapes */}
          {showIcosahedron && (
            <MorphingIcosahedron position={[0, 0, 0]} scale={1.8} morphSpeed={0.6} morphIntensity={0.35} />
          )}
          {showTorus && (
            <MorphingTorus position={showAll ? [-3, 1.5, -2] : [0, 0, 0]} scale={showAll ? 0.8 : 1.5} morphSpeed={0.8} morphIntensity={0.15} />
          )}
          {showOctahedron && (
            <MorphingOctahedron position={showAll ? [2.5, -1, -1] : [0, 0, 0]} scale={showAll ? 0.6 : 1.8} morphSpeed={1} morphIntensity={0.2} />
          )}

          {/* New shapes */}
          {showPointSphere && <PointSphere position={[0, 0, 0]} scale={2} />}
          {showPointCube && <PointCube position={[0, 0, 0]} scale={1.5} />}
          {showTorusKnot && <TorusKnot position={[0, 0, 0]} scale={1.5} morphSpeed={0.5} morphIntensity={0.1} />}
          {showDNAHelix && <DNAHelix position={[0, 0, 0]} scale={1.2} />}
          {showMatrixGrid && <MatrixGrid position={[0, -0.5, 0]} scale={2} />}
          {showDodecahedron && <MorphingDodecahedron position={[0, 0, 0]} scale={1.8} morphSpeed={0.6} morphIntensity={0.3} />}

          <ambientLight intensity={0.3} />
        </Canvas>
      )}
    </div>
  );
}

export default MorphingGeometry;
