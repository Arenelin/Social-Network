import React from 'react';
import styled from 'styled-components';
import {theme} from '../../styles/theme';

type ButtonType = 'sec-ry' | 'tab' | 'onlyIcon';

type UniversalButtonProps = {
    name?: string
    children?: React.ReactNode
    withIconRight?: boolean
    withIconLeft?: boolean
    type?: ButtonType
}

type StyledUniversalButtonProps = {
    type?: ButtonType
}

export const UniversalButton: React.FC<UniversalButtonProps> = (props) => {
    const {
        name,
        children,
        withIconRight,
        withIconLeft,
        type
    } = props;
    return (
        <StyledGeneralButton type={type}>
            <WrapperContent>
                {withIconLeft && children}
                {name && <span>{name}</span>}
                {withIconRight && children}
                {type === 'onlyIcon' && children}
            </WrapperContent>
        </StyledGeneralButton>
    );
};

const WrapperContent = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

const StyledGeneralButton = styled.button<StyledUniversalButtonProps>`
    font-size: 14px;
    font-weight: ${({type}) => (type === 'sec-ry' ? 400 : 500)};
    line-height: 20px;
    color: ${({type}) => (
            type === 'sec-ry' ? theme.colors.fonts.secondary
                    : type === 'tab' ? theme.colors.fonts.third
                            : theme.colors.fonts.primary)};

    display: inline-block;
    padding: ${({type}) => (
            type === 'tab' ? '3px 8px'
                    : type === 'onlyIcon' ? '4px 12px'
                            : '5px 16px')};
    border-radius: ${({type}) => (
            type === 'tab' ? '8px'
                    : type === 'onlyIcon' ? '32px'
                            : '5px')};
    background-color: ${({type}) => (
            type === 'sec-ry' ? theme.colors.buttons.background.secondary
                    : type === 'tab' ? theme.colors.buttons.background.tab
                            : type === 'onlyIcon' ? theme.colors.buttons.background.onlyIcon
                                    : theme.colors.buttons.background.primary)};
    transition: all .4s;

    &:hover {
        background-color: ${({type}) => (
                type === 'sec-ry' ? theme.colors.buttons.background.hover.secondary
                        : type === 'tab' ? theme.colors.buttons.background.hover.tab
                                : type === 'onlyIcon' ? theme.colors.buttons.background.hover.onlyIcon
                                        : theme.colors.buttons.background.hover.primary)};
    }
`

//box-shadow: ${({type}) =>
//             type === 'tab' ? '0 4px 8px rgba(0, 0, 0, 0.04), 0 0 4px rgba(0, 0, 0, 0.06)'
//                     : ''}; Для кнопки типа tab, при активном состоянии