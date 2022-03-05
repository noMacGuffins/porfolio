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
		<Div bgGray100>
			{/* <Div absolute top100 right0 w500 h500 textBlack fontBold style={{ transform: "rotate(45deg)" }}>
				<svg viewBox="0 0 500 500">
					<path
						id="curve"
						fill={"transparent"}
						d="
							M 250, 250
							a 100,100 0 1,1 100,0
							a 100,100 0 1,1 -100,0
						"
					/>
					<text style={{ paddingLeft: 10 }}>
						<textPath xlinkHref="#curve"> Bridging the gap between blockchain technology and the world</textPath>
					</text>
				</svg>
			</Div> */}
			<Div relative>
				<TopBar mode={"light"} />
				<Div>
					<Div h={"105vh"} relative flex row overflowHidden itemsCenter justifyCenter>
						<Div maxW={600} fontBold textCenter leadingNone pb150>
							<Div textXxl clx={"timeline"} mb10 textGray900>
								Sooni Labs
							</Div>
							<Div textXl clx={"timeline colorful colorful3"} textGray900>
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
									<Timeline target={<Div absolute w800 h800 rounded3000 style={{ backgroundColor: "rgba(0, 0, 256, 0.1)" }}></Div>}>
										<Tween from={{ scaleX: 0, scaleY: 0, y: -100, x: -100 }} to={{ scaleX: 1, scaleY: 1 }} />
									</Timeline>
								</Timeline>
							)}
						</Scene>
						<Scene duration={200} pin={{ pushFollowers: true }}>
							{(progress) => (
								<Timeline totalProgress={progress} paused>
									<Timeline target={<Div absolute w800 h800 rounded3000 style={{ backgroundColor: "rgba(0, 256, 0, 0.1)" }}></Div>}>
										<Tween from={{ scaleX: 0, scaleY: 0, y: 0, x: 0 }} to={{ scaleX: 1, scaleY: 1 }} />
									</Timeline>
								</Timeline>
							)}
						</Scene>
					</Div>
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
						<Div relative wScreen overflowHidden>
							<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0} offset={200}>
								{(progress) => (
									<Timeline totalProgress={progress} paused>
										<Timeline
											target={
												<Div flex itemsCenter justifyCenter py100>
													<Div maxW={600}>
														<Div fontBold textXl mb15>
															About Us
														</Div>
														<Div textLg textGray900>
															Founded in 2021, SOONI Labs is the first Korean NFT-focused company that bridges the gap between NFTs and Real-World
															utility through practical B-Apps.
														</Div>
													</Div>
												</Div>
											}
										>
											<Tween from={{ x: 800 }} to={{ x: 0, y: 0 }} />
										</Timeline>
										<Timeline target={<Div absolute top0 left={"30%"} w1000 h1000 rounded3000 style={{ backdropFilter: "invert(100%)" }}></Div>}>
											<Tween from={{ scaleX: 0, scaleY: 0, y: 0, x: 0 }} to={{ scaleX: 3, scaleY: 3 }} />
										</Timeline>
									</Timeline>
								)}
							</Scene>
						</Div>
					)}
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
