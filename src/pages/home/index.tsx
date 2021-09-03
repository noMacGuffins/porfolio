import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Col from 'src/components/Col'
import Div from 'src/components/Div'
import Row from 'src/components/Row'
import bannerImage from 'public/images/banner.png'
import mjProfile from 'public/images/1.png'
import ericProfile from 'public/images/2.png'
import eugeneProfile from 'public/images/3.png'
import chiiProfile from 'public/images/4.png'
import pic1 from 'public/images/1.png'
import pic2 from 'public/images/2.png'
import pic3 from 'public/images/3.png'
import pic4 from 'public/images/4.png'
import pic5 from 'public/images/5.png'
import pic6 from 'public/images/6.png'
import pic7 from 'public/images/7.png'
import pic8 from 'public/images/8.png'
import pic9 from 'public/images/9.png'
import pic10 from 'public/images/10.png'
import pic11 from 'public/images/11.png'
import { useState, useRef, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Twitter from 'src/components/svg/Twitter'
import TwitterBlack from 'src/components/svg/TwitterBlack'
import OpenSea from 'src/components/svg/OpenSea'
import DiscordBlack from 'src/components/svg/DiscordBlack'
import Discord from 'src/components/svg/Discord'
import basicBear from 'public/images/basicBear.png'
import opal from 'public/images/opal.png'

const Logo = (props) => {

    const {width, height, fill} = props

    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill={fill || "white"} viewBox="0 0 464.24 512.02" width={width || 100} height={height || 100}><defs><style>.cls-1</style></defs><g id="Layer_2" data-name="Layer 2"><path  d="M267.42,178.69" transform="translate(-23.88)"/><path d="M252.2,34.93c7.23-13.79,14.53-22.47,19.69-33.79.13-.35-.24-1.8-2.19-.78-24.08,12.71-41.38,38.22-65,60.81-30.16,3.64-56.41,10.37-75.84,19.14-13.73-13.41-35-19.23-55.95-13.42-30.29,8.41-49.26,39.79-41.39,67.78,5.34,19,21.8,31,41.83,33.47C61.71,202.42,37.29,278.62,27.06,307.46c-2.31,6.51-5,11.6-1.41,21C32.4,346,172.08,512.24,256,512c83.92.22,223.6-166.06,230.35-183.55,3.63-9.41.9-14.5-1.41-21-10.23-28.84-34.65-105-46.28-139.32,20-2.44,36.49-14.46,41.83-33.47,7.87-28-11.1-59.37-41.39-67.78-21-5.81-42.22,0-56,13.42-19.41-8.77-45.62-15.48-75.75-19.12,1.44-3.75,5-7.27,5-11.26,0-.23-.89-2.4-3.2-1-2.53,1.48-10.2,5.42-13.35,5.56-.27,0-.6-.41-.4-1.06.92-3.09,6.17-13.06,8.88-23,.09-.31,0-1.09-3-.42a87.93,87.93,0,0,0-19.21,6.83c-5.61,2.65,5-13.6,8.05-21.14.74-1.8-3.15.25-3.15.25ZM166.67,163.42c-16.76-2.2-23.13-18.23-23.13-18.23l45.51,8S176.86,164.76,166.67,163.42ZM256,303c-18.41,0-63.95-10.48-63.95-64.33,0-30.69,23.81-72.57,63.95-72.64S320,208,320,238.7C320,292.55,274.41,303,256,303Zm89.33-139.61C335.14,164.76,323,153.18,323,153.18l45.51-8S362.09,161.22,345.33,163.42Z" transform="translate(-23.88)"/><path d="M279.9,222.52c-7-.93-13.22-1.47-17.55-1.77v-7.32c8.56,3.55,16.85.08,16.85-7.42,0-9.69-10.39-17.56-23.2-17.56h0c-12.81,0-23.2,7.87-23.2,17.56,0,7.5,8.29,11,16.85,7.42v7.32c-4.33.3-10.5.84-17.55,1.77-11.65,1.55-13.54,4.84-13.81,8.12,0,.53,1.24,1.7,2.27,1.9,1.54.32,3.66.25,7.49-1.09C236.13,228.62,256,229,256,229h0s19.87-.33,27.95,2.5c3.83,1.34,5.95,1.41,7.49,1.09,1-.2,2.31-1.37,2.27-1.9C293.44,227.36,291.55,224.07,279.9,222.52Z" transform="translate(-23.88)"/></g></svg>
    )
}

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}


const MobileFriendlyNav = ({callBack}) => {
    const navbarRef = useRef(null)
    const size = useWindowSize();

    return(
        <Navbar fixed="top" bg="light" expand="lg" style={{color: "black", fontFamily: "Bungee Inline", zIndex:100, padding: (size.width > 1000 ? "1vw 20vw 1vw 20vw" : "1vw 5vw 1vw 5vw"),}}
            ref={navbarRef}
        >
        <Container fluid>
            <Div mr5><Logo fill={"black"} width={50} height={50}></Logo></Div>
            {size.width &&  size.width > 400 && <Navbar.Brand href="#home">
                BearDom
            </Navbar.Brand>}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#about" onClick={() => callBack(0)}><Div textCenter>About</Div></Nav.Link>
                <Nav.Link href="#rarity" onClick={() => callBack(1)}><Div textCenter>Rarity</Div></Nav.Link>
                <Nav.Link href="#reroll" onClick={() => callBack(2)}><Div textCenter textNoWrap>Re-Roll</Div></Nav.Link>
                <Nav.Link href="#carp" onClick={() => callBack(3)}><Div textCenter>C.A.R.P</Div></Nav.Link>
                <Nav.Link href="#team" onClick={() => callBack(4)}><Div textCenter>Team</Div></Nav.Link>
                <Nav.Link href="#faq" onClick={() => callBack(5)}><Div textCenter>FAQ</Div></Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link>
                    <Row flexNowrap >
                        <Col></Col>
                        <Col auto style={{cursor: "pointer"}} onClick={() => {window.open('https://discord.gg/P8sTq8y7')}}>
                            <DiscordBlack width={30} height={30}></DiscordBlack>
                        </Col>
                        <Col auto style={{cursor: "pointer"}} onClick={() => {window.open('https://twitter.com/beardom_io')}}>
                            <TwitterBlack width={30} height={30}></TwitterBlack>
                        </Col>
                        <Col></Col>
                    </Row>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
 
const BottomMenu = ({callBack}) => {
    return(
        <Div bgColor={"#232323"} color={"white"} fontFamily={"Bungee Inline"} px={"20%"} py50>
            <Row>
            <Col flex itemsCenter justifyCenter mb10><Logo></Logo></Col >
            {/* <Col itemsCenter justifyCenter fontSize35 flex mb10>
                <Div bgColor={"#393937"} color={"#FFE058"} rounded20 w300 textCenter>Mint</Div>
            </Col> */}
            <Col mb10>
                <Row>
                    <Div textCenter fontSize24 color={"#8294a6"}>Menu</Div>
                </Row>
                <Row flex itemsCenter justifyCenter>
                    <Col>
                        <Div textCenter py10 style={{cursor: "pointer"}} onClick={() => callBack(0)}>About</Div>
                        <Div textCenter py10 style={{cursor: "pointer"}} onClick={() => callBack(1)}>Rarity</Div>
                        <Div textCenter py10 style={{cursor: "pointer"}} onClick={() => callBack(2)}>Re-Roll</Div>
                    </Col>
                    <Col>
                        <Div textCenter py10 style={{cursor: "pointer"}} onClick={() => callBack(3)}>C.A.R.P.</Div>
                        <Div textCenter py10 style={{cursor: "pointer"}} onClick={() => callBack(4)}>Team</Div>
                        <Div textCenter py10 style={{cursor: "pointer"}} onClick={() => callBack(5)}>FAQ</Div>
                    </Col>
                </Row>
            </Col>
            <Col mb10>
                <Row>
                    <Div textCenter fontSize24 color={"#8294a6"}>Community</Div>
                </Row>
                <Row>
                    <Col pr20>
                        <Row py10 style={{cursor: "pointer"}} onClick={() => {window.open('https://discord.gg/P8sTq8y7')}}>
                            <Discord></Discord>
                        </Row>
                        <Row py10 style={{cursor: "pointer"}} onClick={() => {window.open('https://twitter.com/beardom_io')}}>
                            <OpenSea></OpenSea>
                        </Row>
                    </Col>
                    {/* <Col pl20>
                        <Row py10><Twitter></Twitter></Row>
                    </Col> */}
                </Row>
            </Col>
            </Row>
        </Div>
    )
}

const Home: NextPage = () => {
    const bodyFontFamily = "Montserrat"
    const aboutRef = useRef(null)
    const rarityRef = useRef(null)
    const rerollRef = useRef(null)
    const carpRef = useRef(null)
    const teamRef = useRef(null)
    const faqRef = useRef(null)
    const refs = [aboutRef, rarityRef, rerollRef, carpRef, teamRef, faqRef]
    const scrollToRef = (index) => {window.scrollTo(0, refs[index].current.offsetTop - 130)}
    const carouselRef = useRef(null)

    const size = useWindowSize();
    const xPadding = (size.width > 1000 ? "20vw" : "10vw")

    const faqQuestion = [
        {
            question: "How on earth did you optimize gas for your nonfungible tokens?!?!!",
            answer: "dunno"
        },
        {
            question: "How on earth did you optimize gas for your nonfungible tokens?!?!!",
            answer: "dunno"
        },
        {
            question: "How on earth did you optimize gas for your nonfungible tokens?!?!!",
            answer: "dunno"
        },
        {
            question: "How on earth did you optimize gas for your nonfungible tokens?!?!!",
            answer: "dunno"
        },
    ]

    const [faqExpand, setFaqExpand] = useState([false, false, false, false])

    const [quantity, setQuantity] = useState(0)

    const onPressFaq = (index) => {
        let nextExpandState = faqExpand.map((item, itemIndex) => {
            return(
                (itemIndex == index) ? !item : item
            )
        })
        setFaqExpand(nextExpandState)
    }

    const valuesArr = [
        {
            explanation: "Every Bear's metadata is generated on-mint with instant reveal. Nobody has any control over any bear's rarity--randomization truly decentralized.",
            component: (<Div py10>
                A <Div spanTag color={"#ffd000"}>True Dapp</Div>
            </Div>),
            title: "We are"
        },
        {
            explanation: "The essence of smart contracts is to ensure promises are fulfilled. Our roadmap offerings are coded into the genesis smart contract fully on-chain.",
            component: (<Div py10>
                Conventional roadmaps covering <Div spanTag color={"#ffd000"}>Rugpulls</Div>
            </Div>),
            title: "We despise"
        },
        {
            explanation: "We don't want your money to be burned or sent to miners. Our smart contract is hyper-optimized to reduce minting fees.",
            component: (<Div py10>
                hyper-optimized smart contracts for YOUR <Div spanTag color={"#ffd000"}>gas money</Div> 
            </Div>),
            title: "We hyper optimize"
        },
    ]

    const teamArr = [
        {
            name: "Eugene",
            imageSrc: eugeneProfile,
            description: "Smart Contract Maniac"
        },
        {
            name: "Eric",
            imageSrc: ericProfile,
            description: "Smart Contract Maniac"
        },
        {
            name: "MJ",
            imageSrc: mjProfile,
            description: "Smart Contract Maniac"
        },
        {
            name: "Chii",
            imageSrc: chiiProfile,
            description: "Smart Contract Maniac"
        }
    ]

    useEffect(() => {
        AOS.init();
    })

    const FadeUpDiv = (props) => {
        return(
            <div data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="30"
                data-aos-duration="600"
                data-aos-easing="ease-in"
                // data-aos-mirror="true"
                // data-aos-once="false"
                // data-aos-anchor-placement="top-center"
                >
                {props.children}
            </div>
        )
    }

    const hugeImageWidth = 500

    console.log(opal.src)

  return (
    <Div className="container-fluid p-0" style={{fontFamily: "Bungee Inline", overflowX: "hidden"}} letterSpacing={2}>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href={`https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap`} rel="stylesheet"/>
        <link href={`https://fonts.googleapis.com/css2?family=Montserrat&display=swap`} rel="stylesheet"/>
        <MobileFriendlyNav callBack={scrollToRef}></MobileFriendlyNav>
        <Div >
                <Row color={"black"} relative h={hugeImageWidth*1337/1374+120} style={{backgroundImage: `url(${opal.src})`}} px={"15vw"} overflowHidden >
                    <Col h={hugeImageWidth*1337/1374} mt150 style={{backgroundImage: `url(${opal.src})`}} w500>
                        <Div style={{fontSize: "5vw"}} ref={aboutRef} pb36 >
                            {"Become Beardom,"}
                        </Div>
                        <Div fontFamily={bodyFontFamily} py10>
                            <FadeUpDiv>
                                We are a collection of 10,000 Bear NFTs designed to move the NFT space forward.
                            </FadeUpDiv>
                        </Div>
                    </Col>
                    <Col h={hugeImageWidth*54133738/1374} mt120 p0 width={hugeImageWidth} >
                        <Image alt="" src={basicBear} width={hugeImageWidth} height={hugeImageWidth*1337/1374}></Image>
                    </Col>
                    {/* <Col auto py10> 
                        <FadeUpDiv>
                            <Row py5 my20 color={"black"} rounded30 bgColor={"#FFE058"}><u>🐻0.08 ETH</u></Row>
                            <Row py5 my20 color={"black"} rounded30 bgColor={"#FFE058"}><u>🐻10,000 Supplies</u></Row>
                            <Row py5 my20 color={"black"} rounded30 bgColor={"#FFE058"}><u>🐻Launch @09.17.2021</u></Row>
                        </FadeUpDiv>
                    </Col> */}
                </Row>

            <Div px={xPadding} py50 >
                {/* <FadeUpDiv> */}
                <Div fontFamily={bodyFontFamily} pb30>
                    Beardom is a platform for future Dapp extensions. The first of which is our community artist royalty program (programmed into the genesis smart contract). Future drops/ideas such as follow-up NFT projects will conform to this standard and be directly linked on-chain to, and from, the Beardom contract. 
                </Div>
                {/* </FadeUpDiv> */}
                {/* <FadeUpDiv> */}
                <Div style={{overflowX: "scroll", flexDirection: "row",}} flex>
                {valuesArr.map((value, index) => {
                        return(
                            <Div px0 key={index} mr50 pb20>
                                <Div rounded10 overflowHidden w300 border bgColor={"white"} p20 h400 key={index}> 
                                    <Div color={"black"} fontSize20 >
                                    {value.component}
                                    </Div>
                                    {/* {value.component} */}
                                    <Div itemsCenter justifyCenter auto flex py20 fontFamily={bodyFontFamily}>
                                        {value.explanation}
                                    </Div>
                                </Div>
                            </Div>
                        )
                    })}
                </Div>
                {/* </FadeUpDiv> */}
            </Div>
            <Div px={xPadding} pt50 bgColor={'rgb(248,249,250)'}>
                {/* <FadeUpDiv> */}
                <Row color={"black"}>
                    <Col>
                        <Div fontSize30 pb36 ref={rarityRef}>RARITY</Div>
                    </Col>
                </Row>
                {/* </FadeUpDiv> */}
            </Div>
            <Div style={{paddingLeft: xPadding}} pb50 bgColor={'rgb(248,249,250)'}> 
                {/* <FadeUpDiv> */}
                    <Div style={{overflowX: "scroll", flexDirection: "row"}} flex>
                        {[pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11].map((imageSrc, index) => {
                            return(
                                <Div px0 key={index} mr50 pb20>
                                    <Div rounded10 overflowHidden w230 shadow bgColor={"white"}> 
                                        <Div textCenter color={"black"} bgColor={"#ffe9de"} py5 >
                                            0.06 ETH
                                        </Div>
                                        <Div h230 w230>
                                            <Image alt="" src={imageSrc} ></Image>
                                        </Div>
                                    </Div>
                                    
                                </Div>
                            )
                        })}
                    </Div>
                {/* </FadeUpDiv> */}
            </Div>
            <Div h60></Div>
            <Div px={xPadding}> 
                {/* <FadeUpDiv> */}
                <Row color={"black"}>
                    <Col mb50>
                        <Div fontSize30 pb36 ref={rerollRef}>Trait Re-rolling</Div>
                        <Div fontFamily={bodyFontFamily}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi iusto placeat voluptatem sed voluptate officiis, aliquid accusantium dolorum cumque itaque expedita tenetur ipsa laboriosam, facere nisi similique. Mollitia, nobis.
                        </Div>
                    </Col>
                </Row>
                {/* </FadeUpDiv> */}
            </Div>
            <Div h60></Div>
            <Div px={xPadding}> 
                {/* <FadeUpDiv> */}
                    <Row color={"black"} >
                        <Col mb50>
                            <Div fontSize30 pb36 ref={carpRef}>Community Artist Royalty Program [C.A.R.P.]</Div>
                            <Div fontFamily={bodyFontFamily}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi iusto placeat voluptatem sed voluptate officiis, aliquid accusantium dolorum cumque itaque expedita tenetur ipsa laboriosam, facere nisi similique. Mollitia, nobis.
                            </Div>
                        </Col>
                    </Row>
                {/* </FadeUpDiv> */}
            </Div>
            <Div h60></Div>
            <Div> 
                {/* <FadeUpDiv> */}
                    <Div fontSize30 ref={teamRef} px={xPadding} color={"black"} pb36>Team</Div>
                    <Div style={{paddingLeft: xPadding}}> 
                        <Div style={{overflowX: "scroll", flexDirection: "row"}} flex>
                            {teamArr.map((teamMember, index) => {
                                return(
                                    <Div px0 key={index} mr50 pb20>
                                        <Div rounded10 overflowHidden w230 shadow bgColor={"white"}> 
                                            <Div textCenter color={"black"} bgColor={"#ffe9de"} py5 >
                                                {teamMember.name}
                                            </Div>
                                            <Div h230 w230>
                                                <Image alt="" src={teamMember.imageSrc} ></Image>
                                            </Div>
                                            <Div textCenter m0 color={"#42332a"} bgColor={"#b38870"}>
                                                {teamMember.description}
                                            </Div>
                                        </Div>
                                        
                                    </Div>
                                )
                            })}
                        </Div>
                    </Div>
                {/* </FadeUpDiv> */}
            </Div>
            <Div px={xPadding}> 
                <Div h2 my50 ref={faqRef}></Div>
                <Row auto fontSize30 mr20  >
                    FAQ
                </Row>
                <Row itemsCenter justifyCenter color={"black"} mb50>
                    
                    {
                        faqExpand.map((qAndA, index) => {
                            return(
                                <Div key={index} border rounded20 p={"20px 40px"} my15 style={{cursor: "pointer"}}> 
                                    <Row  fontFamily={bodyFontFamily} >
                                        {faqQuestion[index].question}
                                    </Row>
                                    {true && 
                                    <Row fontFamily={bodyFontFamily}>
                                        {faqQuestion[index].answer}
                                    </Row>
                                    }
                                </Div>
                            )
                        })
                    }
                </Row>
            </Div>
            <Div h60></Div>
            <BottomMenu callBack={scrollToRef}></BottomMenu>
            <Div h70></Div>
        </Div>
        <Div  style={{position: "fixed", bottom: 0, zIndex: 100, width: "100%"}}>
            <Row color={"black"} bgColor={"#FFE058"} py20 px={xPadding} fontSize30>
                <Col textCenter textNowrap>
                    {(quantity * 0.08).toFixed(2)} <Div spanTag fontSize15>ETH</Div>
                </Col>
                <Col>
                    <Row flexNowrap>
                        <Col textCenter onClick={() => setQuantity((quantity - 1 >= 0 ? quantity - 1 : 0))} style={{cursor: "pointer"}}>-</Col>
                        <Col auto textCenter>{quantity}</Col>
                        <Col textCenter onClick={() => setQuantity((quantity + 1 <= 10 ? quantity + 1 : 10))} style={{cursor: "pointer"}}>+</Col>
                    </Row>
                </Col>
                <Col justifyCenter flex>
                    <Div bgColor={"#393937"} color={"#FFE058"} style={{cursor: "pointer"}} rounded20 w200 textCenter>Mint</Div>
                </Col>
            </Row>
        </Div>
    </Div>
  )
}

export default Home
