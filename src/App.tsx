import React from 'react';
import styled from 'styled-components';
import LeftContent from './components/LeftContent';
import RightContent from './components/RightContent';

export default function App() {
  return (
    <Container>
        <Left>
            <LeftContent />
        </Left>

        <Right>
            <RightContent />
        </Right>
    </Container>
  );
}

// Container Hold two main columns
// [LEFT] = Name/Title/General Info
// [RIGHT] = Scrolling content
const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10% 0% 0% 0%;
    margin: 0;
    @media(max-width: 1000px) {
        flex-direction: column;
    }
`;

const Left = styled.div`
    width: 50%;
    height: 100%;
    padding-left: 20%;
    @media(max-width: 1000px) {
        width: 80%;
        padding-left: 5%;
    }
`;

const Right = styled.div`
    width: 50%;
    @media(max-width: 1000px) {
        width: 80%;
    }
    padding-right: 15%;
    padding-left: 5%; 
`;

