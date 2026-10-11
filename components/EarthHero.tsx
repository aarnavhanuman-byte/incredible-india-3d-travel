"use client";

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

function EarthPlanet() {
  const meshRef = useRef<THREE.Mesh>(null);

  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    if (!ctx) return null;

    const ocean = ctx.createLinearGradient(0, 0, 0, canvas.height);
    ocean.addColorStop(0, '#0a3d7c');
    ocean.addColorStop(0.5, '#0b2f5f');
    ocean.addColorStop(1, '#071d3b');
    ctx.fillStyle = ocean;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#1d8c5d';
    ctx.beginPath();
    ctx.moveTo(300, 260);
    ctx.bezierCurveTo(360, 200, 500, 210, 560, 270);
    ctx.bezierCurveTo(610, 300, 600, 365, 520, 390);
    ctx.bezierCurveTo(445, 418, 335, 410, 290, 360);
    ctx.bezierCurveTo(255, 320, 262, 285, 300, 260);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(720, 240);
    ctx.bezierCurveTo(800, 190, 960, 220, 1010, 300);
    ctx.bezierCurveTo(1060, 360, 1010, 415, 930, 422);
    ctx.bezierCurveTo(840, 430, 730, 390, 690, 330);
    ctx.bezierCurveTo(678, 285, 690, 258, 720, 240);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(1110, 280);
    ctx.bezierCurveTo(1160, 240, 1225, 245, 1255, 290);
    ctx.bezierCurveTo(1278, 328, 1250, 350, 1190, 352);
    ctx.bezierCurveTo(1130, 355, 1085, 325, 1110, 280);
    ctx.fill();

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.elapsedTime * 0.14;
      meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshStandardMaterial
          map={texture || undefined}
          emissive="#0d3d6f"
          emissiveIntensity={0.6}
          roughness={0.9}
          metalness={0.08}
        />
      </mesh>
      <mesh scale={1.08}>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshBasicMaterial color="#67d5ff" transparent opacity={0.06} side={THREE.BackSide} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <ringGeometry args={[2.7, 2.82, 128]} />
        <meshBasicMaterial color="#f4c76a" transparent opacity={0.24} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function IndiaPoints() {
  const points = [
    [0.7, 0.4, 1.2],
    [0.9, 0.15, 1.45],
    [1.15, -0.05, 1.35],
    [0.55, -0.5, 1.5],
    [0.25, 0.7, 1.25],
  ];

  return (
    <group>
      {points.map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshBasicMaterial color="#f4c76a" />
        </mesh>
      ))}
    </group>
  );
}

function GlobeScene() {
  return (
    <>
      <color attach="background" args={['#020914']} />
      <fog attach="fog" args={['#020914', 7, 16]} />
      <ambientLight intensity={0.8} color="#d7edff" />
      <directionalLight position={[4, 5, 6]} intensity={2.3} color="#fff3d2" />
      <pointLight position={[-3, -2, 4]} intensity={12} color="#7dc4ff" />
      <Stars radius={30} depth={18} count={2000} factor={4} saturation={0} fade speed={1} />
      <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.5}>
        <EarthPlanet />
      </Float>
      <IndiaPoints />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
    </>
  );
}

export default function EarthHero() {
  return (
    <section className="relative isolate h-[760px] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,199,106,0.18),transparent_35%)]" />
      <Canvas camera={{ position: [0, 0, 7], fov: 42 }}>
        <GlobeScene />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_55%,rgba(2,9,20,0.7)_100%)]" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.44em] text-[#f4c76a]">Sacred journeys • Heritage • Wonder</p>
          <h1 className="font-display text-5xl leading-[0.96] text-white md:text-7xl lg:text-[6rem]">
            Discover the Soul of
            <span className="block text-[#f4c76a]">Incredible India.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200 md:text-xl">
            Sacred temples. Timeless heritage. Unforgettable journeys.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="btn-primary">Explore India</button>
            <button className="btn-secondary">View packages</button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center text-[#eaeff7]">
          <span className="mb-2 text-[10px] uppercase tracking-[0.32em] text-slate-300">Begin the journey</span>
          <span className="block h-12 w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
