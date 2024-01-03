import React from 'react';
import styled from 'styled-components';
import {Interests} from './interests/Interests';
import {Posts} from './posts/Posts';
import {PageBlockLeft} from '../../../../../components/blockWrappers/pageBlockLeft/PageBlockLeft';

export const UserBoard:React.FC = () => {
    return (
            <StyledUserBoard>
                    <Interests/>
                    <Posts/>
            </StyledUserBoard>
    );
};

const StyledUserBoard = styled.div``
