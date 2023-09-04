import React from 'react'
import styled from 'styled-components'
import img from "../Assets/uni2.jpeg"

const Us = () => {
  return (
    <Container>
        <Text><h1>About Us</h1></Text>
    </Container>
  )
}

export default Us
const Box = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid gray;
`

const Text = styled.div`
    h1{
        color: white;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${img});
    height: 60vh;
    background-repeat: no-repeat;
    position: relative;
    background-size: cover;
    background-position: center;
    margin-top: 80px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`