import React from 'react';
import styled from 'styled-components';

export default function LeftContent() {
    return (
        <Container>
            <InfoBlock>
                <Name>Aria Lopez</Name>
                <Title>Fullstack Engineer</Title>
                <Statement>I believe in mission driven companies, collaborative teams, and products that make our end users lives better.</Statement>
            </InfoBlock>

            <p>Javascript Stack</p>
            <LanguageContainer>
                <LImg src={'js.jpg'} tooltip={'Javascript'} />
                <LImg src={'ts.svg'} tooltip={'Typescript'} />
                <LImg src={'node.png'} tooltip={'Node.JS'} />
                <LImg src={'nextjs.png'} tooltip={'Next.JS'} />
                <LImg src={'express.png'} tooltip={'Express js'} />
                <LImg src={'react.png'} tooltip={'React.JS'} />
                <LImg src={'vue.png'} tooltip={'Vue.JS'} />
                <LImg src={'redux.svg'} tooltip={'Redux.JS'} />
            </LanguageContainer>
            <p>Databases + Infastructure</p>
            <LanguageContainer>
                <LImg src={'psql.svg'} tooltip={'PostgresSQL'} />
                <LImg src={'redis.svg'} tooltip={'Redis'} />
                <LImg src={'mongo.png'} tooltip={'MongoDB'} />
                <LImg src={'aws.png'} tooltip={'AWS'} />
                <LImg src={'gitlab.png'} tooltip={'Gitlab CI/CD'} />
            </LanguageContainer>
            <p>Backend + Tooling Languages</p>
            <LanguageContainer>
                <LImg src={'python.png'} tooltip={'Python'} />
                <LImg src={'go.png'} tooltip={'GoLang'} />
                <LImg src={'csharp.png'} tooltip={'C Sharp'} />
            </LanguageContainer>
        </Container>
    );
}

interface LImgProps {
    src: string;
    tooltip: string;
}
const LImg: React.FC<LImgProps> = ({ src, tooltip }) => {
    // TODO: Tooltip hover
    return (
        <div>
            <LanguageImg id={src} 
            src={process.env.PUBLIC_URL + src}
            data-tip=""/>
        </div>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
`;

const Name = styled.h1`
    font-size: 50px;
    margin: 0;
`;

const Title = styled.h3`
    margin: 0% 0% 5% 0%;
`;

const Statement = styled.p`
    margin: 0% 0% 5% 0%;
    color: #7C8FB5;
`;

const LanguageContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
    width: 100%;
    flex-wrap: wrap;
`;

const Language  = styled.div`
    display: flex;
    flex-direction: row;
`;

const LanguageImg = styled.img`
    width: auto;
    height: 25px;
    background-color: whitesmoke;
    padding: 5px;
    border-radius: 5px;
    margin: 2px;
`;
