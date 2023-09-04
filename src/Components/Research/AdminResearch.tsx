import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useQuery } from "@tanstack/react-query";
import { ReadData, deleteData } from "../Apis/ApiCalls";
import { MdDelete } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Adminhead from "../Adminhead/Adminhead"

const AdminResearch: React.FC = () => {
  const data = useQuery({
    queryFn: ReadData,
  });

  const deletOneImage = useMutation({
    mutationFn: (id: any) => deleteData(id),
    onSuccess: (data: any) => {
      console.log("data", data);
      Swal.fire({
        icon: "success",
        title: `${data?.message}`,
        timer: 2000,
        didOpen: () => {
          Swal.showLoading();
        },

        willClose: () => {
          window.location.reload();
        },
      });
    },
  });

  const submit = (id: any) => {
    deletOneImage.mutate(id);
  };

  return (
    <Container>
      <Adminhead />
      <br />
      <br />
      <br />
      <Text>Our Undergraduate Researchers</Text>
      <P>
        It is a Catch Them Young approach to help promote research culture among
        undergraduate students in University of Abuja
      </P>
      <Wrapper>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>{data.isLoading ? "Loading..." : ""}</p>
        </div>
        {data?.data?.data.map((e: any) => (
          <Box key={e._id}>
            <Up>
              <Img src={e.coverImage} />
            </Up>
            <Down2>
              <Delete
                onClick={() => {
                  submit(e._id);
                }}
              >
                <MdDelete />
              </Delete>
              <Data>
                <span>{e.name}</span>
                <br />
                        <p>{e.course}</p> <h5>Research: {e.summary}</h5>
              </Data>
              <New>{e.section} 🥉</New>
              {/* <New>Rs: 2021</New> */}
            </Down2>
          </Box>
        ))}
      </Wrapper>
      <NavLink
        to="/gallery"
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "#219653" : "#5f5f5f",
        })}
      ></NavLink>
      <Footer />
    </Container>
  );
};

export default AdminResearch;
const Delete = styled.div`
  color: red;
  position: absolute;
  margin-left: 300px;
  font-size: 23px;
  cursor: pointer;
  @media screen and (max-width: 375px) {
    margin-left: 270px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 240px;
  }
`;

const New = styled.div`
  width: 150px;
  height: 40px;
  border: 1px solid #00a85a;
  background-color: white;
  cursor: pointer;
  position: absolute;
  color: #00a85a;
  align-items: center;
  display: flex;
  /* padding-right: 20px; */
  justify-content: center;
  border-radius: 50px;
  bottom: 505px;
  right: 230px;
  @media screen and (max-width: 1024px) {
    right: 340px;
  }
  @media screen and (max-width: 768px) {
    right: 220px;
  }
  @media screen and (max-width: 500px) {
    right: 225px;
    bottom: 500px;
  }
  @media screen and (max-width: 375px) {
    right: 205px;
    bottom: 500px;
  }
  @media screen and (max-width: 320px) {
    right: 140px;
    bottom: 505px;
  }
`;
const Data = styled.div`
  h5 {
    margin: 0px;
    font-weight: 500;
    font-size: 15px;
    margin-top: 10px;
    line-height: 20px;

    @media screen and (max-width: 320px) {
        /* background-color: red; */
        width: 93%;
    }
    @media screen and (max-width: 375px) {
        /* background-color: red; */
        width: 90%;
    }
    @media screen and (max-width: 425px) {
        /* background-color: red; */
        width: 95%;
    }
  }
  font-size: 1.5rem;
  line-height: 2rem;
  margin-top: -15px;
  /* background-color: red; */
  width: 100%;
  p {
    margin: 0;
    font-size: 15px;
  }
  span {
    font-weight: bolder;
    font-size: 18px;
    line-height: 2rem;
    text-align: center;
    @media screen and (max-width: 320px) {
      font-size: 19px;
      text-align: center;
    }
  }
`;
const Down2 = styled.div`
  width: 100%;
  height: 50%;
  background-color: #0c8f54;
  display: flex;
  padding-top: 20px;
  padding-left: 10px;
  color: white;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 425px) {
    padding-left: 15px;
  }
  @media screen and (max-width: 375px) {
    padding-left: 15px;
    padding-right: 10px;
  }
`;
const Img = styled.img`
  transition: all 350ms;
  object-fit: cover;
  width: 100%;
  height: 500px;
  cursor: pointer;
  :hover {
    display: block;
    transform: scale(1.1);
    background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.9));
    z-index: 1;
    filter: grayscale(3);
  }
`;
const Up = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
  :hover {
  }
`;
const Box = styled.div`
  width: 390px;
  height: 490px;
  overflow: hidden;
  border-radius: 10px;
  margin: 5px;
  margin-bottom: 35px;
  @media screen and (max-width: 1024px) {
    width: 440px;
  }
  @media screen and (max-width: 768px) {
    width: 320px;
  }
  @media screen and (max-width: 500px) {
    width: 340px;
  }
`;
const P = styled.div`
  font-size: 1.125rem;
  width: 85%;
  line-height: 1.75rem;
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
  color: #000000;
  /* background-color: red; */
  margin-top: -8px;
  @media screen and (max-width: 425px) {
    font-size: 17px;
    text-align: center;
    line-height: 1.65rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 15px;
    text-align: center;
    line-height: 1.65rem;
    width: 80%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const Text = styled.h2`
  font-weight: 600;
  /* text-align: center; */
  line-height: 1.25;
  font-size: 3rem;
  color: #00a85a;
  @media screen and (max-width: 445px) {
    font-size: 32px;
    text-align: center;
  }
`;
const Wrapper = styled.div`
  width: 91%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 425px) {
    margin-top: 30px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* margin-top: 140px; */
  padding-bottom: 20px;
`;
