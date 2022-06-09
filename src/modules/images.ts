const prefix = "https://dj6yvnhvuzrpo.cloudfront.net";

export const images = {
    portfolio: {
        betterWorldBlueLogo: "/images/portfolio/betterWorldBlueLogo.png",
        webeIllust: "/images/portfolio/webeIllust.png",
    },
    team: {
        erickim: "/images/team/erickim.jpg",
        jadeyang: "/images/team/jadeyang.jpg",
        jaehwanjeong: "/images/team/jaehwanjeong.jpeg",
        jieunpark: "/images/team/jieunpark.jpg",
        minjunkim: "/images/team/minjunkim.jpg",
        sehanpark: "/images/team/sehanpark.jpg",
        seunganjung: "/images/team/seunganjung.jpg",
        yeajeanlee: "/images/team/yeajeanlee.jpg",
    },
    community: "/images/community.png",
    helping: "/images/helping.png",
    instagramIcon: "/images/instagramIcon.png",
    mailIcon: "/images/mailIcon.png",
    pitchForceLogo: "/images/pitchForceLogo.png",
    sooniLabsIconNew: "/images/sooniLabsIconNew.png",
    stereotypes: "/images/stereotypes.png",
    thinktomiIcon: "/images/thinktomiIcon.png",
    twitterIcon: "/images/twitterIcon.png",
}


const addPrefixToImageUris = (data) => {
	data &&
		Object.entries(data).map(([key, v]) => {
			if (typeof v === "string") {
				const source = prefix + v;
				data[key] = source;
				if (typeof Image !== "undefined") new Image().src = source;
			} else if (typeof v === "object") {
				addPrefixToImageUris(v);
			}
		});
};
(function () {
	addPrefixToImageUris(images);
})();

export const IMAGES = images;