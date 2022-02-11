import React from "react"
import Div from "./Div"
import type { DivPropsType } from "src/types/DivPropsType";

type ColType =
	| DivPropsType
	| {
			auto?;
			children?;
	  };

const Col = (props: ColType) => {
	const { auto, ...others } = props;
	if (auto) others["colAuto"] = auto;
	return (
		<Div col {...others}>
			{props.children}
		</Div>
	);
};

export default Col