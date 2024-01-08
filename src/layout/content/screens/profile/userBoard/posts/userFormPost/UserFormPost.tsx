import React from 'react';
import { S } from './UserFormPost_Styles';
import {UniversalButton} from '../../../../../../../components/buttons/UniversalButton';

export const UserFormPost:React.FC = () => {
    return (
        <S.UserFormPost>
            <S.TextArea/>
            <UniversalButton type={'sec-ry'} name={'Post'}/>
        </S.UserFormPost>
    );
};