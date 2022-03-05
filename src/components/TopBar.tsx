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
	const textColorProp = mode == "dark" ? { textWhite: true } : { textBlack: true };

	return (
		<>
			<Helmet>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;600&family=Taviraj:wght@100&display=swap" rel="stylesheet" />
			</Helmet>
			<Div fixed wFull z100 {...textColorProp} fontFamily={"Be Vietnam Pro"}>
				<Row flex justifyCenter py20 maxW={1000} mxAuto>
					<Col auto flex itemsCenter cursorPointer>
						<Link href="/team" passHref>
							<Div spanTag fontBold px20>
								Team
							</Div>
						</Link>
					</Col>
					<Col auto flex itemsCenter cursorPointer>
						<Link href="/aboutus" passHref>
							<Div spanTag fontBold px20>
								Portfolio
							</Div>
						</Link>
					</Col>
					<Col auto flex itemsCenter cursorPointer>
						<Link href="/aboutus" passHref>
							<Div spanTag fontBold px20>
								Partnerships
							</Div>
						</Link>
					</Col>
					<Col auto flex itemsCenter cursorPointer>
						<Link href="/aboutus" passHref>
							<Div spanTag fontBold px20>
								Contact
							</Div>
						</Link>
					</Col>
				</Row>
			</Div>
		</>
	);
};

export default TopBar;
