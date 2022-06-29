import { NextPage } from "next";
import Div from "src/components/Div";
import TopBar from "src/components/TopBar";
import { pagesWording } from "src/wording/pages";
import Footer from "src/components/Footer";
import { PlusCircleIcon } from "@heroicons/react/outline";
import useIsTablet from "src/hooks/useIsTablet";
import { useRouter } from "next/router";
import BasicHeadWrapper from "src/components/BasicHeadWrapper";
// import "src/scripts/cursorMove";
import Col from "src/components/Col";
import { moveTo } from "src/modules/routerHelper";
import { IMAGES } from "src/modules/images";

const Content = () => {
	const isTablet = useIsTablet();
	const { locale } = useRouter();

	const teamMembersInfo = [
		{
			name: pagesWording.team.index.members.minjun.name[locale],
			position: pagesWording.team.index.members.minjun.position[locale],
			desc: pagesWording.team.index.members.minjun.desc[locale],
			specialty: pagesWording.team.index.members.minjun.specialty[locale],
			countries: pagesWording.team.index.members.minjun.countries,
			img: IMAGES.team.minjunkim,
		},
		{
			name: pagesWording.team.index.members.yeajean.name[locale],
			position: pagesWording.team.index.members.yeajean.position[locale],
			desc: pagesWording.team.index.members.yeajean.desc[locale],
			specialty: pagesWording.team.index.members.yeajean.specialty[locale],
			countries: pagesWording.team.index.members.yeajean.countries,
			img: IMAGES.team.yeajeanlee,
		},
		{
			name: pagesWording.team.index.members.eric.name[locale],
			position: pagesWording.team.index.members.eric.position[locale],
			desc: pagesWording.team.index.members.eric.desc[locale],
			specialty: pagesWording.team.index.members.eric.specialty[locale],
			countries: pagesWording.team.index.members.eric.countries,
			img: IMAGES.team.erickim,
		},
		{
			name: pagesWording.team.index.members.ian.name[locale],
			position: pagesWording.team.index.members.ian.position[locale],
			desc: pagesWording.team.index.members.ian.desc[locale],
			specialty: pagesWording.team.index.members.ian.specialty[locale],
			countries: pagesWording.team.index.members.ian.countries,
			img: IMAGES.team.sehanpark,
		},
		{
			name: pagesWording.team.index.members.jaehwan.name[locale],
			position: pagesWording.team.index.members.jaehwan.position[locale],
			desc: pagesWording.team.index.members.jaehwan.desc[locale],
			specialty: pagesWording.team.index.members.jaehwan.specialty[locale],
			countries: pagesWording.team.index.members.jaehwan.countries,
			img: IMAGES.team.jaehwanjeong,
		},
		{
			name: pagesWording.team.index.members.seungan.name[locale],
			position: pagesWording.team.index.members.seungan.position[locale],
			desc: pagesWording.team.index.members.seungan.desc[locale],
			specialty: pagesWording.team.index.members.seungan.specialty[locale],
			countries: pagesWording.team.index.members.seungan.countries,
			img: IMAGES.team.seunganjung,
		},
		{
			name: pagesWording.team.index.members.jieun.name[locale],
			position: pagesWording.team.index.members.jieun.position[locale],
			desc: pagesWording.team.index.members.jieun.desc[locale],
			specialty: pagesWording.team.index.members.jieun.specialty[locale],
			countries: pagesWording.team.index.members.jieun.countries,
			img: IMAGES.team.jieunpark,
		},
		{
			name: pagesWording.team.index.members.jade.name[locale],
			position: pagesWording.team.index.members.jade.position[locale],
			desc: pagesWording.team.index.members.jade.desc[locale],
			specialty: pagesWording.team.index.members.jade.specialty[locale],
			countries: pagesWording.team.index.members.jade.countries,
			img: IMAGES.team.tyler,
		},
	];

	return (
		<Div>
			<TopBar mode={"light"}></TopBar>
			<Div pt200 pb100 borderBlack borderB2>
				<Div row={!isTablet} pb100 maxW={1200} mxAuto px30 gapX={30}>
					<Div col={!isTablet} leadingNone colAuto textXxl={!isTablet} fontSize60={isTablet} fontBold clx={"colorful colorful2"}>
						{pagesWording.team.index.title[locale]}
					</Div>
					<Div flex col={!isTablet} itemsEnd py0 maxW={700} mt20>
						<Div textLg fontBold textLeft textGray800>
							{pagesWording.team.index.subtitle[locale][0]}
							{isTablet ? " " : <br />}
							{pagesWording.team.index.subtitle[locale][1]}
						</Div>
					</Div>
				</Div>
				<Div
					maxW={1200}
					mxAuto
					px30
					style={{
						display: "grid",
						gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr 1fr",
						gridTemplateRows: "minmax(400px, auto)",
						gridRowGap: 100,
						gridColumnGap: 100,
					}}
				>
					{teamMembersInfo.map((content) => {
						return (
							<Div key={content.name} flex itemsEnd>
								<Div wFull>
									<Div relative overflowHidden rounded2xl p0 cursorPointer h300={isTablet} h400={!isTablet}>
										<Div absolute wFull hFull clx={"group transition hover:backdrop-blur-md hover:transition-all"} p0>
											<Div relative wFull hFull flex itemsCenter justifyCenter>
												<Div
													textWhite
													fontBold
													px20
													rounded2xl
													pb20
													clx={
														"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 group-hover:text-15"
													}
												>
													{/* <Div imgTag src={content.school} w100 h100 mxAuto bgWhite rounded200 /> */}
													{content.desc}
												</Div>
												<Div
													m10
													textBlack
													fontNormal
													w30
													h30
													absolute
													bottom0
													right0
													clx={"transition group-hover:transition-all group-hover:opacity-0"}
												>
													<PlusCircleIcon />
												</Div>
											</Div>
										</Div>
										<Div imgTag src={content.img} objectCover hFull wFull></Div>
									</Div>
									<Div textXl fontBold my5>
										{content.name}
									</Div>
									<Div textLg>{content.position}</Div>
									{/* {content.devLogs && (
										<Div textInfo cursorPointer onClick={() => moveTo(content.devLogs)}>
											Dev Logs
										</Div>
									)} */}
									<Div italic>{content.countries}</Div>
								</Div>
							</Div>
						);
					})}
				</Div>
			</Div>
			<Footer />
		</Div>
	);
};

const Index: NextPage = () => {
	return (
		<BasicHeadWrapper>
			<Content />
		</BasicHeadWrapper>
	);
};

export default Index;