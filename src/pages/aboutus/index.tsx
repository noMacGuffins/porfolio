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


const Home: NextPage = () => {
	return (
		<Div>
			<TopBar mode={"light"}></TopBar>
			<Div pt170 px={"5%"} borderBlack borderB2>
				<Row pt80 pb70>
					<Col style={{flex: 6}}>
						<Div fontSize90 fontBold lineHeight={1.2} pb30>
							Who are we?
						</Div>
						<Div fontSize20 fontSemibold>
							{pagesWording.home.index.AboutUs.Intro}
						</Div>
					</Col>
					<Col flex style={{flex: 3.5}} itemsEnd />
				</Row>
				<Row py70>
					<Col style={{flex: 5}}/>
					<Col flex justifyEnd style={{flex: 5}} borderBlack borderT2 py20 >
						<Div imgTag src={"static/images/downarrow.png"} h={100} w={60} style={{ objectFit: "cover" }} />
						<Div>
							{pagesWording.home.index.AboutUs.bridge}
						</Div>
					</Col>
				</Row>
				<Row py70>
					<Col style={{flex: 6}} >
						<Div fontSize90 fontBold lineHeight = {1.2} pb50>
							Story
						</Div>
						<Div>
							{pagesWording.home.index.AboutUs.OurStory}
						</Div>
					</Col>
					<Col style={{flex: 4}}/>
				</Row>
				<Row py70>
					<Col style={{flex: 1}} />
					<Col style={{flex: 1}} >
						<Div fontSize90 fontBold lineHeight = {1.2} pb50>
							Mission
						</Div>
						<Div>
							{pagesWording.home.index.AboutUs.ourMission}
						</Div>
					</Col>
				</Row>
				<Row py70>
					<Col auto>
						<Div fontSize90 fontBold lineHeight = {1.2} pb50>
							Values
						</Div>
						<Row>
							<Col style={{flex: 1}} flexCol justifyCenter>
								<Div imgTag src={"static/images/ceo2.png"} h={100} w={100} style={{ objectFit: "cover" }} />
								<Div fontBold>
									{pagesWording.home.index.AboutUs.value1.title}
								</Div>
								<Div>
									{pagesWording.home.index.AboutUs.value1.content}
								</Div>
							</Col>
							<Col style={{flex: 1}} >
								<Div imgTag src={"static/images/ceo2.png"} h={100} w={100} style={{ objectFit: "cover" }} />
								<Div fontBold>
									{pagesWording.home.index.AboutUs.value2.title}
								</Div>
								<Div>
									{pagesWording.home.index.AboutUs.value2.content}
								</Div>
							</Col>	
							<Col style={{flex: 1}} >
								<Div imgTag src={"static/images/ceo2.png"} h={100} w={100} style={{ objectFit: "cover" }} />
								<Div fontBold>
									{pagesWording.home.index.AboutUs.value3.title}
								</Div>
								<Div>
									{pagesWording.home.index.AboutUs.value3.content}
								</Div>
							</Col>
						</Row>
					</Col>
					<Col style={{flex: 4}}/>
				</Row>
			</Div>
			<Div py50>
				<Row mxAuto flex justifyCenter>
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
