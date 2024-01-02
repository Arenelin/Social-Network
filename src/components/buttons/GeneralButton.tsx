import styled from 'styled-components';
import React from 'react';
import {theme} from '../../styles/theme';

type GeneralButtonPropsType = {
    primary?: boolean
    name: string
    as?: string
    href?: string
    children?: React.ReactNode
}

type StyledGeneralButtonPropsType = {
    primary: boolean | undefined
    as: string
    href: string | undefined
}

export const GeneralButton = (props: GeneralButtonPropsType) => {
    return (
        <StyledGeneralButton href={props.href} as={props.as} primary={props.primary}>
            <StyledTestDiv>
                <span>{props.name}</span>
                {props.children}
            </StyledTestDiv>
        </StyledGeneralButton>
    )
}

const StyledTestDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

const StyledGeneralButton = styled.button<StyledGeneralButtonPropsType>`
    font-size: 14px;
    font-weight: ${({primary}) => (primary ? 500 : 400)};
    line-height: 20px;
    padding: 5px 16px;
    border-radius: 5px;
    color: ${({primary}) => (primary ? theme.colors.fonts.primary : theme.colors.fonts.secondary)};
    background-color: ${({primary}) => (primary ? theme.colors.buttons.background.primary : theme.colors.buttons.background.secondary)};
    display: inline-block;
    transition: all .4s;

    &:hover {
        background-color: ${({primary}) =>
                (primary
                        ? theme.colors.buttons.background.hover.primary
                        : theme.colors.buttons.background.hover.secondary
                )}
    }
`