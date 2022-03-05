import classNames from "classnames";

const EmptyBlock = ({ h = 150, ...props }) => {
	const { className } = props;
	return <div className={classNames("d-block", className)} style={{ height: `${h}px`, width: "100%" }}></div>;
};

export default EmptyBlock;
