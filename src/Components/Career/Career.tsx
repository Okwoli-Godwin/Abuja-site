import React from 'react'
import styled from 'styled-components'
import img from "../Assets/mat2.jpg"
import img2 from "../Assets/mubarak.jpeg"
import img3 from "../Assets/two.jpeg"
import img4 from "../Assets/three.jpeg"
import img5 from "../Assets/two.jpeg"
import img6 from "../Assets/two.jpeg"
import { NavLink } from 'react-router-dom'

const Career = () => {
  return (
    <Container>
        <Text>Our Undergraduate Researchers</Text>
        <P>It is a Catch Them Young approach to help promote research culture among undergraduate students in University of Abuja</P>
        <Wrapper>
            <Box>
                <Up>
                    <Img src={img} />
                    
                </Up>
                <Down>
                    <Data><span>Okwoli Mathew</span><br /><p>Computer Science</p></Data>
                <New>Researcher 🥉</New>
                </Down>
            </Box>
            <Box>
                <Up>
                    <Img src={img2} />
                </Up>
                <Down2>
                    <Data><span>Mubarak Ayanniyi</span><br /><p>Computer Science</p></Data>
                <New>Researcher 🥉</New>
                    {/* <New>Rs: 2021</New> */}
                </Down2>
            </Box>
            <Box>
                <Up>
                    <Img src={img3} />
                </Up>
                <Down3>
                    <Data><span>Ojewole Grace Oluwaseun</span><br /><p>Computer Science</p></Data>
                <New>Researcher 🥉</New>
                </Down3>
            </Box>
            <Box2>
                <Up>
                    <Img src={img4} />
                </Up>
                <Down4>
                    <Data><span>Ogbu Collins </span><br /><p>Computer Science</p></Data>
                <New>Researcher 🥉</New>
                </Down4>
            </Box2>
            <Box2>
                <Up>
                    <Img src={img5} />
                </Up>
                <Down5>
                    <Data><span>Oyeleye Blessing </span><br /><p>Computer Science</p></Data>
                <New>Researcher 🥉</New>
                </Down5>
            </Box2>
            <Box2>
                <Up>
                    <Img src={img6} />
                </Up>
                <Down6>
                    <Data><span>Okonkwo Heritage Ebuka</span><br /><p>Computer Science</p></Data>

                <New>Researcher 🥉</New>
                </Down6>
            </Box2>
        </Wrapper>
        <NavLink to="/research" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
            <Button2>
            View all Researchers
        </Button2>
        </NavLink>
    </Container>
  )
}

export default Career
const Button2 = styled.div`
    height: 60px;
    width: 250px;
    background-color:  #00A85A;
    display: flex;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    transition: all 350ms;
    font-weight: bold;
	color: white;
    :hover{
        transform: scale(0.9);
        background-color: #F5F5F5;
        color: #00A85A;
        border: 1px solid #00A85A;
    };
    @media screen and (max-width: 425px) {
        margin-top: 10px;
    }
`;

const New = styled.div`
    width: 130px;
    height: 40px;
    border: 1px solid #00A85A;
    background-color: white;
    cursor: pointer;
    position: absolute;
    color: #00A85A;
    align-items: center;
    display: flex;
    /* padding-right: 20px; */
    justify-content: center;
    border-radius: 50px;
    bottom: 450px;
    right: 290px;
    @media screen and (max-width: 1024px) {
        right: 340px;
    }
    @media screen and (max-width: 768px) {
        right: 220px;
    }
    @media screen and (max-width: 425px) {
        right: 220px;
        bottom: 470px;
    }
    @media screen and (max-width: 320px) {
        right: 180px;
        bottom: 475px;
    }
`

const Data = styled.div`
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: -15px;
    p{
        margin: 0;
        font-size: 15px;
    }
    span{
        font-weight: bolder;
        font-size: 1.5rem;
        line-height: 2rem;
        @media screen and (max-width: 320px) {
            font-size: 19px;
        }
    }
   
`
const Down = styled.div`
    width: 100%;
    height: 50%;
    background-color: #A74F46;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
    position: relative;
`
const Down2 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #0C8F54;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
    position: relative;
`
const Down3 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #A74F46;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
    position: relative;
`
const Down4 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #0C8F54;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
    position: relative;
`
const Down5 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #A74F46;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
    position: relative;
`
const Down6 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #0C8F54;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
    position: relative;
`

const Img = styled.img`
    transition: all 350ms;
    object-fit: cover;
    width: 100%;
    height: 500px;
    cursor: pointer;
    :hover{
        display: block;
        transform: scale(1.1);
        background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.9));
        z-index: 1;
        filter: grayscale(3);
    }
`
const Up = styled.div`
    width: 100%;
    height: 65%;
    overflow: hidden;
    :hover{
        
    }
`
const Box = styled.div`
    width: 390px;
    height: 420px;
    overflow: hidden;
    border-radius: 10px;
    margin: 5px;
    margin-bottom: 35px;
    @media screen and (max-width: 1024px) {
        width: 440px;
    }
    @media screen and (max-width: 768px) {
        width: 320px;
    }
    @media screen and (max-width: 445px) {
        width: 100%;
    }

`
const Box2 = styled.div`
    width: 390px;
    height: 420px;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 30px;
    @media screen and (max-width: 1024px) {
        width: 440px;
    }
    @media screen and (max-width: 768px) {
        width: 320px;
    }
    @media screen and (max-width: 445px) {
        width: 100%;
    }

`
const P = styled.div`
    font-size: 1.125rem;
    width: 85%;
    line-height: 1.75rem;
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
    color: #000000;
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
`
const Text = styled.h2`
    font-weight: 600;
    /* text-align: center; */
    line-height: 1.25;
    font-size: 3rem;
    color: #00A85A;
    @media screen and (max-width: 445px) {
        font-size: 32px;
        text-align: center;
    }
`
const Wrapper = styled.div`
    width: 91%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 80px;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 425px) {
        margin-top: 30px;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    /* margin-top: 140px; */
    padding-bottom: 90px;
`