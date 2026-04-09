"use client";

import Particles from "react-tsparticles";

export default function ParticlesBg() {
  return (
    <Particles
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 50 },
          size: { value: 2 },
          move: { speed: 1 },
          links: { enable: true },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}