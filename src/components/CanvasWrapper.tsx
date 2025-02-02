"use client";

import React from "react";
import dynamic from "next/dynamic";

const ViewCanvas = dynamic(() => import("./ViewCanvas"), { ssr: false });

export default function CanvasWrapper() {
  return <ViewCanvas />;
}