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


const Home: NextPage = () => {
	return (
		<Div>
			<TopBar mode={"light"}></TopBar>
			<Div pt170 pb100 px={"5%"} borderBlack borderB2>
				<Row pt80 pb70>
					<Col style={{flex:7}}>
						<Div fontSize90 fontBold lineHeight={1.2} textCenter>
							Our Team.
						</Div>
					</Col>
					<Col style={{flex:3}} flex borderBlack borderL2 itemsEnd>
						<Div fontSize20 lineHeight={1.2} textLeft >
							A group of active problem solvers <br/> working together to provide value <br/> in the blockchain and our world.
						</Div>
					</Col>
				</Row>
				<Row py20>
					<Col>
						<Div fontSize25 fontBold>
							Min Jun Kim
						</Div>
						<Div>
							Chief Executive Officer
						</Div>
					</Col>
					<Col>
						<Div fontSize25 fontBold>
							Eric Kim
						</Div>
						<Div>
							Chief Business Officer
						</Div>
					</Col>
					<Col>
						<Div fontSize25 fontBold>
							Sehan Park
						</Div>
						<Div>
							Chief Technology Officer
						</Div>
					</Col>
				</Row>
				<Row py20>
					<Col>
						<Div fontSize25 fontBold>
							Ji Eun Park
						</Div>
						<Div>
							Creative Director
						</Div>
					</Col>
					<Col>
						<Div fontSize25 fontBold>
							Jeahwan Jeong
						</Div>
						<Div>
							Lead Developer
						</Div>
					</Col>
					<Col>
						<Div fontSize25 fontBold>
							Seung An Jung
						</Div>
						<Div>
							Assistant Developer 
						</Div>
					</Col>
				</Row>
				<Row py20>
					<Col>
						<Div fontSize25 fontBold>
							Jade Yang
						</Div>
						<Div>
							Web Designer
						</Div>
					</Col>
					<Col>
						<Div fontSize25 fontBold>
							Noah Ballon
						</Div>
						<Div>
							Web Designer
						</Div>						
					</Col>
					<Col>
						
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
		</Div>
	);
}

export default Home
