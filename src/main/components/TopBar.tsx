import useIsTablet from "src/hooks/useIsTablet";
import Col from "../../components/Col";
import Div from "../../components/Div";
import Row from "../../components/Row";
import { urls } from "src/modules/urls";
import { moveTo } from "src/modules/routerHelper";
import LocaleDropdown from "../../components/LocaleDropdown";
import MobileMenuDropdown from "../../components/MobileMenuDropdown";
import { useRouter } from "next/router";
import { globalsWording } from "src/wording/globals";
import { IMAGES } from "src/modules/images";

const TopBar = ({ mode }) => {
	const isTablet = useIsTablet();
	const { locale, pathname } = useRouter();
	const textColorProp = mode == "dark" ? { textWhite: true } : { textBlack: true };
	const pages = [
		{ name: globalsWording.topbar.pages.home[locale], url: urls.index },
		{ name: globalsWording.topbar.pages.portfolio[locale], url: urls.portfolio.index },
	];
	return (
		<Div fixed wFull z100 bgOpacity60 bgWhite {...textColorProp}>
			<Div maxW={1100} mxAuto>
				<Row flex justifyCenter py20 mx30={!isTablet} mx10={isTablet}>
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
										<Div spanTag fontBold px15 clx={pathname == page.url && "colorful colorful2"}>
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
		</Div>
	);
};

export default TopBar;
