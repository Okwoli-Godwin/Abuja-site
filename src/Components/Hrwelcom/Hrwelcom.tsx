import React from "react";
import styled from "styled-components";
import img2 from "../Assets/vice.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Hrwelcome = () => {
  return (
    <Container>
      <Top>
        <h1>Vice Chancellor's Welcome Address</h1>
      </Top>
      <br />
      <br />
      <Wrapper>
        <Right>
          <Card src={img2} />
          <Hold>
            <Up>Professor Abdul-Rasheed Na'Allah</Up>
            <Down>Vice Chancellor, University of Abuja</Down>
          </Hold>
        </Right>
        <Left>
          {/* <Icon src={img} /> */}
          <P>
            <p>
              It is my pleasure to welcome you all to the Centre for
              Undergraduate Research at the University of Abuja. As the Vice
              Chancellor of this esteemed institution, which is designed to
              serve as a hub for the academic exploration of our undergraduate
              students. The Centre for Undergraduate Research is a long-awaited
              and......
            </p>
          </P>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#219653" : "#5f5f5f",
            })}
          >
            <G>
              Read more
              <Icons>
                <AiOutlineArrowRight />
              </Icons>
            </G>
          </NavLink>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default Hrwelcome;
const Top = styled.div`
  h1 {
    font-size: 32px;
    color: #00a85a;
    @media screen and (max-width: 768px) {
      width: 100%;
      text-align: center;
      font-size: 30px;
    }
    @media screen and (max-width: 425px) {
      width: 100%;
      text-align: center;
      font-size: 25px;
    }
  }
`;
const Down = styled.div`
  font-size: 0.9375rem;
  font-size: 0.9375rem;
  margin-top: 10px;
  color: #e5f6ee;
  text-align: center;
`;

const Up = styled.div`
  color: white;
  font-size: 24px;
  line-height: 2.5rem;
  font-weight: 600;
  text-align: center;
`;
const Hold = styled.div`
  width: 450px;
  height: 160px;
  justify-content: center;
  background-color: #10a662;
  position: absolute;
  border-radius: 10px;
  left: 295px;
  flex-direction: column;
  top: 320px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 100%;
    left: 0;
    right: 0;
    margin-top: 80px;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    left: 0;
    right: 0;
    margin-top: -30px;
  }
  /* justify-content: space-around; */
`;
const Card = styled.img`
  width: 400px;
  height: 410px;
  border-radius: 10px;
  object-fit: cover;
  @media screen and (max-width: 425px) {
    height: 300px;
    object-fit: contain;
  }
`;
const Icons = styled.div`
  margin-left: 10px;
  :hover {
    color: #3435a8;
  }
`;

const G = styled.div`
  display: flex;
  color: #00a85a;
  margin-top: 10px;
  font-size: 18px;
  cursor: pointer;
  /* :hover{
        color: #FBAF1B;
    } */
`;

const P = styled.div`
  p {
    font-size: 1.125rem;
    line-height: 1.9rem;
    font-weight: 500;
    /* margin-top: 1rem; */
    /* width: 400px; */
    color: #132128;
  }
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #1e2027;
  margin-top: 30px;
  @media screen and (max-width: 425px) {
    margin-top: -30px;
  }
`;


const Left = styled.div`
  width: 40%;
  flex-direction: column;
  display: flex;
  @media screen and (max-width: 1024px) {
    width: 100%;
    /* background-color: red; */
    margin-top: 160px;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    margin-top: 250px;
  }
`;
const Right = styled.div`
  position: relative;
  width: 50%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  width: 91%;
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 140px; */
  padding-bottom: 170px;
  flex-direction: column;
`;
