import Div from "src/components/Div";
import { pagesWording } from "src/wording/pages";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import useIsTablet from "src/hooks/useIsTablet";
import TopBar from "src/components/TopBar";
import "src/scripts/cursorMove";
import BasicHeadWrapper from "src/components/BasicHeadWrapper";
import { useRouter } from "next/router";
import Footer from "src/components/Footer";
import { globalsWording } from "src/wording/globals";
import classNames from "classnames";
import { IMAGES } from "src/modules/images";

const Introduction = () => {
	const isTablet = useIsTablet();
	const { locale } = useRouter();
	return (
		<Div h={"102vh"} relative flex itemsCenter justifyCenter clx={"radial-gradient"} px30>
			<Div maxW={600} fontBold textCenter leadingNone pb70 z100>
				<Div textXxl={!isTablet} fontSize60={isTablet} clx={"timeline"} mb10 textGray900>
					{pagesWording.soonilabs.main.title[locale]}
				</Div>
				<Div textXl={!isTablet} fontSize25={isTablet} clx={"timeline colorful colorful2"} textGray900>
					{pagesWording.soonilabs.main.motto[locale]}
				</Div>
			</Div>
			{!isTablet && (
				<Scene duration={200} pin={{ pushFollowers: true }}>
					{(progress) => (
						<Timeline totalProgress={progress} paused>
							<Timeline
								target={
									<Div absolute left={-10} top={"30%"} bgBlack px30 py20 w80 rounded2xl cursorPointer>
										<Div
											aTag
											href={globalsWording.footer.banner.link[locale]}
											fontBold
											textWhite
											style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
											clx={" colorful colorful2"}
										>
											{globalsWording.footer.banner.wording[locale]}
										</Div>
									</Div>
								}
							>
								<Tween from={{ x: 0 }} to={{ x: -200 }} />
							</Timeline>
						</Timeline>
					)}
				</Scene>
			)}
		</Div>
	);
};

const ForYou = () => {
	const { locale } = useRouter();
	const isTablet = useIsTablet();
	return (
		<Div relative wScreen px30 py150={!isTablet}>
			<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0} offset={200}>
				{(progress) => (
					<Timeline totalProgress={progress} paused>
						<Timeline target={<Div absolute top100 left={"30%"} w720 h720 rounded3000 style={{ backgroundColor: "rgba(0, 256, 0, 0.15)" }}></Div>}>
							<Tween from={{ scaleX: 0, scaleY: 0, y: 0, x: 0 }} to={{ scaleX: 1, scaleY: 1 }} />
						</Timeline>
						<Timeline
							style={{ zIndex: 100 }}
							target={
								<Div z100 maxW={960} mxAuto flex={!isTablet} itemsEnd justifyEnd clx={!isTablet && "transition group hover:transition-all"}>
									<Div imgTag src={IMAGES.helping} w400></Div>
									<Div absolute={!isTablet} top100 left0 clx={"transition group-hover:-translate-y-40"}>
										<Div maxW={400} fontBold mb10 clx={"text-40 z-10 transition group-hover:transition-all"}>
											{pagesWording.index.values.helping.title[locale]}
										</Div>
										<Div
											maxW={500}
											mb15
											z20
											clx={classNames("z-10 text-15 transition group-hover:transition-all group-hover:text-25 group-hover:text-20")}
										>
											{pagesWording.index.values.helping.desc[locale]}
										</Div>
									</Div>
								</Div>
							}
						>
							<Tween from={{ y: 400, opacity: 0 }} to={{ y: 0, opacity: 1 }} />
						</Timeline>
					</Timeline>
				)}
			</Scene>
		</Div>
	);
};

const StatusQuo = () => {
	const { locale } = useRouter();
	const isTablet = useIsTablet();
	return (
		<Div relative wScreen px30 clx={!isTablet && "transition group hover:transition-all"} py100>
			<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0} offset={900}>
				{(progress) => (
					<Timeline totalProgress={progress} paused>
						<Timeline
							target={
								<Div
									absolute
									top0
									triggerHook={1}
									left={isTablet ? "-120%" : "30%"}
									w800
									h800
									rounded3000
									style={{ backgroundColor: "rgba(0, 256, 256, 0.15)" }}
								></Div>
							}
						>
							<Tween from={{ scaleX: 0, scaleY: 0, y: 0, x: 0 }} to={{ scaleX: 1, scaleY: 1 }} />
						</Timeline>
						<Timeline
							target={
								<Div z100 maxW={960} mxAuto flex={!isTablet} itemsEnd justifyStart>
									<Div imgTag src={IMAGES.stereotypes} w500></Div>
									<Div absolute={!isTablet} top100 right0 clx={"transition group-hover:-translate-y-40"}>
										<Div maxW={400} fontBold mb10 clx={"text-40 z-10 transition group-hover:transition-all"}>
											{pagesWording.index.values.statusQuo.title[locale]}
										</Div>
										<Div
											maxW={400}
											mb15
											z20
											clx={classNames("z-10 text-15 transition group-hover:transition-all group-hover:text-25 group-hover:text-20")}
										>
											{pagesWording.index.values.statusQuo.desc[locale]}
										</Div>
									</Div>
								</Div>
							}
						>
							<Tween from={{ y: 400, opacity: 0 }} to={{ y: 0, opacity: 1 }} />
						</Timeline>
					</Timeline>
				)}
			</Scene>
		</Div>
	);
};

const CommunityObsessed = () => {
	const { locale } = useRouter();
	const isTablet = useIsTablet();
	return (
		<Div relative wScreen px30 clx={!isTablet && "transition group hover:transition-all"} py100>
			<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0} offset={1500}>
				{(progress) => (
					<Timeline totalProgress={progress} paused>
						<Timeline
							target={
								<Div absolute triggerHook={1} top0 left={"30%"} w600 h600 rounded3000 style={{ backgroundColor: "rgba(0, 256, 0, 0.15)" }}></Div>
							}
						>
							<Tween from={{ scaleX: 0, scaleY: 0, y: 0, x: 0 }} to={{ scaleX: 1, scaleY: 1 }} />
						</Timeline>
						<Timeline
							target={
								<Div z100 maxW={960} mxAuto flex={!isTablet} itemsEnd justifyEnd>
									<Div imgTag src={IMAGES.community} w500></Div>
									<Div absolute={!isTablet} top0 left0 clx={"transition group-hover:-translate-y-40"}>
										<Div fontBold maxW={300} mb10 clx={"text-40 z-10 transition group-hover:transition-all"}>
											{pagesWording.index.values.community.title[locale][0]}
											{isTablet && <br />}
											{pagesWording.index.values.community.title[locale][1]}
										</Div>
										<Div
											maxW={400}
											mb15
											z20
											clx={classNames("z-10 text-15 transition group-hover:transition-all group-hover:text-25 group-hover:text-20")}
										>
											{pagesWording.index.values.community.desc[locale]}
										</Div>
									</Div>
								</Div>
							}
						>
							<Tween from={{ y: 400, opacity: 0 }} to={{ y: 0, opacity: 1 }} />
						</Timeline>
					</Timeline>
				)}
			</Scene>
		</Div>
	);
};

const Mission = () => {
	const { locale } = useRouter();
	const isTablet = useIsTablet();
	return (
		<Div relative wScreen overflowHidden px30 style={{ backgroundColor: isTablet && "rgba(0, 256, 256, 0.15)" }}>
			<Scene duration={500} pin={{ pushFollowers: false }} triggerHook={0} offset={2100}>
				{(progress) => (
					<Timeline totalProgress={progress} paused>
						<Timeline
							target={
								<Div flex itemsCenter justifyCenter py150 z100>
									<Div maxW={960} textCenter fontBold>
										<Div textLg>{pagesWording.index.mission.subtitle[locale]}</Div>
									</Div>
								</Div>
							}
						>
							<Tween from={{ y: 400, opacity: 0 }} to={{ y: 0, opacity: 1 }} />
						</Timeline>
						{!isTablet && (
							<Timeline
								target={<Div absolute top0 left={"30%"} w1000 h1000 rounded3000 style={{ backgroundColor: "rgba(0, 256, 256, 0.15)" }}></Div>}
							>
								<Tween from={{ scaleX: 0, scaleY: 0, y: 0, x: 0 }} to={{ scaleX: 2.5, scaleY: 2.5 }} />
							</Timeline>
						)}
					</Timeline>
				)}
			</Scene>
		</Div>
	);
};

const Content = () => {
	return (
		<Controller>
			<Div relative bgGray100 overflowHidden>
				<TopBar mode={"light"} />
				<Introduction />
				<ForYou />
				<StatusQuo />
				<CommunityObsessed />
				<Mission />
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
