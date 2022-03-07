import { useRouter } from "next/router";
import { globalsWording } from "src/wording/globals";
import Col from "./Col";
import Div from "./Div";
import Row from "./Row";

const Footer = () => {
	const { locale } = useRouter();
	return (
		<Div bgBlack textWhite py150 px30>
			<Row mxAuto maxW={960} mb100>
				<Col pr0 style={{ flex: 2 }}>
					<Div mb20 fontBold>
						{globalsWording.footer.intro[locale]}
					</Div>
					<Div cursorPointer>{globalsWording.footer.subscribe[locale]}</Div>
				</Col>
				<Col></Col>
				<Col auto pl0>
					<Div cursorPointer mb20>
						{globalsWording.footer.pages.team[locale]}
					</Div>
					<Div cursorPointer mb20>
						{globalsWording.footer.pages.portfolio[locale]}
					</Div>
					<Div cursorPointer mb20>
						{globalsWording.footer.pages.contact[locale]}
					</Div>
				</Col>
			</Row>
			<Row mxAuto maxW={960}>
				<Col pr0>
					<Div>ⒸSooni Labs</Div>
				</Col>
				<Col></Col>
				<Col auto pl0>
					<Row gapX={20}>
						<Col px0 cursorPointer>
							<Div imgTag src={"images/mailIcon.png"} w30 h30></Div>
						</Col>
						<Col px0 cursorPointer>
							<Div imgTag src={"images/instagramIcon.png"} w30 h30></Div>
						</Col>
						<Col pl0 cursorPointer>
							<Div imgTag src={"images/twitterIcon.png"} w30 h30></Div>
						</Col>
					</Row>
				</Col>
			</Row>
		</Div>
	);
};

export default Footer;
