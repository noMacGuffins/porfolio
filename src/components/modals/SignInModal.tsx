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
import { HOME_URL, KAIKAS, KLIP } from "src/modules/constants";
import { klipPrepareAuth, klipRequestQRUrl, klipResultAuth } from "src/modules/klipApiHelper";
import { generateQR } from "src/modules/generateQR";
import RoundedButton from "../RoundedButton";

export default function SignInModal() {
	const dispatch = useDispatch();
	const { signInEnabled, locale } = useSelector((state: RootState) => ({
		signInEnabled: state.modal.signIn.enabled,
		locale: state.app.locale,
	}));
	const [qrCode, setQRCode] = useState({
		enabled: false,
		qrImage: null,
		requestKey: null,
	});
	const [error, setError] = useState(<Div spanTag>{modalsWording.signIn.encourageKlip[locale]}</Div>);
	const closeModal = () => {
		dispatch(modalActions.setSignInEnabled(false));
		setError(<Div spanTag>{modalsWording.signIn.encourageKlip[locale]}</Div>);
		setQRCode({
			enabled: false,
			qrImage: null,
			requestKey: null,
		});
	};
	const onClickKlipQRDone = async () => {
		const klipAuthResult = await klipResultAuth(qrCode.requestKey);
		if (klipAuthResult.status == "prepared") {
			setError(<Div spanTag>{"You have not authorized yet."}</Div>);
		} else if (klipAuthResult.status == "canceled") {
			setError(<Div spanTag>{"You have cancelled login."}</Div>);
		} else if (klipAuthResult.status == "preparing") {
			setError(<Div spanTag>{"Preparing QR code."}</Div>);
		} else if (klipAuthResult.status == "completed") {
			const loginParams = {
				walletType: KLIP,
				address: klipAuthResult.result.klaytn_address,
			};
			dispatch(authActions.login(loginParams));
			closeModal();
		} else {
			setError(<Div spanTag>{"Error occurred while authorizing."}</Div>);
		}
		return;
	};
	const onClickKlip = async () => {
		const authResponse = await klipPrepareAuth();
		const deeplinkUrl = await klipRequestQRUrl(authResponse.request_key);
		const qrImage = await generateQR(deeplinkUrl);
		setError(<Div spanTag>{modalsWording.klipQR.signIn.title[locale]}</Div>);
		setQRCode({
			enabled: true,
			qrImage: qrImage,
			requestKey: authResponse.request_key,
		});
	};
	const onClickKaikas = async () => {
		// @ts-ignore
		if (typeof window !== "undefined" && typeof window.klaytn !== "undefined") {
			const klaytn = window["klaytn"];
			const unlocked = await klaytn._kaikas.isUnlocked();
			if (!unlocked || !klaytn._kaikas.isEnabled()) {
				try {
					const res = await klaytn.enable();
					const loginParams = {
						walletType: KAIKAS,
						address: window["klaytn"].selectedAddress,
					};
					dispatch(authActions.login(loginParams));
					closeModal();
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
		<Modal open={signInEnabled} onClose={closeModal}>
			{qrCode.enabled ? (
				<Div mx20 px15 py30>
					<Div imgTag src={qrCode.qrImage} w300 h300 mxAuto></Div>
					<Div textCenter pb15 pt30>
						<Div spanTag fontLight>
							{error}
						</Div>
					</Div>
					<Div>
						<RoundedButton size={"large"} color="green" text="Done" onClick={onClickKlipQRDone} />
					</Div>
				</Div>
			) : (
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
							onClick={onClickKlip}
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
			)}
		</Modal>
	);
}
