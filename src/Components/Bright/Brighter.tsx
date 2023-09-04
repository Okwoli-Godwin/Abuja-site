import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import group from "../Assets/group.jpeg";
import maiden from "../Assets/maiden.jpeg";
import { NavLink } from "react-router-dom";
import { ReadText } from "../Apis/ApiCalls";
import { useQuery } from "@tanstack/react-query";
import img from "../Assets/uni.jpg"

const BrilliantsComp = () => {
  const getPost = useQuery({
    queryKey: ["alltext"],
    // queryFn: ,
    queryFn: ReadText,
  });

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Container>
      <Boxhold>
        <Wrapper>
          <Slider {...settings}>
            <Card>
              <Top>
                Centre for Undergraduate Research and University of Abuja
              </Top>
              <Pe>
                <p>
                  Promoting National Development through Research, Tapping
                  Talents, Fostering Research Culture and Creating
                  Opportunities.
                </p>
              </Pe>

              <Buttonhold>
                <NavLink
                  to="/contact"
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    color: isActive ? "#219653" : "#5f5f5f",
                  })}
                >
                  <NavLink to="/contact" style={{ textDecoration: "none" }}>
                    <Button2>Contact us</Button2>
                  </NavLink>
                </NavLink>
              </Buttonhold>
            </Card>
            <Card2>
              {getPost?.data?.data?.map((data: any) => (
                <Boshold>
                  <Top2>{data.writeups}</Top2>
                  {/* <Pe>Promoting National Development through Research, Tapping Talents, Fostering Research Culture, Creating Opportunities.</Pe> */}
                  <Buttonhold>
                      <Button>
                        <Up>Deadline</Up>
                          <Down>{data.button}</Down>
                      </Button>
                  </Buttonhold>
                </Boshold>
              ))}
            </Card2>
          </Slider>
        </Wrapper>
      </Boxhold>
    </Container>
  );
};

export default BrilliantsComp;
const P = styled.h3`
  font-size: 1.125rem;
  width: 85%;
  line-height: 1.75rem;
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
  color: #fff;
  /* background-color: red; */
  margin-top: -8px;
  @media screen and (max-width: 425px) {
    font-size: 17px;
    text-align: center;
    line-height: 1.65rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 15px;
    text-align: center;
    line-height: 1.65rem;
    width: 80%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const Down = styled.div`
  color: #fff;
`
const Up = styled.div`
  color: #fff;
  text-align: center;
`;
const Button2 = styled.div`
  height: 50px;
  width: 150px;
  background-color: #00a85a;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 350ms;
  font-weight: bold;
  color: white;
  /* :hover{
        transform: scale(0.9);
        background-color: #F5F5F5;
        color: #00A85A;
        border: 1px solid #00A85A;
    }; */
`;
const Button = styled.div`
  height: 50px;
  width: 150px;
  background-color: #00a85a;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  /* cursor: pointer; */
  transition: all 350ms;
  font-weight: bold;
  color: white;
  /* :hover{
        transform: scale(0.9);
        background-color: #F5F5F5;
        color: #00A85A;
        border: 1px solid #00A85A;
    }; */
`;
const Buttonhold = styled.div`
  width: 100%;
  display: flex;
  margin-top: 70px;
  /* background-color: red; */
  justify-content: center;
`;
const Pe = styled.div`
  color: white;
  margin-top: 25px;
  text-align: center;
  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;
const Boshold = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 170px;
  padding-bottom: 170px;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Boxhold = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding-top: 70px;
	padding-bottom: 70px; */
  background-color: rgba(0, 0, 0, 0.5);
`;
const Top2 = styled.div`
  width: 85%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 30px;
  /* overflow: hidden; */
  background-color: red;
  border-radius: 7px;
  text-align: center;
  /* line-height: 2.5rem; */
  font-weight: 500;
  flex-wrap: wrap;
  @media screen and (max-width: 425px) {
    font-size: 28px;
    font-weight: 500;
  }
  /* @media screen and (max-width: 874px) {
    width: 100%;
  } */
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 30px;
  text-align: center;
  /* line-height: 2.5rem; */
  font-weight: 500;
  @media screen and (max-width: 425px) {
    font-size: 28px;
    font-weight: 500;
  }
  h1 {
    font-size: 40px;
    font-weight: 700;
    line-height: 2.5rem;
    color: #fff;
    margin: 0;
    /* font-family: "Avenir", sans-serif; */
    @media screen and (max-width: 768px) {
      font-size: 18px;
    }

    @media screen and (max-width: 425px) {
      font-size: 12px;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 874px) {
    width: 100%;
  }
`;
const Card = styled.div`
  width: 90%;
  height: 100%;
  /* background-color: red; */
  padding-top: 140px;
  padding-bottom: 140px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card2 = styled.div`
  width: 90%;
  height: 100%;
  /* background-color: red; */
  background-image: url(${maiden});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* padding-top: 170px; */
  /* padding-bottom: 170px; */
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: 50px;
  padding-top: 50px;
  h1 {
    text-align: center;
    font-size: 40px;
  }
`;
const Wrapper = styled.div`
  /* display: flex; */
  width: 100%;
  /* height: 300px; */
  overflow: hidden;
  /* background-color: black; */
`;
