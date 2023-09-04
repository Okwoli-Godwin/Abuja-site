import React from "react";
import styled from "styled-components";
import axios from "axios";
import Loading from "./Loading";
import Adminhead2 from "../Adminhead/Adminhead2";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";

const UploadPage = () => {
  const [course, setCourse] = React.useState("");
  const [coverImage, setCoverImage] = React.useState("");
  const [pdfFile, setPdfFile] = React.useState("");
  const [name, setName] = React.useState("");
  const [section, setSection] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [previewImage, setPreviewImage] = React.useState("");
  const [show, setShow] = React.useState(false);

  const ImageOnchange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      const isImage = file.type.startsWith("image/");
      if (isImage) {
        setCoverImage(file);
      } else {
        setPdfFile(file);
      }
    }
  };

  const UploadFiles = async () => {
    setShow(true);
    const formData = new FormData();
    formData.append("course", course);
    formData.append("name", name);
    formData.append("section", section);
    formData.append("summary", summary);

    if (coverImage) {
      formData.append("coverImage", coverImage);
    }

    if (pdfFile) {
      formData.append("pdfFile", pdfFile);
    }

    try {
      await axios.post("https://cur-uni-abuja.onrender.com/app/upload", formData);
      setShow(false);
      Swal.fire({
        icon: "success",
        title: "Files Uploaded",
        timer: 3000,
      });
      setSummary("");
    } catch (error) {
      setShow(false);
      console.error("Error uploading files:", error);
      Swal.fire({
        icon: "error",
        title: "Error Uploading Files",
        text: "An error occurred while uploading files.",
      });
    }
  };

  return (
    <Container>
      <Adminhead2 />
      {show ? <Loading /> : null}
      <Wrapper>
        <Card>
          <Circle>
            {coverImage ? (
              <Img src={previewImage} alt="Preview" />
            ) : (
              <span>Upload an image</span>
            )}
          </Circle>

          <Input onChange={ImageOnchange} type="file" accept="image/*" />
          <Button htmlFor="imageInput">Upload Image</Button>

          {/* Add a separate button for PDF file */}
          <Input onChange={ImageOnchange} type="file" accept=".pdf" />
          <Button htmlFor="pdfInput">Upload PDF</Button>

          {/* Rest of the code remains the same */}
          {/* ... */}

        </Card>
      </Wrapper>
      <br />
      <br />
      <Footer />
    </Container>
  );
};

const TextArea = styled.textarea`
	width: 350px;
	height: 60px;
	resize: none;
	border-radius: 3px;
	border: 0.7px solid silver;
	outline-color: #f8cbe0;
	padding-left: 10px;
	padding-top: 5px;
	@media screen and (max-width: 425px) {
		width: 300px;
	}
	@media screen and (max-width: 375px) {
		width: 250px;
	}
`

const Img = styled.img`
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
  /* border-radius: 50%; */
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
  /* height: 300px; */
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding-top: 10px;
	padding-bottom: 10px; */
  /* background-color: red; */
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
