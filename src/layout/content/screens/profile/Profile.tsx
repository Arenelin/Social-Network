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
}

export const Profile: React.FC<ProfileProps> = (props) => {
    const {state} = props;
    return (
        <StyledMain>
            <AboutUser/>
            <FlexWrapper gap={'16px'}>
                <PageBlockLeft>
                    <UserBoard posts={state.posts}/>
                </PageBlockLeft>
                <PageBlockRight>
                    <UserActivity/>
                </PageBlockRight>
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.main``