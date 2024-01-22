import styled from 'styled-components';
import {AboutUser} from './about/About';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import React from 'react';
import {UserBoard} from './userBoard/UserBoard';
import {UserActivity} from './userActivity/UserActivity';
import {PageBlockLeft} from '../../../../components/blockWrappers/pageBlockLeft/PageBlockLeft';
import {PageBlockRight} from '../../../../components/blockWrappers/pageBlockRight/PageBlockRight';
import {ProfilePageType} from '../../../../redux/state';

type ProfileProps = {
    state: ProfilePageType
    addPost:()=>void
    changeCurrentPostMessage: (symbol:string)=> void
}

export const Profile: React.FC<ProfileProps> = (props) => {
    const {state, addPost, changeCurrentPostMessage} = props;
    return (
        <StyledMain>
            <AboutUser/>
            <FlexWrapper gap={'16px'}>
                <PageBlockLeft>
                    <UserBoard posts={state.posts.addedPosts} currentPostMessage={state.posts.currentPostMessage} addPost={addPost} changeCurrentPostMessage={changeCurrentPostMessage}/>
                </PageBlockLeft>
                <PageBlockRight>
                    <UserActivity friends={state.friends}/>
                </PageBlockRight>
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.main``