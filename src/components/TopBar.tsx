import useIsTablet from "src/hooks/useIsTablet";
import Col from "./Col";
import Div from "./Div";
import Row from "./Row";
import { urls } from "src/modules/urls";
import { moveTo } from "src/modules/routerHelper";
import LocaleDropdown from "./LocaleDropdown";
import MobileMenuDropdown from "./MobileMenuDropdown";
import { useRouter } from "next/router";
import { globalsWording } from "src/wording/globals";
import { IMAGES } from "src/modules/images";

const TopBar = ({ mode }) => {
	const isTablet = useIsTablet();
	const { locale, pathname } = useRouter();
	const textColorProp = mode == "dark" ? { textWhite: true } : { textBlack: true };
	const pages = [
		{ name: globalsWording.topbar.pages.home[locale], url: urls.index },
		{ name: globalsWording.topbar.pages.team[locale], url: urls.team.index },
		{ name: globalsWording.topbar.pages.portfolio[locale], url: urls.portfolio.index },
		// { name: globalsWording.topbar.pages.content[locale], url: urls.content.index },
	];
	return (
		<Div absolute wFull z100 {...textColorProp}>
			<Row flex justifyCenter py20 mx30={!isTablet} mx10={isTablet}>
				<Col auto flex itemsCenter px20={!isTablet} onClick={() => moveTo(urls.index)} cursorPointer>
					<Div imgTag src={IMAGES.sooniLabsIconNew} h={60} w={60} style={{ opacity: 0.9 }}></Div>
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
								<Col auto flex itemsCenter cursorPointer onClick={() => moveTo(page.url)} key={page.url} pb4>
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
