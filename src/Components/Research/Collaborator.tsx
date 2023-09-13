import React, {useState} from 'react'
import styled from 'styled-components'
import { AiOutlineMail } from "react-icons/ai"

const Collaborator = () => {
    const [formData, setFormData] = useState({
    name: '',
    department: '',
    level: '',
    email: '',
    phoneNumber: '',
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
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

              <Second>
                  <p>Level <span>*</span></p>
                  <RadioGroup>
                     <Divhold> 
                          <div style={{marginRight: "260px",width: "100%", position: "relative", backgroundColor: "blue"}}>
                              <input
                                type="radio"
                                name="level"
                                value="100"
                                checked={formData.level === '100'}
                                onChange={handleChange}
                                style={{ height: "20px", position: "absolute", marginLeft: "-120px" }}
                          />
                          </div>
                          <P>100</P>
                      </Divhold>
                      
                      <Divhold> 
                          <div style={{marginRight: "260px",width: "100%", position: "relative", backgroundColor: "blue"}}>
                              <input
                                type="radio"
                                name="level"
                                value="200"
                                checked={formData.level === '200'}
                                onChange={handleChange}
                                style={{ height: "20px", position: "absolute", marginLeft: "-120px" }}
                          />
                          </div>
                          <P>200</P>
                     </Divhold>

                      <Divhold> 
                          <div style={{marginRight: "260px",width: "100%", position: "relative", backgroundColor: "blue"}}>
                              <input
                                type="radio"
                                name="level"
                                value="300"
                                checked={formData.level === '300'}
                                onChange={handleChange}
                                style={{ height: "20px", position: "absolute", marginLeft: "-120px" }}
                          />
                          </div>
                          <P>300</P>
                      </Divhold>
                      
                      <Divhold> 
                          <div style={{marginRight: "260px",width: "100%", position: "relative", backgroundColor: "blue"}}>
                              <input
                                type="radio"
                                name="level"
                                value="400"
                                checked={formData.level === '400'}
                                onChange={handleChange}
                                style={{ height: "20px", position: "absolute", marginLeft: "-120px" }}
                          />
                          </div>
                          <P>400</P>
                      </Divhold>
                      
                      <Divhold> 
                          <div style={{marginRight: "260px",width: "100%", position: "relative", backgroundColor: "blue"}}>
                              <input
                                type="radio"
                                name="level"
                                value="500"
                                checked={formData.level === '500'}
                                onChange={handleChange}
                                style={{ height: "20px", position: "absolute", marginLeft: "-120px" }}
                          />
                          </div>
                          <P>500</P>
                     </Divhold>

                      <Divhold> 
                          <div style={{marginRight: "260px",width: "100%", position: "relative", backgroundColor: "blue"}}>
                              <input
                                type="radio"
                                name="level"
                                value="600"
                                checked={formData.level === '600'}
                                onChange={handleChange}
                                style={{ height: "20px", position: "absolute", marginLeft: "-120px" }}
                          />
                          </div>
                          <P>600</P>
                     </Divhold>
                  </RadioGroup>
              </Second>

              <Second>
                  <p>Email <span>*</span></p>
                  <input type="email" placeholder='Your answer'/>
              </Second>

              <Second>
                  <p>Phone number <span>*</span></p>
                  <input type="text" placeholder='Your answer'/>
              </Second>

              <Last>
                  <Button>Submit</Button>
                  <Button2>Clear form</Button2>
              </Last>

              <Last>
                  <p>Never submit passwords through Google Forms.</p>
              </Last>
              <Bottom>
                  <p>This form was created inside of University of Abuja. Report Abuse</p>
              </Bottom>
              <Beneath>Google Forms</Beneath>
          </Wrapper>
    </Container>
  )
}

export default Collaborator
const Beneath = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 20px;
`
const Bottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    p{
        font-size: 12px;
    }
`
const Button2 = styled.button`
    color: #7349BD;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
`
const Button = styled.button`
    background-color: #7349BD;
    color: #fff;
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    border-radius: 4px;
`
const Last = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
    p{
        font-size: 12px;
        margin-top: 8px;
    }
`
const P = styled.div`
    position: absolute;
    left: 60px;
    margin-top: 28px;
`
const Divhold = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 40px;
    input{
        /* margin-right: 160px; */
        height: 100px;
    }
`

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 30px; */
  width: 200px;
  /* background-color: red; */
`;
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