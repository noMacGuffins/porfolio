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
import BasicHeadWrapper from "src/components/BasicHeadWrapper";

const CallToActionAndStory = () => {
	const isTablet = useIsTablet();

	return (
		<Controller>
			<Div relative bgGray100>
				<TopBar mode={"light"} />

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
										<Div absolute left0 top={"40%"} bgBlack px30 py20 w80 rounded2xl cursorPointer>
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
										<Div flex itemsCenter justifyCenter py150>
											<Div maxW={960}>
												<Div fontBold textXl mb15>
													About us
												</Div>
												<Div textLg textGray900>
													Founded in 2021, SOONI Labs is the first Korean NFT-focused company that bridges the gap between NFTs and Real-World utility
													through practical B-Apps.
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
				<Div relative wScreen overflowHidden bgGray200>
					<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0} offset={500}>
						{(progress) => (
							<Timeline totalProgress={progress} paused>
								<Timeline
									target={
										<Div flex itemsCenter justifyCenter py150>
											<Div maxW={960}>
												<Div fontBold textXl mb15>
													Our Mission
												</Div>
												<Div textLg textGray900>
													As NFT enthusiasts, we will continuously develop beneficial projects for not only Koreans but also the global community. We
													are here to make a positive impact, to create a warm NFT ecosystem where art, society, and technology are all appreciated.
												</Div>
											</Div>
										</Div>
									}
								>
									<Tween from={{ x: 800 }} to={{ x: 0 }} />
								</Timeline>
							</Timeline>
						)}
					</Scene>
				</Div>
				<Div relative wScreen overflowHidden>
					<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0} offset={1200}>
						{(progress) => (
							<Timeline totalProgress={progress} paused>
								<Timeline
									target={
										<Div flex itemsCenter justifyCenter py150>
											<Div maxW={960}>
												<Div fontBold textXl mb15>
													Our Values
												</Div>
												<Row gapX={20}>
													<Col overflowHidden rounded2xl p0 cursorPointer>
														<Div absolute wFull hFull p20 clx={"group transition hover:backdrop-blur-md hover:transition-all"}>
															<Div relative wFull hFull>
																<Div
																	fontBold
																	maxW={250}
																	clx={"text-20 transition group-hover:transition-all group-hover:translate-y-10 group-hover:text-30"}
																>
																	For you and those around us
																</Div>
																<Div
																	clx={
																		"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 group-hover:text-15"
																	}
																>
																	Every project of ours is dedicated to solve societal issues. We aspire to help everyone recognize the practicality
																	of NFTs regardless of gender, knowledge, and generational gap.
																</Div>
																<Div fontNormal w30 h30 absolute bottom0 right0 clx={"transition group-hover:transition-all group-hover:opacity-0"}>
																	<PlusCircleIcon />
																</Div>
															</Div>
														</Div>
														<Div imgTag src={"images/helping.jpeg"} objectCover hFull wFull></Div>
													</Col>
													<Col overflowHidden rounded2xl p0 cursorPointer>
														<Div absolute wFull hFull p20 clx={"group transition hover:backdrop-blur-md hover:transition-all"}>
															<Div relative wFull hFull>
																<Div
																	fontBold
																	maxW={250}
																	clx={"text-20 transition group-hover:transition-all group-hover:translate-y-10 group-hover:text-30"}
																>
																	Against the status quo
																</Div>
																<Div
																	clx={
																		"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 group-hover:text-15"
																	}
																>
																	Crypto is often recognized as a “rugpull”, “ponzi scheme”, and a “rich-getting-richer mechanism”. Through practical
																	applications of NFTs, we challenge such stereotypes surrounding digital assets.
																</Div>
																<Div fontNormal w30 h30 absolute bottom0 right0 clx={"transition group-hover:transition-all group-hover:opacity-0"}>
																	<PlusCircleIcon />
																</Div>
															</Div>
														</Div>
														<Div imgTag src={"images/statusQuo.jpeg"} objectCover hFull wFull></Div>
													</Col>
													<Col overflowHidden rounded2xl p0 cursorPointer>
														<Div absolute wFull hFull p20 clx={"group transition hover:backdrop-blur-md hover:transition-all"}>
															<Div relative wFull hFull>
																<Div
																	fontBold
																	maxW={250}
																	clx={"text-20 transition group-hover:transition-all group-hover:translate-y-10 group-hover:text-30"}
																>
																	Community-obsessed
																</Div>
																<Div
																	clx={
																		"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 group-hover:text-15"
																	}
																>
																	We believe the longevity of NFT collections are determined by the community. To build a powerful community for our
																	company and projects, our supporters’ voices will be reflected in our future decisions.
																</Div>
																<Div fontNormal w30 h30 absolute bottom0 right0 clx={"transition group-hover:transition-all group-hover:opacity-0"}>
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
				<Div bgBlack textWhite py150>
					<Row mxAuto maxW={960} mb100>
						<Col px0>
							<Div mb20 fontBold>
								SOONI Labs is the first Korean NFT-focused company that bridges the gap between NFTs and Real-World utility through practical B-Apps.
							</Div>
							<Div cursorPointer>Subscribe to our newsletters</Div>
						</Col>
						<Col></Col>
						<Col auto px0>
							<Div cursorPointer mb20>
								Team
							</Div>
							<Div cursorPointer mb20>
								Portfolio
							</Div>
							<Div cursorPointer mb20>
								Contact
							</Div>
						</Col>
					</Row>
					<Row mxAuto maxW={960}>
						<Col px0>
							<Div>ⒸSooni Labs</Div>
						</Col>
						<Col></Col>
						<Col auto px0>
							<Row gapX={20}>
								<Col px0 cursorPointer>
									<Div imgTag src={"images/mailIcon.png"} w30 h30></Div>
								</Col>
								<Col px0 cursorPointer>
									<Div imgTag src={"images/instagramIcon.png"} w30 h30></Div>
								</Col>
								<Col pl0 cursorPointer>
									<Div imgTag src={"images/twitterIcon.png"} w30 h30></Div>
								</Col>
							</Row>
						</Col>
					</Row>
				</Div>
			</Div>
		</Controller>
	);
};

export default function Home() {
	return (
		<BasicHeadWrapper>
			<CallToActionAndStory />
		</BasicHeadWrapper>
	);
}
