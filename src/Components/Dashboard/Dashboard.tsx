import React from "react"
import styled from "styled-components"
import image from "../Assets/unib.png"
import { AiOutlinePlus } from "react-icons/ai"
import { NavLink } from "react-router-dom"

const Dashboard = () => {
    return (
        <Container>
            <Wrapper>
                <Img src={image} />
                <Down>
                    <NavLink to="/galleryupload" style={{textDecoration: "none"}}>
                        <Holder>
                        <Upload>
                            <AiOutlinePlus />
                        </Upload>
                        <Text><h3>Upload Gallery</h3></Text>
                    </Holder>
                    </NavLink>

                    <NavLink to="/upload" style={{textDecoration: "none"}}>
                        <Holder>
                        <Upload>
                            <AiOutlinePlus />
                        </Upload>
                        <Text><h3>Upload Researchers</h3></Text>
                    </Holder>
                    </NavLink>

                    <NavLink to="/uploadtext" style={{textDecoration: "none"}}>
                        <Holder>
                        <Upload>
                            <AiOutlinePlus />
                        </Upload>
                        <Text><h3>Update Hero Text</h3></Text>
                    </Holder>
                    </NavLink>

                    <NavLink to="/pdfupload" style={{textDecoration: "none"}}>
                        <Holder>
                        <Upload>
                            <AiOutlinePlus />
                        </Upload>
                        <Text><h3>Update Pdf</h3></Text>
                    </Holder>
                    </NavLink>
                </Down>
            </Wrapper>
        </Container>
    )
}

export default Dashboard;
const Text = styled.div`
    h3{
        color: gray;
        text-decoration: none;
    }
`
const Upload = styled.div`
    width: 200px;
    height: 200px;
    font-size: 40px;
    cursor: pointer;
    color: #b1b1b1;
    border: 1px solid green;
    border: dotted;
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    /* margin-top: 120px; */
    /* margin-left: 60px; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    @media screen and (max-width: 375px) {
        width: 160px;
        height: 160px;
    }
`
const Holder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    /* background-color: green; */
    @media screen and (max-width: 500px) {
        width: 100%;  
        display: flex;
    }
`
const Down = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /* background-color: red; */
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        text-align: center;
    }
    @media screen and (max-width: 500px) {
        width: 100%;  
        align-items: center;
        justify-content: center;
        display: flex;
    }
`
const Img = styled.img`
    height: 180px;
`
const Wrapper = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        margin-top: 160px;
        /* background-color: red; */
    }
    @media screen and (max-width: 500px) {
        width: 95%; 
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 400px;
    }
`
const Container = styled.div`
    width: 100%;
    height: 100vh;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
`