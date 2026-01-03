import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars, PerspectiveCamera } from '@react-three/drei';

function AnimatedShape(props) {
    const mesh = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        mesh.current.rotation.x = t * 0.2;
        mesh.current.rotation.y = t * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh ref={mesh} {...props} scale={1.8}>
                <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                <MeshDistortMaterial
                    color="#764ABC" // Vivid Violet
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.1}
                    metalness={0.9}
                />
            </mesh>
        </Float>
    );
}

const Hero3D = () => {
    return (
        <div className="absolute inset-0 z-0 h-screen w-full pointer-events-none">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#d8b4fe" />
                <spotLight position={[-10, -10, -10]} angle={0.3} penumbra={1} intensity={1} color="#4c1d95" />

                <AnimatedShape position={[3, 0, 0]} />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
