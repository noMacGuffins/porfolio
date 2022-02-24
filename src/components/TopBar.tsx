import { GlobeAltIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import useIsTablet from "src/hooks/useIsTablet";

import { RootState } from "src/store/reducers/rootReducer";
import Link from "next/link";
import Col from "./Col";
import Div from "./Div";
import Row from "./Row";
import { useRouter } from "next/router";

const TopBar = ({ mode }) => {
	const { locale } = useRouter();
	const dispatch = useDispatch();

	const isTablet = useIsTablet();

	const logoSrc = mode == "dark" ? "static/images/SooniLabs.png" : "static/images/SooniLabs.png";
	const logoTextProps = mode == "dark" ? { textWhite: true } : { textPrimary: true };
	const textColorProp = mode == "dark" ? { textWhite: true } : { textBlack: true };
	const loginButtonProps = mode == "dark" ? { bgWhite: true, textBlack: true } : { bgBlack: true, textWhite: true };

	if (isTablet)
		return (
			<Div fixed bdBlurXl wFull pt20 pb10 z100 {...textColorProp}>
				<Row mxAuto flex justifyCenter pr20>
					<Col auto>
						<Row roundedLg px={20}>
							<Col auto px0>
								<Div imgTag src={logoSrc} h={30} w={30} style={{ objectFit: "cover" }} />
							</Col>
							<Col auto px0 pr8 flex itemsCenter {...logoTextProps}>
								<Div spanTag fontBold>
									Gomz
								</Div>
							</Col>
						</Row>
					</Col>
					<Col></Col>
					<Col auto px10></Col>
					
				</Row>
			</Div>
		);
	return (
		<Div fixed bdBlurXl wFull pt20 pb10 z100 {...textColorProp}>
			<Row maxW={960} mxAuto flex justifyCenter px30>
				<Col auto cursorPointer>
					<Link href="/home" passHref>
						<Row roundedLg px={20}>
							<Col auto px0>
								<Div imgTag src={logoSrc} h={30} w={30} style={{ objectFit: "cover" }} />
							</Col>
							<Col auto px0 pr8 flex itemsCenter>
								<Div spanTag fontBold {...logoTextProps}>
									Gomz
								</Div>
							</Col>
						</Row>
					</Link>
				</Col>
				<Col></Col>
				<Col auto pt1 cursorPointer>
					<Div spanTag fontLight>
						Gomz Gallery
					</Div>
				</Col>
				<Link href="/gomz-space" passHref>
					<Col auto pt1 cursorPointer>
						<Div spanTag fontLight>
							GomSpace Metaverse
						</Div>
					</Col>
				</Link>
				<Col auto pt1 cursorPointer>
					<Div spanTag fontLight>
						Roadmap
					</Div>
				</Col>
				<Col auto pt1 cursorPointer>
					<Div spanTag fontLight>
						Sooni
					</Div>
				</Col>
				<Col auto py4 cursorPointer>
					<GlobeAltIcon className="h-20 w-20 text-blue-500" />
				</Col>
				<Col auto px10></Col>
			</Row>
		</Div>
	);
};

export default TopBar;
