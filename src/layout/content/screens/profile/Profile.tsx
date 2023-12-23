import styled from 'styled-components';
import {AboutUser} from './about/About';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import React from 'react';
import {UserBoard} from './userBoard/UserBoard';
import {UserActivity} from './userActivity/UserActivity';

export function Profile() {
    return (
        <StyledMain>
            <AboutUser/>
            <FlexWrapper gap={'16px'}>
                <UserBoard/>
                <UserActivity/>
            </FlexWrapper>
        </StyledMain>
    )
}


const StyledMain = styled.main`
    max-width: 911px;
    width: 100%;
    padding-top: 25px;
    height: calc(100vh - 50px);
    overflow: auto;
`