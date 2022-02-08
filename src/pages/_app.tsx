import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { wrapper } from "src/store/store";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const tryEnablingKaikas = async (klaytn) => {
		try {
			const accounts = await klaytn.enable();
			const account = accounts[0];
		} catch (error) {
			// Handle error. Likely the user rejected the login
			console.error(error);
		}
	};
	useEffect(() => {
		// @ts-ignore
		if (typeof window.klaytn !== "undefined") {
			// Kaikas user detected. You can now use the provider.
			const klaytn = window["klaytn"];
			tryEnablingKaikas(klaytn);
		} else {
			console.log("kaikas not present");
		}
	});

	// klaytn.on("accountsChanged", function (accounts) {
	// 	// Your code
	// });

	return <Component {...pageProps} />;
}
export default wrapper.withRedux(MyApp);
