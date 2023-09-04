import React, { useState } from "react";
import styled from "styled-components";
import img from "../Assets/uniAbuja.jpeg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { UseAppDispach } from "../Apis/Store";
import { Admin } from "../Apis/ReduxState";
import Swal from "sweetalert2";
import { createAdmin } from "../Apis/ApiCalls";
import Loading from "../UploadPage/Loading";

const Create = () => {
  const dispatch = UseAppDispach();
  const navigate = useNavigate();

  const [ViewPassword, setViewPassword] = useState(false);

  const ViewPasswordFunction = () => {
    setViewPassword(!ViewPassword);
  };

  const schema = yup
    .object({
      name: yup.string().required("name is required"),
      email: yup.string().email().required("email is required"),
      password: yup.string().required("password is required"),
    })
    .required();

  type formData = yup.InferType<typeof schema>;

  const {
    handleSubmit,
    register,
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  const posting = useMutation({
    mutationKey: ["create_Admin"],
    mutationFn: createAdmin,

    onSuccess: (myData: any) => {
      dispatch(Admin(myData.data));
      // reset()

      if (myData?.message === "Admin created") {
        Swal.fire({
          title: "admin registered successfully",
          html: "redirecting to login",
          timer: 1000,
          timerProgressBar: true,

          didOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            navigate("/dashboard");
          },
        });
      } else if (
        myData?.response.data.message === "Bad request , you cant sign up"
      ) {
        Swal.fire({
          title: `${myData.response.data.message}`,
          html: "redirecting to login",
          timer: 1000,
          timerProgressBar: true,
        });
      }
    },
  });

  const Submit = handleSubmit(async (data: any) => {
    posting.mutate(data);
  });

  return (
    <Container>
      {posting.isLoading ? <Loading /> : null}
      <Card onSubmit={Submit}>
        <Title>
          <Image src={img} />
          <Name>Uni-Abuja</Name>
        </Title>
        <Sign>Create Account</Sign>
        <Namein {...register("name")} type="text" placeholder="Name" />
        <Namein
          {...register("email")}
          type="email"
          placeholder="SomeOne@example.com"
        />
        <Inputhold>
          <Namein2
            {...register("password")}
            type={ViewPassword ? "password" : "text"}
            placeholder="Password"
            minLength={8}
          />
          <Iconhold onClick={ViewPasswordFunction}>
            {ViewPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </Iconhold>
        </Inputhold>

        <Signup>
          <Noacc to="/signin">
            Already have an account? <span>Sign In</span>
          </Noacc>
        </Signup>

        <Buttonhold>
          <Button2 type="submit">Next</Button2>
        </Buttonhold>
        {/* <Hold>
                we are the one
            </Hold> */}
      </Card>
    </Container>
  );
};

export default Create;

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
  border: none;
  border-radius: 50px;
  align-items: center;
  background-color: #219653;
  color: white;
  margin-right: 60px;
  cursor: pointer;
  text-decoration: none;
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
  color: black;
  span {
    color: #219653;
    cursor: pointer;
  }
`;
const Signup = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;
const Namein = styled.input`
  width: 80%;
  height: 40px;
  margin-top: 15px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`;
const Namein2 = styled.input`
  width: 83%;
  height: 40px;
  /* margin-top: 15px; */
  outline: none;
  border: none;
  /* border-bottom: 1px solid black; */
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
  height: 420px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  padding-left: 40px;
  flex-direction: column;
  padding-top: 40px;

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
