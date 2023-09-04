import React from "react";
import styled from "styled-components";

const Vision = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <h1>Discover the right Research Experience Program for you</h1>
        </Top>
        <br />
        <br />
        <Visionhold>
          <Visions>
            <Up>
              <h2>Our Vision</h2>
            </Up>
            <P>
              <p>
                The vision of the Centre for Undergraduate Research is to create
                and promote a research culture that seeks to find solutions to
                challenges that lead to National Development through
                undergraduate research.
              </p>
            </P>
          </Visions>
          <Visions>
            <Up>
              <h2>Our Mission</h2>
            </Up>
            <P>
              <p>
                Our mission is to support and promote critical thinking that
                will enhance originality of undergraduate students’ research
                through mentorship.
              </p>
            </P>
          </Visions>
        </Visionhold>
      </Wrapper>
    </Container>
  );
};

export default Vision;
const P = styled.div`
  p {
    font-size: 1.125rem;
    line-height: 1.9rem;
    font-weight: 500;
    color: #132128;
  }
`;
const Up = styled.div`
  h2 {
    font-size: 30px;
    color: #444444;
    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
  }
`;
const Visions = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding-left: 25px;
  padding-right: 15px;
  padding-bottom: 25px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  :hover {
    border: 1px solid #00a85a;
  }
  @media screen and (max-width: 768px) {
    width: 43%;
  }
  @media screen and (max-width: 445px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;
const Visionhold = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Top = styled.div`
  width: 550px;
  h1 {
    font-size: 33px;
    color: #00a85a;
    line-height: 43px;
    @media screen and (max-width: 768px) {
      width: 100%;
      font-size: 30px;
      text-align: center;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
