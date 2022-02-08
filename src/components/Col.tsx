import React from "react"
import Div from "./Div"
import type { DivPropType } from 'src/types/DivPropType'

type ColType =
	| DivPropType
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