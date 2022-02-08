export const deployedABI = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
		signature: "constructor",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
		constant: true,
		signature: "0x8da5cb5b",
	},
	{
		inputs: [],
		name: "getBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
		constant: true,
		signature: "0x12065fe0",
	},
	{
		inputs: [],
		name: "deposit",
		outputs: [],
		stateMutability: "payable",
		type: "function",
		payable: true,
		signature: "0xd0e30db0",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_value",
				type: "uint256",
			},
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
		signature: "0x12514bba",
	},
];

export const deployedAddress = "0x1D54a0f18252ce5404d9aE18BfC38f844009bdE6";
