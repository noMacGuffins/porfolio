import { NextPage } from "next";
import Div from "src/components/Div";
import TopBar from "src/components/TopBar";
import { pagesWording } from "src/wording/pages";
import Detail from "src/components/modals/Detail";
import Footer from "src/components/Footer";
import useIsTablet from "src/hooks/useIsTablet";
import { useRouter } from "next/router";
import BasicHeadWrapper from "src/components/BasicHeadWrapper";
import "src/scripts/cursorMove";
import Row from "src/components/Row";
import Col from "src/components/Col";

const Content = () => {
	const isTablet = useIsTablet();
	const { locale } = useRouter();

	const teamMembersInfo = [
		{
			name: pagesWording.content.index.items.gomz.name[locale],
			desc: pagesWording.content.index.items.gomz.desc[locale],
			visual: "images/portfolio/gomzNoBg.png",
			isImg: true,
		},
		{
			name: pagesWording.content.index.items.gomzSpace.name[locale],
			desc: pagesWording.content.index.items.gomzSpace.desc[locale],
			visual: "images/portfolio/gomzSpace.mp4",
			isImg: false,
		},
	];

	return (
		<Div clx={!isTablet && "radial-gradient"}>
			<TopBar mode={"light"}></TopBar>
			<Div pt200 pb100 borderBlack borderB2>
				<Div pb100 maxW={1200} mxAuto px30 gapX={30}>
					<Div leadingNone textXxl={!isTablet} fontSize60={isTablet} fontBold clx={"colorful colorful2"}>
						{pagesWording.content.index.title[locale]}
					</Div>
				</Div>
				<Div maxW={1200} mxAuto px30>
					{teamMembersInfo.map((content) => {
						return (
							<Row key={content.name} mb50 gapX={30}>
								<Col relative overflowHidden rounded2xl p0 cursorPointer h300 w300 auto>
									{content.isImg ? (
										<Div imgTag src={content.visual} objectCover hFull wFull></Div>
									) : (
										<Div objectCover hFull wFull bgBlack p20>
											<video autoPlay width="100%" muted loop>
												<source src={content.visual} type="video/mp4" />
											</video>
										</Div>
									)}
								</Col>
								<Col flex itemsEnd>
									<Div>
										<Div textXl fontBold my5>
											{content.name}
										</Div>
										<Div textLg>{content.desc}</Div>
									</Div>
								</Col>
							</Row>
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
