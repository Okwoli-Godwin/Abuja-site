import React from 'react'
import styled from 'styled-components'
import hero from "../Assets/group.jpeg"


const Guidelinehero = () => {
  return (
    <Container>
        <Boxhold>
            <Wrapper>
                <Top><h1>Author Guideline</h1></Top>
                <Bottomhold>
                </Bottomhold>
        </Wrapper>
        </Boxhold>
    </Container>
  )
}

export default Guidelinehero

const Boxhold = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: rgba(0, 0, 0, 0.5);
`
const Bottomhold = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    @media screen and (max-width: 874px) {
        display: none;
    }
`
const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 33px;
        font-weight: 700;
        line-height: 2.5rem;
        color: #fff;
        margin: 0;
        font-family: "Avenir", sans-serif;
        @media screen and (max-width: 768px) {
        font-size: 30px;
    }
    @media screen and (max-width: 425px) {
        font-size: 30px;
        margin-top: 120px;
    }
        @media screen and (max-width: 425px) {
        font-size: 30px;
    }
    @media screen and (max-width: 375px) {
        font-size: 27px;
    }
        @media screen and (max-width: 320px) {
        font-size: 25px;
    }
    }
    @media screen and (max-width: 874px) {
        width: 100%;
    }
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    /* background-color: red; */
    padding-top: 140px;
    padding-bottom: 140px;
    flex-wrap: wrap;
    overflow: hidden;
    flex-direction: column;
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
    background-image: url(${hero});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`