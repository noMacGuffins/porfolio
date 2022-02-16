import { Suspense } from "react";
import Div from "src/components/Div";
import Row from "src/components/Row";
import Col from "src/components/Col";
import { Canvas, useFrame } from "@react-three/fiber";
import { pagesWording } from "src/wording/pages";
import EmptyBlock from "src/components/EmptyBlock";
import Helmet from "react-helmet";
import { Stars, OrbitControls, Image } from "@react-three/drei";
import { Vector3, Color } from "three";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import RoundedButton from "src/components/RoundedButton";
import { AstronautHelmet } from "src/components/AstronautHelmet";
import MovingSpotlight from "src/components/MovingSpotlight";
import useIsTablet from "src/hooks/useIsTablet";
import { useSelector } from "react-redux";
import { RootState } from "src/store/reducers/rootReducer";

const CallToActionAndStory = () => {
	const { locale } = useSelector((state: RootState) => ({
		locale: state.app.locale,
	}));
	const isTablet = useIsTablet();
	return (
		<Div maxW={960} mxAuto textWhite relative px10>
			<EmptyBlock h={250} />
			<Div imgTag absolute src={"static/images/planets/11.png"} h80></Div>
			<Div imgTag absolute src={"static/images/planets/13.png"} h30 right200 top50></Div>
			{!isTablet && <Div imgTag absolute src={"static/images/planets/18.png"} h100 left500 top300></Div>}
			{!isTablet && <Div imgTag absolute src={"static/images/planets/19.png"} h40 left100 top600></Div>}
			<Scene duration={isTablet ? 1 : 600} pin={{ pushFollowers: false }} triggerHook={0.5} offset={300}>
				<Div>
					<Div mxAuto maxW={600} fontBold textCenter leadingNone bdBlurSm py50={!isTablet} pb30={isTablet} rounded3xl relative h250={!isTablet}>
						<Scene duration={100} triggerHook={0} pin={{ pushFollowers: true }}>
							{(progress) => (
								<Timeline totalProgress={progress} paused>
									<Timeline
										target={
											<Div textXxxl={!isTablet} textXxl={isTablet} clx={"timeline"}>
												{pagesWording.home.index.mintSection.title[locale]}
											</Div>
										}
									>
										<Tween from={{ opacity: 1, y: 0 }} to={{ opacity: -1, y: -100 }} />
									</Timeline>
									<Timeline
										target={
											<Div textXxl={!isTablet} fontSize40={isTablet} clx={"timeline"} absolute top0>
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
					{isTablet ? (
						<Div px10>
							<Div imgTag src={"static/images/gomzPlanet.png"} w={"100%"}></Div>
							<Div fontBold textXl textWhite mb15>
								{pagesWording.home.index.storySection.title[locale]}
							</Div>
							<Div textLg textGray500>
								{pagesWording.home.index.storySection.plot[locale]}
							</Div>
						</Div>
					) : (
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
															<Div fontBold textXl textWhite mb15>
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
							<EmptyBlock h={600} />
						</Div>
					)}
				</Div>
			</Scene>
		</Div>
	);
};

const GomzNFT = () => {
	const { locale } = useSelector((state: RootState) => ({
		locale: state.app.locale,
	}));
	const RotateCamera = () => {
		useFrame((state) => {
			state.camera.rotation.z += 0.02 * Math.sin(state.clock.elapsedTime * 0.8);
			state.camera.rotation.y += 0.03 * Math.sin(state.clock.elapsedTime * 0.3);
			state.camera.rotation.x += 0.005 * Math.cos(state.clock.elapsedTime * 0.2);
			state.camera.updateProjectionMatrix();
		});
		return null;
	};
	const isTablet = useIsTablet();
	if (isTablet)
		return (
			<Div mxAuto px20>
				<EmptyBlock h={50} />
				<Div h400 wFull>
					<Canvas camera={{ fov: 30, near: 1, far: 1000, position: [0, 120, 100] }}>
						<OrbitControls enableZoom={false} />
						<MovingSpotlight to={{ x: 24, y: 1 }} from={{ x: 19, y: 10 }} color={new Color(255, 0, 0)} />
						<spotLight color={new Color(0, 255, 0)} intensity={0.01} position={new Vector3(0, 0, 40)} angle={Math.PI} penumbra={0} distance={50} />
						<ambientLight intensity={0.1} />
						<Suspense fallback={null}>
							<AstronautHelmet />
							{/* @ts-ignore */}
							<Image url={"static/images/1cut.png"} scale={[23, 23]} position-y={19} position-z={3} />
							<RotateCamera />
						</Suspense>
					</Canvas>
				</Div>
				<Div mt={-100} style={{ zIndex: 10 }}>
					<Div fontBold textXl textWhite mb15>
						{pagesWording.home.index.gallerySection.title[locale]}
					</Div>
					<Div textLg textGray500>
						{pagesWording.home.index.gallerySection.plot[locale]}
					</Div>
				</Div>
			</Div>
		);
	return (
		<Div>
			<Scene duration={300} pin={{ pushFollowers: false }} triggerHook={0.5} offset={1000}>
				{(progress) => (
					<Timeline totalProgress={progress} paused>
						<Timeline
							target={
								<Div maxW={960} mxAuto px30>
									<Row>
										<Col bdBlurSm rounded3xl>
											<Div fontBold textXl textWhite mb15>
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
	);
};

const GomRoomzMetaverse = () => {
	const { locale } = useSelector((state: RootState) => ({
		locale: state.app.locale,
	}));
	const isTablet = useIsTablet();
	if (isTablet)
		return (
			<Div>
				<EmptyBlock h={100} />
				<Div px20>
					<Div overflowHidden w={"100%"} z10>
						<video autoPlay width="100%" muted loop>
							<source src="/gomRoomz.mp4" type="video/mp4" />
						</video>
					</Div>
					<EmptyBlock h={30} />
					<Div spanTag fontBold textWhite textXl>
						{pagesWording.home.index.gomRoomzSection.title[locale]}
					</Div>
					<EmptyBlock h={15} />
					<Div mxAuto textCenter bdBlurSm>
						<Div textLg textGray500>
							{pagesWording.home.index.gomRoomzSection.description[locale]}
						</Div>
					</Div>
				</Div>
				<EmptyBlock h={100} />
			</Div>
		);
	return (
		<Div>
			<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0.5} offset={1000}>
				{(progress) => (
					<Timeline totalProgress={progress} paused>
						<Timeline
							target={
								<Div h900 maxW={960} top={-100} mxAuto mt={-300} px30>
									<Row>
										<Col auto>
											<Div overflowHidden w400>
												<video autoPlay width="100%" muted loop>
													<source src="/gomRoomz.mp4" type="video/mp4" />
												</video>
											</Div>
										</Col>
										<Col relative>
											<Div spanTag fontBold textWhite textXl absolute bottom0>
												{pagesWording.home.index.gomRoomzSection.title[locale]}
											</Div>
										</Col>
									</Row>
									<EmptyBlock h={15} />
									<Div w700 mxAuto textCenter bdBlurSm>
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
	);
};

const TopBar = () => {
	const { locale } = useSelector((state: RootState) => ({
		locale: state.app.locale,
	}));
	const isTablet = useIsTablet();
	if (isTablet)
		return (
			<Div fixed bdBlurXl wFull pt20 pb10 z100>
				<Row mxAuto flex justifyCenter px30>
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
							{locale}
						</Div>
					</Col>
				</Row>
			</Div>
		);
	return (
		<Div fixed bdBlurXl wFull pt20 pb10 z100>
			<Row maxW={960} mxAuto flex justifyCenter px30>
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
	);
};

export default function Home() {
	const isTablet = useIsTablet();
	return (
		<Controller>
			<Div bgBlack>
				<Helmet bodyAttributes={{ style: "background-color : #000" }} />
				<Div fixed wScreen hScreen>
					<Canvas style={{ zIndex: -10 }}>
						<Stars count={700} />
					</Canvas>
				</Div>
				<TopBar />
				<CallToActionAndStory />
				<GomzNFT />
				<GomRoomzMetaverse />
			</Div>
		</Controller>
	);
}
