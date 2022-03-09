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
				en: <>Blockchain for the Betterment of Society</>,
				ko: <>사회를 위한 블록체인</>,
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
				ko: (
					<>
						2021년에 설립된 SOONI Labs는 실용적인 D-App(Decentralized Application)을 통해 NFT의 실제 사회 공헌도를 높이는 한국 최초의 NFT 중심
						기업입니다.
					</>
				),
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
						사회에 도움이 되는 유틸리티 구축을 통해 한국에서 NFT를 활성화하고 국제 NFT 시장에서 새로운 한류를 이르킬 것 입니다. 예술, 사회, 블록체인
						기술이 모두 활성화되어 국내, 국외 NFT 생태계에 긍정적인 영향을 미치는 그날까지, 열심히 노력하겠습니다.
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
					en: <>For you and those around us</>,
					ko: <>당신과 우리 주변 사람들을 위해</>,
				},
				desc: {
					en: (
						<>
							Every project of ours is dedicated to solve societal issues. We aspire to help everyone recognize the practicality of NFTs regardless of
							gender, knowledge, and generational gap.
						</>
					),
					ko: (
						<>
							순이의 모든 프로젝트는 사회적 문제 해결에 전념합니다. 성, 배경, 세대 차이에 상관없이 모두가 NFT의 실용성을 인식할 수 있도록 도울
							것입니다.
						</>
					),
				},
			},
			statusQuo: {
				title: {
					en: <>Breaking Stereotypes</>,
					ko: <>사회적 고정관념</>,
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
							암호화폐, 블록체인 및 NFT와 관련하여 좋지 않은 인식이 대다수입니다. “투기”, “도박”, “불법” 등 여러 단어들과 얽혀있습니다. NFT의 실제
							활용도 창출을 통해 디지털 자산을 둘러싼 이러한 고정 관념에 도전합니다.
						</>
					),
				},
			},
			community: {
				title: {
					en: <>Community-obsessed</>,
					ko: <>커뮤니티 중점</>,
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
							NFT 컬렉션의 수명은 결코 커뮤니티에 의해 결정된다고 믿습니다. 저희 회사를 위해 함께 나아가고 있는 커뮤니티의 목소리에 귀를 기울것입니다.
							커뮤니티 의견은 SOONI LABS 향후 결정에 반영됩니다.
						</>
					),
				},
			},
		},
	},
	team: {
		index: {
			title: {
				ko: "팀",
				en: (
					<>
						Our
						<br />
						Team
					</>
				),
			},
			subtitle: {
				ko: "블록 체인을 통해 세상을 위한 새로운 가치를 창출하는 역동적인 무리",
				en: "A group of active problem solvers working together to provide value from blockchain for the world.",
			},
			members: {
				minjun: {
					name: {
						en: "Min Jun Kim",
						ko: "김민준",
					},
					position: {
						ko: "Co-Founder, CEO",
						en: "Co-Founder, CEO",
					},
					specialty: {
						en: "Interested in scaling businesses to its maximum potential",
						ko: "기업을 극한으로 키운다",
					},
					desc: {
						en: (
							<ul className="list-disc">
								<li>KAIST Business & Tech Management</li>
								<li>NONCE Blockchain Community</li>
								<li>KLAYTN & Ethereum Enthusiast</li>
							</ul>
						),
						ko: (
							<ul className="list-disc">
								<li>KAIST Business & Tech Management</li>
								<li>NONCE 블록체인 커뮤니티</li>
								<li>KLAYTN & Ethereum 광팬</li>
							</ul>
						),
					},
				},
				yeajean: {
					name: {
						en: "Yea Jean Lee",
						ko: "이예진",
					},
					position: {
						ko: "CMO",
						en: "CMO",
					},
					specialty: {
						en: "Interested in marketing, management, and operation",
						ko: "마케팅, 매니지먼트, 오퍼레이션의 조화를 이룬다",
					},
					desc: {
						en: (
							<ul className="list-disc">
								<li>Yonsei University Business</li>
								<li>Experienced Project Manager in multiple start-ups</li>
							</ul>
						),
						ko: (
							<ul className="list-disc">
								<li>Yonsei University 경영</li>
								<li>스타트업 피엠 경력 다수</li>
							</ul>
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
					specialty: {
						en: "Focused on executing practicality through jpegs",
						ko: "모든 것에 실용성을 주입하다",
					},
					desc: {
						en: (
							<ul className="list-disc">
								<li>New York University</li>
								<li>Full-Time Crypto Trader</li>
								<li>Experiences in building E-Commerce and NFT projects</li>
							</ul>
						),
						ko: (
							<ul className="list-disc">
								<li>New York University</li>
								<li>풀타임 가상자산 거래</li>
								<li>이커머스, NFT 창업 경력 다수</li>
							</ul>
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
						ko: "디자인 리드",
					},
					specialty: {
						en: "Drawing ideas into reality",
						ko: "아이디어를 그림으로 실체화한다",
					},
					desc: {
						en: (
							<ul className="list-disc">
								<li>HongKong PolyTechnic University Industrial Design</li>
								<li>HongKong 2022 Disney Imaginations Competition Finalist</li>
							</ul>
						),
						ko: (
							<ul className="list-disc">
								<li>HongKong PolyTechnic University 산업디자인</li>
								<li>HongKong 2022 Disney Imaginations Competition 결선 진출</li>
							</ul>
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
					specialty: {
						en: "Interactions made simply beautiful",
						ko: "간단하게 예쁜 상호작용을 만든다",
					},
					desc: {
						en: (
							<ul className="list-disc">
								<li>KAIST Industrial Design</li>
								<li>Designed 10+ successful web pages</li>
							</ul>
						),
						ko: (
							<ul className="list-disc">
								<li>KAIST 산업디자인</li>
								<li>다수의 성공적인 웹앱 디자인 경력</li>
							</ul>
						),
					},
				},
				ian: {
					name: {
						en: "Ian Park",
						ko: "박세한",
					},
					position: {
						ko: "Co-Founder, CTO",
						en: "Co-Founder, CTO",
					},
					specialty: {
						en: "Developing the next generation of web",
						ko: "웹의 다음 세대를 이끈다",
					},
					desc: {
						en: (
							<ul className="list-disc">
								<li>KAIST Computer Science</li>
								<li>SW Engineer @ Ringle</li>
								<li>Metaverse Specialist</li>
							</ul>
						),
						ko: (
							<ul className="list-disc">
								<li>KAIST Computer Science</li>
								<li>개발자 @ 링글</li>
								<li>Metaverse Specialist</li>
							</ul>
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
					specialty: {
						en: "Loading... until everything is decentralized",
						ko: "탈중화화 까지 로딩중",
					},
					desc: {
						en: (
							<ul className="list-disc">
								<li>KAIST Computer Science</li>
								<li>SW Engineer @Waddle</li>
								<li>Multiple work experiences in FinTech</li>
							</ul>
						),
						ko: (
							<ul className="list-disc">
								<li>KAIST Computer Science</li>
								<li>개발자 @와들</li>
								<li>핀테크 기업 경력</li>
							</ul>
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
					specialty: {
						en: "To code is to speak",
						ko: "코딩으로 말한다",
					},
					desc: {
						en: (
							<ul className="list-disc">
								<li>KAIST Computer Science</li>
								<li>Experiences in creating user-friendly apps</li>
							</ul>
						),
						ko: (
							<ul className="list-disc">
								<li>KAIST Computer Science</li>
								<li>유저 친화적 앱 개발 경력 다수</li>
							</ul>
						),
					},
				},
			},
		},
	},
	portfolio: {
		index: {
			title: {
				ko: "포트폴리오",
				en: "Portfolio",
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
					ko: "이메일로 받는 순이 뉴스레터에 구독하기",
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
