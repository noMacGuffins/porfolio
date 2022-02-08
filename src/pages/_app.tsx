import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { wrapper } from "src/store/store";
import { useEffect } from "react";
import { deployedABI, deployedAddress } from "src/modules/constants";

const useKaikasWallet = () => {
	// @ts-ignore
	if (typeof window !== "undefined" && typeof window.klaytn !== "undefined") {
		const klaytn = window["klaytn"];
		if (!klaytn._kaikas.isEnabled()) {
			try {
				klaytn.enable();
			} catch (error) {
				console.error(error);
				console.log("Most likely user cancelled popup");
			}
		} else if (!klaytn._kaikas.isApproved()) {
			console.log("No kaikas wallet history");
		} else {
			console.log("kaikas enabled and approved");
		}
	} else {
		console.log("window undefined");
	}
};

const useCaver = () => {
	useKaikasWallet();
	// @ts-ignore
	if (typeof window !== "undefined") {
		return window["caver"];
	}
	return null;
};

const useSmartContract = () => {
	// @ts-ignore
	const caver = useCaver();
	if (caver) {
		return new caver.klay.Contract(deployedABI, deployedAddress);
	}
	return null;
};

const useSelectedAddress = () => {
	// @ts-ignore
	if (typeof window !== "undefined" && typeof window.klaytn !== "undefined") {
		return window["klaytn"].selectedAddress;
	}
	return null;
};

function MyApp({ Component, pageProps }: AppProps) {
	const smartContract = useSmartContract();
	const selectedAddress = useSelectedAddress();

	useEffect(() => {
		// smartContract.methods
		// 	.getBalance()
		// 	.send({
		// 		from: selectedAddress,
		// 		gas: "250000",
		// 	})
		// 	.on("transactionHash", (txHash) => {
		// 		console.log(txHash);
		// 	})
		// 	.on("receipt", (receipt) => {
		// 		console.log(receipt);
		// 	});
		if (selectedAddress) {
			smartContract.methods.getBalance().send(
				{
					from: selectedAddress,
					gas: "250000",
				},
				(err, res) => {
					console.log(res);
				},
			);
		}
	});

	// klaytn.on("accountsChanged", function (accounts) {
	// 	// Your code
	// });

	return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
