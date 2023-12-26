import React from 'react';
import styled from 'styled-components';

type ButtonSvgPropsType = {
    children?: React.ReactNode
    content?: string
}

export const ButtonSvg = (props: ButtonSvgPropsType) => {
    return (
        <StyledButtonSvg>
            <StyledTestDiv>
                {props.children}
                {props.content && <span>{props.content}</span>}
            </StyledTestDiv>
        </StyledButtonSvg>
    );
};

const StyledButtonSvg = styled.button`

`
const StyledTestDiv = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color:rgb(153, 162, 173);
`