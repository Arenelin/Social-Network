import styled from 'styled-components';
import {AboutUser} from './about/About';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import React from 'react';
import {UserBoard} from './userBoard/UserBoard';
import {PageBlockLeft} from '../../../../components/blockWrappers/pageBlockLeft/PageBlockLeft';
import {PageBlockRight} from '../../../../components/blockWrappers/pageBlockRight/PageBlockRight';
import {AppRootAction} from '../../../../redux/store';
import {EmptyObject, Store} from 'redux';
import {AppRootReducerType} from '../../../../redux/redux-store';
import {UserActivityContainer} from './userActivity/UserActivityContainer';

type ProfileProps = {
    store: Store<EmptyObject & AppRootReducerType, AppRootAction>
}

export const Profile: React.FC<ProfileProps> = (props) => {
    const {store} = props;
    return (
        <StyledMain>
            <AboutUser/>
            <FlexWrapper gap={'16px'}>
                <PageBlockLeft>
                    <UserBoard store={store}/>
                </PageBlockLeft>
                <PageBlockRight>
                    <UserActivityContainer store={store}/>
                </PageBlockRight>
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.main``