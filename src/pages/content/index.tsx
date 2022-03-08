import Div from "src/components/Div";
import { pagesWording } from "src/wording/pages";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import useIsTablet from "src/hooks/useIsTablet";
import TopBar from "src/components/TopBar";
import { PlusCircleIcon } from "@heroicons/react/outline";
import "src/scripts/cursorMove";
import BasicHeadWrapper from "src/components/BasicHeadWrapper";
import { useRouter } from "next/router";
import Footer from "src/components/Footer";

const Main = () => {
	const isTablet = useIsTablet();
	const { locale } = useRouter();
	return (
		<Div h={"102vh"} relative flex row itemsCenter justifyCenter clx={"radial-gradient"} px30>
			<Div maxW={600} fontBold textCenter leadingNone pb70 z100>
				<Div textXxl={!isTablet} fontSize60={isTablet} clx={"timeline"} mb10 textGray900>
					{pagesWording.index.main.title[locale]}
				</Div>
				<Div textXl clx={"timeline colorful colorful2"} textGray900>
					{pagesWording.index.main.motto[locale]}
				</Div>
			</Div>
		</Div>
	);
};

const Content = () => {
	return (
		<Controller>
			<Div relative bgGray100>
				<TopBar mode={"light"} />
				<Main />
				<Footer />
			</Div>
		</Controller>
	);
};

export default function Index() {
	return (
		<BasicHeadWrapper>
			<Content />
		</BasicHeadWrapper>
	);
}
