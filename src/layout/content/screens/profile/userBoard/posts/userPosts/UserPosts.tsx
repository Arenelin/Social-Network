import React from 'react';
import styled from 'styled-components';
import {GeneralBlockWrapper} from '../../../../../../../components/generalBlockWrapper/GeneralBlockWrapper';
import {NavigationUserPosts} from './navigationUserPosts/NavigationUserPosts';
import {AllUserPosts} from './allUserPosts/AllUserPosts';

export const UserPosts = () => {
    return (
        <StyledUserPosts>
            <GeneralBlockWrapper>
                <NavigationUserPosts/>
                <AllUserPosts/>
            </GeneralBlockWrapper>
        </StyledUserPosts>
    );
};

const StyledUserPosts = styled.div``