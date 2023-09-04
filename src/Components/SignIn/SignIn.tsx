import React, { useState } from "react";
import styled from "styled-components";
import img from "../Assets/uniAbuja.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { Admin } from "../Apis/ReduxState";
import Swal from "sweetalert2";
import { LoginAdmin } from "../Apis/ApiCalls";
import Loading from "../UploadPage/Loading";
import { useAppSelector } from "../Apis/Store";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const admin = useAppSelector((state) => state.currentUser);
  const [ViewPassword, setViewPassword] = useState(false);

  const ViewpasswordFunction = () => {
    setViewPassword(!ViewPassword);
  };

  const schema = yup
    .object({
      email: yup.string().email().required("Please enter a valid email"),
      password: yup.string().required("enter your password"),
    })
    .required();

  type formData = yup.InferType<typeof schema>;

  const { handleSubmit, reset, register } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  if (admin?.password === "uniabuja@123") {
  }

  const LoginAdminFunction = useMutation({
    mutationKey: ["login_Admin"],
    mutationFn: (data: any) => LoginAdmin(data),

    onSuccess(myData) {
      dispatch(Admin(myData.data));

      if (myData?.data === null) {
        Swal.fire({
          title: "Failed to log in",
          text: "email or password incorrect",
          icon: "error",
        });
      } else if (myData?.response?.data.message === "user not foud") {
        Swal.fire({
          title: "Failed to log in",
          text: "email or password incorrect",
          icon: "error",
        });
      } else if (myData?.message === "Successfully Login") {
        Swal.fire({
          title: "Logged in",
          html: "Successfull",
          timer: 1000,
          timerProgressBar: true,

          didOpen: () => {
            Swal.showLoading();
          },

          willClose: () => {
            navigate("/adminresearch");
          },
        });
        reset();
      }
    },
  });

  const Submit = handleSubmit(async (data: any) => {
    LoginAdminFunction.mutate(data);
  });

  return (
    <Container>
      {LoginAdminFunction.isLoading ? <Loading /> : null}
      <Card onSubmit={Submit}>
        <Title>
          <Image src={img} />
          <Name>Center for Undergraduate Research</Name>
        </Title>
        <Sign>Sign in</Sign>
        <Namein
          {...register("email")}
          type="email"
          placeholder="SomeOne@gmail.com"
        />
        <Inputhold>
          <Namein
            {...register("password")}
            type={ViewPassword ? "password" : "text"}
            placeholder="Password"
            minLength={8}
          />
          <Iconhold onClick={ViewpasswordFunction}>
            {ViewPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </Iconhold>
        </Inputhold>

        <Signup>
          <Noacc to="/signup">
            {/* No Account? <span>Create One!</span> */}
          </Noacc>
        </Signup>

        <Buttonhold>
          <Button2 type="submit">Next</Button2>
        </Buttonhold>
      </Card>
    </Container>
  );
};

export default Signin;
const Iconhold = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  /* background-color: green; */
`;
const Inputhold = styled.div`
  /* background-color: red; */
  width: 81%;
  height: 40px;
  margin-top: 15px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  overflow: hidden;
  /* justify-content: center */
`;
const Button2 = styled.button`
  width: 125px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50px;
  background-color: #219653;
  margin-right: 60px;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;
const Buttonhold = styled.div`
  width: 100%;
  padding-right: 20px;
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Noacc = styled(Link)`
  font-size: 15px;
  margin-top: 15px;
  text-decoration: none;
  color: #219653;
  span {
    color: #0067b8;
  }
`;
const Signup = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;
const Namein = styled.input`
  width: 85%;
  height: 40px;
  margin-top: 15px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`;
const Sign = styled.h2`
  color: #219653;
  margin: 0;
  margin-top: 15px;
`;
const Name = styled.h2`
  color: #219653;
  margin-left: 5px;
  margin: 0;
  font-size: 17px;
`;
const Image = styled.img`
  height: 55px;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Card = styled.form`
  width: 450px;
  height: 350px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  padding-left: 40px;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 25px;
  @media screen and (max-width: 500px) {
    width: 320px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  overflow: hidden;
`;
