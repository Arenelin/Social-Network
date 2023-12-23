import React from 'react';
import styled from 'styled-components';
import {Interests} from './interests/Interests';
import {Post} from './post/Post';

export const UserBoard = () => {
    return (
            <StyledUserBoard>
                <Interests/>
                <Post/>
            </StyledUserBoard>
    );
};

const StyledUserBoard = styled.div`
    max-width: 550px;
    width: 100%;
`
