import React from 'react'
import styled from 'styled-components'
import images from "../Assets/edu.jpeg"

const Find = () => {
  return (
    <Container>
        
        <Wrapper fd="hgdf">
            <Left>
                <Images src={images} />
            </Left>
            <Right>
                <Up><h2>Nature of Researches</h2></Up>
                <Nav>
                    <p>The proposed undergraduate research should be geared towards solving a critical industrial or economic challenge. The research must be original, acceptable, practicable, mentored and should target 1 or 2 thematic areas</p>
                </Nav>
                <Ups><h2>Thematic areas </h2></Ups>
                <Nav2>
                    <ul>
                        <li>Economic Prosperity</li>
                        <li>Food Security</li>
                        <li>Educational Opportunity</li>
                        <li>Quality Health</li>
                        <li>Climate Change and Environmental Protection</li>
                        <li>Any other innovative solution to our societal issues</li>
                    </ul>
                </Nav2>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Find


const Nav2 = styled.div`
    p{
        margin: 0;
        color: #1d1d1d;
        line-height: 1.9rem;
    }
    ul{
        margin-top: -5px;
    }
    li{
        font-size: 1.125rem;
    line-height: 1.9rem;
    font-weight: 500;
    /* margin-top: 1rem; */
    /* width: 400px; */
    color: #132128;
    margin: 0;
    }
    color: #132128;
    /* font-family: 'Inter',sans-serif; */
    font-size: 18px;
    line-height: 28px;
    font-weight: 200;
    display: flex;
    margin-bottom: 20px;
    margin-left: 80px;
    flex-direction: column;
     @media screen and (max-width: 1024px) {
        margin-left: 0px;
    }
`



const Nav = styled.div`
    li{
        margin-left: 45px;
    }
    p{
        font-size: 1.125rem;
    line-height: 1.9rem;
    font-weight: 500;
    /* margin-top: 1rem; */
    /* width: 400px; */
    color: #132128;
    margin: 0;
    }
    ul{
        margin-top: -15px;
        display: flex;
        @media screen and (max-width: 425px) {
            display: flex;
            flex-direction: column;
        }
    }
    color: #132128;
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 200;
    display: flex;
    margin-bottom: 20px;
    margin-left: 80px;
     @media screen and (max-width: 1024px) {
        margin-left: 0px;
    }
`

const Up = styled.div`
    h2{
        font-size: 28px;
        color: #444444;
        @media screen and (max-width: 768px) {
        font-size: 30px;
    }
     @media screen and (max-width: 425px) {
        font-size: 27px;
    }
    }
    font-size: 32px;
    line-height: 40px;
    font-weight: 500;
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
const Ups = styled.div`
    h2{
        font-size: 28px;
        color: #444444;
        @media screen and (max-width: 768px) {
        font-size: 30px;
    }
     @media screen and (max-width: 425px) {
        font-size: 27px;
    }
    }
    font-size: 25px;
    line-height: 40px;
    font-weight: 500;
    color: #132128;
    margin-top: 10px;
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
    /* background-color: red; */
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