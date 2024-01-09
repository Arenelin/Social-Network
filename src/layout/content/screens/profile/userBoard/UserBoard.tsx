import React from 'react';
import styled from 'styled-components';
import {Interests} from './interests/Interests';
import {Posts} from './posts/Posts';

export const UserBoard:React.FC = () => {
    return (
            <StyledUserBoard>
                    <Interests/>
                    <Posts/>
            </StyledUserBoard>
    );
};

const StyledUserBoard = styled.div``
