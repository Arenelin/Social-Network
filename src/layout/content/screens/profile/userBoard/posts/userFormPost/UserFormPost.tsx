import React from 'react';
import {GeneralButton} from '../../../../../../../components/buttons/GeneralButton';
import { S } from './UserFormPost_Styles';

export const UserFormPost:React.FC = () => {
    return (
        <S.UserFormPost>
            <S.TextArea/>
            <GeneralButton name={'Post'}/>
        </S.UserFormPost>
    );
};