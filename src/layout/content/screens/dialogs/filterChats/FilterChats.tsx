import React from 'react';
import styled from 'styled-components';
import {GeneralBlockWrapper} from '../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {FilterTab} from '../../../../../components/buttons/filterTab/FilterTab';

export const FilterChats = () => {
    return (
        <StyledFilterChats>
            <GeneralBlockWrapper>
                <FilterTab text={'All chats'}/>
                <FilterTab text={'Unread'}/>
            </GeneralBlockWrapper>
        </StyledFilterChats>
    );
};

const StyledFilterChats = styled.div`
${GeneralBlockWrapper}{
    padding: 8px;
}
`