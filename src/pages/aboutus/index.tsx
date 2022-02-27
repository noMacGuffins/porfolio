import { NextPage } from "next";
import Div from "src/components/Div";
import Row from "src/components/Row";
import Col from "src/components/Col";
import TopBar from "src/components/TopBar";
import Link from "next/link";
import { pagesWording } from "src/wording/pages";
import Form from "src/components/Submit";
import Submit from "src/components/Submit";
import { cps } from "redux-saga/effects";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "src/store/reducers/modalReducer";
import Detail from "src/components/modals/Detail";

enum Team {
	Minjun, Eric, Sehan, Jieun, Jaehwan, Seungan, Jade, Noam
}

const Home: NextPage = () => {
	const dispatch = useDispatch()
	const handleClickMember = (key: string) => {
		switch (key) {
			case "Min Jun Kim": 
				dispatch(modalActions.setTeamDetail({
					enabled: true,
					name: key,
					position: "Chief Executive Officer",
					desc: pagesWording.home.index.Team.Minjun,
					imgSrc: "static/images/ceo2.png",
				}))
				break;
			case "Eric Kim": 
				dispatch(modalActions.setTeamDetail({
					enabled: true,
					name: key,
					position: "Chief Buisness Officer",
					desc: "Hi",
					imgSrc: null,
				}))
				break;
			case "Sehan Park": 
				dispatch(modalActions.setTeamDetail({
					enabled: true,
					name: key,
					position: "Chief Technology Officer",
					desc: "Hi",
					imgSrc: null,
				}))
				break;
			case "Ji Eun Park": 
				dispatch(modalActions.setTeamDetail({
					enabled: true,
					name: key,
					position: "Creative Director",
					desc: "Hi",
					imgSrc: null,
				}))
				break;
			case "Jeahwan Jeong": 
				dispatch(modalActions.setTeamDetail({
					enabled: true,
					name: key,
					position: "Lead Developer",
					desc: "Hi",
					imgSrc: null,
				}))
				break;
			case "Seung An Jung": 
				dispatch(modalActions.setTeamDetail({
					enabled: true,
					name: key,
					position: "Assistant Developer",
					desc: "Hi",
					imgSrc: null,
				}))
				break;
			case "Jade Yang": 
				dispatch(modalActions.setTeamDetail({
					enabled: true,
					name: key,
					position: "Web Designer",
					desc: "Hi",
					imgSrc: null,
				}))
				break;
			case "Noam Ballon": 
				dispatch(modalActions.setTeamDetail({
					enabled: true,
					name: key,
					position: "Web Designer",
					desc: "Hi",
					imgSrc: null,
				}))
				break;
			default:
				break;
		}
	}

	return (
		<Div>
			<TopBar mode={"light"}></TopBar>
			<Div pt140 pb100 px={"5%"} borderBlack borderB2>
				<Row pt80 pb70>
					<Col style={{flex:6}}>
						<Div fontSize90 fontBold lineHeight={1.2} textCenter>
							Our Team.
						</Div>
					</Col>
					<Col style={{flex:4}} flex itemsEnd>
						<Div fontSize20 pl20 borderBlack borderL2 lineHeight={1.2} textLeft >
							A group of active problem solvers <br/> working together to provide value <br/> in the blockchain and our world.
						</Div>
					</Col>
				</Row>
				<Row py20>
					<Col onClick={() => handleClickMember("Min Jun Kim")} pl30>
						<Div fontSize25 fontBold>
							Min Jun Kim
						</Div>
						<Div>
							Chief Executive Officer
						</Div>
					</Col>
					<Col onClick={() => handleClickMember("Eric Kim")} pl30>
						<Div fontSize25 fontBold>
							Eric Kim
						</Div>
						<Div>
							Chief Business Officer
						</Div>
					</Col>
					<Col onClick={() => handleClickMember("Sehan Park")} pl30>
						<Div fontSize25 fontBold>
							Sehan Park
						</Div>
						<Div>
							Chief Technology Officer
						</Div>
					</Col>
				</Row>
				<Row py20>
					<Col onClick={() => handleClickMember("Ji Eun Park")} pl30>
						<Div fontSize25 fontBold>
							Ji Eun Park
						</Div>
						<Div>
							Creative Director
						</Div>
					</Col>
					<Col onClick={() => handleClickMember("Jeahwan Jeong")} pl30>
						<Div fontSize25 fontBold>
							Jeahwan Jeong
						</Div>
						<Div>
							Lead Developer
						</Div>
					</Col>
					<Col onClick={() => handleClickMember("Seung An Jung")} pl30>
						<Div fontSize25 fontBold>
							Seung An Jung
						</Div>
						<Div>
							Assistant Developer 
						</Div>
					</Col>
				</Row>
				<Row py20>
					<Col onClick={() => handleClickMember("Jade Yang")} pl30>
						<Div fontSize25 fontBold>
							Jade Yang
						</Div>
						<Div>
							Web Designer
						</Div>
					</Col>
					<Col onClick={() => handleClickMember("Noam Ballon")} pl30>
						<Div fontSize25 fontBold>
							Noam Ballon
						</Div>
						<Div>
							Web Designer
						</Div>						
					</Col>
					<Col pl30>
						
					</Col>
				</Row>
			</Div>
			<Div py100>
				<Row>
					<Col auto>
						<Div pl20 imgTag src={"static/images/SooniLabs.png"} h={100} w={100} style={{ objectFit: "cover" }} />
					</Col>
					<Col style={{flex:8}}>
						<Div textCenter fontSize40 fontBold>
							Get in touch
						</Div>
						<Div textCenter>
							contact@soonilabs.io
						</Div>
					</Col>
					<Col style={{flex:3}} pr20>
						<Div textLeft fontSize20 fontBold>
							Address
						</Div>
						<Div textLeft>
							Unit D104 <br/> 116 street name <br/> Seoul South Korea
						</Div>
					</Col>
					<Col style={{flex:3}} pr20>
						<Div textLeft fontSize20 fontBold>
							Follow us
						</Div>
						<Div textLeft>
							Twitter
						</Div>
						<Div textLeft>
							Instagram
						</Div>
					</Col>
				</Row>
			</Div>
			<Detail/>
		</Div>
		
	);
}

export default Home
