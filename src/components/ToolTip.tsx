import React, { useState } from 'react';
import styled from 'styled-components';

interface ToolTipProps {
    children: React.ReactNode;
    hoverItems: Array<React.ReactNode>;
}

export default function ToolTip({ children, hoverItems }: ToolTipProps) {
    const [hover, setHover] = useState(false);
    const items = (<ToolTipBox>
        { hoverItems.map((item, key) => item) }
    </ToolTipBox>);
    return (
        <Container
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <>{ children }</>
            { hover ? items : null }
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    position: relative;
`;

const ToolTipBox = styled.div`
    position: absolute;
    top: calc(100% + 10px);
    background-color: black;
    padding: 10px;
    border-radius: 10px;
`;
