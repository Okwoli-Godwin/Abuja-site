import React, { useState } from "react";
import styled from "styled-components";
import Process from "../Process/Process";
import Application from "../Application/Application";
import Find from "../Find/Find";
import Participate from "../Participate/Participate"
import Center from "../Center/Center";
import Calendar from "../Calendar/Calendar"

const Solution = () => {
	const [show, setShow] = useState<Boolean>(false);
	const [show2, setShow2] = useState<Boolean>(false);
	const [show3, setShow3] = useState<Boolean>(false);
	const [show4, setShow4] = useState<Boolean>(false);
	const [show5, setShow5] = useState<Boolean>(true);
	const [show6, setShow6] = useState<Boolean>(false);

	const Toogle = () => {
		setShow(true);
		setShow2(false);
		setShow3(false);
		setShow4(false);
		setShow5(false);
		setShow6(false);
	};
	const Toogle2 = () => {
		setShow2(true);
		setShow(false);
		setShow3(false);
		setShow4(false);
		setShow5(false);
		setShow6(false);
	};
	const Toogle3 = () => {
		setShow3(true);
		setShow2(false);
		setShow(false);
		setShow4(false);
		setShow5(false);
		setShow6(false);
	};
	const Toogle4 = () => {
		setShow4(true);
		setShow3(false);
		setShow2(false);
		setShow(false);
		setShow5(false);
		setShow6(false);
	};
	const Toogle5 = () => {
		setShow5(true);
		setShow4(false);
		setShow3(false);
		setShow2(false);
		setShow(false);
		setShow6(false);
	};
	const Toogle6 = () => {
		setShow6(true);
		setShow5(false);
		setShow4(false);
		setShow3(false);
		setShow2(false);
		setShow(false);
	};

	return (
		<Container>

			<ButtonHold>
				<Button bg={show5 ? "bb" : ""} onClick={Toogle5}>
					About Centre
				</Button>
				<Button bg={show ? "bb" : ""} onClick={Toogle}>
					Nature of Research
				</Button>
				<Button bg={show4 ? "bb" : ""} onClick={Toogle4}>
					Who can Participate
				</Button>
				<Button bg={show2 ? "bb" : ""} onClick={Toogle2}>
					Grant Process
				</Button>
				<Button bg={show3 ? "bb" : ""} onClick={Toogle3}>
					Application Process
				</Button>
				<Button bg={show6 ? "bb" : ""} onClick={Toogle6}>
					Calendar
				</Button>
			</ButtonHold>

			{show ?<Find /> : null}

			{show2 ? <Process /> : null}

			{show3 ? <Application /> : null}

			{show4 ? <Participate /> : null}

			{show5 ? <Center /> : null}

			{show6 ? <Calendar /> : null}
		</Container>
	);
};

export default Solution;

const ButtonHold = styled.div`
	/* margin-top: 10px; */
	/* background-color: red; */
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;
const Button = styled.button<{ bg: string }>`
	height: 60px;
	width: 250px;
	border-radius: 50px;
	/* position: relative; */
	border: 0;
	background-color: ${({ bg }) => (bg ? "#fff" : "#219653")};
	color: ${({ bg }) => (bg ? "#219653" : "#fff")};
	font-size: 20px;
	margin-bottom: 15px;
	font-weight: bold;
	cursor: pointer;
	transition: all 350ms;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	margin-right: 10px;
	margin-left: 10px;
	@media screen and (max-width: 425px) {
		width: 150px;
		font-size: 17px;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
	flex-direction: column;
	padding-bottom: 50px;
`;