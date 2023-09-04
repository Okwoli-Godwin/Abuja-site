import React from 'react'
import styled from 'styled-components'
import img from "../Assets/change.jpeg"

const Director = () => {
  return (
    <Container>
        <Top><h1>Director's Welcome Address</h1></Top>
        <br />
        <br />
        <Wrapper>
            <Down>
                <Imagehold>
                    <Img src={img} />
                </Imagehold>
            </Down>
            <br />
            <br />
            <Up><p>You are welcome to the 
                Centre for Undergraduate Research (CUR) where we create a research culture 
                among our undergraduate students. CUR is established to promote research and
                 create opportunities for undergraduate students across all Departments in the 
                 University of Abuja by awarding research grants to deserving students. The Centre helps 
                 students attain their full potentials through research thereby building and developing their 
                 research skills, and inculcating the spirit of focusing on finding solutions to the challenges 
                 plaguing our society. CUR provides an opportunity for undergraduate students to be mentored 
                 while researching and providing solutions to the problems and challenges in our environment 
                 and society at large. These challenges could be university based, industrial, community or 
                 national issues and policies. The whole concept is to thoroughly prepare our students for their 
                 future as professionals, inventors, critical thinkers, 
                innovators, idea generators, entrepreneurs and citizens.</p>
            </Up>
        </Wrapper>
    </Container>
  )
}

export default Director
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* margin-top: 10px; */
`
const Imagehold = styled.div`
    width: 310px;
    height: 380px;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    background-color: red;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 1px solid #00A85A;
    overflow: hidden;
`
const Down = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Up = styled.div`
    p{
        font-size: 1.125rem;
    line-height: 1.9rem;
    font-weight: 500;
    text-align: justify;
    /* margin-top: 1rem; */
    /* width: 400px; */
    color: #1d1d1d;
    }
    ul{
        margin-top: -15px;
    }
    color: #132128;
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 200;
    display: flex;
    /* margin-bottom: 20px;
    margin-left: 80px; */
     /* @media screen and (max-width: 1024px) {
        margin-left: 0px;
    } */
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`
const Top = styled.div`
    h1{
        font-size: 33px;
        color: #00A85A;
        line-height: 43px;
        @media screen and (max-width: 768px) {
        width: 100%;
        font-size: 30px;
        text-align: center
    }
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`