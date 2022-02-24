import { NextPage } from "next";
import Div from "src/components/Div";
import Row from "src/components/Row";
import Col from "src/components/Col";
import TopBar from "src/components/TopBar";
import { pagesWording } from "src/wording/pages";


const Home: NextPage = () => {
	return (
		<Div>
			<TopBar mode={"light"}></TopBar>
			<Div pt140 ml70 mr800>
				<Div pt20 fontSize40 fontBold lineHeight = {1.3}>
					{pagesWording.home.index.MainPage.Title}
				</Div>	
				<Div pt20 pr100>
					{pagesWording.home.index.MainPage.AboutUs}
				</Div>
				<Div pt20 fontSize40 fontBold lineHeight = {1.3}>
					Our story
				</Div>	
				<Div pt20 pr100>
					{pagesWording.home.index.MainPage.OurStory}
				</Div>
			</Div>
			<Row mt50 mb50 flexEnd mr100>
				<Col></Col>
				<Col auto>
					<Div imgTag src={"static/images/ceo.png"} h={400} w={300} style={{ objectFit: "cover" }} />
				</Col>
				<Col auto mr50>
					<Div fontSize20> MinJun Kim </Div>
					<Div fontSize12>
					| Co-founder of SOONI Labs <br/>
					| Blockchain, NFT, Metaverse, and Crypto <br/>
					| Klaytn & Ethereum & Sexy Girl enthusiast <br/>
					</Div>
				</Col>
			</Row>
			<Div ml70 mr800>
				<Div pt20 fontSize40 fontBold lineHeight = {1.3}>
					Our Missions
				</Div>
				<Div pt20 pr100>
					{pagesWording.home.index.MainPage.OurStory}
				</Div>
				<Div pt20 fontSize40 fontBold lineHeight = {1.3}>
					Values
				</Div>	
				<Div pt20 pr100>
					{pagesWording.home.index.MainPage.AboutUs}
				</Div>
			</Div>
			
		</Div>
	);
}

export default Home
