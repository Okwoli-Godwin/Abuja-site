import React from "react";
import styled from "styled-components";

interface Iprops {
	bg: string;
	bi: string;
	name: string;
}
const SliderCard: React.FC<Iprops> = ({ bg, bi, name }) => {
	return (
		<Container>
			<Card bg={bg}>
				<ProfileContainer>
					<Profile src={bi}/>
					<Name>{name}</Name>
				</ProfileContainer>
				<p>
					Working with Andela is one of <br />
					 the most important and best <br />
					  decisions we have made so <br />
					   far as an early stage <br />
					    company. I have worked with <br />
						 Andela on two different occasions and could not recommend them more.
				</p>
			</Card>
		</Container>
	);
};

export default SliderCard;

const Card = styled.div<{ bg: string }>`
	height: 250px;
	width: 100%;
	background: ${(props) => props.bg};
	padding: 20px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	margin: 10px;
	border-radius: 5px;
`;
const ProfileContainer = styled.div`
	display: flex;
	align-items: center;
`;
const Profile = styled.img`
	height: 40px;
	width: 40px;
	background-color: silver;
	border-radius: 50%;
`;
const Name = styled.div`
	margin-left: 20px;
	font-family: "inter", sans-serif;
	font-weight: 600;
	font-size: 16px;
	color: #132128;
`;
const Container = styled.div`
	width: 700px;
	display: flex;
	background-color: red;
`;