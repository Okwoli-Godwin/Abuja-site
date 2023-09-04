import React from "react";
import styled from "styled-components";
import Loading from "./Loading";
import Adminhead3 from "../Adminhead/Adminhead3";
import Footer from "../Footer/Footer";

import Swal from "sweetalert2";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateText } from "../Apis/ApiCalls";

const UploadText = () => {
  const [show] = React.useState(false);
  const [writeups, setWriteups] = React.useState<any>("");
  const [button, setButton] = React.useState<any>("");

  const queryClient = useQueryClient();
  const updateTextFn = useMutation({
    mutationFn: (data: any) => updateText(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["alltext"]);
    },
  });

  const handleSubmit = () => {
    if (writeups !== "" && button !== "") {
      updateTextFn.mutate({
        writeups,
        button,
      });
      Swal.fire({
        title: "Text Uploaded Succefully",
        // text: "",
        icon: "success",
      });
      setWriteups("");
      setButton("");
    }
  };

  return (
    <Container>
      <Adminhead3 />
      {show ? <Loading /> : null}
      <Wrapper>
        <Card>
          <Inp
            value={writeups}
            onChange={(e) => {
              setWriteups(e.target.value);
            }}
            placeholder="Enter Text"
          />

          <Inp
            type="date"
            value={button}
            onChange={(e) => {
              setButton(e.target.value);
            }}
            placeholder="Enter date"
          />

          <Button2
            onClick={handleSubmit}
            cp={writeups !== "" && button !== "" ? "pointer" : "not-allowed"}
            bg={writeups !== "" && button !== "" ? "black" : "silver"}
          >
            {updateTextFn.isLoading ? "Loading..." : "Submit"}
          </Button2>
        </Card>
      </Wrapper>
      <br />
      <br />
      <Footer />
    </Container>
  );
};

export default UploadText;

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
