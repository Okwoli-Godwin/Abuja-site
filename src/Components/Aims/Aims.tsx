import React from 'react'
import styled from 'styled-components'

const Aims = () => {
  return (
    <Container>
        <Top><h1>Aims and Objective</h1></Top>
        <Wrapper>
            <Up><h2>Our mandate is to:</h2></Up>
            <First>
                <ol>
                    <li>Mobilize the entire undergraduate students of University of Abuja for sophisticated research skills The Centre holds periodic research workshops and seminars for undergraduate students of all levels at the University. These workshops and seminars concentrate on effective writing styles, hints on how to win research grants and training on efficient research through physical and electronic sources, presentation skills, and networking skills.</li>
                    <li>Administer regular undergraduate research grants The Centre awards University of Abuja undergraduate research grant based on the proposal, timeline and budget submitted by the student research team endorsed by the mentor(s). Grant award is decided based upon the discussions among qualified committee members who hold great knowledge in the student’s research area of interest. The grant is disbursed in three tranches in the ratio of 50: 30: 20 for initial, progressive and final payment respectively. </li>
                    <li>Organize Undergraduate Research Day every semester, where undergraduate students can present their research findings and interact with industries, government agencies and private organizations nationally and internationally The Centre organizes Undergraduate Research Day which provides students with amble opportunities to present their research, develop professional skills, and navigate networks. Undergraduate Research Day is a comprehensive day for all undergraduate researchers to present their research proposals and completed research projects to their fellow students, academics, and various professionals from government agencies and the industry. This event is both practical for the students and celebratory for the entire university. It is a time for students to demonstrate their hard work and accomplishments, as well as interact with individuals who could help them conduct more research, create more opportunities or gain employment.</li>
                    <li>Lead undergraduate students to research exhibitions nationally and internationally In addition to the frequent workshops and the biannual Undergraduate Research Day, the Centre offer students the opportunities to attend research exhibitions nationally and internationally. Our researchers also present their works at international trade fairs and competitions.</li>
                    <li>Develop and manage Journal for Undergraduate Research (JUR) in which scholarly-reviewed undergraduate research papers will be regularly published and circulated. The Centre intends to encourage and produce quality research from students in an academic journal that celebrates undergraduate work and perpetuates undergraduate work throughout the greater academic community. In this way, undergraduates at the University will be exposed to academic publishing early in their academic and professional careers. Undergraduates will also be able to read their peers’ work and be inspired to work on new projects and in new, unique teams.</li>
                </ol>
            </First>
            <Second>
                <ul>
                    
                </ul>
            </Second>
            <Second>
                <ul>
                    
                </ul>
            </Second>
            <Second>
                <ul>
                    
                </ul>
            </Second>
            <Second>
                <ul>
                    
                </ul>
            </Second>
        </Wrapper>
    </Container>
  )
}

export default Aims
const Second = styled.div`
    li{
        color: #1d1d1d;
        font-size: 18px;
    }
    margin-top: -15px;
    padding-right: 17px;
    /* background-color: red; */
`
const First = styled.div`
    padding-right: 20px;
    li{
        font-size: 1.125rem;
    line-height: 1.9rem;
    font-weight: 500;
    margin-bottom: 30px;
    /* margin-top: 1rem; */
    /* width: 400px; */
    color: #1d1d1d;
    }
`
const Up = styled.div`
    h2{
        font-size: 30px;
        color: #444444;
        @media screen and (max-width: 768px) {
        font-size: 30px;
        }
    }
    font-size: 32px;
    line-height: 40px;
    font-weight: 500;
    color: #132128;
    /* margin-top: -5px;
    margin-left: 80px; */
    /* @media screen and (max-width: 1024px) {
        margin-left: 0px;
    } */
    @media screen and (max-width: 425px) {
        font-size: 27px;
        text-align: center;
    }
`
const Top = styled.div`
    h1{
        color: #219653;
        font-size: 35px;
        margin-top: 0px;
         @media screen and (max-width: 425px) {
            font-size: 30px;
        }
        @media screen and (max-width: 425px) {
            font-size: 25px;
        }
    }
`
const Wrapper = styled.div`
    width: 90%;
    /* background-color: red; */
    display: flex;
    padding-left: 45px;
    /* align-items: center; */
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 15px;
    overflow: hidden;
`