import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "src/store/reducers/modalReducer";
import { RootState } from "src/store/reducers/rootReducer";
import Div from "../Div";
import Modal from "./modal";

export default function Detail() {
	const detail = useSelector((state: RootState) => state.modal.teamDetail);

	const dispatch = useDispatch()
	const handleClose = () =>{
		dispatch(modalActions.setTeamDetail({
			enabled: false		   
		}))
	}
	return (
		<Modal open={detail.enabled} onClose={handleClose}>
			<Div mx20 px15> 
				<Div fontBold fontSize40> {detail.name} </Div>
				<Div> {detail.position} </Div>
				<Div imgTag src={"static/images/ceo2.png"} h={160} w={120} style={{ objectFit: "cover" }} />
				<Div> {detail.desc} </Div>
			</Div>
		</Modal>
	)
}