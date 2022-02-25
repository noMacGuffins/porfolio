import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "src/store/reducers/modalReducer";
import { RootState } from "src/store/reducers/rootReducer";
import Div from "../Div";
import Modal from "./modal";

export default function Detail() {
	const {teamDetail } = useSelector((state: RootState) => ({
		teamDetail: state.modal.teamDetail
	}));
	const dispatch = useDispatch()
	const handleClose = () =>{
		const { enabled, ...rest } = teamDetail
		dispatch(modalActions.setTeamDetail({
			enabled: false,
			...rest			
		}))
	}
	return (
		<Modal open={teamDetail.enabled} onClose={handleClose}>
			<Div> Hello</Div>
		</Modal>
	)
}