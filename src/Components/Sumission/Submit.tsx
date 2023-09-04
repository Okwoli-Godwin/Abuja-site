import React from 'react'
import styled from 'styled-components'
import img from "../Assets/email.png"

const Submit = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Img src={img} />
            </Left>
            <Right>
                <p>Papers are received all-year-round, however, last dates of submission for June and December editions are 1st April and 1st October respectively.</p>
                <p>Papers for publication should be prepared in Microsoft word format in line with the publication guidelines and submitted as an attachment to <span>editor.jur@uniabuja.edu.ng</span></p>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Submit
const Right = styled.div`
    p{
        font-size: 1.125rem;
    line-height: 1.9rem;
    font-weight: 500;
    /* margin-top: 1rem; */
    /* width: 400px; */
    color: #132128;
    margin: 0;
    }
    width: 50%;
    display: flex;
    flex-direction: column;
    padding-top: 70px;
    padding-bottom: 70px;
    justify-content: center;
    span{
        color: blue;
    }
    h2{
        color: #5f5f5f;
        @media screen and (max-width: 442px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (max-width: 442px) {
        width: 100%;
        padding-bottom: 0px;
        padding-top: 10px;
    }
`
const Img = styled.img`
    
`
const Left = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 70px;
    padding-bottom: 70px;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (max-width: 442px) {
        width: 100%;
        padding-bottom: 0px;
        padding-top: 10px;
    }
`

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
`