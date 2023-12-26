import React from 'react';
import {Icon} from '../../../../../../../../../components/icon/Icon';
import {
    PlaceholderNoInformation
} from '../../../../../../../../../components/placeholderNoInformation/PlaceholderNoInformation';
import styled from 'styled-components';

export const PlaceholderNoPosts = () => {
    return (
        <StyledPlaceholderNoPosts>
            <NoPostsCover>
                <Icon iconId={'stub-posts'} w={'56'} h={'56'} viewBox={'0 0 56 56'}/>
            </NoPostsCover>
            <PlaceholderNoInformation>There are no posts here yet</PlaceholderNoInformation>
        </StyledPlaceholderNoPosts>
    );
};

const NoPostsCover = styled.div`
    margin-bottom: 12px;
    text-align: center;
`
const StyledPlaceholderNoPosts = styled.div`
    padding: 36px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 0 0 12px 12px;
    margin-bottom: 16px;
    
    ${PlaceholderNoInformation} {
        text-align: center;
        margin-bottom: 0;
    }
`