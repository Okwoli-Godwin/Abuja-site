import React from 'react'
import styled from 'styled-components'
import hero from "../Assets/group.jpeg"


const Journalhero = () => {
  return (
    <Container>
        <Boxhold>
            <Wrapper>
                {/* <Top><h1>JOURNAL</h1></Top> */}
                <Bottomhold>
                </Bottomhold>
        </Wrapper>
        </Boxhold>
    </Container>
  )
}

export default Journalhero

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