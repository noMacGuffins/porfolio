import React from "react";
import Div from "src/components/Div";

export const pagesWording = {
	home: {
		index: {
			mintSection: {
				title: {
					ko: "GOMZ",
					en: "GOMZ",
				},
				mainMessage: {
					ko: "부정적 에너지 없는 세상을 위해",
					en: "For a world without hard cheese.",
				},
				secondaryMessage: {
					ko: "민팅은 2022.5.5에 시작됩니다",
					en: "Minting starts May 5, 2022.",
				},
				tertiaryMessage: {
					ko: (
						<>
							연락은{" "}
							<Div spanTag textInfo>
								tier0.momentum.kr@gmail.com
							</Div>
							으로 해주세요.
						</>
					),
					en: (
						<>
							For inquieries or collaboration opportunities please contact{" "}
							<Div spanTag textInfo>
								tier0.momentum.kr@gmail.com
							</Div>
							.
						</>
					),
				},
				mintButton: {
					ko: "민트",
					en: "Mint",
				},
			},
			storySection: {
				title: {
					ko: "스토리",
					en: "Story",
				},
				plot: {
					ko: (
						<>
							Greed-driven, planet-wide war has rendered Gomz&apos;s homes uninhabitable. 10,000 of these bears have turned to space with an
							altruistic vision:{" "}
							<Div textWhite textCenter py15 fontBold>
								Establish a world without hate by helping individuals that are in need.
							</Div>{" "}
							After years of deep hibernation in their space capsules, Gomz have been awakened by other space wanderers who are also in search of a
							habitable planet. Instead of fighting these space wanderers, Gomz have decided to host parties for these strangers in their rooms
							(GomRoomz) as the first testimony to their vision.
						</>
					),
					en: (
						<>
							Greed-driven, planet-wide war has rendered Gomz&apos;s homes uninhabitable. 10,000 of these bears have turned to space with an
							altruistic vision:{" "}
							<Div textWhite textCenter py15 fontBold>
								Establish a world without hate by helping individuals that are in need.
							</Div>{" "}
							After years of deep hibernation in their space capsules, Gomz have been awakened by other space wanderers who are also in search of a
							habitable planet. Instead of fighting these space wanderers, Gomz have decided to host parties for these strangers in their rooms
							(GomRoomz) as the first testimony to their vision.
						</>
					),
				},
				comment: {
					ko: (
						<>
							Gomz will never lose hospitality.
							<br /> Even as space nomads.
						</>
					),
					en: (
						<>
							Gomz will never lose hospitality.
							<br /> Even as space nomads.
						</>
					),
				},
			},
			gallerySection: {
				title: {
					ko: <>Gomz NFT</>,
					en: <>Gomz NFT</>,
				},
				plot: {
					ko: (
						<>
							All Gomz have pictures of themseleves back in their home planet, which they are willing to let you mint as an NFT. Visit the{" "}
							<Div textInfo spanTag>
								Gomz gallery
							</Div>{" "}
							for a preview.
						</>
					),
					en: (
						<>
							All Gomz have pictures of themseleves back in their home planet, which they are willing to let you mint as an NFT. Visit the{" "}
							<Div textInfo spanTag>
								Gomz gallery
							</Div>{" "}
							for a preview.
						</>
					),
				},
			},
			gomRoomzSection: {
				title: {
					ko: <>GomzSpace Metaverse</>,
					en: <>GomzSpace Metaverse</>,
				},
				description: {
					ko: (
						<>
							The Gomz spaceship will be released as metaverse with P2E and community socialization utilities. GomRoomz is special in that anyone with
							a Klaytn wallet will be able to join the metaverse. With more users, more fun and utility especially for room holders.
							<br />
							<Div textWhite fontBold spanTag>
								Gomz holders
							</Div>{" "}
							will be provided with{" "}
							<Div textWhite fontBold spanTag>
								HUGE
							</Div>{" "}
							advantages in minting GomRoomz depending on the number and rarities of thier Gomz NFTs.
						</>
					),
					en: (
						<>
							The Gomz spaceship will be released as metaverse with P2E and community socialization utilities. GomRoomz is special in that anyone with
							a Klaytn wallet will be able to join the metaverse. With more users, more fun and utility especially for room holders.
							<br />
							<Div textWhite fontBold spanTag>
								Gomz holders
							</Div>{" "}
							will be provided with{" "}
							<Div textWhite fontBold spanTag>
								HUGE
							</Div>{" "}
							advantages in minting GomRoomz depending on the number and rarities of thier Gomz NFTs.
						</>
					),
				},
			},
		},
	},
};
