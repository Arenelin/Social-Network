import React from 'react';
import {data} from './asideData/asideData'
import {Icon} from '../../../components/icon/Icon';
import {S} from './Aside_Styles'
import {NavLink} from 'react-router-dom';

export const Aside: React.FC = () => {
    return (
        <S.Aside>
            <S.MenuItems>
                {data.map(i =>
                    <S.MenuItem key={i.id}>
                        <NavLink to={i.path}>
                            <S.MenuLinkWrapper>
                                <S.IconWrapper>
                                    <Icon iconId={i.iconId} h={'20px'} w={'20px'} viewBox={'0 0 20 20'}/>
                                </S.IconWrapper>
                                <S.MenuTitle>{i.title}</S.MenuTitle>
                            </S.MenuLinkWrapper>
                        </NavLink>
                    </S.MenuItem>
                )}
            </S.MenuItems>
        </S.Aside>
    )
}