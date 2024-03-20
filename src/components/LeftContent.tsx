import React from 'react';
import styled from 'styled-components';
import useDimensions from '../hooks/Dimensions';
import ToolTip from './ToolTip';

export default function LeftContent() {
    const { width, height } = useDimensions();
    const pub = process.env.PUBLIC_URL;
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
                <ToolTip hoverItems={[<TipText>Javascript</TipText>]}>
                    <LanguageImg src={pub + 'js.jpg'} />
                </ToolTip>

                <ToolTip hoverItems={[<TipText>Typescript</TipText>]}>
                    <LanguageImg src={pub + 'ts.svg'} />
                </ToolTip>

                <ToolTip hoverItems={[<TipText>Node.JS</TipText>]}>
                    <LanguageImg src={pub + 'node.png'} />
                </ToolTip>

                <ToolTip hoverItems={[<TipText>Next.JS</TipText>]}>
                    <LanguageImg src={pub + 'nextjs.png'} />
                </ToolTip>

                <ToolTip hoverItems={[<TipText>Express.JS</TipText>]}>
                    <LanguageImg src={pub + 'express.png'} />
                </ToolTip>

                <ToolTip hoverItems={[<TipText>React.JS</TipText>]}>
                    <LanguageImg src={pub + 'react.png'} />
                </ToolTip>

                <ToolTip hoverItems={[<TipText>Vue.JS</TipText>]}>
                    <LanguageImg src={pub + 'vue.png'} />
                </ToolTip>

                <ToolTip hoverItems={[<TipText>Redux.JS</TipText>]}>
                    <LanguageImg src={pub + 'redux.svg'} />
                </ToolTip>
            </LanguageContainer>
            <p>Databases + Infastructure</p>
            <LanguageContainer>
                <ToolTip hoverItems={[<TipText>PostgreSQL</TipText>]}>
                    <LanguageImg src={pub + 'psql.svg'} />
                </ToolTip>

                <ToolTip hoverItems={[<TipText>Redis</TipText>]}>
                    <LanguageImg src={pub + 'redis.svg'} />
                </ToolTip>

                <ToolTip hoverItems={[<TipText>MongoDB</TipText>]}>
                    <LanguageImg src={pub + 'mongo.png'} />
                </ToolTip>

                <ToolTip hoverItems={[<TipText>AWS</TipText>]}>
                    <LanguageImg src={pub + 'aws.png'} />
                </ToolTip>

                <ToolTip hoverItems={[<TipText>Gitlab CI/CD</TipText>]}>
                    <LanguageImg src={pub + 'gitlab.png'} />
                </ToolTip>
            </LanguageContainer>
            <p>Backend + Tooling Languages</p>
            <LanguageContainer>
                <ToolTip hoverItems={[<TipText>Python</TipText>]}>
                    <LanguageImg src={pub + 'python.png'} />
                </ToolTip>

                <ToolTip hoverItems={[<TipText>GoLang</TipText>]}>
                    <LanguageImg src={pub + 'go.png'} />
                </ToolTip>

                <ToolTip hoverItems={[<TipText>C Sharp</TipText>]}>
                    <LanguageImg src={pub + 'csharp.png'} />
                </ToolTip>
            </LanguageContainer>

            <AbstractSpacer h={'40'} w={'0'} />

            <ContactContainer>
                <SubTitle>Connect With Me</SubTitle>
                <AbstractSpacer h={'20'} w={'0'} />
                <MediaBtn src={'github.svg'} link={''} text={'github | @aria-1337'} enabled={true} width={width} height={height} />
                <MediaBtn src={'linkedin.png'} link={''} text={'LinkedIn | @arialopez'} enabled={true} width={width} height={height} />
                <MediaBtn src={'gitlab.png'} link={''} text={'gitlab | @arialopez'} enabled={false} width={width} height={height} />
            </ContactContainer>
        </Container>
    );
}

interface LImgProps {
    src: string;
}
const LImg: React.FC<LImgProps> = ({ src }) => {
    // TODO: Tooltip hover
    return (
        <div>
        </div>
    );
}

interface MediaBtnProps {
    link: string;
    src: string;
    text: string;
    enabled: boolean;
    width: number;
    height: number;
}
const MediaBtn: React.FC<MediaBtnProps> = ({ src, link, text, enabled, width, height }) => {
    // TODO: Tooltip hover
    const direct = () => {
        window.open(link, '_blank')?.focus();
    }
    return (
        <MediaButton onClick={() => direct()}>
            <MediaImg src={process.env.PUBLIC_URL + src}/>
            { width <= 1000 || height <= 800 ? (null) : (<MediaText decoration={enabled ? '' : 'line-through'}>{text}</MediaText>) }
        </MediaButton>
    );
}

 const TipText = styled.p`
    margin: 0;
`;

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
    @media(max-width: 1000px) {
        margin-right: 5px;
    }
`;

const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0% 0% 3% 0%;
    border-bottom: 1px solid #7C8FB5;
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
    border-top: 1px solid #7C8FB5;
    padding: 20px 0px;
    width: 100%;
    @media(max-width: 1000px) {
        flex-direction: row;
        width: 100%;
        align-items: center;
        border-bottom: 1px solid #7C8FB5;
    }
    @media (max-height: 800px) {
        flex-direction: row;
        width: 100%;
        align-items: center;
        border-bottom: 1px solid #7C8FB5;
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
    @media(max-height: 800px) {
        margin: 0% 1%;
    }
`;

const MediaImg = styled.img`
    width: auto;
    height: 25px;
    margin-right: 5px;
    @media(max-width: 1000px) {
        max-width: 25px;
        margin-right: 0px;
    }
`;

const MediaText = styled.p<{ decoration: string }>`
    font-weight: bold;
    text-decoration: ${props => props.decoration};
`;
