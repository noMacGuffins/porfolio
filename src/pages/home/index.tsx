import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Div from "src/components/Div";
import Row from "src/components/Row";
import Col from "src/components/Col";
import { Logo } from "src/components/svg/Gomz";

const navigation = [
	{ name: "Product", href: "#" },
	{ name: "Features", href: "#" },
	{ name: "Marketplace", href: "#" },
	{ name: "Company", href: "#" },
];

export default function Home() {
	return (
		<Div bgBlack>
			<Div container mxAuto maxWXl7 textWhite>
				<Row>
					<Col>
						<Div imageTag src={"images/sooniBgBlack"} />
					</Col>
					<Col></Col>
				</Row>
			</Div>
		</Div>
	);
}
