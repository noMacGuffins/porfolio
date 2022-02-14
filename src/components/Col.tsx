import React from "react";
import Div from "./Div";
import type { DivPropsType } from "src/types/DivPropsType";

type ColType =
	| DivPropsType
	| {
			auto?;
			children?;
			key?;
	  };

const Col = (props: ColType) => {
	const { auto, key, ...others } = props;
	if (auto) others["colAuto"] = auto;
	return (
		<Div key={key} col {...others}>
			{props.children}
		</Div>
	);
};

export default Col;
