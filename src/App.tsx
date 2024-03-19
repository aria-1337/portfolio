import React from 'react';
import styled from 'styled-components';
import LeftContent from './components/LeftContent';

export default function App() {
  return (
    <Container>
        <Left>
            <LeftContent />
        </Left>

        <Right>
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
    padding: 0;
    margin: 0;
    @media(max-width: 875px) {
        flex-direction: column;
    }
`;

const Left = styled.div`
    width: 50%;
    @media(max-width: 875px) {
        width: 100%;
    }
`;

const Right = styled.div`
    width: 50%;
`;

