import React from 'react'
import styled from 'styled-components'

const Guidelinetext = () => {
  return (
    <Container>
        <Wrapper>
            <Top><h2>Style of Paper</h2></Top>
            <P>
                <ul>
                    <li><span>Language</span><br /> Papers should be written in clear, concise and grammatically correct UK or American English.</li>
                    <li><span>Length</span><br />Paper should not be more than 4000 words including abstract and references.</li>
                    <li><span>Tables and Figures</span><br /> Tables and figures should be appropriately labeled and presented within the body of the paper. Tables and figures should be self-explanatory. Each table should have a table title, source and legend.</li>
                    <li><span>Format</span><br /> Paper should be written using 12 font size, New Times Roman font style and typed in double line spacing. All pages should be numbered consecutively in the bottom 7 excluding the title page. The paper should be divided into clearly defined and numbered sections. Sections should be numbered 1, 2. (then subsections 1.1, 1.1.1, 1.1.2), 1.2, etc. The abstract is not included in section numbering. The author(s)’s information should be provided only in the title page and not in other parts of the manuscript. The paper should be presented in the following order:</li>
                    {/* <li>If the paper is recommended by the reviewers, acceptance letter will be provided.</li>
                    <li>Mentor approval form is completed</li>
                    <li>Author/Corresponding Author will be notified about the possible date of publication</li> */}
                </ul>
            </P>

            <Top><h2>Paper layout</h2></Top>
            <P>
                <p>The source of funding for the research should be expressly stated in clear terms.</p>
                <ul>
                    <li><span>Title Page</span><br />The title page should include title and author(s) information. Title should be a compact and brief (capitalize first letter of each word in the title) describing the contents of the paper. Title Page should include the authors’ full names and affiliations, the name of the mentor(s) along with phone numbers and e-mail information. Indicate the details of corresponding author.</li>
                    <li><span>Abstract</span><br />Abstract should not exceed 250 words and should describe the scope, methodology and main findings in clear terms. The abstract should be written in past tense with complete sentences and active verbs. Abstract should use Standard Nomenclature and not include abbreviations. No literature should be cited in the abstract</li>
                    <li><span>Keywords</span><br /> Key words (3-5 words) should be provided below the Abstract to assist with indexing of the article.</li>
                    <li><span>Source of funding</span><br /> Key words (3-5 words) should be provided below the Abstract to assist with indexing of the article.</li>
                    <li><span>Conflict of interest</span><br /> State conflict of interest if any</li>
                    <li><span>Role of Authors</span><br /> Key words (3-5 words) should be provided below the Abstract to assist with indexing of the article.</li>
                    {/* <li>If the paper is recommended by the reviewers, acceptance letter will be provided.</li>
                    <li>Mentor approval form is completed</li>
                    <li>Author/Corresponding Author will be notified about the possible date of publication</li> */}
                </ul>
            </P>

            <Top><h2>Section</h2></Top>
            <P>
                <ol>
                    <li><span>Introduction</span> <br /> The introduction should contain a background to the study, precise description of the problem and aims of the study in clear terms. It should clearly state a precise review of related and relevant literature to the subject matter, and the knowledge gap. The introduction should not contain either findings or conclusions.</li>
                    <li><span>Materials and Methods</span><br />Materials and methods used should be complete enough to provide sufficient details of procedures used in the study, however, only truly new procedures should be described in detail; previously published procedures should be cited, and important modifications to published procedures should be mentioned briefly. Methods commonly use need not be described in detail.</li>
                    <li><span>Results</span><br />Results should be precise and clearly presented in a logical sequence in the text, tables and figure. Repetitive presentation of the same data in different forms should be avoided. The results should be written in the past tense when describing findings in the authors’ research. Results should be explained without referring to the literature. Results should not contain deliberations, assumptions or interpretation of data</li>
                    <li><span>Discussion</span><br /> The discussion should consider the results in relation to any hypothesis advanced in the Introduction section. Results and Discussion sections can be combined as per requirement of research type.</li>
                    <li><span>Acknowledgment</span><br /> The contribution of people, grants, funds and others should be acknowledged in brief.</li>
                    <li><span>References</span><br /> The references should be typed single spaced using the latest APA style of referencing. All in-text citations must be referenced.</li>
                    {/* <li>If the paper is recommended by the reviewers, acceptance letter will be provided.</li>
                    <li>Mentor approval form is completed</li>
                    <li>Author/Corresponding Author will be notified about the possible date of publication</li> */}
                </ol>
            </P>
        </Wrapper>
    </Container>
  )
}

export default Guidelinetext
const P = styled.div`
    li{
        font-size: 1.125rem;
    line-height: 1.9rem;
    font-weight: 500;
    margin-bottom: 20px;
    /* margin-top: 1rem; */
    /* width: 400px; */
    color: #132128;
    span{
            font-weight: 600;
            color: #444444;
        }
    }
    margin-bottom: 20px;
`
const Top = styled.div`
    /* width: 100%; */
    display: flex;
    /* justify-content: center; */
    h2{
        font-size: 28px;
        color: #444444;
        text-align: center;
        @media screen and (max-width: 768px) {
        font-size: 30px;
    }
    @media screen and (max-width: 425px) {
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