import React from 'react';
import styled from 'styled-components';

export default function RightContent() {
    return (
        <Container>
            <Bio>
                <SectionTitle>About me</SectionTitle>
                <BioContent>
                    I was first introduced to programming when I built a simple PHP web app to analyze some API data during covid, and fell in love right away. I then went on to join <Link target="_blank" href="https://www.galvanize.com/explore-hack-reactor-coding-bootcamps/">Hack Reactor</Link> to learn full stack development. After graduating the program I was offered to stay on and aid in teaching a new cohort of programmers.
                    <br></br><br></br>
                    After working at <Link target="_blank" href="https://www.galvanize.com/">Galvanize</Link> I joined <Link target="_blank" href="https://www.pando.com"> an amazing startup Pando</Link> Where I got to work on all kinds of technical problems and honed my fullstack skills. My main work consisted of API and infastructure work, and when I wasn't doing that I was assisting in working on frontend performance and styling. 
                    <br></br><br></br>
                    My main interests fall in API design, Database Design, Infastructure, App performance/optimization, and frontend logic. However, I am always excited to pick up new technologies or work on novel problems!
                </BioContent>
            </Bio>

            <ExpierenceContainer>
                <SectionTitle>My work expierence</SectionTitle>
                <ExpierenceItem>
                    <ExpierenceTimeline>2022-2023 (Remote)</ExpierenceTimeline>
                    <ExpierenceTitle>Fullstack Engineer @ Pando</ExpierenceTitle>

                    <ExpierenceText>
                        Led multiple large data migrations of our database along with schema redesign. Maintained, refactored, and built large chunks of the API. Worked on migrating and integrating external APIs while providing a seamless change to our clients. Improved front-end page performance on some of the core-components to reduce load times for international clients. Built tooling for our CS department and worked on handling client issues in a timely manner.
                    </ExpierenceText>
                </ExpierenceItem>

                <ExpierenceItem>
                    <ExpierenceTimeline>2021-2022(Remote/San Francisco)</ExpierenceTimeline>
                    <ExpierenceTitle>SEIR @ Galvanzie</ExpierenceTitle>
                    <ExpierenceText>
                       Taught engineers an array of concepts: Javascript Fundamentals, React, Redux, How to create a server in Node/Express, Database technologies SQL, MongoDB and Redis, How to architect a system to support a service with AWS and NGINX, Basic-Intermediate System Design concepts, How to build a full stack web application. 
                    </ExpierenceText>
                </ExpierenceItem>
            </ExpierenceContainer>
        </Container>
    );
}
// TODO: Add project section when I have more!

const Link = styled.a`
    color: #DAE2EF; 
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
`;

const SectionTitle = styled.h3`
`;

const Container = styled.div`
    width: 100%;
    min-height: 100%;
    @media(max-width: 1000px) {
        margin-top: 5%;
        overflow-y: auto;
    }
    overflow-y: scroll;
    height: 100%;
    padding-right: 15px;
`;

const Bio = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const BioContent = styled.p`
    margin: 0;
    word-spacing: 1.5px;
    line-height: 22px;
    color: #7C8FB5;
`;

const ExpierenceContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5% 0%;
`;

const ExpierenceItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    &:hover {
        padding: 9px;
        border: 1px solid #1b2742;
        border-radius: 10px;
        color: whitesmoke;
        background-color: #162038;
    }
`;

const ExpierenceTimeline = styled.p`
    margin: 0;
`;

const ExpierenceTitle = styled.h3`
    margin: 0;
`;

const ExpierenceText = styled.p`
    margin: 2% 0%;
    color: #7C8FB5;
`;
