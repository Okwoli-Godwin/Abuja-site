import React from 'react'
import styled from 'styled-components'
import images2 from "../Assets/edu.jpeg"

const Find = () => {
  return (
    <Container>
        <Wrapper fd="">
            <Left>
                <Images src={images2} />
            </Left>
            <Right>
                <Up2><h2>Grant process</h2></Up2>
                {/* <Up3>Semester/Course System</Up3> */}
                <Nav2>
                    <ul>
                        <li>The team fills and submit Research Grant Expression of Interest form</li>
                        <li>If shortlisted, the team writes and presents Research Proposal for a grant award. Proposals are submitted with Budget and Research flowchart/time frame as attachments</li>
                        <li>Team defends research proposal before the Consultative Committee</li>
                        <li>Successful proposals are presented to the Vice-Chancellor and special guests in a Research Day event</li>
                        <li>Grant is awarded to successful teams</li>
                        <li>The grant is disbursed in three tranches in the ratio of 50: 30: 20 for initial, progressive and final payment respectively</li>
                        <li>The awardees conduct the research or create innovative project, concepts, services, and products</li>
                        <li>Periodic progress reports are presented to the Centre</li>
                        <li>The research findings are presented in the next Research Day event</li>
                        <li>The results/research findings are presented during the CUR Research Day events, community workshops, seminars, conferences or exhibition</li>
                        <li>Research findings are published in the bi annual Journal for Undergraduate Research (JUR) University of Abuja</li>
                    </ul>
                </Nav2>
                {/* <Nav2><Icons><GrCheckmark /></Icons>The student picks, fill and submit Research Grant Expression of Interest form</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons> If shortlisted, a mentor is allocated to student. The student writes and presents proposal for a grant award. Proposals are submitted with Budget and Research flowchart/time frame as attachments.</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons>Student defends research proposal before the Consultative Committee</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons>Successful proposals are presented before a panel of judges, grant sponsors from within and outside Nigeria and special guests in a research day event.</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons>Grant is awarded to successful students</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons>The awardee conducts the research or create an innovative project, concepts, services, and products.</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons>The results/research findings are presented during CUR Research Day events, community workshops, seminars, conferences, etc.</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons>Research findings are published in the bi annual Uniabuja Journal for Undergraduate Research.</Nav2> */}
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Find

const Nav2 = styled.div`
    li{
        font-size: 1.125rem;
    line-height: 1.9rem;
    font-weight: 500;
    /* margin-top: 1rem; */
    /* width: 400px; */
    color: #132128;
    margin: 0;
    margin-bottom: 10px;
    }
    color: #132128;
    font-size: 18px;
    line-height: 28px;
    font-weight: 200;
    display: flex;
    margin-bottom: 20px;
     @media screen and (max-width: 1024px) {
        margin-left: 0px;
    }
`

const Up2 = styled.div`
    h2{
        font-size: 28px;
        color: #444444;
        @media screen and (max-width: 768px) {
        font-size: 30px;
        }
    }
    font-size: 32px;
    line-height: 40px;
    font-weight: 400;
    color: #132128;
    margin-top: -5px;
    @media screen and (max-width: 1024px) {
        margin-left: 0px;
    }
    @media screen and (max-width: 425px) {
        font-size: 27px;
        text-align: center;
    }
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
    @media screen and (max-width: 425px) {
        margin-top: -60px;
    }
`

const Images = styled.img`
    width: 100%;
    object-fit: contain;
    @media screen and (max-width: 1024px) {
       width: 70%;
    }
    @media screen and (max-width: 425px) {
       width: 100%;
       /* background-color: red; */
    }
`

const Left = styled.div`
    width: 50%;
    /* background-color: red; */
    height: 400px;
    display: flex;
    @media screen and (max-width: 1024px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 425px) {
        margin-top: -65px;
    }
`

const Wrapper = styled.div<{ fd: string }>`
    width: 90%;
    display: flex;
    flex-direction: ${({ fd }) => (fd ? "row" : "row-reverse")};
    padding-bottom: 80px;
    flex-wrap: wrap;
    @media screen and (max-width: 1024px) {
        padding-bottom: 20px;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
`