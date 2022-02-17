import Div from "./Div";

const RoundedButton = ({ size, color, text, onClick }) => {
	let divProps = {} as any;
	let textProps = {} as any;
	switch (size) {
		case "small":
			divProps = { ...divProps, roundedMd: true, px: 20, py: 10 };
			textProps = { ...textProps, textSm: true };
			break;
		case "base":
			divProps = { ...divProps, roundedMd: true, px: 30, py: 12 };
			textProps = { ...textProps, textBase: true };
			break;
		case "large":
			divProps = { ...divProps, roundedLg: true, px: 40, py: 14 };
			textProps = { ...textProps, textLg: true };
			break;
		case "xlarge":
			divProps = { ...divProps, roundedLg: true, px: 60, py: 16 };
			textProps = { ...textProps, textXl: true, fontBold: true };
			break;
		default:
			divProps = { ...divProps, roundedMd: true, px: 15, py: 12 };
			textProps = { ...textProps, textBase: true };
	}
	switch (color) {
		case "red":
			divProps = { ...divProps, bgDangerLight: true };
			textProps = { ...textProps, textDanger: true };
			break;
		case "yellow":
			divProps = { ...divProps, bgWarningLight: true };
			textProps = { ...textProps, textWarning: true };
			break;
		case "green":
			divProps = { ...divProps, bgSuccessLight: true };
			textProps = { ...textProps, textSuccess: true };
			break;
		case "black":
			divProps = { ...divProps, bgGrayOpacity: true, bdBlurSm: true };
			textProps = { ...textProps, textWhite: true };
			break;
		default:
	}
	return (
		<Div {...divProps} textCenter onClick={onClick} cursorPointer>
			<Div spanTag {...textProps}>
				{text}
			</Div>
		</Div>
	);
};

export default RoundedButton;
