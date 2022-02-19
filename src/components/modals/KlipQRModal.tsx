import Div from "../Div";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/reducers/rootReducer";
import { modalActions } from "src/store/reducers/modalReducer";
import { modalsWording } from "src/wording/modals";
import RoundedButton from "../RoundedButton";
import { useState } from "react";
import { klipResult } from "src/modules/klipApiHelper";
import { KLIP } from "src/modules/constants";
import { useRouter } from "next/router";

export default function KlipQRModal() {
	const { locale } = useRouter();
	const dispatch = useDispatch();
	const { klipQR } = useSelector((state: RootState) => ({
		klipQR: state.modal.klipQR,
	}));
	const [error, setError] = useState(<Div spanTag>{"Please scan the QR code to authorize your action."}</Div>);
	const closeModal = () => {
		dispatch(modalActions.closeKlipQR());
	};
	const onClickKlipQRDone = async () => {
		const klipAuthResult = await klipResult(klipQR.requestKey);
		console.log(klipQR);
		console.log(klipAuthResult);
		if (klipAuthResult.status == "prepared") {
			setError(<Div spanTag>{"You have not authorized yet."}</Div>);
		} else if (klipAuthResult.status == "canceled") {
			setError(<Div spanTag>{"You have cancelled."}</Div>);
		} else if (klipAuthResult.status == "preparing") {
			setError(<Div spanTag>{"Preparing QR code."}</Div>);
		} else if (klipAuthResult.status == "completed") {
			closeModal();
			dispatch(modalActions.setConfettiEnabled(true));
		} else {
			setError(<Div spanTag>{"Error occurred while authorizing."}</Div>);
		}
		return;
	};

	return (
		<Modal open={klipQR.enabled} onClose={closeModal}>
			<Div mx20 px15 py30>
				<Div imgTag src={klipQR.qrImage} w300 h300 mxAuto></Div>
				<Div textCenter pb15 pt30>
					<Div spanTag fontLight>
						{error}
					</Div>
				</Div>
				<Div>
					<RoundedButton size={"large"} color="green" text="Done" onClick={onClickKlipQRDone} />
				</Div>
			</Div>
		</Modal>
	);
}
