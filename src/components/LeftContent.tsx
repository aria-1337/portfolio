import React from 'react';
import styled from 'styled-components';
import useDimensions from '../hooks/Dimensions';

export default function LeftContent() {
    const { width, height } = useDimensions();
    return (
        <Container>
            <InfoBlock>
                <Name>Aria Lopez</Name>
                <Title>Fullstack Engineer</Title>
                <Statement>I believe in mission driven companies, collaborative teams, and products that make our end users lives better.</Statement>
            </InfoBlock>

            <SubTitle>Technologies</SubTitle>
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

            <AbstractSpacer h={'40'} w={'0'} />

            <ContactContainer>
                <SubTitle>Connect With Me</SubTitle>
                <AbstractSpacer h={'20'} w={'0'} />
                <MediaBtn src={'github.svg'} link={''} text={'github | @aria-1337'} enabled={true} width={width} />
                <MediaBtn src={'linkedin.png'} link={''} text={'LinkedIn | @arialopez'} enabled={true} width={width}/>
                <MediaBtn src={'gitlab.png'} link={''} text={'gitlab | @arialopez'} enabled={false} width={width} />
            </ContactContainer>
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

interface MediaBtnProps {
    link: string;
    src: string;
    text: string;
    enabled: boolean;
    width: number;
}
const MediaBtn: React.FC<MediaBtnProps> = ({ src, link, text, enabled, width }) => {
    // TODO: Tooltip hover
    const direct = () => {
        window.open(link, '_blank')?.focus();
    }
    return (
        <MediaButton onClick={() => direct()}>
            <MediaImg src={process.env.PUBLIC_URL + src}/>
            { width <= 1000 ? (null) : (<MediaText decoration={enabled ? '' : 'line-through'}>{text}</MediaText>) }
        </MediaButton>
    );
}

const AbstractSpacer = styled.div<{ h: string, w: string }>`
    min-height: ${props => props.h}px;
    width: ${props => props.w}px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: bottom;
`;

const SubTitle = styled.h4`
    margin: 0;
`;

const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0% 0% 3% 0%;
    border-bottom: 1px solid whitesmoke;
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

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid whitesmoke;
    padding-top: 20px;
    width: 70%;
    @media(max-width: 1000px) {
        flex-direction: row;
        width: 100%;
        align-items: center;
    }
`;

const MediaButton = styled.button`
    background-color: white;
    border-radius: 10px;
    border: transparent;
    margin: 0;
    display: flex;
    align-items: center;
    margin-bottom: 5%;
    max-width: 350px;
    cursor: pointer;
    &:hover {
        color: #663791;
    }
    @media(max-width: 1000px) {
        margin: 0% 1%;
    }
`;

const MediaImg = styled.img`
    width: auto;
    height: 25px;
    margin-right: 5px;
    @media(max-width: 1000px) {
        max-width: 25px;
    }
`;

const MediaText = styled.p<{ decoration: string }>`
    font-weight: bold;
    text-decoration: ${props => props.decoration};
`;
