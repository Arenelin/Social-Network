import React from 'react';
import styled from 'styled-components';
import {Interests} from './interests/Interests';
import {Posts} from './posts/Posts';

type UserBoardProps = {}

export const UserBoard: React.FC<UserBoardProps> = () => {

    return (
        <StyledUserBoard>
            <Interests/>
            <Posts/>
        </StyledUserBoard>
    );
};

const StyledUserBoard = styled.div``
