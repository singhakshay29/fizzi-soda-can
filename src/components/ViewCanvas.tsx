"use client";

import React from "react";
import { Canvas } from "@react-three/fiber"

type Props = {}

export default function ViewCanvas({}: Props) {
  return (
    <Canvas>
        <mesh>
          <boxGeometry/>
          <meshStandardMaterial color={"hotpink"}/>  
        </mesh>
    </Canvas>
  )
}