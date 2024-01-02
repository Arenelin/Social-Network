import styled from 'styled-components';


import React from 'react';

type FilterTabProps = {
    text: string
}

export const FilterTab: React.FC<FilterTabProps> = (props) => {
    const {text} = props;
    return (
        <StyledFilterTab>
            <Text>{text}</Text>
        </StyledFilterTab>
    );
};

const StyledFilterTab = styled.a`
    display: flex;

    &:hover {
        background-color: rgba(174, 183, 194, 0.12);
    }

    padding: 10px 12px;
    margin-bottom: 2px;
    border-radius: 8px;
`
const Text = styled.span`

`