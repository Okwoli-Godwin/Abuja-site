import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import * as yup from "yup"

const Cont = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [Subject, setSubject] = useState("");
  const navigate = useNavigate()

  const schema = yup.object({
        email: yup.string().required("field must be required"),
        name: yup.string().required("field must be required"),
        subject: yup.string().required(),
        message: yup.string().required()
    })
    .required();

    type formData = yup.InferType<typeof schema>

    const{register} = useForm<formData>({
        resolver: yupResolver(schema)
    })


  const Fetch = async (e: any) => {
    e.preventDefault();
    await axios
      .post(`https://uniabuja.onrender.com/api/postmessage`, {
        email,
        name,
        title,
        Subject,
      })
      .then((res) => {
        console.log(`this is for email`, res.data.data.createData);
          // setUserData(res.data.data.createData)
        Swal.fire({
                icon: "success",
                title: "Email Sent",
                timer: 3000
            })
            navigate("/")
      });
  };
  return (
    <Container>
      <Wrapper>
        <Top>
          <h1>Get in Touch</h1>
        </Top>
        <Hold>
          <Left>
            <Up>
              <h2>Contact us</h2>
            </Up>
            <p>
              Don't hesitate to reach out to us. We'll respond as soon as
              possible
            </p>
                <span>cur@uniabuja.edu.ng</span>
            <Prof>
              <h4>Professor Taibat Adebukola Atoyebi</h4>
                <span>taibat.atoyebi@uniabuja.edu.ng</span>
            </Prof>
            <Prof>
              <h4>Dr. Dike Ojji</h4>
              <span>dike.ojji@uniabuja.ed.ng</span>
            </Prof>
          </Left>
          <Right onSubmit={Fetch}>
            <Input {...register("name")} type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
            />
            <Input {...register("email")} type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
            <Input type="text" {...register("subject")}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Subject"
            />
            <Box {...register("message")}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              placeholder="Message"
            />
            <Button type="submit">Submit</Button>
          </Right>
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default Cont;
const Prof = styled.div`
  display: flex;
  flex-direction: column;
  span{
    color: blue;
  }
  a {
    margin-top: -13px;
  }
`;
const Button = styled.button`
  height: 50px;
  width: 150px;
  background-color: #00a85a;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 350ms;
  font-weight: bold;
  margin-top: 15px;
  color: white;
  :hover {
    transform: scale(0.9);
    background-color: #f5f5f5;
    color: #00a85a;
    border: 1px solid #00a85a;
  }
`;
const Box = styled.textarea`
  /* width: 200px; */
  display: flex;
  padding-left: 15px;
  padding-top: 20px;
  height: 90px;
  border: 1px solid #ced4da;
  outline: none;
  resize: none;
  ::placeholder {
    font-size: 17px;
  }
`;
const Input = styled.input`
  /* width: 100%; */
  height: 45px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  border: 1px solid #ced4da;
  margin-bottom: 10px;
  ::placeholder {
    font-size: 17px;
  }
`;
const Right = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  /* align-items: center;
    justify-content: center; */
  /* background-color: red; */
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
  }
`;
const Up = styled.div`
  h2{
        font-size: 30px;
        color: #444444;
        @media screen and (max-width: 768px) {
        font-size: 30px;
    }
    }
`;
const Left = styled.div`
  width: 35%;
  @media screen and (max-width: 425px) {
    margin-top: -40px;
  }
  span{
    color: blue;
  }
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 40px;
  p {
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Hold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 50px;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Top = styled.div`
  h1 {
    font-size: 35px;
    color: #00a85a;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  /* background-color: red; */
  margin-top: 80px;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 70px;
`;