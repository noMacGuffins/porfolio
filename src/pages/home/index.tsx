import { Fragment, Suspense, useMemo, useRef, useState } from "react";
import Div from "src/components/Div";
import Row from "src/components/Row";
import Col from "src/components/Col";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { pagesWording } from "src/wording/pages";
import EmptyBlock from "src/components/EmptyBlock";
import Helmet from "react-helmet";
import { Stars } from "@react-three/drei";
import { Vector3, Color, TextureLoader, Vector2 } from "three";

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
			divProps = { ...divProps, bgGrayOpacity: true };
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

function Image({ from, to }) {
	const texture = useLoader(TextureLoader, "https://beardom.s3.ap-northeast-2.amazonaws.com/avatars/emptyFaceAstronaut.png");
	const [position, setPosition] = useState(from);
	useFrame((state, delta) => {
		setPosition((prevPosition) => {
			return {
				x: (to.x - from.x) * Math.sin(state.clock.elapsedTime),
				y: 0 + (to.y - from.y) * Math.sin(state.clock.elapsedTime),
			};
		});
	});
	return (
		<mesh position={new Vector3(position.x, position.y, 0)}>
			<planeBufferGeometry attach="geometry" args={[0.3, 0.3]} />
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

export default function Home() {
	const locale = "en";
	return (
		<Div bgBlack>
			<Helmet bodyAttributes={{ style: "background-color : #000" }} />
			<Div fixed hScreen wScreen>
				<Canvas>
					<Stars count={2000} />
					<MovingSpotlight to={{ x: 24, y: 1 }} from={{ x: 19, y: 10 }} color={new Color(255, 0, 0)} />
					<spotLight color={new Color(0, 255, 0)} intensity={0.01} position={new Vector3(0, 0, 40)} angle={Math.PI} penumbra={0} distance={50} />
					<Suspense fallback={null}>
						<Image to={{ x: 2, y: 4 }} from={{ x: 1, y: 3 }} />
					</Suspense>
				</Canvas>
			</Div>
			<Div maxW={960} mxAuto textWhite py15>
				<Row>
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
				<EmptyBlock h={100} />
				<Div mxAuto maxW={600} fontBold textXxl textCenter leadingNone bdBlurSm py50 rounded3xl>
					{pagesWording.home.index.mainMessage[locale]}
				</Div>
				<Div mxAuto maxW={500} textLg textCenter textGray500 bdBlurSm rounded3xl>
					{pagesWording.home.index.secondaryMessage[locale]}
				</Div>
				<Div mxAuto maxW={500} textBase textCenter textGray600 bdBlurSm rounded3xl>
					{pagesWording.home.index.tertiaryMessage[locale]}
				</Div>
				<Div justifyCenter flex py25 bdBlurSm rounded3xl>
					<RoundedButton size={"xlarge"} color={"black"} text={pagesWording.home.index.mintButton[locale]} />
				</Div>
				<EmptyBlock h={75} />
			</Div>
		</Div>
	);
}
