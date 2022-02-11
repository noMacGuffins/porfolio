import React from "react";

export const useKaikasWallet = () => {
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

export const useCaver = () => {
	useKaikasWallet();
	// @ts-ignore
	if (typeof window !== "undefined") {
		return window["caver"];
	}
	return null;
};

export const useSelectedAddress = () => {
	// @ts-ignore
	if (typeof window !== "undefined" && typeof window.klaytn !== "undefined") {
		return window["klaytn"].selectedAddress;
	}
	return null;
};