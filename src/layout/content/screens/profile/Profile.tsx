import styled from 'styled-components';
import {AboutUser} from './about/About';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import React from 'react';
import {UserBoard} from './userBoard/UserBoard';
import {UserActivity} from './userActivity/UserActivity';
import {PageBlockLeft} from '../../../../components/blockWrappers/pageBlockLeft/PageBlockLeft';
import {PageBlockRight} from '../../../../components/blockWrappers/pageBlockRight/PageBlockRight';
import {AppRootAction, ProfilePageType} from '../../../../redux/store';
import {EmptyObject, Store} from 'redux';
import {AppRootReducerType} from '../../../../redux/redux-store';

type ProfileProps = {
    state: ProfilePageType
    store: Store<EmptyObject & AppRootReducerType, AppRootAction>
}

export const Profile: React.FC<ProfileProps> = (props) => {
    const {state, store} = props;
    return (
        <StyledMain>
            <AboutUser/>
            <FlexWrapper gap={'16px'}>
                <PageBlockLeft>
                    <UserBoard posts={state.posts.addedPosts} store={store}/>
                </PageBlockLeft>
                <PageBlockRight>
                    <UserActivity friends={state.friends}/>
                </PageBlockRight>
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.main``