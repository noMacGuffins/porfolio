import { NextPage } from "next";
import Div from "src/components/Div";
import TopBar from "src/components/TopBar";
import { pagesWording } from "src/wording/pages";
import Detail from "src/components/modals/Detail";
import Footer from "src/components/Footer";
import { PlusCircleIcon } from "@heroicons/react/outline";
import useIsTablet from "src/hooks/useIsTablet";
import { useRouter } from "next/router";
import BasicHeadWrapper from "src/components/BasicHeadWrapper";
import "src/scripts/cursorMove";

const Content = () => {
	const isTablet = useIsTablet();
	const { locale } = useRouter();

	const teamMembersInfo = [
		{
			name: "Min Jun Kim",
			position: "CEO",
			desc: (
				<>
					KAIST BTM undergraduate
					<br />
					NONCE
					<br />
					MSK
				</>
			),
			img: "images/team/minjunkim.jpg",
		},
		{
			name: "Yea Jean Lee",
			position: "CMO",
			desc: <>Yonsei Business Undergraduate</>,
			img: "images/team/minjunkim.jpg",
		},
		{
			name: "Min Su Kim",
			position: "CBO",
			desc: <>NYU Statistics Undergraduate</>,
			img: "images/team/minjunkim.jpg",
		},
		{
			name: "Ji Eun Park",
			position: "Creative Director",
			desc: <>Hong Kong PolyU Undergraduate</>,
			img: "images/team/minjunkim.jpg",
		},
		{
			name: "Jade Yang",
			position: "UI/UX designer",
			desc: <>KAIST Undergraduate</>,
			img: "images/team/minjunkim.jpg",
		},
		{
			name: "Se Han Park",
			position: "CTO",
			desc: <>KAIST Undergraduate</>,
			img: "images/team/sehanpark.jpg",
		},
		{
			name: "Jaehwan Jeong",
			position: "Blockchain Developer",
			desc: <>KAIST Undergraduate</>,
			img: "images/team/minjunkim.jpg",
		},
		{
			name: "Seung An Jung",
			position: "Server-side Developer",
			desc: <>KAIST Undergraduate</>,
			img: "images/team/minjunkim.jpg",
		},
	];

	return (
		<Div clx={!isTablet && "radial-gradient"}>
			<TopBar mode={"light"}></TopBar>
			<Div pt200 pb100 borderBlack borderB2>
				<Div row={!isTablet} pb100 maxW={1200} mxAuto px30>
					<Div flex itemsEnd leadingNone auto maxW={300} py0>
						<Div textXxl={!isTablet} fontSize60={isTablet} fontBold clx={"colorful colorful2"}>
							Our Team
						</Div>
					</Div>
					<Div flex itemsEnd py0 maxW={500} mt20>
						<Div textLg fontBold textLeft textGray700>
							A group of active problem solvers working together to provide value from blockchain for the world.
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
									<Div relative overflowHidden rounded2xl p0 cursorPointer h300={isTablet}>
										<Div absolute wFull hFull p20 clx={"group transition hover:backdrop-blur-md hover:transition-all"}>
											<Div relative wFull hFull>
												<Div
													fontBold
													maxW={250}
													clx={"text-20 transition group-hover:transition-all group-hover:translate-y-10 group-hover:text-30"}
												></Div>
												<Div
													textWhite
													fontBold
													clx={
														"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 group-hover:text-15"
													}
												>
													{content.desc}
												</Div>
												<Div textBlack fontNormal w30 h30 absolute bottom0 right0 clx={"transition group-hover:transition-all group-hover:opacity-0"}>
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
								</Div>
							</Div>
						);
					})}
				</Div>
			</Div>
			<Footer />
			<Detail />
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