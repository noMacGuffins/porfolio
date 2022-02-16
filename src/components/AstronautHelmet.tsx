import React from "react";
import { useGLTF } from "@react-three/drei";

export const AstronautHelmet = () => {
	const { scene } = useGLTF("static/models/AstronautHelmet/scene.gltf");

	return <primitive object={scene} />;
};
