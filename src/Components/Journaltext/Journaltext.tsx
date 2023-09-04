import React from 'react'
import styled from 'styled-components';

const Journaltext = () => {
  return (
    <div>
        <Container>
            <Wrap>
                <h2>JOURNAL FOR UNDERGRADUATE RESEARCH (JUR)</h2>
                <h2>CENTRE FOR UNDERGRADUATE RESEARCH, UNIVERSITY OF ABUJA, ABUJA, Federal Capital Territory, NIGERIA</h2>
            </Wrap>
        </Container>
        <Container2>
            <Wrapper>
                <Div>
                    <h2>About</h2>
                    <p>
                    Journal for Undergraduate Research (JUR) is an international multidisciplinary biannual publication of the Centre for Undergraduate Research, University of Abuja. It is a Peer-Reviewed Journal that publishes original research and innovations by undergraduate students globally.
                    </p>
                </Div>
                <Div>
                    <h2>Scope</h2>
                    <p>
                    <ul>
                    <li><strong>Engineering</strong><br />Chemical Engineering, Civil Engineering, Computer Application, Electrical Engineering, Information Technology, Mechanical Engineering, Railway Engineering, Space technology</li>
                    <li><strong> Management and Administration</strong><br />Accounting, Banking, Business Management, Commerce, Corporate Governance, Economics, Entrepreneurship, Finance, Human Resources Management, Marketing, Quality Management, Hospitality and Tourism Management, Procurement Management, Public Administration, Purchasing and Supply Management, Training and Development</li>
                    <li><strong>Medical and Health Science</strong><br /> Clinical Research, Human Medicine, Nursing, Pharmaceutical, Pharmacognosy, Pharmacology, Pharmacy, Phytochemistry, Physiology, Physiotherapy, Veterinary Medicine</li>
                    <li><strong>Pure Science and Food Security</strong><br /> Agriculture, Biochemistry, Bioscience, Biotechnology, Botany, Chemistry, Clinical Biology, Entomology, Environment and Ecology, Fisheries, Food Science, Microbiology, Molecular Biology, Nutrition, Plant Science, Physics, Zoology</li>
                    <li><strong>Social Science</strong><br /> Arts, Conflict Resolution, Education, Ethics, History, Humanities, Law, Social Review, Sociology, Policy, Political Science, Philosophy</li>
                    </ul> 
                    </p>  
                </Div>
                <Div>
                    <h2>Eligibility</h2>
                    <p>
                    Any undergraduate student (within or outside University of Abuja) can submit paper for publication in JUR. The research must be mentored by academic staff or senior researcher to be eligible for publication. Manuscripts submitted for publication must include a signed note from at least one of the student's mentors indicating the student’s status and their own mentorship role  
                    </p>
                </Div>
                <Div>
                    <h2>Article Processing Charge</h2>
                    <p>
                    JUR does not charge any processing fee
                    </p>
                </Div>
                <Div>
                    <h2>Publication Frequency</h2>
                    <p>
                    JUR is published twice in a year (June and December). Papers are received all-year-round, however, last dates of submission for June and December editions are 1st April and 1st October respectively 
                    </p>
                </Div>
                
            </Wrapper>
        </Container2>
    </div>
  )
}

export default Journaltext;
const Wrap = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    h1{
        margin: 0;
        /* width: 900px; */
        text-align: center;
        color: #000000d1;
        @media screen and (max-width: 425px) {
            font-size: 10px;
        }
    }
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

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Container2 = styled.div`
    width: 100%;
    padding: 20px 0px 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: blue; */
`;
const Wrapper = styled.div`
    width: 90%;
    padding: 10px 0px 10px 0px;
    flex-wrap: wrap;
    /* background-color: red; */

`;
const Div = styled.div`
    h2{
        font-size: 28px;
        color: #444444;
        @media screen and (max-width: 768px) {
        font-size: 30px;
    }
    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
    }
span{
    color: blue;
}
    margin-bottom: 25px;
li{
    /* display: flex; */
    margin-bottom: 25px;

    p{
        font-size: 1.125rem;
    line-height: 1.9rem;
    font-weight: 500;
    /* margin-top: 1rem; */
    /* width: 400px; */
    color: #132128;
    margin: 0;
    }
    
}`;