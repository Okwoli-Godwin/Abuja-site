import React from 'react'
import styled from 'styled-components'
import images2 from "../Assets/edu.jpeg"

const Find = () => {
  return (
    <Container>
        
        
        <Wrapper fd="">
            <Left>
                <Images src={images2} />
            </Left>
            <Right>
                <Up2><h2>WHO CAN PARTICIPATE?</h2></Up2>
                <P>Eligibility</P>
                <Nav2>
                    <ul>
                        <li>All University of Abuja undergraduate students are eligible to apply for CUR Grant</li>
                        <li>A team can consist of 1 to 4 undergraduate students of University of Abuja</li>
                        <li>Team members must be registered students who are not graduating during the current academic session</li>
                    </ul>
                </Nav2>
                <Up2><h2>WHEN CAN STUDENTS PARTICIPATE?</h2></Up2>
                <Nav2>
                    <ul>
                        <li>Forms are available every semester</li>
                        <li>CUR is a continuous year round program that students can participate in</li>
                        <li>Undergraduate Research Day is a CUR day event where students present proposals and or research findings every semester</li>
                    </ul>
                </Nav2>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Find

const P = styled.div`
    font-size: 20px;
    font-weight: 500;
`

const Nav2 = styled.div`
    li{
        font-size: 1.125rem;
    line-height: 1.9rem;
    font-weight: 500;
    /* margin-top: 1rem; */
    /* width: 400px; */
    color: #132128;
    margin: 0;
    margin-bottom: 10px;
    }
    color: #132128;
    font-size: 18px;
    line-height: 28px;
    font-weight: 200;
    display: flex;
    margin-bottom: 20px;
    @media screen and (max-width: 1024px) {
        margin-left: 0px;
    }
`

const Up2 = styled.div`
    h2{
        font-size: 28px;
        color: #444444;
        @media screen and (max-width: 768px) {
        font-size: 30px;
        }
        @media screen and (max-width: 425px) {
        font-size: 25px;
        }
    }
    font-size: 25px;
    line-height: 40px;
    font-weight: 400;
    color: #132128;
    margin-top: -5px;
    @media screen and (max-width: 1024px) {
        margin-left: 0px;
    }
    @media screen and (max-width: 425px) {
        font-size: 27px;
        text-align: center;
    }
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
    @media screen and (max-width: 425px) {
        margin-top: -60px;
    }
`

const Images = styled.img`
    width: 100%;
    object-fit: contain;
    @media screen and (max-width: 1024px) {
       width: 70%;
    }
    @media screen and (max-width: 425px) {
       width: 100%;
       /* background-color: red; */
    }
`

const Left = styled.div`
    width: 50%;
    /* background-color: red; */
    height: 400px;
    display: flex;
    @media screen and (max-width: 1024px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 425px) {
        margin-top: -65px;
    }
`

const Wrapper = styled.div<{ fd: string }>`
    width: 90%;
    display: flex;
    flex-direction: ${({ fd }) => (fd ? "row" : "row-reverse")};
    padding-bottom: 80px;
    flex-wrap: wrap;
    @media screen and (max-width: 1024px) {
        padding-bottom: 20px;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
`