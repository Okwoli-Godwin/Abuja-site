import React from "react";
import styled from "styled-components";
import axios from "axios";
import Loading from "./Loading";
import Adminhead from "../Adminhead/Adminhead";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";

const Pdfupload = () => {
  const [PDFFile, setGalleryImage] = React.useState("");
  const [namepdf, setNamepdf] = React.useState("")
  const [previewImage, setPreviewImage] = React.useState("");
  const [show, setShow] = React.useState(false);

  const ImageOnchange = (e: any) => {
    const file = e.target.files[0];
    setGalleryImage(file);
    const url = URL.createObjectURL(file);
    setPreviewImage(url);
    console.log(url);
  };

  const UploadEbook = async () => {
    setShow(true);
    const formdata = new FormData();

    formdata.append("PDFFile", PDFFile);
    formdata.append("previewImage", previewImage);
    formdata.append("namepdf", namepdf);

    await axios
      .post("https://cur-uni-abuja.onrender.com/app/pdf/post", formdata)
      .then((res) => {
        console.log("data", res);
        setShow(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
    Swal.fire({
      icon: "success",
      title: "files Uploaded",
      timer: 3000,
    });
    setGalleryImage("");
    setPreviewImage("");
  };

  return (
    <Container>
      <Adminhead />
      {show ? <Loading /> : null}
      <Wrapper>
        <Card>
          <Circle>
            <Img src={previewImage} type="application/pdf" />
          </Circle>

          <Input
            onChange={ImageOnchange}
            id="pix"
            type="file"
            accept="application/pdf"
          />
          <Button htmlFor="pix">Upload Pdf</Button>

          <Inp
            onChange={(e) => {
              setNamepdf(e.target.value);
            }}
            placeholder="Enter Name"
          />

          {PDFFile !== "" &&
          namepdf !== "" ? (
            <Button2 onClick={UploadEbook} cp="pointer" bg="black">
              Submit
            </Button2>
          ) : (
            <Button2 cp="not-allowed" bg="silver">
              Submit
            </Button2>
          )}
        </Card>
      </Wrapper>
      <br />
      <br />
      <Footer />
    </Container>
  );
};

export default Pdfupload;
const Inp = styled.input`
  margin: 10px;
  width: 350px;
  height: 30px;
  border-radius: 3px;
  border: 0.7px solid silver;
  outline-color: #f8cbe0;
  padding-left: 10px;
  @media screen and (max-width: 425px) {
    width: 300px;
  }
  @media screen and (max-width: 375px) {
    width: 250px;
  }
`;

const Img = styled.embed`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Button2 = styled.button<{ bg: string; cp: string }>`
  height: 40px;
  width: 150px;
  background-color: ${(props) => props.bg};
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  transition: all 350ms;
  cursor: ${(props) => props.cp};
  margin-top: 10px;
  :hover {
    transform: scale(0.95);
  }
  @media screen and (max-width: 500px) {
    width: 120px;
  }
`;

const Input = styled.input`
  display: none;
`;
const Button = styled.label`
  height: 40px;
  width: 200px;
  background-color: #00a85a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 350ms;
  margin-top: 10px;
  cursor: pointer;
  :hover {
    transform: scale(0.98);
  }
`;

const Circle = styled.div`
  height: 150px;
  width: 250px;
  border-radius: 5px;
  background-color: #e6e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  flex-direction: column;
  font-size: 30px;
  span {
    font-size: 12px;
  }
`;

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 600px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  @media screen and (max-width: 425px) {
    width: 350px;
    padding-right: 10px;
    padding-left: 10px;
    margin-top: 40px;
  }
  @media screen and (max-width: 375px) {
    width: 300px;
    padding-right: 10px;
    padding-left: 10px;
    margin-top: 30px;
  }
`;

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
