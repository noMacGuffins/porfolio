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

const CallToActionAndStory = () => {
	const isTablet = useIsTablet();

	return (
		<Div relative>
			{/* <Div absolute top100 right0 w500 h500 textBlack fontBold style={{ transform: "rotate(45deg)" }}>
				<svg viewBox="0 0 500 500">
					<path
						id="curve"
						fill={"transparent"}
						d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145"
					/>
					<text style={{ paddingLeft: 10 }}>
						<textPath xlinkHref="#curve"> Bridging the gap between blockchain technology and the real world. </textPath>
					</text>
				</svg>
			</Div> */}
			<Div maxW={960} mxAuto relative px10 textColor={"rgba(0, 0, 0, 0.7)"}>
				<Scene duration={isTablet ? 1 : 600} pin={{ pushFollowers: false }} triggerHook={0.5} offset={300}>
					<Div>
						<Div mxAuto maxW={600} fontBold textCenter leadingNone py80={!isTablet} pb30={isTablet} rounded3xl relative h250={!isTablet}>
							<Scene duration={200} triggerHook={0} pin={{ pushFollowers: true }}>
								{(progress) => (
									<Timeline totalProgress={progress} paused>
										<Timeline
											target={
												<Div textXxxl={!isTablet} textXxl={isTablet} clx={"timeline"}>
													Sooni Labs.
												</Div>
											}
										>
											<Tween from={{ opacity: 1, y: 0 }} to={{ opacity: -1, y: -100 }} />
										</Timeline>
										<Timeline
											target={
												<Div textXxl={!isTablet} fontSize40={isTablet} clx={"timeline"} absolute bottom0 style={{ filter: "invert(100%)" }}>
													Blockchain,
													<Div fontSize40>for the Betterment of Society.</Div>
												</Div>
											}
										>
											<Tween from={{ opacity: -1, y: 100 }} to={{ opacity: 1, y: 0 }} />
										</Timeline>
									</Timeline>
								)}
							</Scene>
						</Div>
						<EmptyBlock h={200} />
						{isTablet ? (
							<Div px10>
								<Div imgTag src={"images/sooniLabsIcon.png"} w={"100%"}></Div>
								<Div fontBold textXl textWhite mb15>
									{pagesWording.home.index.MainPage.Title2}
								</Div>
								<Div textLg textGray500>
									{pagesWording.home.index.MainPage.Title2}
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
																<Div imgTag src={"images/sooniLabsIconNoBg.png"} h={591 / 1.2} w={421 / 1.2}></Div>
															</Col>
															<Col rounded3xl>
																<Div fontBold textXl mb15>
																	About Us
																</Div>
																<Div textLg textGray500>
																	{pagesWording.home.index.MainPage.Title2}
																</Div>
															</Col>
														</Row>
													</Div>
												}
											>
												<Tween from={{ x: 900 }} to={{ x: 0 }} />
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
		</Div>
	);
};

export default function Home() {
	return (
		<Controller>
			<Div>
				<TopBar mode={"light"} />
				<CallToActionAndStory />
			</Div>
		</Controller>
	);
}
