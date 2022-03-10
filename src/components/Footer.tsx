import { useRouter } from "next/router";
import { urls } from "src/modules/urls";
import { globalsWording } from "src/wording/globals";
import Col from "./Col";
import Div from "./Div";
import Row from "./Row";

const Footer = () => {
	const { locale, pathname } = useRouter();
	const pagesInfo = [
		{ name: globalsWording.footer.pages.home[locale], url: urls.index },
		{ name: globalsWording.footer.pages.team[locale], url: urls.team.index },
		{ name: globalsWording.footer.pages.portfolio[locale], url: urls.portfolio.index },
	];
	return (
		<Div bgBlack textWhite py150 px30>
			<Row mxAuto maxW={960} mb100>
				<Col pr0 style={{ flex: 2 }}>
					<Div mb20 fontBold>
						{globalsWording.footer.intro[locale]}
					</Div>
					<Div cursorPointer aTag href={globalsWording.footer.banner.link[locale]} clx={"timeline colorful colorful2"}>
						{globalsWording.footer.banner.wording[locale]}
					</Div>
				</Col>
				<Col></Col>
				<Col auto pl0>
					{pagesInfo.map((page) => {
						return (
							<Div cursorPointer mb20 key={page.name}>
								<Div aTag href={page.url} clx={pathname == page.url && "colorful colorful2"}>
									{page.name}
								</Div>
							</Div>
						);
					})}
				</Col>
			</Row>
			<Row mxAuto maxW={960} whitespaceNowrap>
				<Col pr0>
					<Div>©Sooni Labs</Div>
				</Col>
				<Col></Col>
				<Col auto pl0>
					<Row gapX={20}>
						<Col px0 cursorPointer>
							<Div aTag href={"mailto:contact@soonilabs.com"}>
								<Div imgTag src={"images/mailIcon.png"} w30 h30></Div>
							</Div>
						</Col>
						<Col px0 cursorPointer>
							<Div aTag href={"https://www.instagram.com/sooni__official/"}>
								<Div imgTag src={"images/instagramIcon.png"} w30 h30></Div>
							</Div>
						</Col>
						<Col pl0 cursorPointer>
							<Div aTag href={"https://twitter.com/soonilabs"}>
								<Div imgTag src={"images/twitterIcon.png"} w30 h30></Div>
							</Div>
						</Col>
					</Row>
				</Col>
			</Row>
		</Div>
	);
};

export default Footer;
