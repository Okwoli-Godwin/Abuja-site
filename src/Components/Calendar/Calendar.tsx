import React from 'react'
import styled from 'styled-components'

const Center = () => {
  return (
    <Container>
        
        
        <Wrapper fd="">
        
            <Dates><h2>Notable Dates and Deadlines</h2></Dates>

            <Collection>
                <h3>Call for Expression of Interest</h3>
                <p>16th January – 28th February 2023</p>
            </Collection>

            <Collection>
                <h3>1st Oral Presentation of Progress Report </h3>
                <p>15th February 2023</p>
            </Collection>

            <Collection>
                <h3>Partnership Drive</h3>
                <p>22nd – 24th February 2023	</p>
            </Collection>

            <Collection>
                <h3>Training on proposal writing</h3>
                <p>27th February 2023	</p>
            </Collection>

            <Collection>
                <h3>Topic Selection and Call for Research Proposal</h3>
                <p>2nd March 2023</p>
            </Collection>

            <Collection>
                <h3>Submission of Research Proposal	</h3>
                <p>5th – 15th March 2023	</p>
            </Collection>

            <Collection>
                <h3>2nd Oral Presentation of Progress Report 	</h3>
                <p>8th March 2023</p>
            </Collection>

            <Collection>
                <h3>Training on PowerPoint Presentation	</h3>
                <p>9th March 2023</p>
            </Collection>

            <Collection>
                <h3>Proposal Defense	</h3>
                <p>13th - 14th March 2023	</p>
            </Collection>

            <Collection>
                <h3>Notification of Shortlisted Candidate	</h3>
                <p>16thMarch 2023</p>
            </Collection>

            <Collection>
                <h3>Submission of Camera-ready Poster	</h3>
                <p>19th March 2023		</p>
            </Collection>

            <Collection>
                <h3>4th Undergraduate Research Day	</h3>
                <p>30th March 2023	</p>
            </Collection>
        </Wrapper>
    </Container>
  )
}

export default Center

const Collection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    h3{
        font-size: 19px;
        color: #5f5f5f;
    }
    @media screen and (max-width: 425px) {
        
    }
`
const Dates = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    text-align: center;
    h2{
        font-size: 28px;
        color: #444444;
        @media screen and (max-width: 768px) {
        font-size: 30px;
        }
        @media screen and (max-width: 425px) {
        font-size: 25px;
        }
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