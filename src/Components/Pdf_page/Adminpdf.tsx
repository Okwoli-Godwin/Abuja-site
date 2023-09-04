import React from "react";
import styled from "styled-components";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import "@react-pdf-viewer/core/lib/styles/index.css";
import img from "../Assets/uniAbuja.jpeg";
import { useQuery } from "@tanstack/react-query";
import { ReadPdf, deletepdf } from "../Apis/ApiCalls";
import { MdDelete } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Adminhead from "../Adminhead/Adminhead"

const Adminpdf = () => {
    const { data, isLoading, isError } = useQuery(["pdf"], ReadPdf);
    
    const deleteOnePdf = useMutation({
        mutationFn: (id: any) => deletepdf(id),
        onSuccess: (data: any) => {
            console.log("data", data);
            Swal.fire({
                icon: "success",
                title: `${data?.message}`,
                timer: 2000,
                didOpen: () => {
                    Swal.showLoading()
                },

                willClose: () => {
                    window.location.reload()
                }
            })
        }
    })

    const submit = (id: any) => {
        deleteOnePdf.mutate(id)
    }

  const getFilePluginInstance = getFilePlugin();

  return (
    <Container>
      <Adminhead />
      <Wrapper>
        <Top>
          <Img src={img} alt="University of Abuja" />
          <Left>
            <Text>
              Hello, Welcome to the <span>Center for Undergraduate Research.</span> Download PDF files
            </Text>
          </Left>
        </Top>

        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error occurred while fetching data</p>
        ) : (
          <Down>
            {data?.data?.map((e: any) => (
              <Box key={e.id}>
                <Up>
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.js">
                    <Viewer fileUrl={e.PDFFile} plugins={[getFilePluginInstance]} />
                  </Worker>
                </Up>

                <Data>
                  <h5>{e.namepdf}</h5>
              </Data>
                <a style={{textDecoration: "none"}} href={e.PDFFile} download>
                <Button>Download</Button>
                    </a>
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
        )}
      </Wrapper>
    </Container>
  );
};

export default Adminpdf;
const Data = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  h5 {
    margin: 0px;
    font-weight: 500;
    width: 300px;
    flex-wrap: wrap;
    font-size: 15px;
    margin-top: 10px;
    line-height: 20px;
    text-align: center;
    padding-top: 15px;
    /* width: 80px; */
    word-wrap: break-word; 

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

const Delete = styled.div`
  position: absolute;
  right: 30px;
  bottom: 20px;
  /* margin-left: 300px; */
  font-size: 23px;
  cursor: pointer;
  @media screen and (max-width: 375px) {
    margin-left: 270px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 240px;
  }
`;

const Button = styled.button`
  background-color: #219653;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  width: 115px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Up = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
`;

const Box = styled.div`
  width: 370px;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 5px;
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media screen and (max-width: 1024px) {
    width: 440px;
  }
  @media screen and (max-width: 768px) {
    width: 320px;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
    background-color: #e2e1e1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
  }
`;

const Down = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Text = styled.div`
  font-size: 18px;
  width: 480px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 17px;
    width: 100%;
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
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;