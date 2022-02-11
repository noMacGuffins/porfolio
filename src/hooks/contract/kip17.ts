import React from "react";
import { deployedABI, deployedAddress } from "src/modules/constants";
import { useCaver } from "../wallet/kaikas";

export const useSmartContract = () => {
	// @ts-ignore
	const caver = useCaver();
	if (caver) {
		return new caver.klay.Contract(deployedABI, deployedAddress);
	}
	return null;
};
