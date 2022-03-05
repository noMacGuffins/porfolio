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
		<Div absolute wFull z100 {...textColorProp}>
			<Row flex justifyCenter py20 mx30>
				<Col auto flex itemsCenter pr0>
					{/* <Div imgTag src={"images/sooniLabsOrangeIconNoBg.png"} h={200} w={200} style={{ opacity: 0.8 }}></Div> */}
					<Div imgTag src={"images/sooniLabsIconNoBg.png"} h={591 / 6} w={422 / 6} style={{ opacity: 0.9 }} mx20></Div>
				</Col>
				<Col />
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
							Contact
						</Div>
					</Link>
				</Col>
			</Row>
		</Div>
	);
};

export default TopBar;
