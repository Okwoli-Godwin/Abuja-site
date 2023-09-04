import React, { useState } from "react";
import styled from "styled-components";
import { AiFillPlayCircle } from "react-icons/ai";
import { BiXCircle } from "react-icons/bi";

const Join = () => {
  const [vid, setVid] = useState<Boolean>(true);
  const [,setCancle] = useState<Boolean>(true);

  const Show = () => {
    setVid(false);
  };

  const Can = () => {
    setCancle(true);
    setVid(true);
  };
  return (
    <Container>
      <Top>
        <h1>Watch those that achieve the impossible every day</h1>
      </Top>
      <Watch onClick={Show}>
        <Icons>
          <AiFillPlayCircle />
        </Icons>
        Watch our success story
      </Watch>
      {!vid ? (
        <VidHold>
          <Card>
            <iframe
              width="853"
              height="480"
              src="https://www.youtube.com/embed/oCLPj1cXQdI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Card>
          <Cancle onClick={Can} onChangeCapture={Show}>
            <BiXCircle />
          </Cancle>
        </VidHold>
      ) : null}
    </Container>
  );
};

export default Join;
const Cancle = styled.div`
  font-size: 40px;
  position: absolute;
  right: 20px;
  top: 90px;
  color: white;
  cursor: pointer;
`;
const Card = styled.div`
  width: 60%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const VidHold = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  position: fixed;
  z-index: 5;
`;

const Icons = styled.div`
  color: #219653;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  margin-right: 10px;
  cursor: pointer;
  :hover {
    visibility: hidden;
  }
`;

const Watch = styled.div`
  color: #219653;
  display: flex;
  cursor: pointer;
`;

const Top = styled.h4`
  h1 {
    color: #219653;
    font-size: 32px;
    margin-top: 0px;
    @media screen and (max-width: 425px) {
      font-size: 20px;
      text-align: center;
    }
    @media screen and (max-width: 425px) {
      font-size: 20px;
    }
  }
  font-size: 1.25rem;
  line-height: 1.2;
  color: #219653;
  letter-spacing: 0.3px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eff5ff;
  align-items: center;
  padding-bottom: 60px;
  position: relative;
  z-index: 2363;
`;
