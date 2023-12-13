import {Container} from '../../components/Container';
import React from 'react';
import {Icon} from '../../components/icon/Icon';
import {S} from './Header_Styles'

export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container>
                <Icon iconId={'logo'} w={'136px'} h={'24px'}/>
            </Container>
        </S.Header>
    )
}