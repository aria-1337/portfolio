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
    padding: 2% 0% 0% 0%;
    margin: 0;
    height: calc(100vh - 70px);
    min-height: 100%;
    @media(max-width: 1000px) {
        flex-direction: column;
        overflow-y: scroll;
        height: 100vh;
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
    height: calc(100vh-70px);
    min-height: 100%;
    @media(max-width: 1000px) {
        width: 80%;
        height: 100vh; 
    }
    padding-right: 15%;
    padding-left: 5%; 
    ::-webkit-scrollbar-thumb {
        background-color: whitesmoke;
        border-radius: 10px;
    }

    ::-webkit-scrollbar {
        width: 5px;
        background-color: #7C8FB5;
        border-radius: 10px;
    }
`;

