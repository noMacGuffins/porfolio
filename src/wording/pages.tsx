import React from "react";
import Div from "src/components/Div";

export const pagesWording = {
	index: {
		main: {
			title: {
				en: <>Welcome to Sehan&apos;s SWE Portfolio</>,
				ko: <>세한의 개발 포트폴리오에 오신 것을 환영합니다!</>,
			},
			motto: {
				en: <>Only Smart Practice makes Perfect</>,
				ko: <>똑똑한 연습만이 완벽을 이룩한다</>,
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
						Founded in 2021, SOONI Labs is the first Korean NFT-focused company that revitalizes a healthy Web 3.0 ecosystem through practical B-Apps.
					</>
				),
				ko: <>2021년에 설립된 SOONI Labs는 실용적인 B-App을 통해 건강한 웹 3.0 생태계 구축에 앞장서는 한국 최초의 NFT 중심 기업입니다.</>,
			},
		},
		porfolioIntro: {
			title: {
				en: <>Portfolio</>,
				ko: <>포트폴리오</>,
			},
			subtitle: {
				en: (
					<>
						The following are projects where I experience growth and leadership. Tens of thousands of lines of code lie beneath these projects, but I
						have realized that teamwork found in designing, discussing, and marketing ideas cannot be implemented by any Turing-complete language.
						Most of the time, coding is the easiest part.
					</>
				),
				ko: (
					<>
						다음은 제 포트폴리오 샘플들입니다. 이들 밑에는 수만 줄의 코드가 있지만, 아이디어를 고안, 논의, 디자인, 마케팅할때 필요한 팀워크 어떤
						튜링완전 언어로도 구현이 불가합니다. 대부분의 상황에서는 코딩이 제일 쉬운 작업입니다.
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
				en: <>We are here to make a positive impact, to create a warm Web 3.0 ecosystem where art, society, and technology are all appreciated.</>,
				ko: (
					<>
						SOONI Labs는 한국뿐만 아니라 전 세계를 위한 지속적인 프로젝트 개발을 통해 예술, 사회, 기술이 융합되어 긍정적인 영향을 주는 웹 3.0 생태계를
						만들어 갑니다.
					</>
				),
			},
		},
		soonilabsCom: {
			title: {
				en: <>Soonilabs.com</>,
				ko: <>Soonilabs.com</>,
			},
			subtitle: {
				en: (
					<>
						2020, when I though I could build anything given a Mac, when I set out with the most trustworthy friends at hand into the world of
						startups, this was the first website that made it to production. Created simply with the familiar Typescript · React · Next combination,
						it is the foundation of the portfolio site you are looking at.
					</>
				),
				ko: (
					<>
						2020년, 맥북 하나만 주어지면 뭐든 만들 수 있다는 생각에, 아이디어는 대충 하나 생각해서 믿을만한 친구들과 스타트업을 차렸을 때, 처음으로
						성공이게 배포한 회사 소개 웹사이트입니다. 최대한 단순하게 Typescript · React · Next 로 구현한 이 포트폴리오 사이트도 soonilabs-web repo의
						포크랍니다.
					</>
				),
			},
		},
		introduction: {
			title: {
				en: <>Bio</>,
				ko: <>소개</>,
			},
			description: {
				en: (
					<>
						<span style={{ fontWeight: "bold" }}>Date of Birth:</span> 2000.08.30
						<br />
						<span style={{ fontWeight: "bold" }}>Education:</span> KAIST School of Computing (Senior)
						<br />
						<span style={{ fontWeight: "bold" }}>Work Experience:</span> Over 3 years as a Full-stack engineer in Tech Startups
						<br />
						<span style={{ fontWeight: "bold" }}>Notable Skills:</span>
						<ul>
							<li>- Building a Single Page Application through Typescript · React · Next</li>
							<li>- Designing a solid backend API through MySQL · Ruby · Rails</li>
							<li>- Deploying downtimeless application theough EC2 · Code Deploy · Docker</li>
							<li>- Managing and providing data through AWS RDS · S2 · Cloudfront</li>
						</ul>
						<br />
					</>
				),
				ko: (
					<>
						<span style={{ fontWeight: "bold" }}>출생:</span> 2000.08.30
						<br />
						<span style={{ fontWeight: "bold" }}>학적:</span> KAIST 전산학부 재학중 (4학년)
						<br />
						<span style={{ fontWeight: "bold" }}>개발 경력:</span> 풀스텍 개발자로 3년 이상 IT 스타트업에서 근무
						<br />
						<span style={{ fontWeight: "bold" }}>주요 역량:</span>
						<ul>
							<li>- Typescript · React · Next 로 Single Page Application 제작 및 배포</li>
							<li>- MySQL · Ruby · Rails 로 탄탄한 백앤드 API 설계</li>
							<li>- EC2 · Code Deploy · Docker 로 다운타임 없고 편리한 개발환경 구축</li>
							<li>- AWS RDS · S2 · Cloudfront 로 데이타 관리 및 제공</li>
						</ul>
						<br />
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
							Our every project is dedicated to solving societal issues. We aspire to help everyone create social value through Web 3.0, regardless of
							gender, background, or generational differences.
						</>
					),
					ko: (
						<>
							모든 프로젝트는 사회적 문제 해결을 위해 존재합니다. 성별, 배경, 세대 차이에 상관없이 모두가 웹3.0을 통해 사회적 가치를 창출할 수 있도록
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
							Things related to Web 3.0 is often recognized as a &quot;rugpull&quot; and “ponzi scheme”. Through practical and productive
							applications, we challenge such stereotypes surrounding Web 3.0.
						</>
					),
					ko: (
						<>
							웹 3.0과 관련해 아직은 “투기”, &quot;도박&quot; 등 부정적 사회 인식이 존재합니다. 실질적이고 생산적인 가치 창출을 통해 웹 3.0을 둘러싼
							고정관념에 도전합니다.
						</>
					),
				},
			},
			community: {
				title: {
					en: [<>Community-</>, <>obsessed</>],
					ko: [<>커뮤니티와 함께</>, <></>],
				},
				desc: {
					en: (
						<>
							We believe the longevity of Web 3.0 are determined by the users, the community. Our supporters’ voices will be reflected in our future
							decisions to evolve into a healthy DAO.
						</>
					),
					ko: (
						<>
							웹 3.0의 수명은 결국 함께하는 유저와 커뮤니티에 의해 결정된다고 확신합니다. SOONI Labs는 커뮤니티의 목소리와 함께 건강한 DAO를 향해
							나아갑니다.
						</>
					),
				},
			},
		},
	},
	soonilabs: {
		main: {
			title: {
				en: <>SOONI Labs</>,
				ko: <>SOONI Labs</>,
			},
			motto: {
				en: <>Connecting Through Blockchain</>,
				ko: <>사회를 잇는 블록체인</>,
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
						Founded in 2021, SOONI Labs is the first Korean NFT-focused company that revitalizes a healthy Web 3.0 ecosystem through practical B-Apps.
					</>
				),
				ko: <>2021년에 설립된 SOONI Labs는 실용적인 B-App을 통해 건강한 웹 3.0 생태계 구축에 앞장서는 한국 최초의 NFT 중심 기업입니다.</>,
			},
		},
		mission: {
			title: {
				en: <>Our Misson</>,
				ko: <>미션</>,
			},
			subtitle: {
				en: <>We are here to make a positive impact, to create a warm Web 3.0 ecosystem where art, society, and technology are all appreciated.</>,
				ko: (
					<>
						SOONI Labs는 한국뿐만 아니라 전 세계를 위한 지속적인 프로젝트 개발을 통해 예술, 사회, 기술이 융합되어 긍정적인 영향을 주는 웹 3.0 생태계를
						만들어 갑니다.
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
							Our every project is dedicated to solving societal issues. We aspire to help everyone create social value through Web 3.0, regardless of
							gender, background, or generational differences.
						</>
					),
					ko: (
						<>
							모든 프로젝트는 사회적 문제 해결을 위해 존재합니다. 성별, 배경, 세대 차이에 상관없이 모두가 웹3.0을 통해 사회적 가치를 창출할 수 있도록
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
							Things related to Web 3.0 is often recognized as a &quot;rugpull&quot; and “ponzi scheme”. Through practical and productive
							applications, we challenge such stereotypes surrounding Web 3.0.
						</>
					),
					ko: (
						<>
							웹 3.0과 관련해 아직은 “투기”, &quot;도박&quot; 등 부정적 사회 인식이 존재합니다. 실질적이고 생산적인 가치 창출을 통해 웹 3.0을 둘러싼
							고정관념에 도전합니다.
						</>
					),
				},
			},
			community: {
				title: {
					en: [<>Community-</>, <>obsessed</>],
					ko: [<>커뮤니티와 함께</>, <></>],
				},
				desc: {
					en: (
						<>
							We believe the longevity of Web 3.0 are determined by the users, the community. Our supporters’ voices will be reflected in our future
							decisions to evolve into a healthy DAO.
						</>
					),
					ko: (
						<>
							웹 3.0의 수명은 결국 함께하는 유저와 커뮤니티에 의해 결정된다고 확신합니다. SOONI Labs는 커뮤니티의 목소리와 함께 건강한 DAO를 향해
							나아갑니다.
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
				ko: [<>SOONI Labs 팀원들은 블록체인을 기반으로</>, <>함께 고민하고 해결하며, 세계를 향해 나아갑니다.</>],
				en: [<>A group of active problem solvers working together</>, <>to provide value from blockchain, for the world.</>],
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
								<Div>KAIST Business & Tech Management</Div>
								<Div pt20>HR @ an edu-tech startup</Div>
								<Div pt20>1st in MSK x Block Crafters Case Competition</Div>
							</Div>
						),
						ko: (
							<Div textCenter>
								<Div>KAIST 기술경영학 전공</Div>
								<Div pt20>HR @ 에듀텍 스타트업</Div>
								<Div pt20>
									MSK x Block Crafters <br /> 산학협력 프로젝트 우승
								</Div>
							</Div>
						),
					},
				},
				yeajean: {
					name: {
						en: "Serena Lee",
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
								<Div>Yonsei University Business</Div>
								<Div pt20>PM @ a social venture</Div>
								<Div pt20>Marketing @ a cultural complex</Div>
							</Div>
						),
						ko: (
							<Div textCenter>
								<Div>연세대학교 경영학 전공</Div>
								<Div pt20>PM @ 소셜 벤처 기업</Div>
								<Div pt20>마케팅 @ 복합문화공간</Div>
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
								<Div>New York University Economics</Div>
								<Div pt20>PM @ GreenWall Building Materials</Div>
								<Div pt20>NFT Degen</Div>
							</Div>
						),
						ko: (
							<Div textCenter>
								<Div>뉴욕대학교 경제학 전공</Div>
								<Div pt20>PM @ GreenWall Building Materials</Div>
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
								<Div>HongKong PolyTechnic University Product Design</Div>
								<Div pt20>Product Designer @ Lulugine</Div>
								<Div pt20>Illustrator @ A’ Prime</Div>
								<Div pt20>HK 2022 Disney Imaginations Competition Finalist</Div>
							</Div>
						),
						ko: (
							<Div textCenter>
								<Div>홍콩 폴리테크닉 대학교 제품디자인학 전공</Div>
								<Div pt20>제품 디자이너 @ Lulugine</Div>
								<Div pt20>일러스트 디자이너 @ A’ Prime</Div>
								<Div pt20>HK 2022 Disney Imaginations Competition 결승 진출</Div>
							</Div>
						),
					},
				},
				jade: {
					name: {
						en: "Tyler Park",
						ko: "박석민",
					},
					position: {
						ko: "액셀러레이터",
						en: "Accelerator",
					},
					countries: "🇰🇷",
					specialty: {
						en: "Interactions made simply beautiful",
						ko: "간단하고 예쁜 상호작용을 만들다",
					},
					desc: {
						en: (
							<Div textCenter>
								<Div pt20>CEO @ a company-buidling startup</Div>
								<Div pt20>Founder @ a tech startup</Div>
								<Div pt20>Founder @ a blockchain startup</Div>
							</Div>
						),
						ko: (
							<Div textCenter>
								<Div pt20>CEO @ 컴퍼니 빌딩 스타트업</Div>
								<Div pt20>창립자 @ 테크 스타트업</Div>
								<Div pt20>창립자 @ 블록체인 스타트업</Div>
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
						ko: "Tech Lead",
						en: "Tech Lead",
					},
					specialty: {
						en: "Developing the next generation of web",
						ko: "웹의 다음 세대를 이끌다",
					},
					countries: "🇰🇷 🇻🇳 🇨🇦",
					desc: {
						en: (
							<Div textCenter>
								<Div>KAIST Computer Science</Div>
								<Div pt20>SW Engineer @ an edu-tech startup</Div>
							</Div>
						),
						ko: (
							<Div textCenter>
								<Div>KAIST 전산학 전공</Div>
								<Div pt20>개발자 @ 에듀텍 스타트업</Div>
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
								<Div>KAIST Computer Science</Div>
								<Div pt20>Founder, SW Engineer @ Sureplus</Div>
								<Div pt20>SW Engineer @ Waddle</Div>
							</Div>
						),
						ko: (
							<Div textCenter>
								<Div>KAIST 전산학 전공</Div>
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
								<Div>KAIST Computer Science</Div>
							</Div>
						),
						ko: (
							<Div textCenter>
								<Div>KAIST 전산학 전공</Div>
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
						ko: "SOONI Labs 2021년 설립",
						en: "SOONI Labs was founded in 2021",
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
						en: <>PitchForce Startup Competition Finalist</>,
					},
				},
				gomz: {
					name: {
						ko: "NFT: WeBe",
						en: "NFT: WeBe",
					},
					desc: {
						ko: "@WeBe_weirdbears",
						en: "@WeBe_weirdbears",
					},
				},
				gomzSpace: {
					name: {
						ko: "BetterWorld",
						en: "BetterWorld",
					},
					desc: {
						ko: "PFP Communnity Utility App",
						en: "PFP Communnity Utility App",
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
