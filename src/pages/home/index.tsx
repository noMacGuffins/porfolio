import { Fragment, Suspense, useEffect, useMemo, useRef, useState } from "react";
import Div from "src/components/Div";
import Row from "src/components/Row";
import Col from "src/components/Col";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { pagesWording } from "src/wording/pages";
import EmptyBlock from "src/components/EmptyBlock";
import Helmet from "react-helmet";
import { Stars } from "@react-three/drei";
import { Vector3, Color, TextureLoader, Vector2 } from "three";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

function Box(props) {
	// This reference gives us direct access to the THREE.Mesh object
	const ref = useRef(null);
	// Hold state for hovered and clicked events
	const [hovered, hover] = useState(false);
	const [clicked, click] = useState(false);
	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame((state, delta) => (ref.current.rotation.x += 0.01));
	// Return the view, these are regular Threejs elements expressed in JSX
	return (
		<mesh
			{...props}
			ref={ref}
			scale={clicked ? 1.5 : 1}
			onClick={(event) => click(!clicked)}
			onPointerOver={(event) => hover(true)}
			onPointerOut={(event) => hover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
		</mesh>
	);
}
const RoundedButton = ({ size, color, text }) => {
	let divProps = {} as any;
	let textProps = {} as any;
	switch (size) {
		case "small":
			divProps = { ...divProps, roundedMd: true, px: 20, py: 10 };
			textProps = { ...textProps, textSm: true };
			break;
		case "base":
			divProps = { ...divProps, roundedMd: true, px: 30, py: 12 };
			textProps = { ...textProps, textBase: true };
			break;
		case "large":
			divProps = { ...divProps, roundedLg: true, px: 40, py: 14 };
			textProps = { ...textProps, textLg: true };
			break;
		case "xlarge":
			divProps = { ...divProps, roundedLg: true, px: 60, py: 16 };
			textProps = { ...textProps, textXl: true, fontBold: true };
			break;
		default:
			divProps = { ...divProps, roundedMd: true, px: 15, py: 12 };
			textProps = { ...textProps, textBase: true };
	}
	switch (color) {
		case "red":
			divProps = { ...divProps, bgDangerLight: true };
			textProps = { ...textProps, textDanger: true };
			break;
		case "yellow":
			divProps = { ...divProps, bgWarningLight: true };
			textProps = { ...textProps, textWarning: true };
			break;
		case "green":
			divProps = { ...divProps, bgSuccessLight: true };
			textProps = { ...textProps, textSuccess: true };
			break;
		case "black":
			divProps = { ...divProps, bgGrayOpacity: true, bdBlurSm: true };
			textProps = { ...textProps, textWhite: true };
			break;
		default:
	}
	return (
		<Div {...divProps}>
			<Div spanTag {...textProps}>
				{text}
			</Div>
		</Div>
	);
};

function CastAwayAstronaut({ from, to, speed }) {
	const texture = useLoader(TextureLoader, "https://beardom.s3.ap-northeast-2.amazonaws.com/avatars/emptyFaceAstronaut.png");
	const [position, setPosition] = useState({ ...from, rotation: Math.PI });
	const [stop, setStop] = useState(false);
	useFrame((state, delta) => {
		setPosition((prevPosition) => {
			if (Math.abs(to.x - prevPosition.x) < 0.5 / speed && Math.abs(to.y - prevPosition.y) < 0.5 / speed) {
				setStop(true);
			}
			if (stop) return prevPosition;
			return {
				x: from.x + (from.x - to.x) * Math.sin(state.clock.elapsedTime) * speed,
				y: from.y + (from.y - to.y) * Math.sin(state.clock.elapsedTime) * speed,
				rotation: Math.sin(state.clock.elapsedTime),
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
}

function CanvasImage({ position, src, size }) {
	const texture = useLoader(TextureLoader, src);
	return (
		<mesh position={new Vector3(position.x, position.y, 0)}>
			<planeBufferGeometry attach="geometry" args={size} />
			<meshBasicMaterial attach="material" map={texture} repeat={new Vector2(1, 1)} />
		</mesh>
	);
}

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
			{/* <Image position={new Vector3(position.x, position.y, 10)} /> */}
			<spotLight color={color} intensity={0.01} position={new Vector3(position.x, position.y, 30)} angle={Math.PI} penumbra={0} distance={50} />
		</>
	);
};

const Sphere = () => {
	const planet = useRef(null);

	return (
		<mesh ref={planet} visible position={[0, 0, 0]}>
			<sphereBufferGeometry attach="geometry" args={[1.5, 32, 32]} />
			<meshStandardMaterial attach="material" color="#1f1f1f" />
		</mesh>
	);
};

export default function Home() {
	const locale = "en";
	return (
		<Div bgBlack>
			<Helmet bodyAttributes={{ style: "background-color : #000" }} />
			<Div fixed hScreen wScreen>
				<Canvas>
					<Stars count={1000} />
					<MovingSpotlight to={{ x: 24, y: 1 }} from={{ x: 19, y: 10 }} color={new Color(255, 0, 0)} />
					<spotLight color={new Color(0, 255, 0)} intensity={0.01} position={new Vector3(0, 0, 40)} angle={Math.PI} penumbra={0} distance={50} />
					{/* <Sphere /> */}
					<pointLight position={new Vector3(0, 0, 0)} color={"green"} intensity={100} power={100} />
					<Suspense fallback={null}>
						<CastAwayAstronaut from={{ x: 0, y: 0 }} to={{ x: 10, y: 10 }} speed={0.8} />
					</Suspense>
				</Canvas>
			</Div>
			<Div fixed bdBlurXl wFull py15 z100>
				<Row maxW={960} mxAuto>
					<Col auto>
						<Row roundedLg px={20}>
							<Col auto px0>
								<Div imgTag src={"static/images/basicBearWhite.png"} h={30} w={30} style={{ objectFit: "cover" }} />
							</Col>
							<Col auto px0 pr8 flex itemsCenter>
								<Div spanTag fontBold textWhite>
									Gomz
								</Div>
							</Col>
						</Row>
					</Col>
					<Col></Col>
				</Row>
			</Div>
			<Div maxW={960} mxAuto textWhite>
				<Controller>
					<Scene duration={600} pin={{ pushFollowers: false }} triggerHook={0.5} offset={300}>
						<Div>
							<Div mxAuto maxW={600} fontBold textCenter leadingNone bdBlurSm py50 rounded3xl relative h250>
								<Scene duration={100} triggerHook={0} pin={{ pushFollowers: false }}>
									{(progress) => (
										<Timeline totalProgress={progress} paused>
											<Timeline
												target={
													<Div textXxxl clx={"timeline"}>
														{pagesWording.home.index.title[locale]}
													</Div>
												}
											>
												<Tween from={{ opacity: 1, y: 0 }} to={{ opacity: -1, y: -100 }} />
											</Timeline>
											<Timeline
												target={
													<Div textXxl clx={"timeline"} absolute top0>
														{pagesWording.home.index.mainMessage[locale]}
													</Div>
												}
											>
												<Tween from={{ opacity: -1, y: 100 }} to={{ opacity: 1, y: 0 }} />
											</Timeline>
										</Timeline>
									)}
								</Scene>
							</Div>

							<Div mxAuto maxW={500} textLg textCenter textGray500 bdBlurSm rounded3xl>
								{pagesWording.home.index.secondaryMessage[locale]}
							</Div>
							<Div mxAuto maxW={500} textBase textCenter textGray600 bdBlurSm rounded3xl>
								{pagesWording.home.index.tertiaryMessage[locale]}
							</Div>
							<Div justifyCenter flex py25>
								<RoundedButton size={"xlarge"} color={"black"} text={pagesWording.home.index.mintButton[locale]} />
							</Div>
						</Div>
					</Scene>
				</Controller>

				<EmptyBlock h={75} />
			</Div>
			<Div h500 wScreen>
				<Canvas>
					<MovingSpotlight to={{ x: 24, y: 1 }} from={{ x: 19, y: 10 }} color={new Color(255, 0, 0)} />
					<spotLight color={new Color(0, 255, 0)} intensity={0.01} position={new Vector3(0, 0, 0)} angle={Math.PI} penumbra={0} distance={50} />
					<Suspense fallback={null}>{/* <CanvasImage position={{ x: 0, y: 0 }} src={"static/images/1.png"} size={[5, 5]} /> */}</Suspense>
				</Canvas>
			</Div>
		</Div>
	);
}
