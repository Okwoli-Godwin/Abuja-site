import React, {useState} from 'react';
import styled from "styled-components";
import image from "./Assets/unib.png"
import {FiMenu} from "react-icons/fi"
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [drop, setDrop] = useState(false)
    const [isShown, setIsShown] = useState(false);
    const [isShown1, setIsShown1] = useState(false);
    const [faculty, setFaculty] = useState(false);
    const [faculty1, setFaculty1] = useState(false);
    const [journal, setJournal] = useState(false);
     const [journal1, setJournal1] = useState(false);

    const Fac = () => {
        setFaculty(!faculty)
        setIsShown(false)
        setJournal(false)
    }

    const Shows = () => {
        setIsShown(!isShown)
        setFaculty(false)
        setJournal(false)
    }
    const Shows1 = () => {
        setIsShown1(!isShown1)
        setFaculty1(false)
        setJournal1(false)
    }

    const Jours = () => {
        setJournal(!journal)
        setIsShown(false)
        setFaculty(false)
    }
    const Jours1 = () => {
        setJournal1(!journal1)
        setIsShown1(false)
        setFaculty1(false)
    }

    const Toggle = () => {
        setDrop(!drop)
    }

  return (
    <>
        <Container bg='#fff'>
            {journal ? (
                <Jou>
                <NavLink to="/jur" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                    <One> About JUR</One>
                </NavLink>
                <NavLink to="/review" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                        <One>Review & publication process</One>
                    </NavLink>
                <NavLink to="/guideline" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                    <One>Author Guidelines</One>
                </NavLink>
                <NavLink to="/submission" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                    <One>Submission</One>
                      </NavLink>
                      <NavLink to="/journal">
                          <One style={{color: "blue"}}>Archive</One>
                      </NavLink>
            </Jou>
            ) : null}
            {faculty ? (
                <Drops4>
                    <NavLink to="/team" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                        <One>Team</One>
                    </NavLink>
                    <a href="http://bit.ly/3SK8RG2"><One>Need a Research Mentee</One></a>
                </Drops4>
            ) : null}
            {isShown ? (
                <Drop>
                     <NavLink to="/eligibility" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                        <One>  Get Involved</One>
                    </NavLink>
                    <NavLink to="/research" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                        <One>Researchers</One>
                    </NavLink>
                   
                    <a href="https://bit.ly/3XZtpLQ"><One>Need a Research Collaborator</One></a>
                    <a href=" http://bit.ly/3kmH0Pz"><One>Need a Research Mentor</One></a>
                    <a href="https://bit.ly/3ZjJw7S"><One>Trainning for Proposal writting</One></a>
                    <a href="https://bit.ly/3Ku1K2u"><One>Trainning for Presentation</One></a>
                </Drop>
            ) : null}
        <Wrapper>
                  <NavLink to="/">
                      <Logo>
                <Img src={image} />
            </Logo>
            </NavLink>
            
            <Navigation>
                
                <NavLink to="/" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                    <Nav>Home</Nav>
                </NavLink>
                <NavLink to="/about" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                    <Nav>About</Nav>
                </NavLink>
                    <Nav onClick={Shows}>Students</Nav>

                        <Nav onClick={Fac}>Faculty</Nav>
    
                        <Nav onClick={Jours}>JUR</Nav>

                     <NavLink to="/gallery" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                    <Nav>Gallery</Nav>
                </NavLink>
                    <NavLink to="/contact" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                    <Nav>Contact</Nav>
                </NavLink>
            </Navigation>
            
                  <Hold>
                      <NavLink to="/apply" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                <Button >
                <h5>Apply</h5>
            </Button>
                  </NavLink>
                  
                  </Hold>
            <Hamburger onClick={Toggle}>
                <FiMenu />
            </Hamburger>
            {drop ? (
                <Dropdown>
                    {journal1 ? (
                <Drops2>
                    <NavLink to="/jur" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                        <One>About JUR</One>
                    </NavLink>
                    <NavLink to="/review" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                        <One>Review & publication process</One>
                    </NavLink>
                <NavLink to="/guideline" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                    <One>Auhtor Guidelines</One>
                </NavLink>
                <NavLink to="/submission" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                    <One>Submission</One>
                </NavLink>
                <NavLink to="/journal">
                     <One>Archive</One>
                </NavLink>
            </Drops2>
            ) : null}
                    {faculty1 ? (
                <Drops3>
                    <NavLink to="/team" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                        <One>Team</One>
                    </NavLink>
                    <a href="http://bit.ly/3SK8RG2"><One>Need a Research Mentee</One></a>
                </Drops3>
            ) : null}
                    
                    {isShown1 ? (
                <Drops1>
                    <NavLink to="/eligibility" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                        <One>  Get Involved</One>
                    </NavLink>
                    <NavLink to="/research" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                        <One>Researchers</One>
                    </NavLink>
                    <a href="https://bit.ly/3XZtpLQ"><One>Need a Research Collaborator</One></a>
                    <a href=" http://bit.ly/3kmH0Pz"><One>Need a Research Mentor</One></a>
                   <a href="https://bit.ly/3ZjJw7S"><One>Trainning for Proposal writting</One></a>
                    <a href="https://bit.ly/3Ku1K2u"><One>Trainning for Presentation</One></a>
                </Drops1>
            ) : null}
                    <Card>
                        
                        <NavLink to="/" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                            <Navhold>Home</Navhold>
                        </NavLink>
                        <NavLink to="/about" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                            <Navhold>About</Navhold>
                        </NavLink>
                        <NavLink to="/gallery" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                            <Navhold>Gallery</Navhold>
                        </NavLink>
                        
    
        <Navhold onClick={Fac}>Faculty</Navhold>

    <Navhold onClick={Shows1}>Students</Navhold>
    <Navhold onClick={Jours1}>JUR</Navhold>

     
                            <NavLink to="/contact" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                            <Navhold>Contact</Navhold>
                        </NavLink>
                        <NavLink to="/apply" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                            <Button3>
                            Apply
                        </Button3>
                        </NavLink>
                    </Card>
                </Dropdown>
            ) : null}
        </Wrapper>
        </Container>
    </>
);
};

export default Header;
const Hold = styled.div`
    display: flex;
    align-items: center;
`
const Jou = styled.div`
    width: 250px;
    height: 190px;
    display: flex;
    background-color: white;
    position: absolute;
    top: 80px;
    z-index: 727267373;
    margin-left: 230px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    a{
        text-decoration: none;
    }
`
const One = styled.div`
    font-size: 17px;
    color: #5f5f5f;
    cursor: pointer;
    margin-top: 15px;
`
const Drops3 = styled.div`
    width: 280px;
    height: 90px;
    display: flex;
    background-color: white;
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    z-index: 727267373;
    margin-left: 10px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    a{
        text-decoration: none;
    }
`
const Drops2 = styled.div`
    width: 250px;
    height: 230px;
    display: flex;
    background-color: white;
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    z-index: 727267373;
    margin-left: 10px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    a{
        text-decoration: none;
    }
`
const Drops1 = styled.div`
    width: 280px;
    height: 250px;
    display: flex;
    background-color: white;
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    z-index: 727267373;
    margin-left: 10px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    a{
        text-decoration: none;
    }
`
const Drops4 = styled.div`
    width: 230px;
    height: 110px;
    display: flex;
    background-color: white;
    position: absolute;
    top: 80px;
    z-index: 727267373;
    margin-left: 10px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    a{
        text-decoration: none;
    }
`
const Drop = styled.div`
    a{
        text-decoration: none;
    }
    width: 280px;
    height: 250px;
    display: flex;
    background-color: white;
    position: absolute;
    top: 80px;
    z-index: 727267373;
    margin-left: -230px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const Card = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    background-color: white;
`
const Dropdown = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    height: 700px;
    display: flex;
    position: fixed;
    right: 0;
    left: 0;
    top: 80px;
    justify-content: flex-end;
    width: 100%;
    transition: all 350ms;
`
const Hamburger = styled.div`
    display: flex;
    align-items: center;
    color: black;
    cursor: pointer;
    font-size: 30px;
    display: none;
    @media screen and (max-width: 1021px) {
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
    align-items: center;
    justify-content: center;
    position: sticky;
	top: 0;
	z-index: 19189;
    position: fixed;
	transition: all 350ms;
`;
const Wrapper = styled.div`
    height: 50px;
    width: 90%;
    display: flex;
    position: relative;
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
const Navigation = styled.div`
    width: 680px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    @media screen and (max-width: 1021px) {
        display: none;
    }
`;
const Navhold = styled.div`
    font-weight: bolder;
    cursor: pointer;
    color: #444444;
    margin-bottom: 10px;
    margin-top: 35px;
`;
const Nav = styled.div`
    font-weight: bolder;
    cursor: pointer;
    color: #5f5f5f;
    :hover{
        border-bottom: 7px solid #00A85A;
        line-height: 50px;
    }
    transition: all 400ms;


`;
const Button3 = styled.div`
    height: 50px;
    width: 150px;
    background-color:  #00A85A;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    transition: all 350ms;
    font-weight: bold;
	color: white;
    margin-top: 25px;
    :hover{
        transform: scale(0.9);
        background-color: #F5F5F5;
        color: #00A85A;
        border: 1px solid #00A85A;
    };
`;
const Button = styled.div`
    height: 40px;
    margin-right: 10px;
    width: 110px;
    background-color:  #00A85A;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    transition: all 350ms;
    font-weight: bold;
	color: white;
    :hover{
        transform: scale(0.9);
        background-color: #F5F5F5;
        color: #00A85A;
        border: 1px solid #00A85A;
    };
    @media screen and (max-width: 1021px) {
        display: none;
    }
`;