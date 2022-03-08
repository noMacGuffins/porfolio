import { GlobeAltIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import useIsTablet from "src/hooks/useIsTablet";

import { RootState } from "src/store/reducers/rootReducer";
import Link from "next/link";
import Col from "./Col";
import Div from "./Div";
import Row from "./Row";
import { urls } from "src/modules/urls";
import { moveTo } from "src/modules/routerHelper";
import LocaleDropdown from "./LocaleDropdown";
import MobileMenuDropdown from "./MobileMenuDropdown";
import { useRouter } from "next/router";
import { globalsWording } from "src/wording/globals";
import { pagesWording } from "src/wording/pages";

const TopBar = ({ mode }) => {
	const isTablet = useIsTablet();
	const { locale, pathname } = useRouter();
	const textColorProp = mode == "dark" ? { textWhite: true } : { textBlack: true };
	const pages = [
		{ name: globalsWording.topbar.pages.home[locale], url: urls.index },
		{ name: globalsWording.topbar.pages.team[locale], url: urls.team.index },
		{ name: globalsWording.topbar.pages.portfolio[locale], url: urls.portfolio.index },
		{ name: globalsWording.topbar.pages.content[locale], url: urls.content.index },
	];
	return (
		<Div absolute wFull z100 {...textColorProp}>
			<Row flex justifyCenter py20 mx30={!isTablet} mx10={isTablet}>
				<Col auto flex itemsCenter px20={!isTablet} onClick={() => moveTo(urls.index)} cursorPointer>
					{/* <Div imgTag src={"images/sooniLabsBWIconNoBg.png"} h={200} w={200} style={{ opacity: 0.8 }}></Div> */}
					<Div imgTag src={"images/sooniLabsIconNew.png"} h={100} w={100} style={{ opacity: 0.9, transform: "rotate(-90deg)" }}></Div>
				</Col>
				<Col />
				{isTablet ? (
					<>
						<Col auto flex itemsCenter cursorPointer>
							<LocaleDropdown />
						</Col>
						<Col auto flex itemsCenter cursorPointer>
							<MobileMenuDropdown />
						</Col>
					</>
				) : (
					<>
						{pages.map((page) => {
							return (
								<Col auto flex itemsCenter cursorPointer onClick={() => moveTo(page.url)} key={page.url}>
									<Div spanTag fontBold px20 clx={pathname == page.url && "colorful colorful2"}>
										{page.name}
									</Div>
								</Col>
							);
						})}
						<Col auto flex itemsCenter cursorPointer>
							<LocaleDropdown />
						</Col>
					</>
				)}
			</Row>
		</Div>
	);
};

export default TopBar;
