import React from 'react'
import styled from 'styled-components'
import img from "../Assets/uni.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';
import maiden from "../Assets/maiden.jpeg";
import { ReadText } from "../Apis/ApiCalls";
import { useQuery } from "@tanstack/react-query";


const Prodhero = () => {
    const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
        fade: true,
		speed: 800,
		autoplaySpeed: 5000,
		cssEase: "linear",
    };
    
    const getPost = useQuery({
    queryKey: ["alltext"],
    // queryFn: ,
    queryFn: ReadText,
    });
    

  return (
    <div style={{overflow: "hidden"}}>
        <Slider {...settings}>
            <Container>
                
                <Box>
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
                </Box>
                
            </Container>

            <Container2>

                {getPost?.data?.data?.map((data: any) => (
                <Box>
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
                </Box>
                
              ))}
                
            </Container2>
        </Slider>
    </div>
  )
}

export default Prodhero
const Boshold = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Down = styled.div`
  color: #fff;
`
const Up = styled.div`
  color: #fff;
  text-align: center;
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
const Button2 = styled.div`
  height: 50px;
  width: 150px;
  background-color: #00a85a;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 350ms;
  font-weight: bold;
  color: white;
`;
const Buttonhold = styled.div`
  width: 100%;
  display: flex;
  margin-top: 70px;
  justify-content: center;
  z-index: 100;
`;
const Pe = styled.div`
  color: white;
  margin-top: 25px;
  text-align: center;
  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
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
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Box = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    /* position: absolute; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 300px;
    padding-top: 300px;
`
const Container2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-image: url(${maiden});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* margin-top: 60px; */
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* position: relative; */
  h1 {
    text-align: center;
    font-size: 40px;
  }
`;