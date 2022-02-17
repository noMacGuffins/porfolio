import Div from "../Div";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/reducers/rootReducer";
import { modalActions } from "src/store/reducers/modalReducer";
import { modalsWording } from "src/wording/modals";

export default function KlipQRModal() {
	const dispatch = useDispatch();
	const { klipQREnabled, klipQRImage, locale } = useSelector((state: RootState) => ({
		klipQREnabled: state.modal.klipQR.enabled,
		klipQRImage: state.modal.klipQR.qrImage,
		locale: state.app.locale,
	}));
	const closeModal = () => {
		dispatch(modalActions.closeKlipQR());
	};

	return (
		<Modal open={klipQREnabled} onClose={closeModal}>
			<Div mx20 px15 py30>
				<Div py15 textCenter maxW={400}>
					<Div spanTag fontBold textXl>
						{modalsWording.klipQR.signIn.title[locale]}
					</Div>
				</Div>
				<Div imgTag src={klipQRImage} w300 h300 mxAuto></Div>
			</Div>
		</Modal>
	);
}
