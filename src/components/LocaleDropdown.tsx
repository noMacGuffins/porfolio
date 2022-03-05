import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { GlobeAltIcon } from "@heroicons/react/outline";
import Div from "./Div";
import { LOCALES, reloadWithLocale } from "src/modules/routerHelper";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function LocaleDropdown() {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="px-4 text-lg text-black">
					<GlobeAltIcon width={30} height={30} />
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
					{Object.keys(LOCALES).map((locale) => {
						return (
							<Menu.Item key={locale}>
								{({ active }) => (
									<Div
										py10
										px20
										clx={classNames(active ? "bg-gray-100 text-black" : "text-white", "block px-4 py-2")}
										onClick={() => reloadWithLocale(LOCALES[locale])}
									>
										{locale}
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
