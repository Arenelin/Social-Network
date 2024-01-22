import React, {MouseEvent} from 'react';
import styled from 'styled-components';
import {theme} from '../../styles/theme';

type ButtonType = 'sec-ry' | 'tab' | 'onlyIconPrimary' | 'onlyIconSecondary';

type UniversalButtonProps = {
    name?: string
    children?: React.ReactNode
    withIconRight?: boolean
    withIconLeft?: boolean
    isActive?: boolean
    type?: ButtonType
    callback: () => void
}

type StyledUniversalButtonProps = {
    isActive?: boolean
    type?: ButtonType
}

export const UniversalButton: React.FC<UniversalButtonProps> = (props) => {
    const {
        name,
        children,
        withIconRight,
        withIconLeft,
        isActive,
        type,
        callback
    } = props;

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        callback()
        e.preventDefault()
    }

    return (
        <StyledGeneralButton onClick={onClickHandler} isActive={isActive} type={type}>
            <WrapperContent>
                {withIconLeft && children}
                {name && <span>{name}</span>}
                {withIconRight && children}
                {type === 'onlyIconPrimary' && children}
                {type === 'onlyIconSecondary' && children}
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
    color: ${({type, isActive}) => (
            type === 'sec-ry' ? theme.colors.fonts.secondary
                    : type === 'tab' && isActive ? theme.colors.buttons.color.active.tab
                            : type === 'tab' ? theme.colors.fonts.third
                                    : theme.colors.fonts.primary)};

    display: inline-block;
    padding: ${({type}) => (
            type === 'tab' ? '3px 8px'
                    : type === 'onlyIconSecondary' ? '4px 12px'
                            : type === 'onlyIconPrimary' ? '0px 0px'
                                    : '5px 16px')};
    border-radius: ${({type}) => (
            type === 'tab' ? '8px'
                    : type === 'onlyIconSecondary' ? '32px'
                            : type === 'onlyIconPrimary' ? '0px 0px'
                                    : '5px')};
    border: ${({type, isActive}) =>
            type === 'tab' && isActive ? '1px solid rgb(220, 225, 230)'
                    : ''};
    background-color: ${({type, isActive}) => (
            type === 'sec-ry' ? theme.colors.buttons.background.secondary
                    : type === 'tab' && isActive ? theme.colors.buttons.background.active.tab
                            : type === 'tab' ? theme.colors.buttons.background.tab
                                    : type === 'onlyIconPrimary' ? theme.colors.buttons.background.onlyIconPrimary
                                            : type === 'onlyIconSecondary' ? theme.colors.buttons.background.onlyIconSecondary
                                                    : theme.colors.buttons.background.primary)};
    box-shadow: ${({type, isActive}) =>
            type === 'tab' && isActive ? '0 4px 8px rgba(0, 0, 0, 0.04), 0 0 4px rgba(0, 0, 0, 0.06)'
                    : ''};

    transition: all .4s;

    &:hover {
        background-color: ${({type}) => (
                type === 'sec-ry' ? theme.colors.buttons.background.hover.secondary
                        : type === 'tab' ? theme.colors.buttons.background.hover.tab
                                : type === 'onlyIconSecondary' ? theme.colors.buttons.background.hover.onlyIconSecondary
                                        : type === 'onlyIconPrimary' ? theme.colors.buttons.background.hover.onlyIconPrimary
                                                : theme.colors.buttons.background.hover.primary)};
    }
`