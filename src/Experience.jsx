import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { DepthOfField, Bloom, Glitch, EffectComposer, ToneMapping, Vignette, Noise } from '@react-three/postprocessing'
import { GlitchMode } from 'postprocessing'
import { BlendFunction } from 'postprocessing'
import Drunk from './Drunk.js'
import { useRef } from 'react'
import { useControls } from 'leva'

export default function Experience() {
    const drunkRef = useRef()
    const drunkProps = useControls('Drunk Effect', {
        frequency: { value: 2, min: 1, max: 20 },
        amplitude: { value: 0.1, min: 0, max: 1 }
    })
    return <>
        <color args={['#ffffff']} attach={"background"} />
        <EffectComposer
            disableNormalPass
            multisampling={0}
        >
            {/* <Vignette
                offset={0.3}
                darkness={0.9}
                blendFunction={BlendFunction.NORMAL}
            />
            
            <Glitch
                delay={[0.5,1]}
                duration={[0.1,0.3]}
                strength={[0.2,0.4]}
                mode={GlitchMode.SPORADIC}
                columns={0.01}
            /> */}
            {/* <Noise

            blendFunction={BlendFunction.SOFT_LIGHT}
            /> */}
            {/* <Bloom
                mipmapBlur
                luminanceThreshold={1.1}
                
            /> */}
            {/* <DepthOfField
        focusDistance={0.025}
        focalLength={0.025}
        bokehScale={6}
            /> */}
            <Drunk
                ref={drunkRef}
                {...drunkProps}
            />
            <ToneMapping />
        </EffectComposer>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />

        <mesh castShadow position-x={- 2}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow position-x={2} scale={1.5}>
            <boxGeometry />
            <meshStandardMaterial color="green" />
        </mesh>

        <mesh receiveShadow position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}