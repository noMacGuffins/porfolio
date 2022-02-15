import { Fragment, Suspense, useEffect, useMemo, useRef, useState, useLayoutEffect } from "react";
import Div from "src/components/Div";
import Row from "src/components/Row";
import Col from "src/components/Col";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { pagesWording } from "src/wording/pages";
import EmptyBlock from "src/components/EmptyBlock";
import Helmet from "react-helmet";
import { Stars, useAspect, OrbitControls, Image, useTexture } from "@react-three/drei";
import { Vector3, Color, TextureLoader, Vector2, Euler } from "three";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { useGLTF } from "@react-three/drei";

export const AstronautHelmet = () => {
	const { scene, nodes, materials } = useGLTF("static/models/AstronautHelmet/scene.gltf");
	const [colorMap, normalMap, emissiveMap] = useTexture([
		"static/models/AstronautHelmet/textures/Helmet-Body_baseColor.jpeg",
		"static/models/AstronautHelmet/textures/Helmet-Body_normal.png",
		"static/models/AstronautHelmet/textures/Helmet-Body_emissive.png",
	]);

	// useLayoutEffect(() => {
	// 	Object.assign(materials.Material, {
	// 		//    metalnessMap: metalnessMap,
	// 		normalMap: normalMap,
	// 		//    roughnessMap: roughnessMap,
	// 		emissiveMap: emissiveMap,
	// 		map: colorMap,
	// 		color: "white",
	// 	});
	// }, [scene, nodes, materials, colorMap, normalMap]);

	return <primitive object={scene} />;
};

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

function CastAwayAstronaut({ from, to, speed, delay = 0 }) {
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
}

const CanvasImage = ({ url, ...props }) => {
	const texture = useMemo(() => new TextureLoader().load(url), [url]);

	return (
		<mesh {...props}>
			<planeBufferGeometry attach="geometry" args={[100, 100]} />
			<meshLambertMaterial attach="material">
				<primitive attach="map" object={texture} />
			</meshLambertMaterial>
		</mesh>
	);
};

const getRadian = function (degrees) {
	return (degrees * Math.PI) / 180;
};

const CanvasImages = () => {
	return (
		<>
			{[
				"static/images/1.png",
				"static/images/2.png",
				"static/images/3.png",
				"static/images/4.png",
				"static/images/5.png",
				"static/images/6.png",
				"static/images/1.png",
				"static/images/2.png",
				"static/images/3.png",
				"static/images/4.png",
				"static/images/5.png",
				"static/images/6.png",
				"static/images/1.png",
				"static/images/2.png",
				"static/images/3.png",
				"static/images/4.png",
				"static/images/5.png",
				"static/images/6.png",
				"static/images/1.png",
				"static/images/2.png",
				"static/images/3.png",
			].map((url, index) => (
				// @ts-ignore
				<Image
					key={index}
					url={url}
					scale={[10, 10]}
					position-x={Math.sin(getRadian((index % 45) * 4.5) * 10) * 30}
					position-y={-20 + index * 2}
					rotation-y={Math.PI + index * (Math.PI / 4) * 1}
					position-z={Math.cos(getRadian((index % 45) * 4.5) * 10) * 30}
				/>
			))}
		</>
	);
};

function CanvasVideo() {
	const size = useAspect(900, 900);
	const [video] = useState(() => {
		const vid = document.createElement("video");
		vid.src = "static/images/gomRoomz.mp4";
		vid.crossOrigin = "Anonymous";
		vid.loop = true;
		return vid;
	});
	// Keep in mind videos can only play once the user has interacted with the site ...
	useEffect(() => void video.play(), [video]);
	return (
		<mesh scale={size}>
			<planeBufferGeometry />
			<meshBasicMaterial>
				<videoTexture attach="map" args={[video]} />
			</meshBasicMaterial>
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
	function RotateCamera() {
		useFrame((state) => {
			state.camera.rotation.z += 0.02 * Math.sin(state.clock.elapsedTime * 0.8);
			state.camera.rotation.y += 0.03 * Math.sin(state.clock.elapsedTime * 0.3);
			state.camera.rotation.x += 0.005 * Math.cos(state.clock.elapsedTime * 0.2);
			state.camera.updateProjectionMatrix();
		});
		return null;
	}

	return (
		<Div bgBlack>
			<Helmet bodyAttributes={{ style: "background-color : #000" }} />
			<Div fixed hScreen wScreen>
				<Canvas>
					<Stars count={700} />
					<Suspense fallback={null}>
						<CastAwayAstronaut from={{ x: 0, y: 0 }} to={{ x: 10, y: 10 }} speed={0.2} />
						<CastAwayAstronaut from={{ x: 0, y: 8 }} to={{ x: 10, y: -9 }} speed={0.3} delay={2} />
						<CastAwayAstronaut from={{ x: -7, y: 6 }} to={{ x: 5, y: 10 }} speed={0.3} delay={2.2} />
					</Suspense>
				</Canvas>
			</Div>
			<Div fixed bdBlurXl wFull pt20 pb10 z100>
				<Row maxW={960} mxAuto flex justifyCenter>
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
					<Col auto>
						<Div spanTag fontLight textWhite>
							Story
						</Div>
					</Col>
					<Col auto>
						<Div spanTag fontLight textWhite>
							Gomz NFT
						</Div>
					</Col>
					<Col auto>
						<Div spanTag fontLight textWhite>
							GomRoomz Metaverse
						</Div>
					</Col>
					<Col auto>
						<Div spanTag fontLight textWhite>
							Roadmap
						</Div>
					</Col>
					<Col auto>
						<Div spanTag fontLight textWhite>
							Team
						</Div>
					</Col>
					<Col auto>
						<Div spanTag fontLight textWhite>
							FAQ
						</Div>
					</Col>
					<Col auto>
						<Div spanTag fontLight textWhite>
							{locale}
						</Div>
					</Col>
				</Row>
			</Div>
			<Div maxW={960} mxAuto textWhite relative>
				<Div imgTag absolute src={"static/images/planets/11.png"} h80></Div>
				<Div imgTag absolute src={"static/images/planets/13.png"} h30 right200 top50></Div>
				<Div imgTag absolute src={"static/images/planets/18.png"} h100 left500 top300></Div>
				<Div imgTag absolute src={"static/images/planets/19.png"} h40 left100 top600></Div>
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
														{pagesWording.home.index.mintSection.title[locale]}
													</Div>
												}
											>
												<Tween from={{ opacity: 1, y: 0 }} to={{ opacity: -1, y: -100 }} />
											</Timeline>
											<Timeline
												target={
													<Div textXxl clx={"timeline"} absolute top0>
														{pagesWording.home.index.mintSection.mainMessage[locale]}
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
								{pagesWording.home.index.mintSection.secondaryMessage[locale]}
							</Div>
							<Div mxAuto maxW={500} textBase textCenter textGray600 bdBlurSm rounded3xl>
								{pagesWording.home.index.mintSection.tertiaryMessage[locale]}
							</Div>
							<Div justifyCenter flex py25>
								<RoundedButton size={"xlarge"} color={"black"} text={pagesWording.home.index.mintSection.mintButton[locale]} />
							</Div>
							<EmptyBlock />
							<Div>
								<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0.5} offset={200}>
									{(progress) => (
										<Timeline totalProgress={progress} paused>
											<Timeline
												target={
													<Div absolute h900 w900 right0>
														<Row>
															<Col auto>
																<Div imgTag src={"static/images/gomzPlanet.png"} h400 w400></Div>
															</Col>
															<Col bdBlurSm rounded3xl>
																<Div fontBold textXxl textWhite mb15>
																	{pagesWording.home.index.storySection.title[locale]}
																</Div>
																<Div textLg textGray500>
																	{pagesWording.home.index.storySection.plot[locale]}
																</Div>
															</Col>
														</Row>
													</Div>
												}
											>
												<Tween from={{ x: 1000 }} to={{ x: 0 }} />
											</Timeline>
										</Timeline>
									)}
								</Scene>
							</Div>
						</Div>
					</Scene>
				</Controller>
			</Div>
			<EmptyBlock h={600} />
			<Controller>
				<Div>
					<Scene duration={300} pin={{ pushFollowers: false }} triggerHook={0.5} offset={1000}>
						{(progress) => (
							<Timeline totalProgress={progress} paused>
								<Timeline
									target={
										<Div maxW={960} mxAuto>
											<Row>
												<Col bdBlurSm rounded3xl>
													<Div fontBold textXxl textWhite mb15>
														{pagesWording.home.index.gallerySection.title[locale]}
													</Div>
													<Div textLg textGray500>
														{pagesWording.home.index.gallerySection.plot[locale]}
													</Div>
												</Col>
												<Col auto>
													<Div h600 w400>
														<Canvas camera={{ fov: 30, near: 1, far: 1000, position: [0, 120, 100] }}>
															<OrbitControls enableZoom={false} />
															<MovingSpotlight to={{ x: 24, y: 1 }} from={{ x: 19, y: 10 }} color={new Color(255, 0, 0)} />
															<spotLight
																color={new Color(0, 255, 0)}
																intensity={0.01}
																position={new Vector3(0, 0, 40)}
																angle={Math.PI}
																penumbra={0}
																distance={50}
															/>
															<ambientLight intensity={0.1} />
															<Suspense fallback={null}>
																<AstronautHelmet />
																{/* @ts-ignore */}
																<Image url={"static/images/1cut.png"} scale={[23, 23]} position-y={19} position-z={3} />
																<RotateCamera />
															</Suspense>
														</Canvas>
													</Div>
												</Col>
											</Row>
										</Div>
									}
								>
									<Tween from={{ x: -1000 }} to={{ x: 0 }} />
								</Timeline>
							</Timeline>
						)}
					</Scene>
				</Div>
			</Controller>
			<Controller>
				<Div relative>
					<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0.5} offset={1000}>
						{(progress) => (
							<Timeline totalProgress={progress} paused>
								<Timeline
									target={
										<Div h900 w900 absolute maxW={960} top={-200} left400>
											<Row>
												<Col auto>
													<Div overflowHidden w500 h500>
														<video autoPlay width="100%" height={800} muted loop>
															<source src="/gomRoomz.mp4" type="video/mp4" />
														</video>
													</Div>
												</Col>
												<Col relative>
													<Div spanTag fontBold textWhite textXxl absolute bottom0>
														{pagesWording.home.index.gomRoomzSection.title[locale]}
													</Div>
												</Col>
											</Row>
											<EmptyBlock h={50} />
											<Div w700 mxAuto textCenter>
												<Div textLg textGray500>
													{pagesWording.home.index.gomRoomzSection.description[locale]}
												</Div>
											</Div>
										</Div>
									}
								>
									<Tween from={{ x: -500 }} to={{ x: 0 }} />
								</Timeline>
							</Timeline>
						)}
					</Scene>
				</Div>
			</Controller>
		</Div>
	);
}

{
	/* <Div hScreen wScreeen relative>
						<Canvas camera={{ fov: 30, near: 1, far: 1000, position: [0, 50, 70] }}>
							<Suspense fallback={null}>
								<OrbitControls enableDamping enablePan={false} enableZoom={false} dampingFactor={0.05} rotateSpeed={0.5} />
								<CanvasImages />
							</Suspense>
						</Canvas>
					</Div> */
}
{
	/* <Col auto key={num} w200 relative>
															<Div imgTag src={`static/images/emptyFaceBear.png`} z100 relative></Div>
															<Div imgTag src={`static/images/${num}.png`} absolute w70 h70 rounded20 top40 left60></Div>
														</Col> */
}
