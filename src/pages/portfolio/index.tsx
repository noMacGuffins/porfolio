import { NextPage } from "next";
import Div from "src/components/Div";
import TopBar from "src/components/TopBar";
import { pagesWording } from "src/wording/pages";
import Detail from "src/components/modals/Detail";
import Footer from "src/components/Footer";
import useIsTablet from "src/hooks/useIsTablet";
import { useRouter } from "next/router";
import BasicHeadWrapper from "src/components/BasicHeadWrapper";
// import "src/scripts/cursorMove";
import Row from "src/components/Row";
import Col from "src/components/Col";

const Content = () => {
	const isTablet = useIsTablet();
	const { locale } = useRouter();

	const portfolioInfo = [
		{
			name: pagesWording.portfolio.index.items.founded.name[locale],
			desc: pagesWording.portfolio.index.items.founded.desc[locale],
			visual: "images/sooniLabsIconNew.png",
			isImg: true,
		},
		{
			name: pagesWording.portfolio.index.items.thinktomi.name[locale],
			desc: pagesWording.portfolio.index.items.thinktomi.desc[locale],
			visual: "images/thinktomiIcon.png",
			isImg: true,
		},
		{
			name: pagesWording.portfolio.index.items.pitchForce.name[locale],
			desc: pagesWording.portfolio.index.items.pitchForce.desc[locale],
			visual: "images/pitchForceLogo.png",
			isImg: true,
		},
		{
			name: pagesWording.portfolio.index.items.gomz.name[locale],
			desc: pagesWording.portfolio.index.items.gomz.desc[locale],
			visual: "images/portfolio/gomzIllust.png",
			isImg: true,
		},
		{
			name: pagesWording.portfolio.index.items.gomzSpace.name[locale],
			desc: pagesWording.portfolio.index.items.gomzSpace.desc[locale],
			visual: "images/portfolio/betterWorldBlueLogo.png",
			isImg: true,
		},
	];

	return (
		<Div>
			<TopBar mode={"light"}></TopBar>
			<Div pt200 pb100>
				<Div row={!isTablet} pb100 maxW={1200} mxAuto px30>
					<Div flex itemsEnd leadingNone auto textXxl={!isTablet} fontSize60={isTablet} fontBold clx={"colorful colorful2"} py0>
						{pagesWording.portfolio.index.title[locale]}
					</Div>
				</Div>
				<Div maxW={1200} mxAuto px30>
					{portfolioInfo.map((content, index) => {
						const isRightElement = index % 2 == 1;
						const Info = () => {
							return (
								<Div flex justifyEnd={isRightElement && !isTablet} py20>
									<Div maxW={300}>
										<Div
											relative
											overflowHidden
											rounded2xl
											p0
											cursorPointer
											h250={index > 1}
											w250={index > 1}
											h200={index <= 1}
											w200={index <= 1}
											auto
										>
											{content.isImg ? (
												<Div imgTag src={content.visual} objectCover hFull wFull></Div>
											) : (
												<Div objectCover hFull wFull bgBlack p20>
													<video autoPlay={!isTablet} width="100%" muted loop>
														<source src={content.visual} type="video/mp4" />
													</video>
												</Div>
											)}
										</Div>
										<Div flex itemsEnd>
											<Div>
												<Div textXl fontBold my5>
													{content.name}
												</Div>
												<Div>{content.desc}</Div>
											</Div>
										</Div>
									</Div>
								</Div>
							);
						};
						return (
							<Row key={index}>
								{!isTablet && <Col px40>{isRightElement && <Info />}</Col>}

								<Col px40 borderL2 borderGray500 relative>
									<Div absolute left={-12} rounded50 bottom30 w20 h20 bgGray700 />
									{(!isRightElement || isTablet) && <Info />}
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
