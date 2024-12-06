import React from 'react'
import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import {useThree} from '@react-three/fiber'
import * as THREE from 'three'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Secondmesh() {
    const model = useGLTF('/mac.glb')
    const meshes = {}
    const tex = useTexture("/laptop5.jpg")
    tex.encoding = THREE.sRGBEncoding


    model.scene.traverse((child) => {
        meshes[child.name] = child
    })

    // Set initial rotation
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180)
    
    // Set material for matte surface
    meshes.matte.material = new THREE.MeshStandardMaterial({
        map: tex,
        emissiveMap: tex,
        emissive: new THREE.Color(1, 1, 1),
        emissiveIntensity: 0
    });
   
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Setup scroll-based animation
    useGSAP(() => {
        gsap.to(meshes.screen.rotation, {
            x: THREE.MathUtils.degToRad(90),
            duration: 5,
            // delay:1,
            scrollTrigger: {
                trigger: ".social",
                start: "top top",
                end: "bottom bottom", // Changed to bottom bottom for full scroll range
                scrub: 1.5, // Added smoothing
                onUpdate: (self) => {
                    // Smoothly interpolate between 180 and 90 degrees based on scroll progress
                    const progress = self.progress;
                    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - progress.offset * 90)
                   // meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - (progress * 90)/15);
                }
            }
        });
    });
    const {viewport} = useThree()
    const responsive= viewport.width/18
    const ismoblie= window.innerWidth<668
    const middle = window.innerWidth<800

    // scale={[ismoblie?0.4*responsive:0.9,ismoblie?0.4*responsive:0.9,ismoblie?0.4*responsive:0.9]}
    // {[middle?-2:-18,middle?-11: -14,middle?2: 30]} 
    return (
        <group className='group' position={[middle?-2:-18,middle?-11: -14,middle?2: 30]}  scale={[ismoblie?0.4*responsive:0.9,ismoblie?0.4*responsive:0.9,ismoblie?0.4*responsive:0.9]} >
            <primitive object={model.scene} onpointmove />
        </group>
    )
}

export default Secondmesh
