import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import fragmentShader from './fragment.glsl?raw';
import vertexShader from './vertex.glsl?raw';

function WaveMaterial() {
    const material = useRef()
    const scale = 7;

    useFrame(({ clock }) => {
        material.current.uniforms.uTime.value = clock.elapsedTime
        // Use actual window dimensions instead of canvas size
        material.current.uniforms.uResolution.value.set(
            window.innerWidth/ scale, 
            window.innerHeight/ scale
        )
    })

    return (
        <shaderMaterial
            ref={material}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{
                uTime: { value: 0 },
                uResolution: { value: new THREE.Vector2(window.innerWidth/100, window.innerHeight) },
            }}
        />
    )
}

function FullscreenPlane() {
    const { viewport } = useThree()

    return (
        <mesh scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry args={[1, 1]} />
            <WaveMaterial/>
        </mesh>
    )
}

function LinePattern({ className, style}) {
    return (
        <div className={className} style={style}>
        <Canvas 
            orthographic
            camera={{ zoom: 1, position: [0, 0, 1] }}
        >
            <FullscreenPlane/>
        </Canvas>
        </div>
    )
}

export default LinePattern;