import React from 'react'
import styled from 'styled-components'
import uniAbuja from "../Assets/unib.png"
import {BsFacebook, BsTwitter, BsLinkedin, BsInstagram} from "react-icons/bs"

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <Img src={uniAbuja} />
            </Top>
            <Second>
                <Left>
                    <Navs>About us</Navs>
                    <Navs>Speak to us now</Navs>
                    <Navs>Terms</Navs>
                    <Navs>Privacy policy</Navs>
                </Left>
                <Right>
                    <Icon>
                        <BsFacebook />
                    <BsTwitter />
                    <BsLinkedin />
                    <BsInstagram />
                    </Icon>
                </Right>
            </Second>
            <Line></Line>
            <Third>
                <Left>
                    <Text>© 2023 Centre for Undergraduate Research</Text>
                </Left>
                {/* <Right>
                    <Text>GodwinCover is operated in partnership with UniAbuja approved insurers.</Text>
                </Right> */}
            </Third>
        </Wrapper>
    </Container>
  )
}

export default Footer
const Icon = styled.div`
    width: 180px;
    justify-content: space-between;
    display: flex;
`
const Text = styled.div`
    font-size: 13px;
    color: #a5a5a5;
    text-align: center;
`
const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #E4E4E7;
    margin-top: 30px;
`
const Right = styled.div`
    display: flex;
    align-items: center;
    color: #00A859;
    font-size: 20px;
    width: 450px;
    justify-content: flex-end;
    @media screen and (max-width: 419px) {
        width: 100%;
        /* background-color: red; */
        justify-content: center;
        margin-top: 10px;
    }
    
`
const Navs = styled.div`
    font-size: 15px;
    line-height: 1.25rem;
    font-family: "Avenir", sans-serif;
    cursor: pointer;
    margin-right: 25px;
    margin-bottom: 10px;
`
const Left = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 419px) {
        width: 100%;
        margin-bottom: 10px;
        /* background-color: red; */
        text-align: center;
        justify-content: center;
    }
`
const Third = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 15px;
    justify-content: space-between;
    padding-bottom: 30px;
`

const Second = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 15px;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Img = styled.img`
    height: 85px;
`
const Top = styled.div`
    width: 100%;
    display: flex;
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    height: 100%;
    flex-direction: column;
    flex-wrap: wrap;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`