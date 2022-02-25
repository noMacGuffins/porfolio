import Link from "next/link";
import { useState } from "react";
import Col from "./Col";
import Div from "./Div";
import RoundedButton from "./RoundedButton";
import Row from "./Row";

function Submit() {
	const [email, setEmail] = useState('')
	const [submit, setSubmit] = useState(0)

	const onChange = (event) => {
        setEmail(event.target.value)
    }
	const onClick = () =>{
		console.log('submit: ' + email)
		setSubmit(1)
	}
	
	return (
		<Div>
			{submit == 0 && (
			<Row flex justifyCenter>
				<Col pr0 mx0>
					<Div flex fontSize20 borderBlack borderB2>
						<input id="name" placeholder="Your email address" size={25} required onChange={onChange}/>
					</Div>
				</Col>
				<Col flex justifyEnd itemCenter pl0 mx0>
					<Div borderBlack border2 px50 roundedLg onClick={onClick}>
						Yes
					</Div>
				</Col>	
			</Row>
			)}
			{submit == 1 && (
				<Div textCenter> Thanks for sigining up. </Div>
			)}
		</Div>
	)
}
export default Submit