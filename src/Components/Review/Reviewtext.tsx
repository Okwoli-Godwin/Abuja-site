import React from 'react'
import styled from 'styled-components'

const Reviewtext = () => {
  return (
    <Container>
        <Wrapper>
            <Top><h2>The journal uses a double-blind pair-reviewing process with experts in the discipline of the paper. The review process comprises of the following steps:</h2></Top>
            <P>
                <ul>
                    <li>Paper is reviewed for compliance to guidelines and plagiarism by managing editor</li>
                    <li>Paper is sent to 2 reviewers for review.</li>
                    <li>The reviewers’ and editorial team’s recommendations determine whether a paper will be accepted / accepted subject to minor revisions / accepted subject to major revisions / rejected, may revise with significant changes and resubmit for review / rejected.</li>
                    <li>For papers which require revisions, the same reviewers will be used to ensure that the quality of the revised paper is acceptable.</li>
                    <li>If the paper is recommended by the reviewers, acceptance letter will be provided.</li>
                    <li>Mentor approval form is completed</li>
                    <li>Author/Corresponding Author will be notified about the possible date of publication</li>
                </ul>
            </P>
        </Wrapper>
    </Container>
  )
}

export default Reviewtext
const P = styled.div`
    li{
        font-size: 1.125rem;
    line-height: 1.9rem;
    font-weight: 500;
    margin-bottom: 20px;
    /* margin-top: 1rem; */
    /* width: 400px; */
    color: #132128;
    }
    margin-bottom: 20px;
`
const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    h2{
        font-size: 28px;
        color: #444444;
        text-align: center;
        @media screen and (max-width: 768px) {
        font-size: 30px;
    }
    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
    }
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`