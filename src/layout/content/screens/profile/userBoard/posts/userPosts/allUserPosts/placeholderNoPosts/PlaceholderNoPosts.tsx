import React from 'react';
import {Icon} from '../../../../../../../../../components/icon/Icon';
import {
    PlaceholderNoInformation
} from '../../../../../../../../../components/placeholderNoInformation/PlaceholderNoInformation';
import styled from 'styled-components';

export const PlaceholderNoPosts = () => {
    return (
        <div>
            <NoPostsCover>
                <Icon iconId={'stub-posts'} w={'56'} h={'56'} viewBox={'0 0 56 56'}/>
            </NoPostsCover>
            <PlaceholderNoInformation>There are no posts here yet</PlaceholderNoInformation>
        </div>
    );
};

const NoPostsCover = styled.div`
    margin-bottom: 12px;
    text-align: center;
`