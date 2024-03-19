import React from 'react';
import styled from 'styled-components';

export default function RightContent() {
    return (
        <Container>
            <Bio>
                <BioContent>During Covid I decided to pick up programming to make some simple web apps to organize data. I quickly fell in love with it and attended <Link href="https://www.galvanize.com/explore-hack-reactor-coding-bootcamps/" target="_blank">Hack Reactor</Link> to learn full-stack development. After graduating I stayed on to help a new cohort of programmers along their learning journey!<br></br><br></br> I was lucky to then join <Link target="_blank" href="https://www.pando.com/">Pando, an amazing start-up</Link> as a fullstack developer. My main focus was working on building out and maintaing the backend infastructure and API. I also was able to work on team sprints helping out with front-end performance and styling.<br></br><br></br> My focus lately has been expanding my toolset in both backend and frontend technologies, and <Link>I am currently looking to join a new team!</Link></BioContent>
    
            </Bio>
            <Bio>
                <BioContent>During Covid I decided to pick up programming to make some simple web apps to organize data. I quickly fell in love with it and attended <Link href="https://www.galvanize.com/explore-hack-reactor-coding-bootcamps/" target="_blank">Hack Reactor</Link> to learn full-stack development. After graduating I stayed on to help a new cohort of programmers along their learning journey!<br></br><br></br> I was lucky to then join <Link target="_blank" href="https://www.pando.com/">Pando, an amazing start-up</Link> as a fullstack developer. My main focus was working on building out and maintaing the backend infastructure and API. I also was able to work on team sprints helping out with front-end performance and styling.<br></br><br></br> My focus lately has been expanding my toolset in both backend and frontend technologies, and <Link>I am currently looking to join a new team!</Link></BioContent>
    
            </Bio>
            <Bio>
                <BioContent>During Covid I decided to pick up programming to make some simple web apps to organize data. I quickly fell in love with it and attended <Link href="https://www.galvanize.com/explore-hack-reactor-coding-bootcamps/" target="_blank">Hack Reactor</Link> to learn full-stack development. After graduating I stayed on to help a new cohort of programmers along their learning journey!<br></br><br></br> I was lucky to then join <Link target="_blank" href="https://www.pando.com/">Pando, an amazing start-up</Link> as a fullstack developer. My main focus was working on building out and maintaing the backend infastructure and API. I also was able to work on team sprints helping out with front-end performance and styling.<br></br><br></br> My focus lately has been expanding my toolset in both backend and frontend technologies, and <Link>I am currently looking to join a new team!</Link></BioContent>
    
            </Bio>
            <Bio>
                <BioContent>During Covid I decided to pick up programming to make some simple web apps to organize data. I quickly fell in love with it and attended <Link href="https://www.galvanize.com/explore-hack-reactor-coding-bootcamps/" target="_blank">Hack Reactor</Link> to learn full-stack development. After graduating I stayed on to help a new cohort of programmers along their learning journey!<br></br><br></br> I was lucky to then join <Link target="_blank" href="https://www.pando.com/">Pando, an amazing start-up</Link> as a fullstack developer. My main focus was working on building out and maintaing the backend infastructure and API. I also was able to work on team sprints helping out with front-end performance and styling.<br></br><br></br> My focus lately has been expanding my toolset in both backend and frontend technologies, and <Link>I am currently looking to join a new team!</Link></BioContent>
    
            </Bio>
        </Container>
    );
}

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
        overflow-y: hidden;
    }
    overflow-y: scroll;
    height: 100%;
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
    flex-direction: row;
`;
