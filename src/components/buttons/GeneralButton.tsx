import styled from 'styled-components';
import React from 'react';
import {theme} from '../../styles/theme';

type GeneralButtonProps = {
    primary?: boolean
    name: string
    as?: string
    href?: string
    children?: React.ReactNode
}

type StyledGeneralButtonProps = {
    primary: boolean | undefined
    as: string
    href: string | undefined
}

export const GeneralButton: React.FC<GeneralButtonProps> = (props) => {
    const {
        href,
        as,
        primary,
        name,
        children
    } = props;

    return (
        <StyledGeneralButton href={href} as={as} primary={primary}>
            <WrapperContent>
                <span>{name}</span>
                {children}
            </WrapperContent>
        </StyledGeneralButton>
    )
}

const WrapperContent = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

const StyledGeneralButton = styled.button<StyledGeneralButtonProps>`
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
                (primary ? theme.colors.buttons.background.hover.primary
                         : theme.colors.buttons.background.hover.secondary)}
    }
`