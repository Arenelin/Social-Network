import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import {PageBlockLeft} from '../../../../components/blockWrappers/pageBlockLeft/PageBlockLeft';
import {PageBlockRight} from '../../../../components/blockWrappers/pageBlockRight/PageBlockRight';
import {ChatsBoard} from './chatsBoard/ChatsBoard';
import {FilterChats} from './filterChats/FilterChats';
import {ChatData, PostType} from '../../../../index';

type MessengerProps = {
    chats: ChatData[]
}

export const Messenger: React.FC<MessengerProps> = (props) => {
    const {chats} = props;
    return (
        <StyledDialogs>
            <FlexWrapper gap={'16px'}>
                <PageBlockLeft>
                    <ChatsBoard chats={chats}/>
                </PageBlockLeft>
                <PageBlockRight>
                    <FilterChats/>
                </PageBlockRight>
            </FlexWrapper>
        </StyledDialogs>
    );
};

const StyledDialogs = styled.div``