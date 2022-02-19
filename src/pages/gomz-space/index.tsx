import Div from "src/components/Div";
import useIsTablet from "src/hooks/useIsTablet";
import Helmet from "react-helmet";
import TopBar from "src/components/TopBar";

export default function GomzSpace() {
	const isTablet = useIsTablet();
	return (
		<Div>
			<Helmet bodyAttributes={{ style: "background-color : #fff; overflow-x: hidden;" }} />
			<TopBar mode={"bright"} />
		</Div>
	);
}
