import React from 'react'
import styled from 'styled-components'
import { AiOutlineMail } from "react-icons/ai"

const Collaborator = () => {
  return (
      <Container>
          <Wrapper>
              <First>
                  <Top> </Top>
                  <h2>Training for Proposal Writing</h2>
                  <p>The Center for Undergraduate Research is training students for Research</p>
                  <Holder>
                      <p>okwolig60@gmail.com <span>Switch account</span></p>
                      <Hold><AiOutlineMail style={{color: "#4b4e52"}}/> <p>Not shared</p></Hold>
                  </Holder>
                  <Text>* Indicates required question</Text>
              </First>

              <Second>
                  <p>Name <span>*</span></p>
                  <input type="text" placeholder='Your answer'/>
              </Second>

              <Second>
                  <p>Department <span>*</span></p>
                  <input type="text" placeholder='Your answer'/>
              </Second>
          </Wrapper>
    </Container>
  )
}

export default Collaborator
const Second = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
    padding-top: 8px;
    padding-bottom: 30px;
    margin-top: 15px;
    input{
        width: 300px;
        height: 40px;
        border-bottom: 1px solid #808388;
        outline: none;
        margin-left: 18px;
        border-top: none;
        border-left: none;
        border-right: none;
        ::placeholder{
            font-size: 15px;
        }
    }
    p{
        margin-left: 18px;
        span{
            color: #D93025;
        }
    }
`
const Text = styled.div`
    color: #D93025;
    margin-top: 8px;
    font-size: 14px;
    margin-left: 18px;
`
const Hold = styled.div`
    display: flex;
    margin-left: 18px;
    align-items: center;
    margin-top: -10px;;
    p{
       
    }
`
const Holder = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    border-top: 1px solid #DADCE0;
    border-bottom: 1px solid #DADCE0;
    /* padding-top: 3px;
    padding-bottom: 3px; */
    p{
        color: #2b2c2e;
        margin-left: 18px;
        span{
            color: #1A73E8;
            cursor: pointer;
            margin-left: 5px;
        }
    }
`
const Top = styled.div`
    width: 100%;
    height: 15px;
    background-color: #673AB7;
    margin-top: -4px;
`
const First = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding-bottom: 8px;;
    h2{
        margin-left: 18px;
        font-size: 28px;
        font-weight: 400;
        margin-bottom: 0px;
    };
    p{
        font-size: 14px;
        margin-left: 18px;
        margin-top: 15px;
    }
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;
    height: 100%;
    /* background-color: red; */
    padding-top: 12px;
`
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #F0EBF8;
    flex-direction: column;
    align-items: center;
`