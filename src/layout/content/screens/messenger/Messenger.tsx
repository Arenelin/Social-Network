import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import {PageBlockLeft} from '../../../../components/blockWrappers/pageBlockLeft/PageBlockLeft';
import {PageBlockRight} from '../../../../components/blockWrappers/pageBlockRight/PageBlockRight';
import {ChatsBoard} from './chatsBoard/ChatsBoard';
import {FilterChats} from './filterChats/FilterChats';
import {AppRootAction} from '../../../../redux/store';
import {EmptyObject, Store} from 'redux';
import {AppRootReducerType} from '../../../../redux/redux-store';
import {DialogContainer} from './chatsBoard/dialog/DialogContainer';
import {Route, Routes} from 'react-router-dom';

type MessengerProps = {
    store: Store<EmptyObject & AppRootReducerType, AppRootAction>
}

export const Messenger: React.FC<MessengerProps> = (props) => {
    const {store} = props;

    return (
        <StyledDialogs>
            <FlexWrapper gap={'16px'}>
                <PageBlockLeft>
                    <ChatsBoard store={store}/>
                    <Routes>
                        <Route path={"1"} element={<DialogContainer store={store}/>}/>
                        <Route path={"2"} element={<DialogContainer store={store}/>}/>
                        <Route path={"3"} element={<DialogContainer store={store}/>}/>
                    </Routes>
                </PageBlockLeft>
                <PageBlockRight>
                    <FilterChats/>
                </PageBlockRight>
            </FlexWrapper>
        </StyledDialogs>
    );
};

const StyledDialogs = styled.div``