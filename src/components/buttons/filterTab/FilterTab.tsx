import styled from 'styled-components';


import React from 'react';
import {NavLink} from 'react-router-dom';

type FilterTabProps = {
    text: string
    href: string
}

export const FilterTab: React.FC<FilterTabProps> = (props) => {
    const {text, href} = props;
    return (
        <NavLink to={href}>
            <StyledFilterTab>
                <Text>{text}</Text>
            </StyledFilterTab>
        </NavLink>
    );
};

const StyledFilterTab = styled.div`
    display: flex;

    &:hover {
        background-color: rgba(174, 183, 194, 0.12);
    }

    padding: 10px 12px;
    margin-bottom: 2px;
    border-radius: 8px;
    cursor: pointer;
`
const Text = styled.span`

`