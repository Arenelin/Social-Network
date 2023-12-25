import React from 'react';
import {UserPost} from './userPost/UserPost';
import {
    PlaceholderNoInformation
} from '../../../../../../../../components/placeholderNoInformation/PlaceholderNoInformation';
import styled from 'styled-components';
import {PlaceholderNoPosts} from './placeholderNoPosts/PlaceholderNoPosts';

export const AllUserPosts = () => {

    return (
        <StyledAllUserPosts>
            <UserPost message={'Hello'} likesCount={12}/>
            <UserPost message={'My first post'} likesCount={0}/>
            {/*<PlaceholderNoPosts/>*/}
        </StyledAllUserPosts>
    );
};

const StyledAllUserPosts = styled.div`
    padding: 36px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${PlaceholderNoInformation} {
        text-align: center;
        margin-bottom: 0;
    }
`