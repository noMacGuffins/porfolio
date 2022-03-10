import React from "react";
import Div from "src/components/Div";

export const pagesWording = {
	index: {
		main: {
			title: {
				en: <>SOONI LABS</>,
				ko: <>SOONI LABS</>,
			},
			motto: {
				en: (
					<>
						Blockchain
						<br /> for the Betterment of Society
					</>
				),
				ko: <>더 나은 사회를 위한 블록체인</>,
			},
		},
		aboutUs: {
			title: {
				en: <>About Us</>,
				ko: <>소개</>,
			},
			subtitle: {
				en: (
					<>
						Founded in 2021, SOONI Labs is the first Korean NFT-focused company that bridges the gap between NFTs and Real-World utility through
						practical B-Apps.
					</>
				),
				ko: <>2021년에 설립된 SOONI Labs는 실용적인 B-App을 통해 NFT의 실제 사회 공헌도를 높이는 한국 최초의 NFT 중심 기업입니다.</>,
			},
		},
		mission: {
			title: {
				en: <>Our Misson</>,
				ko: <>미션</>,
			},
			subtitle: {
				en: (
					<>
						As NFT enthusiasts, we will continuously develop beneficial projects for not only Koreans but also the global community. We are here to
						make a positive impact, to create a warm NFT ecosystem where art, society, and technology are all appreciated.
					</>
				),
				ko: (
					<>
						SOONI LABS는 한국뿐만 아니라 세계를 위한 프로젝트를 개발합니다.
						<br /> 예술, 사회, 기술이 융합되어 긍정적인 영향을 끼치는 따뜻한 NFT 생태계를 만들기 위해 이 자리에 있습니다.
					</>
				),
			},
		},
		values: {
			title: {
				en: <>Our Values</>,
				ko: <>경영철학</>,
			},
			helping: {
				title: {
					en: <>For you and those around you</>,
					ko: <>당신과 당신 주변 사람들을 위해</>,
				},
				desc: {
					en: (
						<>
							Our every project is dedicated to solve societal issues. We aspire to help everyone create social value through the practicality of NFT,
							regardless of gender, background, or generational differences.
						</>
					),
					ko: (
						<>
							모든 프로젝트는 사회적 문제 해결에 전념합니다. 성, 배경, 세대 차이에 상관없이 모두가 NFT의 실용성을 통해 사회적 가치를 창출할 수 있도록
							돕습니다.
						</>
					),
				},
			},
			statusQuo: {
				title: {
					en: <>Breaking Stereotypes</>,
					ko: <>고정관념에 도전하다</>,
				},
				desc: {
					en: (
						<>
							Crypto is often recognized as a “rugpull”, “ponzi scheme”, and a “rich-getting-richer mechanism”. Through practical applications of
							NFTs, we challenge such stereotypes surrounding digital assets.
						</>
					),
					ko: (
						<>
							암호화폐, 블록체인 및 NFT와 관련하여 “투기”, “도박”, “불법” 등 부정적 사회적 인식이 존재합니다. NFT의 실제 활용도 창출을 통해 디지털
							자산을 둘러싼 이러한 고정관념에 도전합니다.
						</>
					),
				},
			},
			community: {
				title: {
					en: <>Community-obsessed</>,
					ko: <>커뮤니티와 함께</>,
				},
				desc: {
					en: (
						<>
							We believe the longevity of NFT collections are determined by the community. To build a powerful community for our company and projects,
							our supporters’ voices will be reflected in our future decisions.
						</>
					),
					ko: (
						<>
							NFT 컬렉션의 수명은 결코 함께 나아가고있는 커뮤니티에 의해 결정된다고 믿습니다. 커뮤니티의 목소리는 SOONI LABS의 향후 발자취를 결정하며,
							함께 진정한 커뮤니티를 향해 나아갑니다.
						</>
					),
				},
			},
		},
	},
	team: {
		index: {
			title: {
				ko: "Team",
				en: <>Team</>,
			},
			subtitle: {
				ko: (
					<>
						SOONI LABS 팀원들은 블록체인을 기반으로 함께 <br /> 고민하고 해결하며, 세계를 향해 나아갑니다.
					</>
				),
				en: (
					<>
						A group of active problem solvers working together <br />
						to provide value from blockchain, for the world.
					</>
				),
			},
			members: {
				minjun: {
					name: {
						en: "Min Jun Kim",
						ko: "김민준",
					},
					position: {
						ko: "CEO",
						en: "CEO",
					},
					countries: "🇰🇷 🇨🇳 🇦🇺 🇺🇸",
					specialty: {
						en: "Creating connection between humanity and blockchain",
						ko: "사람과 블록체인을 연결하다",
					},
					desc: {
						en: (
							<Div textCenter>
								<Div pt20>KAIST Business & Tech Management</Div>
								<Div pt20>NONCE Blockchain Community Member</Div>
								<Div pt20>1st in MSK x Block Crafters Case Competition</Div>
							</Div>
						),
						ko: (
							<Div textCenter>
								<Div pt20>KAIST 기술경영학부</Div>
								<Div pt20>블록체인 커뮤니티 NONCE 멤버</Div>
								<Div pt20>
									MSK x Block Crafters <br /> 산학협력 프로젝트 우승
								</Div>
							</Div>
						),
					},
				},
				yeajean: {
					name: {
						en: "Yea Jean Lee",
						ko: "이예진",
					},
					countries: "🇰🇷 🇻🇳 ",
					position: {
						ko: "COO",
						en: "COO",
					},
					specialty: {
						en: "People first",
						ko: "사람이 먼저다",
					},
					desc: {
						en: (
							<Div textCenter>
								<Div pt20>Yonsei University Business</Div>
								<Div pt20>PM @ CodeGreen</Div>
							</Div>
						),
						ko: (
							<Div textCenter>
								<Div pt20>연세대학교 경영학과</Div>
								<Div pt20>PM @ CodeGreen</Div>
							</Div>
						),
					},
				},
				eric: {
					name: {
						en: "Eric Kim",
						ko: "김민수",
					},
					position: {
						ko: "CBO",
						en: "CBO",
					},
					countries: "🇰🇷 🇩🇪 🇨🇳 🇺🇸",
					specialty: {
						en: "Focused on executing practicality through jpegs",
						ko: "모든 것에 실용성을 주입하다",
					},
					desc: {
						en: (
							<Div textCenter>
								<Div pt20>New York University</Div>
								<Div pt20>PM @ GreenWall Building Materials</Div>
								<Div pt20>High City Berlin Clothing Brand Founder</Div>
								<Div pt20>NFT Degen</Div>
							</Div>
						),
						ko: (
							<Div textCenter>
								<Div pt20>뉴욕대학교</Div>
								<Div pt20>PM @ GreenWall Building Materials</Div>
								<Div pt20>High City Berlin 의류브랜드 창업</Div>
								<Div pt20>NFT 활동가</Div>
							</Div>
						),
					},
				},
				jieun: {
					name: {
						en: "Ji Eun Park",
						ko: "박지은",
					},
					position: {
						en: "Lead Designer",
						ko: "리드 디자이너",
					},
					countries: "🇰🇷 🇭🇰 🇨🇳",
					specialty: {
						en: "Drawing ideas into reality",
						ko: "아이디어를 그림으로 담다",
					},
					desc: {
						en: (
							<Div textCenter>
								<Div pt20>HongKong PolyTechnic University Product Design</Div>
								<Div pt20>Product Designer @ Lulugine</Div>
								<Div pt20>Illustrator @ A’ Prime</Div>
								<Div pt20>HK 2022 Disney Imaginations Competition Finalist</Div>
							</Div>
						),
						ko: (
							<Div textCenter>
								<Div pt20>홍콩 폴리테크닉 대학교 제품디자인학과</Div>
								<Div pt20>제품 디자이너 @ Lulugine</Div>
								<Div pt20>일러스트 디자이너 @ A’ Prime</Div>
								<Div pt20>HK 2022 Disney Imaginations Competition 결승 진출</Div>
							</Div>
						),
					},
				},
				jade: {
					name: {
						en: "Jade Yang",
						ko: "양성현",
					},
					position: {
						ko: "UI/UX 디자이너",
						en: "UI/UX Designer",
					},
					countries: "🇰🇷 🇨🇳",
					specialty: {
						en: "Interactions made simply beautiful",
						ko: "간단하고 예쁜 상호작용을 만들다",
					},
					desc: {
						en: (
							<Div textCenter>
								<Div pt20>KAIST Industrial Design</Div>
							</Div>
						),
						ko: (
							<Div textCenter>
								<Div pt20>KAIST 산업디자인학과</Div>
							</Div>
						),
					},
				},
				ian: {
					name: {
						en: "Ian Park",
						ko: "박세한",
					},
					position: {
						ko: "CTO",
						en: "CTO",
					},
					specialty: {
						en: "Developing the next generation of web",
						ko: "웹의 다음 세대를 이끌다",
					},
					countries: "🇰🇷 🇻🇳 🇨🇦",
					desc: {
						en: (
							<Div textCenter>
								<Div pt20>KAIST Computer Science</Div>
								<Div pt20>SW Engineer @ Ringle</Div>
								<Div pt20>Web-based Metaverse Specialist</Div>
							</Div>
						),
						ko: (
							<Div textCenter>
								<Div pt20>KAIST 전산학부</Div>
								<Div pt20>개발자 @ 링글</Div>
								<Div pt20>웹 기반 Metaverse 개발자</Div>
							</Div>
						),
					},
				},
				jaehwan: {
					name: {
						en: "Jae Hwan Jeong",
						ko: "정재환",
					},
					position: {
						ko: "Smart Contract 개발자",
						en: "Smart Contract Developer",
					},
					countries: "🇰🇷 🇸🇬",
					specialty: {
						en: "Loading... until everything is decentralized",
						ko: "모든 걸 탈중앙화중...",
					},
					desc: {
						en: (
							<Div textCenter>
								<Div pt20>KAIST Computer Science</Div>
								<Div pt20>Founder, SW Engineer @ Sureplus</Div>
								<Div pt20>SW Engineer @ Waddle</Div>
							</Div>
						),
						ko: (
							<Div textCenter>
								<Div pt20>KAIST 전산학부</Div>
								<Div pt20>공동 창립자, 개발자 @ SurePlus</Div>
								<Div pt20>개발자 @ Waddle</Div>
							</Div>
						),
					},
				},
				seungan: {
					name: {
						en: "Seung An Jung",
						ko: "정승안",
					},
					position: {
						ko: "풀 스택 개발자",
						en: "Full Stack Developer",
					},
					countries: "🇰🇷",
					specialty: {
						en: "To code is to speak",
						ko: "코딩으로 말한다",
					},
					desc: {
						en: (
							<Div textCenter>
								<Div pt20>KAIST Computer Science</Div>
							</Div>
						),
						ko: (
							<Div textCenter>
								<Div pt20>KAIST 전산학부</Div>
							</Div>
						),
					},
				},
			},
		},
	},
	portfolio: {
		index: {
			title: {
				ko: "Portfolio",
				en: "Portfolio",
			},
			items: {
				founded: {
					name: {
						ko: "설립",
						en: "Foundation",
					},
					desc: {
						ko: "SOONI LABS 2021년 설립",
						en: "SOONI LABS was founded in 2021",
					},
				},
				thinktomi: {
					name: {
						ko: "실리콘밸리 Thinktomi x KAIST 스타트업 프로그램",
						en: "SW Silicon Valley x KAIST Start Up Program",
					},
					desc: {
						ko: <>Thinktomi 스타트업 대회 우승</>,
						en: <>Thinktomi Start-Up Competition 1st Place</>,
					},
				},
				pitchForce: {
					name: {
						ko: "실리콘밸리 PitchForce",
						en: "Silicon Valley PitchForce",
					},
					desc: {
						ko: <>PitchForce 스타트업 대회 결선 진출</>,
						en: <>PitchForces Start-Up Competition Finalist</>,
					},
				},
				gomz: {
					name: {
						ko: "NFT: GOMZ",
						en: "NFT: GOMZ",
					},
					desc: {
						ko: "COMING SOON",
						en: "COMING SOON",
					},
				},
				gomzSpace: {
					name: {
						ko: "Metaverse: GOMZSPACE",
						en: "Metaverse: GOMZSPACE",
					},
					desc: {
						ko: "COMING SOON",
						en: "COMING SOON",
					},
				},
			},
		},
	},
	content: {
		index: {
			title: {
				ko: "콘텐츠",
				en: "Content",
			},
			subsribe: {
				button: {
					ko: "구독",
					en: "Subscribe",
				},
				subscribe: {
					ko: "이메일로 받는 SOONI 뉴스레터에 구독하기",
					en: "Subscribe to our email newsletter",
				},
			},
			items: {
				gomz: {
					name: {
						ko: "Gomz",
						en: "Gomz",
					},
					desc: {
						ko: "팝아트 PFP NFT",
						en: "Pop Art PFP NFT",
					},
				},
				gomzSpace: {
					name: {
						ko: "GomzSpace",
						en: "GomzSpace",
					},
					desc: {
						ko: "2d 메타버스",
						en: "2d Metaverse",
					},
				},
			},
		},
	},
};
