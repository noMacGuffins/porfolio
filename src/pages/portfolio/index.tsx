import { NextPage } from "next";
import Div from "src/components/Div";
import TopBar from "src/components/TopBar";
import { pagesWording } from "src/wording/pages";
import Footer from "src/components/Footer";
import useIsTablet from "src/hooks/useIsTablet";
import { useRouter } from "next/router";
import BasicHeadWrapper from "src/components/BasicHeadWrapper";
import Row from "src/components/Row";
import Col from "src/components/Col";
import { IMAGES } from "src/modules/images";

const Content = () => {
	const isTablet = useIsTablet();
	const { locale } = useRouter();

	const portfolioInfo = [
		{
			name: pagesWording.portfolio.index.items.founded.name[locale],
			desc: pagesWording.portfolio.index.items.founded.desc[locale],
			visual: IMAGES.sooniLabsIconNew,
			isImg: true,
		},
		{
			name: pagesWording.portfolio.index.items.thinktomi.name[locale],
			desc: pagesWording.portfolio.index.items.thinktomi.desc[locale],
			visual: IMAGES.thinktomiIcon,
			isImg: true,
		},
		{
			name: pagesWording.portfolio.index.items.pitchForce.name[locale],
			desc: pagesWording.portfolio.index.items.pitchForce.desc[locale],
			visual: IMAGES.pitchForceLogo,
			isImg: true,
		},
		{
			name: pagesWording.portfolio.index.items.gomz.name[locale],
			desc: pagesWording.portfolio.index.items.gomz.desc[locale],
			visual: IMAGES.portfolio.webeIllust,
			link: "https://www.weirdbears.io",
			isImg: true,
		},
		{
			name: pagesWording.portfolio.index.items.gomzSpace.name[locale],
			desc: pagesWording.portfolio.index.items.gomzSpace.desc[locale],
			visual: IMAGES.portfolio.betterWorldBlueLogo,
			link: "https://www.betterworldapp.io",
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
									<Div maxW={300} aTag={content.link} href={content.link}>
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
											<Div imgTag src={content.visual} objectCover hFull wFull></Div>
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
