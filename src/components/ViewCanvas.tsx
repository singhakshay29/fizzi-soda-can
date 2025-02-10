"use client";

import React from "react";
import { Canvas } from "@react-three/fiber"
import { View } from "@react-three/drei";

type Props = {}

export default function ViewCanvas({}: Props) {
  return (
    <Canvas style={{
      position:'fixed',
      top:0,
      left:'50%',
      overflow:'hidden',
      zIndex:30,
      pointerEvents:'none',
      transform:'translateX(-50%)'
    }}
    shadows
    dpr={[1,1.5]}
    gl={{antialias:true}}
    camera={{fov:30}}
    > 
   <View.Port/>
    </Canvas>
  )
}