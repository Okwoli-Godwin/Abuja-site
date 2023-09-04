import React from 'react'
import styled from 'styled-components'
import group from "../Assets/group.jpeg"

const Hero = () => {
  return (
    <Container>
        <Boxhold>
            <Wrapper>
                <P><h1>About</h1></P>
        </Wrapper>
        </Boxhold>
    </Container>
  )
}

export default Hero
const P = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    h1{
        color: white;
    }
    p{
        font-size: 25px;
        color: white;
        text-align: center;
    }
    @media screen and (max-width: 425px) {
        margin-top: 170px;
    }
`
const Boxhold = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 70px;
    background-color: rgba(0, 0, 0, 0.5);
    @media screen and (max-width: 425px) {
        /* margin-top: 170px; */
        padding-top: 10px;
    }
`

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    /* background-color: red; */
    padding-top: 190px;
    padding-bottom: 220px;
    flex-wrap: wrap;
    overflow: hidden;
    flex-direction: column;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 425px) {
        padding-top: 10px;
    }
    @media screen and (max-width: 375px) {
        padding-top: 0px;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    background-image: url(${group});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`