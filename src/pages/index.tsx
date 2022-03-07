import Div from "src/components/Div";
import { pagesWording } from "src/wording/pages";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import useIsTablet from "src/hooks/useIsTablet";
import TopBar from "src/components/TopBar";
import { PlusCircleIcon } from "@heroicons/react/outline";
import "src/scripts/cursorMove";
import BasicHeadWrapper from "src/components/BasicHeadWrapper";
import { useRouter } from "next/router";
import Footer from "src/components/Footer";

const Main = () => {
	const isTablet = useIsTablet();
	const { locale } = useRouter();
	return (
		<Div h={"102vh"} relative flex row itemsCenter justifyCenter clx={"radial-gradient"} px30>
			<Div maxW={600} fontBold textCenter leadingNone pb70 z100>
				<Div textXxl={!isTablet} fontSize60={isTablet} clx={"timeline"} mb10 textGray900>
					{pagesWording.index.main.title[locale]}
				</Div>
				<Div textXl clx={"timeline colorful colorful2"} textGray900>
					{pagesWording.index.main.motto[locale]}
				</Div>
			</Div>
			<Scene duration={200} pin={{ pushFollowers: true }}>
				{(progress) => (
					<Timeline totalProgress={progress} paused>
						<Timeline
							target={
								<Div absolute left0 top={isTablet ? "80%" : "30%"} bgBlack px30 py20 w80={!isTablet} maxW={isTablet && 200} rounded2xl cursorPointer>
									<Div fontBold textWhite style={!isTablet && { writingMode: "vertical-lr", textOrientation: "mixed" }}>
										{pagesWording.index.main.subscribe[locale]}
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
						<Timeline
							target={
								<Div
									absolute
									w800={!isTablet}
									h800={!isTablet}
									w300={isTablet}
									h300={isTablet}
									rounded3000
									style={{ backgroundColor: "rgba(0, 256, 0, 0.1)" }}
								></Div>
							}
						>
							<Tween from={{ scaleX: 0, scaleY: 0, y: -100, x: -100 }} to={{ scaleX: 1, scaleY: 1 }} />
						</Timeline>
					</Timeline>
				)}
			</Scene>
			<Scene duration={200} pin={{ pushFollowers: true }}>
				{(progress) => (
					<Timeline totalProgress={progress} paused>
						<Timeline
							target={
								<Div
									absolute
									w800={!isTablet}
									h800={!isTablet}
									w300={isTablet}
									h300={isTablet}
									rounded3000
									style={{ backgroundColor: "rgba(0, 256, 256, 0.1)" }}
								></Div>
							}
						>
							<Tween from={{ scaleX: 0, scaleY: 0, y: 0, x: 0 }} to={{ scaleX: 1, scaleY: 1 }} />
						</Timeline>
					</Timeline>
				)}
			</Scene>
		</Div>
	);
};

const AboutUs = () => {
	const { locale } = useRouter();
	return (
		<Div relative wScreen overflowHidden px30>
			<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0} offset={250}>
				{(progress) => (
					<Timeline totalProgress={progress} paused>
						<Timeline
							target={
								<Div flex itemsCenter justifyCenter py150 z100>
									<Div maxW={960}>
										<Div fontBold textXl mb15>
											{pagesWording.index.aboutUs.title[locale]}
										</Div>
										<Div textLg>{pagesWording.index.aboutUs.subtitle[locale]}</Div>
									</Div>
								</Div>
							}
						>
							<Tween from={{ y: 400 }} to={{ y: 0 }} />
						</Timeline>
						<Timeline target={<Div absolute top0 left={"30%"} w1000 h1000 rounded3000 style={{ backgroundColor: "rgba(0, 256, 0, 0.15)" }}></Div>}>
							<Tween from={{ scaleX: 0, scaleY: 0, y: 0, x: 0 }} to={{ scaleX: 2.5, scaleY: 2.5 }} />
						</Timeline>
					</Timeline>
				)}
			</Scene>
		</Div>
	);
};

const Mission = () => {
	const { locale } = useRouter();
	return (
		<Div relative wScreen overflowHidden px30>
			<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0} offset={700}>
				{(progress) => (
					<Timeline totalProgress={progress} paused>
						<Timeline
							target={
								<Div flex itemsCenter justifyCenter py150 z100>
									<Div maxW={960}>
										<Div fontBold textXl mb15>
											{pagesWording.index.mission.title[locale]}
										</Div>
										<Div textLg>{pagesWording.index.mission.subtitle[locale]}</Div>
									</Div>
								</Div>
							}
						>
							<Tween from={{ y: 400 }} to={{ y: 0 }} />
						</Timeline>
						<Timeline target={<Div absolute top0 left={"30%"} w1000 h1000 rounded3000 style={{ backgroundColor: "rgba(0, 256, 256, 0.15)" }}></Div>}>
							<Tween from={{ scaleX: 0, scaleY: 0, y: 0, x: 0 }} to={{ scaleX: 2.5, scaleY: 2.5 }} />
						</Timeline>
					</Timeline>
				)}
			</Scene>
		</Div>
	);
};

const Values = () => {
	const isTablet = useIsTablet();
	const { locale } = useRouter();
	const valueContents = [
		{ title: pagesWording.index.values.helping.title[locale], desc: pagesWording.index.values.helping.desc[locale], img: "images/helping.jpeg" },
		{
			title: pagesWording.index.values.statusQuo.title[locale],
			desc: pagesWording.index.values.statusQuo.desc[locale],
			img: "images/statusQuo.jpeg",
		},
		{
			title: pagesWording.index.values.community.title[locale],
			desc: pagesWording.index.values.community.desc[locale],
			img: "images/community.jpeg",
		},
	];
	return (
		<Div relative wScreen overflowHidden px30>
			<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0} offset={1200}>
				{(progress) => (
					<Timeline totalProgress={progress} paused>
						<Timeline
							target={
								<Div flex itemsCenter justifyCenter py150>
									<Div maxW={960}>
										<Div fontBold textXl mb15>
											{pagesWording.index.values.title[locale]}
										</Div>
										<Div
											style={{
												display: "grid",
												gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr 1fr",
												gridTemplateRows: 300,
												gridRowGap: 20,
												gridColumnGap: 20,
											}}
										>
											{valueContents.map((content, index) => {
												return (
													<Div
														relative
														col={!isTablet}
														overflowHidden
														rounded2xl
														p0
														cursorPointer
														key={content.title}
														h300={isTablet}
														clx={`group transition hover:transition-all`}
													>
														<Div absolute wFull hFull p20 clx={"group-hover:backdrop-blur-lg"}>
															<Div relative wFull hFull>
																<Div
																	fontBold
																	maxW={250}
																	pb15
																	leadingNone
																	clx={"text-20 transition group-hover:transition-all group-hover:translate-y-10 group-hover:text-30"}
																>
																	{content.title}
																</Div>
																<Div
																	clx={
																		"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 group-hover:text-15"
																	}
																>
																	{content.desc}
																</Div>
																<Div fontNormal w30 h30 absolute bottom0 right0 clx={"transition group-hover:transition-all group-hover:opacity-0"}>
																	<PlusCircleIcon />
																</Div>
															</Div>
														</Div>
														<Div imgTag src={content.img} objectCover hFull wFull></Div>
													</Div>
												);
											})}
										</Div>
									</Div>
								</Div>
							}
						>
							<Tween from={{ y: 400 }} to={{ y: 0 }} />
						</Timeline>
					</Timeline>
				)}
			</Scene>
		</Div>
	);
};

const Content = () => {
	return (
		<Controller>
			<Div relative bgGray100>
				<TopBar mode={"light"} />
				<Main />
				<AboutUs />
				<Mission />
				<Values />
				<Footer />
			</Div>
		</Controller>
	);
};

export default function Index() {
	return (
		<BasicHeadWrapper>
			<Content />
		</BasicHeadWrapper>
	);
}
