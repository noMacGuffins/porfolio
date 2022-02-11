import React from "react"
import Div from "./Div"
import type { DivPropsType } from "src/types/DivPropsType";

type RowType =
	| DivPropsType
	| {
			auto?;
			children?;
			key?;
	  };

const Row = (props: DivPropsType) => {
	const { auto, key, ...others } = props;
	if (auto) others["rowAuto"] = auto;
	return (
		<Div key={key} row {...others}>
			{props.children}
		</Div>
	);
};

export default Row