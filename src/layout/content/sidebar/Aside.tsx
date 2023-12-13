import React from 'react';
import {data} from './asideData/asideData'
import {Icon} from '../../../components/icon/Icon';
import {S} from './Aside_Styles'

export const Aside: React.FC = () => {
    return (
        <S.Aside>
            <S.MenuItems>
                {data.map(i =>
                    <S.MenuItem key={i.id}>
                        <S.MenuLink href={i.href}>
                            <S.IconWrapper>
                                <Icon iconId={i.iconId} h={'20px'} w={'20px'} viewBox={'0 0 20 20'}/>
                            </S.IconWrapper>
                            <S.MenuTitle>{i.title}</S.MenuTitle>
                        </S.MenuLink>
                    </S.MenuItem>
                )}
            </S.MenuItems>
        </S.Aside>
    )
}