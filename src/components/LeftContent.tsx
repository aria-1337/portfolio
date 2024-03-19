import React from 'react';
import styled from 'styled-components';

export default function LeftContent() {
    return (
        <Container>
            <InfoBlock>
                <Name>Aria Lopez</Name>
                <Title>Fullstack Engineer</Title>
                <Statement>I believe in mission driven companies, collaborative teams, and products that make our ends users happy.</Statement>
            </InfoBlock>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    @media (max-width: 875px) {
        padding: 10% 10% 0% 10%;
    }
    padding: 10% 25% 0% 25%;
    position: sticky;
    top: 20px;
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
    margin: 5 0 0 5;;
`;

const Statement = styled.p`
    margin: 0;
    color: #7C8FB5;
`;
