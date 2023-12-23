import React from 'react';
import styled, {css} from 'styled-components';
import {theme} from '../../styles/theme';

type TabButtonPropsType = {
    name: string
    isActive?: boolean
    children?: React.ReactNode
    as?: string
    href?: string
}

type StyledButtonPropsType = {
    isActive: boolean | undefined
    as: string
    href: string | undefined
}


export const TabButton = (props: TabButtonPropsType) => {
    return (
        <StyledTabButton as={props.as} href={props.href} isActive={props.isActive}>
            <StyledTestDiv>
                {props.children}
                <span>{props.name}</span>
            </StyledTestDiv>
        </StyledTabButton>
    );
};

const StyledTestDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

const StyledTabButton = styled.button<StyledButtonPropsType>`
    color: ${({isActive}) => isActive ? theme.colors.fonts.primary : theme.colors.fonts.third};
    font-weight: 500;
    font-size: 14px;
    background-color: #ffffff;
    padding: 3px 8px;
    box-shadow: ${({isActive}) => isActive && '0 4px 8px rgba(0, 0, 0, 0.04), 0 0 4px rgba(0, 0, 0, 0.06)'};
    border-radius: 8px;
    transition: all .4s;
`

