import React from 'react'
import styled from 'styled-components'
import images3 from "../Assets/edu.jpeg"

const Find = () => {
  return (
    <Container>
        
        <Wrapper fd="hgdf">
            <Left>
                <Images src={images3} />
            </Left>
            <Right>
                <Up><h2>APPLICATION PROCESS</h2></Up>
                <Nav2>
                    <ul>
                        <li>Check eligibility in <strong>who can participate</strong></li>
                        <li>Click <strong>Apply</strong> to download RESEARCH GRANT EXPRESSION OF INTEREST Form</li>
                        <li>Fill the form and submit as an attachment to <strong>cur@uniabuja.edu.ng</strong></li>
                        <li>All completed Expression of Interest forms must be submitted to the Centre on or before the date stipulated in the calendar</li>
                    </ul>
                </Nav2>
                {/* <Nav><Icons><GrCheckmark /></Icons> All University of Abuja undergraduate students are eligible to apply for CUR Grants. However, Final Year students can only apply in the First Semester, Final Year students are NOT ELIGIBLE to apply for CUR grants in the Second Semester.</Nav>
                <Up>HOW TO APPLY</Up>
                <Nav><Icons><GrCheckmark /></Icons> Fill the Research Grant Expression of Interest Form online </Nav> */}
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Find

const Nav2 = styled.div`
    color: #132128;
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 200;
    display: flex;
    margin-bottom: 20px;
`


const Up = styled.div`
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
    font-size: 32px;
    line-height: 40px;
    font-weight: 400;
    color: #132128;
    margin-top: -5px;
    margin-left: 80px;
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
    /* height: 95%; */
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