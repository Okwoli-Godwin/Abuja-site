import React from 'react'
import styled from 'styled-components'
import all from "../Assets/sanni.jpeg"
import oo from "../Assets/oo.jpeg"
import fbn from "../Assets/pepe.jpeg"
import vu from "../Assets/john.jpeg"
import tiz from "../Assets/oku.jpeg"
import one from "../Assets/lala.jpeg"
import two from "../Assets/mukaila.jpeg"
import three from "../Assets/blur.jpeg"
import four from "../Assets/clear.jpeg"
import five from "../Assets/change.jpeg"
import seven from "../Assets/deputy1.jpeg"
import eight from "../Assets/Anthonia.jpg"

const Partners = () => {
  return (
    <Container>
        <Pt><p>The Centre is managed by Professor Taibat Adebukola Atoyebi (Director) and Dr. Dike Ojji (Deputy Director) in consultation with a Consultative Committee which comprises of representatives from various Faculties in the University. 
Our activities include disbursement of grants to undergraduate researches to facilitate the actualization of their dreams. Our office is located at the Institute for Legislative Studies, University Abuja Main Campus.</p></Pt>
        <Research>
            <h1>Meet Our Team</h1>
        </Research>
        <Wrapper>
            <Card>
                <Top>
                    <Img src={five} />
                </Top>
                <Down>
                    <Up><h2>Prof Taibat Atoyebi</h2></Up>
                    <P><p>Director CUR</p></P>
                </Down>
              </Card>
              <Card>
                <Top>
                    <Img src={seven} />
                </Top>
                <Down>
                    <Up><h2>Dr Dike Ojji</h2></Up>
                    <P><p>Deputy Director</p></P>
                </Down>
            </Card>
             <Card>
                <Top>
                    <Img src={oo} />
                </Top>
                <Down>
                    <Up><h2>Dr Mathew Sunday Dada</h2></Up>
                    <P><p>Education</p></P>
                </Down>
            </Card>
             <Card>
                <Top>
                    <Img src={three} />
                </Top>
                <Down>
                    <Up><h2>Dr (Mrs) Kehinde Akanbi</h2></Up>
                    <P><p> Arts</p></P>
                </Down>
            </Card>
             <Card>
                <Top>
                    <Img src={four} />
                </Top>
                <Down>
                    <Up><h2>Dr Hadiza Hamma </h2></Up>
                    <P><p>Law</p></P>
                </Down>
            </Card>
            <Card>
                <Top>
                    <Img src={all} />
                </Top>
                <Down>
                    <Up><h2>Prof. Fatimah Sanni</h2></Up>
                    <P><p>Veterinary Medicine</p></P>
                </Down>
            </Card>
            <Card>
                <Top>
                    <Img  src={two}/>
                </Top>
                <Down>
                    <Up><h2>Nasiru Mukaila Olakorede</h2></Up>
                    <P><p>Science</p></P>
                </Down>
            </Card>
            <Card>
                <Top>
                    <Img src={vu} />
                </Top>
                <Down>
                    <Up><h2>Dr John Ogedengbe</h2></Up>
                    <P><p>College of Health</p></P>
                </Down>
            </Card>
            <Card>
                <Top>
                    <Img src={one}/>
                </Top>
                <Down>
                    <Up><h2>Dr Ibrahim Abdullateef</h2></Up>
                    <P><p>Management Science</p></P>
                </Down>
            </Card>
            <Card>
                <Top>
                    <Img src={fbn} />
                </Top>
                <Down>
                    <Up><h2>Dr (Mrs) Perpetual Ibekwe</h2></Up>
                    <P><p>College of Health</p></P>
                </Down>
            </Card>
            <Card>
                <Top>
                    <Img src={tiz} />
                </Top>
                <Down>
                    <Up><h2>Dr Effiom Oku</h2></Up>
                    <P><p>Agriculture</p></P>
                </Down>
            </Card>
            <Card>
                <Top>
                    <Img src={eight} />
                </Top>
                <Down>
                    <Up><h2>Anthonia Keenam</h2></Up>
                    <P><p>Admin Assistant</p></P>
                </Down>
            </Card>
            {/* <Card2>
                <Top>
                    <Img src={four} />
                </Top>
                <Down>
                    <Up><h2>Dr Hadiza</h2></Up>
                    <P><p>Member</p></P>
                </Down>
            </Card2>
            <Card2>
                <Top>
                    <Img src={four} />
                </Top>
                <Down>
                    <Up><h2>Dr Hadiza</h2></Up>
                    <P><p>Member</p></P>
                </Down>
            </Card2> */}
        </Wrapper>
    </Container>
  )
}

export default Partners
const Pt = styled.div`
    p{
        font-size: 1.125rem;
    line-height: 1.9rem;
    font-weight: 500;
    /* margin-top: 1rem; */
    /* width: 400px; */
    color: #132128;
    margin: 0;
    }
    font-size: 19px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Research = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        color: #219653;
        font-size: 35px;
        text-align: center;
        @media screen and (max-width: 425px) {
            font-size: 30px;
        }
        @media screen and (max-width: 425px) {
            font-size: 25px;
        }
    }
`
const P = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    p{
        color: #1d1d1d;
        margin: 0;
    }
`
const Up = styled.div`
    h2{
        color: #219653;
        font-size: 20px;
        text-align: center;
    }
`
const Down = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* border-radius: 2px solid #219653; */
`
const Top = styled.div`
    width: 200px;
    height: 200px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
    border-radius: 100px;
    /* background-color: blue; */
`
const Card = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 30px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    margin-top: 15px;
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top:90px;
    padding-bottom: 25px;
    /* background-color: red; */
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    margin-top: -70px;
`