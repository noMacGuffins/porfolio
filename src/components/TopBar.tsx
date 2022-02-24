import { GlobeAltIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import useIsTablet from "src/hooks/useIsTablet";

import { RootState } from "src/store/reducers/rootReducer";
import Link from "next/link";
import Col from "./Col";
import Div from "./Div";
import Row from "./Row";
import { useRouter } from "next/router";
import Helmet from "react-helmet";

const TopBar = ({ mode }) => {
	const { locale } = useRouter();
	const dispatch = useDispatch();

	const isTablet = useIsTablet();

	const logoSrc = mode == "dark" ? "static/images/SooniLabs.png" : "static/images/SooniLabs.png";
	const logoTextProps = mode == "dark" ? { textWhite: true } : { textPrimary: true };
	const textColorProp = mode == "dark" ? { textWhite: true } : { textBlack: true };
	const loginButtonProps = mode == "dark" ? { bgWhite: true, textBlack: true } : { bgBlack: true, textWhite: true };

	return (
		<>
			<Helmet>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;600&family=Taviraj:wght@100&display=swap" rel="stylesheet" />
			</Helmet>
			<Div fixed bgWhite wFull z100  {...textColorProp} fontFamily={"Be Vietnam Pro"}>
				<Row maxW={1500} mxAuto flex justifyCenter pt10>
					<Col auto cursorPointer>
						<Link href="/home" passHref>
							<Div pl20 imgTag src={logoSrc} h={100} w={100} style={{ objectFit: "cover" }} />
						</Link>
					</Col>
					<Col></Col>
					<Col auto flex itemsCenter cursorPointer>
						<Div spanTag fontBold px20>
							About us
						</Div>
					</Col>
					<Col auto flex itemsCenter cursorPointer>
						<Div spanTag fontBold px20>
							Team
						</Div>
					</Col>
					<Link href="/gomz-space" passHref>
						<Col auto flex itemsCenter cursorPointer>
							<Div spanTag fontBold px20>
								Portfolio
							</Div>
						</Col>
					</Link>
					<Col auto flex itemsCenter cursorPointer>
						<Div spanTag fontBold px20>
							Partnerships
						</Div>
					</Col>
					<Col auto flex itemsCenter cursorPointer>
						<Div spanTag fontBold px20>
							Contact
						</Div>
					</Col>
					<Col auto flex itemsCenter cursorPointer>
						<Div spanTag fontBold px20 fontSize10>
							EN/KR
						</Div>
					</Col>
					<Col auto px10></Col>
				</Row>
			</Div>		
		
		</>
		
	);
};

export default TopBar;
