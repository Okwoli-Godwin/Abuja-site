import React from 'react'
import styled from 'styled-components'
import img from "../Assets/vice.jpeg"

const Vice = () => {
  return (
    <Container>
        <Top><h1>Vice Chancellor Welcome Address</h1></Top>
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
            <Up><p>It is my pleasure to welcome you all to the Centre for Undergraduate Research at the University of Abuja. As the Vice Chancellor of this esteemed institution, it is clear that we designed this Centre to serve as a hub for the academic exploration of our undergraduate students. The Centre for Undergraduate Research is a long-awaited and much-needed addition to our university. It is a place where our students can gain experience in research, scholarship, and innovation. It is a place where they can test their ideas, pursue their passions, and engage in collaborative work with their peers and mentors. As we all know, research is the foundation of knowledge creation and innovation. It is through research that we discover new ideas, solve problems, and make new discoveries. By establishing this centre, we are reaffirming our commitment to promoting research and creativity among our students. I believe that the centre will not only promote academic excellence but also foster a culture of intellectual curiosity and critical thinking among our students. It is our hope that the centre will inspire our students to take on the challenges of the 21st century with confidence and ingenuity. I encourage all students to take full advantage of the resources and opportunities offered by the Centre for Undergraduate Research. It is our hope that this centre will become a vibrant and dynamic space for learning and discovery, where students can engage in meaningful academic pursuits and develop their research skills. Finally, I would like to thank everyone who has worked tirelessly to make this centre a reality. I especially thank the faculty and staff who have dedicated their time and expertise to make this centre a reality. I am excited to see the amazing things that our students will achieve in the years to come. Thank you and welcome to the Centre for Undergraduate Research at the University of Abuja.</p></Up>
        </Wrapper>
    </Container>
  )
}

export default Vice
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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