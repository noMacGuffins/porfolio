import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "src/store/reducers/modalReducer";
import { RootState } from "src/store/reducers/rootReducer";
import Div from "../Div";
import Row from "../Row"
import Col from "../Col";
import Modal from "./Modal";

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
			<Div px15 h={300} flex itemsCenter> 
				<Row flex itemsCenter>
					<Col auto>
						<Div imgTag src={"static/images/ceo2.png"} h={200} w={150} style={{ objectFit: "cover" }} />
					</Col>
					<Col mr20>
						<Div fontBold fontSize40> {detail.name} </Div>
						<Div py5> {detail.position} </Div>
						<Div py5 fontSize10> {detail.desc} </Div>
					</Col>
				</Row>
			</Div>
		</Modal>
	)
}