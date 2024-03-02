import React from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import {PageBlockLeft} from '../../../../../components/blockWrappers/pageBlockLeft/PageBlockLeft';
import {PageBlockRight} from '../../../../../components/blockWrappers/pageBlockRight/PageBlockRight';
import {FlexWrapper} from '../../../../../components/FlexWrapper';
import {SortedUsers} from '../PossibleFriends/PossibleFriendsAPIComponent/PossibleFriendsFunc/SortedUsers/SortedUsers';
import {FilterContent} from '../../../../../components/filterContent/FilterContent';
import {dataFilterContent} from './dataFilterContent/dataFilterContent';

export const Friends = () => {
    const onChangeHandler = (e: number) => {
        console.log('hey')
    }

    return (
        <StyledFriends>
            <FlexWrapper gap={'16px'}>
                <PageBlockLeft>
                    <Outlet/>
                </PageBlockLeft>
                <PageBlockRight>
                    <FilterContent data={dataFilterContent}/>
                    <Routes>
                        <Route path={''} element={<p>Возможные друзья</p>}/>
                    </Routes>
                    <Routes>
                        <Route path={'find-friends'} element={<SortedUsers/>}/>
                    </Routes>
                </PageBlockRight>
            </FlexWrapper>
        </StyledFriends>
    );
};

const StyledFriends = styled.div`

`

