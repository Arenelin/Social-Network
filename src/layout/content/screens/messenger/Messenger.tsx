import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import {PageBlockLeft} from '../../../../components/blockWrappers/pageBlockLeft/PageBlockLeft';
import {PageBlockRight} from '../../../../components/blockWrappers/pageBlockRight/PageBlockRight';
import {ChatsBoard} from './chatsBoard/ChatsBoard';
import {FilterChats} from './filterChats/FilterChats';

export const Messenger = () => {
    return (
        <StyledDialogs>
            <FlexWrapper gap={'16px'}>
                <PageBlockLeft>
                    <ChatsBoard/>
                </PageBlockLeft>
                <PageBlockRight>
                    <FilterChats/>
                </PageBlockRight>
            </FlexWrapper>
        </StyledDialogs>
    );
};

const StyledDialogs = styled.div``