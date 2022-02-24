import { NextPage } from "next";
import Div from "src/components/Div";
import Row from "src/components/Row";
import Col from "src/components/Col";
import TopBar from "src/components/TopBar";
import Link from "next/link";
import { pagesWording } from "src/wording/pages";
import Form from "src/components/Submit";


const Home: NextPage = () => {
	return (
		<Div>
			<TopBar mode={"light"}></TopBar>
			<Div pt160 px={"5%"} pb50>
				<Row py40>
					<Col style={{flex: 6}}>
						<Div fontSize60 fontBold lineHeight = {1.3}>
							{pagesWording.home.index.MainPage.Title1}
						</Div>
					</Col>
					<Col flex style={{flex: 3.5}} justifyCenter itemsEnd>
						<Div px10 borderBlack borderL2>
							{pagesWording.home.index.MainPage.Title2}
						</Div>
					</Col>
					<Col flex style={{flex: 0.5}} itemsEnd>
						<Div imgTag src={"static/images/downarrow.png"} style={{ objectFit: "cover" }} />
					</Col>
				</Row>
				<Row py70>
					<Col style={{flex: 6}}>
						<Div fontSize40 fontBold lineHeight = {1.2}>
							{pagesWording.home.index.MainPage.Title3}
						</Div>
						<Div py15>
							{pagesWording.home.index.MainPage.Title4}
						</Div>
					</Col>
					<Col flex style={{flex: 4}} justifyCenter>
						<Div imgTag src={"static/images/asterisk.png"} style={{ objectFit: "cover" }} />
					</Col>
				</Row>
				<Row py70>
					<Col style={{flex: 6}} >
						<Div fontSize40 fontBold lineHeight = {1.2} pb30>
							Discover Sooni Labs
						</Div>
						<Link href="/home" passHref>
							<Div py15 cursorPointer fontSize20>
								About us
							</Div>
						</Link>
						<Link href="/home" passHref>
							<Div py15 cursorPointer fontSize20>
								Team
							</Div>
						</Link>
						<Link href="/home" passHref>
							<Div py15 cursorPointer fontSize20>
								Partnerships
							</Div>
						</Link>
					</Col>
					<Col flex style={{flex: 4}} justifyCenter/>
				</Row>
				<Row py70>
					<Col style={{flex: 6}} >
						<Div fontSize40 fontBold lineHeight = {1.2} pb30>
							{pagesWording.home.index.MainPage.Connect}
						</Div>


						<Form/>
						<Row>
							<Col style={{flex: 6}}>
								<Div fontSize20 borderBlack borderB2>
									<input placeholder="Your email address" required/>
								</Div>
							</Col>
							<Col style={{flex: 4}}>

							</Col>
						</Row>
						
						
					</Col>
					<Col flex style={{flex: 4}} justifyCenter/>
				</Row>
			</Div>
			
			
		</Div>
	);
}

export default Home
