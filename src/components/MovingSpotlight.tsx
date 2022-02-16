import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { Vector3 } from "three";

const MovingSpotlight = ({ from, to, color }) => {
	const [position, setPosition] = useState(from);
	useFrame((state, delta) => {
		setPosition((prevPosition) => {
			return {
				x: (to.x - from.x) * Math.sin(state.clock.elapsedTime),
				y: (to.y - from.y) * Math.sin(state.clock.elapsedTime),
			};
		});
	});
	return (
		<>
			<spotLight color={color} intensity={0.01} position={new Vector3(position.x, position.y, 30)} angle={Math.PI} penumbra={0} distance={50} />
		</>
	);
};

export default MovingSpotlight;
