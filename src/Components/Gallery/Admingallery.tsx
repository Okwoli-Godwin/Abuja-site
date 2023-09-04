import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../Header";
import img from "../Assets/uniAbuja.jpeg";
import { MdDelete } from "react-icons/md";
import Footer from "../Footer/Footer";
import { useQuery } from "@tanstack/react-query";
import { ReadImage, deleteGallery } from "../Apis/ApiCalls";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Adminhead from "../Adminhead/Adminhead"

const Admingallery = () => {
  const deleteOneImage = useMutation({
    mutationFn: (id: any) => deleteGallery(id),
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
    deleteOneImage.mutate(id);
  };

  const data = useQuery({
    queryFn: ReadImage,
    queryKey: ["allImages"],
  });

  return (
    <Container>
      <Adminhead />
      <Wrapper>
        <Top>
          <Img src={img} />
          <Left>
            <Text>
              Hello Welcome to <span>Center for Undergraduate Research</span>{" "}
              photo gallery with memories and events coming up
            </Text>
          </Left>
        </Top>

        <Down>
          {data?.data?.data.map((e: any) => (
            <Box key={e._id}>
              <Up>
                <Imgs src={e.GalleryImage} />
              </Up>
              <Delete
                onClick={() => {
                  submit(e._id);
                }}
              >
                <MdDelete />
              </Delete>
            </Box>
          ))}
        </Down>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Admingallery;
const Delete = styled.div`
  color: red;
  position: absolute;
  /* margin-left: 300px; */
  font-size: 23px;
  cursor: pointer;
  bottom: 0;
  right: 30px;
`;
const Imgs = styled.img`
  transition: all 350ms;
  object-fit: contain;
  width: 100%;
  height: 500px;
  cursor: pointer;
  /* :hover{
        display: block;
        transform: scale(1.1);
        background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.9));
        z-index: 1;
        filter: grayscale(3);
    } */
  @media screen and (max-width: 500px) {
    height: 1000px;
    margin-top: -430px;
  }
`;
const Up = styled.div`
  width: 100%;
  height: 130px;
  border-radius: 10px;
  /* overflow: hidden; */
  :hover {
  }
`;
const Box = styled.div`
  width: 570px;
  height: 420px;
  overflow: hidden;
  border-radius: 10px;
  margin: 5px;
  margin-bottom: 35px;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 440px;
  }
  @media screen and (max-width: 768px) {
    width: 320px;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    background-color: #e2e1e1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
  }
`;
const Pagi = styled.div`
  width: 100%;
  display: flex;
  height: 20px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;
const Stack = styled.div``;
const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
const Namehold = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;
const Hold = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Image = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  /* background-color: green; */
`;
const Imageholder = styled.div`
  width: 250px;
  height: 400px;
  border-radius: 15px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-left: 17px;
`;
const Down = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
`;
const Text = styled.div`
  font-size: 18px;
  width: 480px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 17px;
    width: 100%;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
  }
  span {
    color: #219653;
    font-size: 20px;
  }
`;
const Left = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Img = styled.img`
  height: 150px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  padding-top: 50px;
  padding-bottom: 90px;
  flex-wrap: wrap;
  @media screen and (max-width: 425px) {
    padding-top: 10px;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  /* background-color: red; */
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
