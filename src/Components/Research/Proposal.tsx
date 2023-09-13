import React, {useState} from 'react'
import styled from 'styled-components'
import { AiOutlineMail } from "react-icons/ai"
import axios from 'axios'
import Swal from 'sweetalert2'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { useNavigate } from 'react-router-dom'

const Proposal = () => {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("")
    const [level, setLevel] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    
    
    const schema = yup.object({
        name: yup.string().required("Field is required"),
        department: yup.string().required("Field is required"),
        level: yup.string().required("Field is required"),
        phoneNumber: yup.number().required("Field is required"),
        email: yup.string().required("Field is required")
    })
        .required();
        
    
    type formData = yup.InferType<typeof schema>

    const { register } = useForm<formData>({
        resolver: yupResolver(schema)
    })

    const Fetch = async (e: any) => {
        e.preventDefault();
        await axios
            .post(`https://cur-uni-abuja.onrender.com/app/proposal/postmessage`, {
                name,
                email,
                level,
                department,
                phoneNumber
            })
            .then((res) => {
                Swal.fire({
                icon: "success",
                title: "Email Sent",
                timer: 3000
            })
            navigate("/")
            })
    }
  return (
      <Container>
          <Wrapper onSubmit={Fetch}>
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
                  <input {...register("name")} type="text" onChange={(e) => {
                      setName(e.target.value)
                  }}
                    placeholder='Your answer' />
              </Second>

              <Second>
                  <p>Department <span>*</span></p>
                  <input {...register("department")} type="text" onChange={(e) => {
                      setDepartment(e.target.value)
                  }} placeholder='Your answer'/>
              </Second>

              <Second>
                  <p>Level <span>*</span></p>
                  <input {...register("level")} type="text" onChange={(e) => {
                      setLevel(e.target.value)
                  }}
                  placeholder='Your answer'/>
              </Second>

              <Second>
                  <p>Email <span>*</span></p>
                  <input {...register("email")} type="email" onChange={(e) => {
                      setEmail(e.target.value)
                  }} placeholder='Your answer'/>
              </Second>

              <Second>
                  <p>Phone number <span>*</span></p>
                  <input {...register("phoneNumber")} type="text" onChange={(e) => {
                      setPhoneNumber(e.target.value)
                  }} placeholder='Your answer'/>
              </Second>

              <Last>
                  <Button type='submit'>Submit</Button>
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

export default Proposal
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
        @media screen and (max-width: 375px) {
        text-align: center;
    }
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
const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 48%;
    height: 100%;
    /* background-color: red; */
    padding-top: 12px;
    @media screen and (max-width: 768px) {
        width: 65%;
    }
    @media screen and (max-width: 425px) {
        width: 90%;
    }
`
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #F0EBF8;
    flex-direction: column;
    align-items: center;
`