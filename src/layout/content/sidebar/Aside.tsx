import React from 'react';
import {data} from './asideData/asideData'
import {Icon} from '../../../components/icon/Icon';
import {S} from './Aside_Styles'
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const Aside: React.FC = () => {
    return (
        <S.Aside>
            <S.MenuItems>
                {data.map(i =>
                    <S.MenuItem key={i.id}>
                        <NavLink to={i.path}>
                            <MenuLinkWrapper>
                                <S.IconWrapper>
                                    <Icon iconId={i.iconId} h={'20px'} w={'20px'} viewBox={'0 0 20 20'}/>
                                </S.IconWrapper>
                                <S.MenuTitle>{i.title}</S.MenuTitle>
                            </MenuLinkWrapper>
                        </NavLink>
                    </S.MenuItem>
                )}
            </S.MenuItems>
        </S.Aside>
    )
}

const MenuLinkWrapper = styled.div`
    display: flex;
    align-items: center;
`