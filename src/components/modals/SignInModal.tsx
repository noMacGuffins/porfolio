import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";
import Div from "../Div";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/reducers/rootReducer";
import { modalActions } from "src/store/reducers/modalReducer";
import Row from "../Row";
import Col from "../Col";
import { images } from "src/modules/images";
import { modalsWording } from "src/wording/modals";
import { authActions } from "src/store/reducers/authReducer";
import { KAIKAS } from "src/modules/constants";

export default function SignInModal() {
	const dispatch = useDispatch();
	const { signInEnabled, locale } = useSelector((state: RootState) => ({
		signInEnabled: state.modal.signInEnabled,
		locale: state.app.locale,
	}));
	const [error, setError] = useState(<Div spanTag>{modalsWording.signIn.encourageKlip[locale]}</Div>);
	const onClose = () => {
		dispatch(modalActions.setSignInEnabled(false));
		setError(<Div spanTag>{modalsWording.signIn.encourageKlip[locale]}</Div>);
	};
	const onClickKaikas = async () => {
		// @ts-ignore
		if (typeof window !== "undefined" && typeof window.klaytn !== "undefined") {
			const klaytn = window["klaytn"];
			const unlocked = await klaytn._kaikas.isUnlocked();
			if (!unlocked || !klaytn._kaikas.isEnabled()) {
				try {
					console.log(klaytn);
					const res = await klaytn.enable();
					const loginParams = {
						walletType: KAIKAS,
						address: window["klaytn"].selectedAddress,
					};
					dispatch(authActions.login(loginParams));
					if (res[0]) dispatch(modalActions.setSignInEnabled(false));
				} catch (error) {
					setError(
						<Div spanTag textWarning>
							{modalsWording.signIn.userCancelledRequest[locale]}
						</Div>,
					);
				}
			} else {
				setError(
					<Div spanTag textSuccess>
						{modalsWording.signIn.alreadyLoggedIn[locale]}
					</Div>,
				);
				const loginParams = {
					walletType: KAIKAS,
					address: window["klaytn"].selectedAddress,
				};
				dispatch(authActions.login(loginParams));
			}
		} else {
			setError(
				<Div spanTag textDanger>
					{modalsWording.signIn.walletNotDetected.kaikas[locale]}
				</Div>,
			);
		}
	};

	return (
		<Modal open={signInEnabled} onClose={onClose}>
			<Div maxW={600} mx20 px15>
				<Div textCenter py30>
					<Div spanTag fontBold textXl>
						{modalsWording.signIn.title[locale]}
					</Div>
				</Div>
				<Row>
					<Col
						cursorPointer
						roundedXl
						mr15
						py30
						clx={"transition delay-50 bg-gray-100 hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 duration-150 "}
					>
						<Div px50 py10>
							<Div imgTag src={images.KAKAO_KLIP_ICON}></Div>
						</Div>
						<Div px20 py10 textCenter>
							<Div spanTag fontBold>
								{modalsWording.signIn.methods.kakaoKlip[locale]}
							</Div>
						</Div>
					</Col>
					<Col
						roundedXl
						bgGray100
						cursorPointer
						ml15
						py30
						onClick={onClickKaikas}
						clx={"transition delay-50 bg-gray-100 hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 duration-150 "}
					>
						<Div px50 py10>
							<Div imgTag src={images.KAIKAS_ICON}></Div>
						</Div>
						<Div px20 py10 textCenter>
							<Div spanTag fontBold>
								{modalsWording.signIn.methods.kaikas[locale]}
							</Div>
						</Div>
					</Col>
				</Row>
				<Div textCenter pb15 pt30>
					<Div spanTag fontLight>
						{error}
					</Div>
				</Div>
				<Div textCenter pb30 pt15>
					<Div spanTag fontLight underline>
						{modalsWording.signIn.noWallet[locale]}
					</Div>
				</Div>
			</Div>
		</Modal>
	);
}
