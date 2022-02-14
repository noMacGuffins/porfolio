import React from "react";
import Div from "./Div";
import type { DivPropsType } from "src/types/DivPropsType";

const Row = (props: DivPropsType) => {
	return (
		<Div row {...props}>
			{props.children}
		</Div>
	);
};

export default Row;
