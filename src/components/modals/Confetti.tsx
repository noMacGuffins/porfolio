import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/reducers/rootReducer";
import ConfettiExplosion from "@reonomy/react-confetti-explosion";
import { useLayoutEffect } from "react";
import { modalActions } from "src/store/reducers/modalReducer";

export default function Confetti() {
	const { confettiEnabled } = useSelector((state: RootState) => ({
		confettiEnabled: state.modal.confetti.enabled,
	}));
	const dispatch = useDispatch();
	const confettiProps = {
		force: 1,
		duration: 3000,
		particleCount: 60,
		floorHeight: 1000,
		floorWidth: 1000,
	};
	useLayoutEffect(() => {
		return () => {
			setTimeout(() => {
				dispatch(modalActions.setConfettiEnabled(false));
			}, confettiProps.duration);
		};
	});
	return (
		<>
			{(confettiEnabled && (
				<>
					<ConfettiExplosion {...confettiProps} />
				</>
			)) ||
				null}{" "}
		</>
	);
}
