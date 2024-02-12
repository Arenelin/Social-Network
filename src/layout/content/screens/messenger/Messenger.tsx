import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import {PageBlockLeft} from '../../../../components/blockWrappers/pageBlockLeft/PageBlockLeft';
import {PageBlockRight} from '../../../../components/blockWrappers/pageBlockRight/PageBlockRight';
import {ChatsBoard} from './chatsBoard/ChatsBoard';
import {FilterChats} from './filterChats/FilterChats';
import {Outlet} from 'react-router-dom';

type MessengerProps = {}

export const Messenger: React.FC<MessengerProps> = () => {

    return (
        <StyledDialogs>
            <FlexWrapper gap={'16px'}>
                <PageBlockLeft>
                    <ChatsBoard/>
                    <Outlet/>
                </PageBlockLeft>
                <PageBlockRight>
                    <FilterChats/>
                </PageBlockRight>
            </FlexWrapper>
        </StyledDialogs>
    );
};

const StyledDialogs = styled.div``