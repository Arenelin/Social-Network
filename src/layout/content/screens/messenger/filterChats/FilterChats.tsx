import React from 'react';
import {GeneralBlockWrapper} from '../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {FilterTab} from '../../../../../components/buttons/filterTab/FilterTab';
import {S} from './FilterChats_Styles'

export const FilterChats: React.FC = () => {
    return (
        <S.FilterChats>
            <GeneralBlockWrapper>
                <FilterTab text={'All chats'}/>
                <FilterTab text={'Unread'}/>
            </GeneralBlockWrapper>
        </S.FilterChats>
    );
};