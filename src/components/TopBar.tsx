import { GlobeAltIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import useIsTablet from "src/hooks/useIsTablet";
import { modalActions } from "src/store/reducers/modalReducer";
import { RootState } from "src/store/reducers/rootReducer";
import Link from "next/link";
import Col from "./Col";
import Div from "./Div";
import Row from "./Row";
import { useRouter } from "next/router";

const TopBar = ({ mode }) => {
	const { locale } = useRouter();
	const dispatch = useDispatch();
	const { isLoggedIn, walletType, selectedAddress } = useSelector((state: RootState) => ({
		isLoggedIn: state.auth.isLoggedIn,
		walletType: state.auth.walletType,
		selectedAddress: state.auth.klaytnAddress,
	}));
	const isTablet = useIsTablet();
	const onClickLogin = () => {
		if (isLoggedIn && selectedAddress) return;
		dispatch(modalActions.setSignInEnabled(true));
	};
	const logoSrc = mode == "dark" ? "static/images/basicBearWhite.png" : "static/images/basicBearNoBg.png";
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
					<Col auto {...loginButtonProps} rounded3xl pt2 cursorPointer onClick={onClickLogin}>
						<Div spanTag fontLight fontMedium>
							{isLoggedIn && selectedAddress ? selectedAddress.substring(0, 5) + "..." : "Login"}
						</Div>
					</Col>
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
				<Col auto rounded3xl pt2 cursorPointer {...loginButtonProps} onClick={onClickLogin}>
					<Div spanTag fontLight fontMedium>
						{isLoggedIn && selectedAddress ? selectedAddress.substring(0, 5) + "..." : "Login"}
					</Div>
				</Col>
			</Row>
		</Div>
	);
};

export default TopBar;
