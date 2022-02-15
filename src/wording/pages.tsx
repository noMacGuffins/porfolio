import React from "react";
import Div from "src/components/Div";

export const pagesWording = {
	home: {
		index: {
			mintSection: {
				title: {
					en: "GOMZ",
				},
				mainMessage: {
					en: "For a world without hard cheese.",
				},
				secondaryMessage: {
					en: "Minting starts March 30, 2022.",
				},
				tertiaryMessage: {
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
					en: "Mint",
				},
			},
			storySection: {
				title: {
					en: (
						<>
							Never lose hospitality,
							<br /> even as space nomads.
						</>
					),
				},
				plot: {
					en: (
						<>
							Greed-driven, planet-wide war has rendered Gomz&apos;s homes uninhabitable. 10,000 of these bears have turned to space with an
							altruistic vision:{" "}
							<Div textWhite textCenter py15>
								Establish a world without hate by helping individuals that are in need.
							</Div>{" "}
							After years of deep hibernation in their space capsules, Gomz have been awakened by other space wanderers who are also in search of a
							habitable planet. Instead of fighting these space wanderers, Gomz have decided to host parties for these strangers in their rooms
							(GomRoomz) as the first testimony to their vision.
						</>
					),
				},
			},
			gallerySection: {
				title: {
					en: <>Gomz Nft</>,
				},
				plot: {
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
		},
	},
};
