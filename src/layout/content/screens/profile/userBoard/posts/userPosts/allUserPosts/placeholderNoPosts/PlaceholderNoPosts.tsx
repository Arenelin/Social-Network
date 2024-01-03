import React from 'react';
import {Icon} from '../../../../../../../../../components/icon/Icon';
import {
    PlaceholderNoInformation
} from '../../../../../../../../../components/placeholders/noInformation/PlaceholderNoInformation';
import styled from 'styled-components';
import { S } from './PlaceholderNoPosts_Styles';

export const PlaceholderNoPosts = () => {
    return (
        <S.PlaceholderNoPosts>
            <S.NoPostsCover>
                <Icon iconId={'stub-posts'} w={'56'} h={'56'} viewBox={'0 0 56 56'}/>
            </S.NoPostsCover>
            <PlaceholderNoInformation>There are no posts here yet</PlaceholderNoInformation>
        </S.PlaceholderNoPosts>
    );
};