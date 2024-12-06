import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

function Meshcomponent() {
    const model = useGLTF('./motorbike.glb')
    const ref = useRef()
    const [rotation, setRotation] = useState([0, 0, 0])

    useFrame((state, delta) => {
        ref.current.rotation.y += delta
    })

    const handlePointerMove = (e) => {
        const x = (e.point.x * Math.PI) / 10
        const y = (e.point.y * Math.PI) / 10
        setRotation([y, x, 0])
    }

    const {viewport} = useThree()
    //console.log(viewport);

    const responsive= viewport.width/6
    const isMobile= window.innerWidth < 786
    
    //scale={[1*responsive,1*responsive,1*responsive]}
    //position={[1.5, -0.5, 1]} 
    return (
        <group rotation={[0,1.3,0.3]}  >
            <mesh
                ref={ref}
                onPointerMove={handlePointerMove}
                rotation={rotation}
                position={[isMobile?-3.5 :1.5, isMobile? 0.5: -0.5, 1]} // Moved to the left of the screen
            >
                <sphereGeometry args={[1,15,15]} />
                <meshStandardMaterial  wireframe   color="white"/>
            </mesh>
        </group>
    )
}

export default Meshcomponent
