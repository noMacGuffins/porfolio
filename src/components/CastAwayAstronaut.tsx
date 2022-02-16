import { useFrame, useLoader } from "@react-three/fiber";
import { useState } from "react";
import { Vector3, TextureLoader, Vector2 } from "three";

const CastAwayAstronaut = ({ from, to, speed, delay = 0 }) => {
	const texture = useLoader(TextureLoader, "https://beardom.s3.ap-northeast-2.amazonaws.com/avatars/emptyFaceAstronaut.png");
	const [position, setPosition] = useState({ ...from, rotation: Math.PI });
	const [stop, setStop] = useState(false);
	useFrame((state, delta) => {
		if (stop) return position;
		if (state.clock.elapsedTime < delay) return position;
		setPosition((prevPosition) => {
			if (Math.abs(to.x - prevPosition.x) <= 0.1 && Math.abs(to.y - prevPosition.y) <= 0.1) {
				setStop(true);
			}

			const sin = Math.sin(state.clock.elapsedTime * speed);
			const cos = Math.cos(state.clock.elapsedTime * speed);
			return {
				x: from.x + (from.x - to.x) * sin,
				y: from.y + (from.y - to.y) * sin,
				rotation: sin * sin + cos * cos,
			};
		});
	});
	return (
		<>
			<mesh position={new Vector3(position.x, position.y, 0)}>
				<planeBufferGeometry attach="geometry" args={[0.3, 0.3]} />
				<meshBasicMaterial attach="material" map={texture} repeat={new Vector2(1, 1)} />
			</mesh>
		</>
	);
};

export default CastAwayAstronaut;
