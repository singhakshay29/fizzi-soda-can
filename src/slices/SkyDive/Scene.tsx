"use client"
import FloatingCan from '@/components/FloatingCan';
import React, { useRef } from 'react'
import * as THREE from 'three'

type Props = {}

const Scene = (props: Props) => {
    const groupRef=useRef<THREE.Group>(null);
    const canRef=useRef<THREE.Group>(null);
    const cloud1Ref=useRef<THREE.Group>(null);
    const cloud2Ref=useRef<THREE.Group>(null);
    const cloudsRef=useRef<THREE.Group>(null);
    const wordsRef=useRef<THREE.Group>(null);
  return (
    <group ref={groupRef}>
        <FloatingCan ref={canRef} ></FloatingCan>
    </group>
  )
}

export default Scene