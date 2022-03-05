import Div from "src/components/Div";
import Row from "src/components/Row";
import Col from "src/components/Col";
import { pagesWording } from "src/wording/pages";
import Helmet from "react-helmet";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import useIsTablet from "src/hooks/useIsTablet";
import TopBar from "src/components/TopBar";
import EmptyBlock from "src/components/EmptyBlock";
import { PlusCircleIcon } from "@heroicons/react/outline";
import "src/scripts/cursorMove";

const CallToActionAndStory = () => {
	const isTablet = useIsTablet();

	return (
		<Div bgGray100>
			<Div relative>
				<TopBar mode={"light"} />
				<Div>
					<Div h={"105vh"} relative flex row overflowHidden itemsCenter justifyCenter clx={"radial-gradient"}>
						<Div maxW={600} fontBold textCenter leadingNone pb150>
							<Div textXxl clx={"timeline"} mb10 textGray900>
								Sooni Labs
							</Div>
							<Div textXl clx={"timeline colorful colorful2"} textGray900>
								Blockchain for the Betterment of Society
							</Div>
						</Div>
						<Scene duration={200} pin={{ pushFollowers: true }}>
							{(progress) => (
								<Timeline totalProgress={progress} paused>
									<Timeline
										target={
											<Div absolute left0 top={"40%"} bgBlack px30 py20 w80>
												<Div fontBold textWhite style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>
													Subscribe to our newsletters
												</Div>
											</Div>
										}
									>
										<Tween from={{ x: 0 }} to={{ x: -200 }} />
									</Timeline>
								</Timeline>
							)}
						</Scene>
						<Scene duration={200} pin={{ pushFollowers: true }}>
							{(progress) => (
								<Timeline totalProgress={progress} paused>
									<Timeline target={<Div absolute w800 h800 rounded3000 style={{ backgroundColor: "rgba(0, 256, 0, 0.1)" }}></Div>}>
										<Tween from={{ scaleX: 0, scaleY: 0, y: -100, x: -100 }} to={{ scaleX: 1, scaleY: 1 }} />
									</Timeline>
								</Timeline>
							)}
						</Scene>
						<Scene duration={200} pin={{ pushFollowers: true }}>
							{(progress) => (
								<Timeline totalProgress={progress} paused>
									<Timeline target={<Div absolute w800 h800 rounded3000 style={{ backgroundColor: "rgba(0, 256, 256, 0.1)" }}></Div>}>
										<Tween from={{ scaleX: 0, scaleY: 0, y: 0, x: 0 }} to={{ scaleX: 1, scaleY: 1 }} />
									</Timeline>
								</Timeline>
							)}
						</Scene>
					</Div>
					<Div relative wScreen overflowHidden>
						<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0} offset={200}>
							{(progress) => (
								<Timeline totalProgress={progress} paused>
									<Timeline
										target={
											<Div flex itemsCenter justifyCenter py100>
												<Div maxW={960}>
													<Div fontBold textXl mb15>
														Our Mission
													</Div>
													<Div textLg textGray900>
														As NFT enthusiasts, we will continuously develop beneficial projects for not only Koreans but also the global community.
														We are here to make a positive impact, to create a warm NFT ecosystem where art, society, and technology are all
														appreciated.
													</Div>
												</Div>
											</Div>
										}
									>
										<Tween from={{ x: 800 }} to={{ x: 0 }} />
									</Timeline>
									<Timeline target={<Div absolute top0 left={"30%"} w1000 h1000 rounded3000 style={{ backdropFilter: "invert(100%)" }}></Div>}>
										<Tween from={{ scaleX: 0, scaleY: 0, y: 0, x: 0 }} to={{ scaleX: 3, scaleY: 3 }} />
									</Timeline>
								</Timeline>
							)}
						</Scene>
					</Div>
					<Div relative wScreen overflowHidden>
						<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0} offset={700}>
							{(progress) => (
								<Timeline totalProgress={progress} paused>
									<Timeline
										target={
											<Div flex itemsCenter justifyCenter py100>
												<Div maxW={960}>
													<Div fontBold textXl mb15>
														Our Values
													</Div>
													<Row gapX={20}>
														<Col overflowHidden rounded2xl p0>
															<Div absolute wFull hFull p20>
																<Div relative wFull hFull>
																	<Div fontBold textLg maxW={200}>
																		For you and those around us
																	</Div>
																	<Div fontNormal w30 h30 absolute bottom0 right0>
																		<PlusCircleIcon />
																	</Div>
																</Div>
															</Div>
															<Div imgTag src={"images/helping.jpeg"} objectCover hFull wFull></Div>
														</Col>
														<Col overflowHidden rounded2xl p0>
															<Div absolute wFull hFull p20>
																<Div relative wFull hFull>
																	<Div fontBold textLg maxW={200}>
																		Against the status quo
																	</Div>
																	<Div fontNormal w30 h30 absolute bottom0 right0>
																		<PlusCircleIcon />
																	</Div>
																</Div>
															</Div>
															<Div imgTag src={"images/statusQuo.jpeg"} objectCover hFull wFull></Div>
														</Col>
														<Col overflowHidden rounded2xl p0>
															<Div absolute wFull hFull p20>
																<Div relative wFull hFull>
																	<Div fontBold textLg maxW={200}>
																		Community-obsessed
																	</Div>
																	<Div fontNormal w30 h30 absolute bottom0 right0>
																		<PlusCircleIcon />
																	</Div>
																</Div>
															</Div>
															<Div imgTag src={"images/community.jpeg"} objectCover hFull wFull></Div>
														</Col>
													</Row>
												</Div>
											</Div>
										}
									>
										<Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
									</Timeline>
								</Timeline>
							)}
						</Scene>
					</Div>
					<EmptyBlock h={900} />
				</Div>
			</Div>
		</Div>
	);
};

export default function Home() {
	return (
		<Controller>
			<Div>
				<CallToActionAndStory />
			</Div>
		</Controller>
	);
}
