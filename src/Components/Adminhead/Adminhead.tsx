import React, {useState} from 'react';
import styled from "styled-components";
import image from "../Assets/unib.png"
import {FiMenu} from "react-icons/fi"
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [show, setShow] = React.useState(false);
    const [drop, setDrop] = useState(false)

    const Toggle = () => {
        setDrop(!drop)
    }

	const changeHeaderColor = () => {
		if (window.scrollY >= 70) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	window.addEventListener("scroll", changeHeaderColor);

  return (
    <>
    {show ? (
        <Container bg='#fff' >
        <Wrapper>
            <Logo>
                <Img src={image} />
            </Logo>
           <Mid>
              <NavLink to="/adminpdf" style={{textDecoration: "none", color: "#505050"}}>
                <h4 style={{textDecoration: " none", marginRight: "34px"}}>Pdf files </h4>         
                          </NavLink>
                          
                          <NavLink to="/admingallery" style={{textDecoration: "none", color: "#505050"}}>
                <h4 style={{textDecoration: " none", marginRight: "34px"}}>Gallery </h4>         
                          </NavLink>
                          
                          <NavLink to="/adminresearch" style={{textDecoration: "none", color: "#505050"}}>
                <h4 style={{textDecoration: " none"}}>Researchers </h4>         
              </NavLink>
            </Mid>
            <Buttonhold>
                           <NavLink to="/dashboard" style={{textDecoration: "none"}}>
                              <Button2>
                Dashboard
            </Button2>
            </NavLink>
            </Buttonhold>
            <Hamburger onClick={Toggle}>
                <FiMenu />
            </Hamburger>
            {drop ? (
                <Dropdown>
                    <Card>
                        <Buttonhold>
                <NavLink to="/upload">
                            <Button2>
                            Upload Research
                        </Button2>
                        </NavLink>
           <NavLink to="/uploadtext" style={{textDecoration: "none"}}>
                              <Button2>
                Upload text
            </Button2>
                                      </NavLink>
                                       <NavLink to="/dashboard" style={{textDecoration: "none"}}>
                              <Button2>
                Dashboard
            </Button2>
            </NavLink>
            </Buttonhold>
                    </Card>
                </Dropdown>
            ) : null}
        </Wrapper>
    </Container>
    ) : (
        <Container bg='#fff'>
        <Wrapper>
            <Logo>
                <Img src={image} />
           </Logo>

            <Mid>
              <NavLink to="/adminpdf" style={{textDecoration: "none", color: "#505050"}}>
                <h4 style={{textDecoration: " none", marginRight: "34px"}}>Pdf files </h4>         
                          </NavLink>
                          
                          <NavLink to="/admingallery" style={{textDecoration: "none", color: "#505050"}}>
                <h4 style={{textDecoration: " none", marginRight: "34px"}}>Gallery </h4>         
                              </NavLink>
                              
                              <NavLink to="/adminresearch" style={{textDecoration: "none", color: "#505050"}}>
                <h4 style={{textDecoration: " none"}}>Researchers </h4>         
              </NavLink>
            </Mid>
                          
           <Buttonhold>
                              <NavLink to="/dashboard" style={{textDecoration: "none"}}>
                              <Button2>
                Dashboard
            </Button2>
            </NavLink>
            </Buttonhold>
            <Hamburger onClick={Toggle}>
                <FiMenu />
            </Hamburger>
            {drop ? (
                <Dropdown>
                    <Card>
                        <NavLink to="/adminpdf" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                            <Button3>
                            Pdf fles
                        </Button3>
                        </NavLink>
                        <NavLink to="/admingallery" style={{textDecoration: "none"}}>
                              <Button3>
                Gallery
            </Button3>
                                      </NavLink>
                                      <NavLink to="/adminresearch" style={{textDecoration: "none"}}>
                              <Button3>
                Researchers
            </Button3>
                                      </NavLink>
                                       <NavLink to="/dashboard" style={{textDecoration: "none"}}>
                              <Button3>
                Dashboard
            </Button3>
            </NavLink>
                    </Card>
                </Dropdown>
            ) : null}
        </Wrapper>
        </Container>
        )}
    </>
);
};

export default Header;
const Mid = styled.div`
    display: flex;
    @media screen and (max-width: 425px) {
        display: none;
    }
`
const Buttonhold = styled.div`
    /* width: 310px; */
    display: flex;
    height: 100%;
    align-items: center;
    /* background-color: red; */
    justify-content: space-between;
    @media screen and (max-width: 900px) {
        display: none;
        margin-bottom: 20px;
    }
`
const Card = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    background-color: white;
    position: fixed;
    padding-top: 15px;
`
const Dropdown = styled.div`
    /* position: absolute; */
    background-color: rgba(0, 0, 0, 0.4);
    height: 100vh;
    display: flex;
    position: fixed;
    right: 0;
    left: 0;
    top: 80px;
    justify-content: flex-end;
    width: 100%;
    /* flex-direction: column; */
    /* align-items: center; */
    /* transform: translateY(100%); */
    transition: all 350ms;
`
const Hamburger = styled.div`
    display: flex;
    align-items: center;
    color: black;
    font-size: 30px;
    display: none;
    @media screen and (max-width: 900px) {
        display: flex;
    }
    @media screen and (max-width: 768px) {
        margin-right: 15px;
    }
`
const Img = styled.img`
    height: 70px;
`

const Container = styled.div<{ bg: string; }>`
    height: 80px;
    width: 100%;
    background-color: ${(props) => props.bg};
    border-bottom: #f1f1f1;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    position: fixed;
	top: 0;
	z-index: 19189;
	transition: all 350ms;
`;
const Wrapper = styled.div`
    height: 50px;
    width: 90%;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.div`
    h1{
        font-size: xx-large;
        font-weight: bolder;
    }
    align-items: center;
    display: flex;
`;

const Button3 = styled.div`
    height: 50px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    transition: all 350ms;
    font-weight: bold;
    margin-bottom: 10px;
	color: #505050;
    :hover{
        transform: scale(0.9);
        background-color: #F5F5F5;
        color: #00A85A;
        border: 1px solid #00A85A;
    };
`;
const Button2 = styled.div`
    height: 50px;
    width: 150px;
    background-color:  #00A85A;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    font-size: 15px;
    transition: all 350ms;
    font-weight: 600;
    margin-left: 10px;
    /* margin-bottom: 10px; */
	color: white;
    :hover{
        transform: scale(0.9);
        background-color: #F5F5F5;
        color: #00A85A;
        border: 1px solid #00A85A;
    };
`;
