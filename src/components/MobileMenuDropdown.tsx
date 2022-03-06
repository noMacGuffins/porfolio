import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { GlobeAltIcon, MenuAlt3Icon } from "@heroicons/react/outline";
import Div from "./Div";
import { LOCALES, moveTo, reloadWithLocale } from "src/modules/routerHelper";
import { useRouter } from "next/router";
import { globalsWording } from "src/wording/globals";
import { urls } from "src/modules/urls";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function MobileMenuDropdown() {
	const { locale } = useRouter();
	const pages = [
		{ name: globalsWording.topbar.pages.team[locale], url: urls.team.index },
		{ name: globalsWording.topbar.pages.portfolio[locale], url: urls.portfolio.index },
		{ name: globalsWording.topbar.pages.contact[locale], url: urls.contact.index },
	];
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="px-4 text-lg text-black">
					<MenuAlt3Icon width={30} height={30} />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="origin-top-right absolute right-0 rounded-md shadow-lg bg-black text-lg text-black">
					{pages.map((page) => {
						return (
							<Menu.Item key={page.name}>
								{({ active }) => (
									<Div
										py10
										px20
										w150
										clx={classNames(active ? "bg-gray-100 text-black" : "text-white", "block px-4 py-2")}
										onClick={() => moveTo(page.url)}
									>
										{page.name}
									</Div>
								)}
							</Menu.Item>
						);
					})}
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
