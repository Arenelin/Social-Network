import React from 'react';
import {TabButton} from '../../../../../../../../components/button/TabButton';
import styled from 'styled-components';

export const NavigationUserPosts = () => {
    return (
        <StyledNavigationUserPosts>
            <FilterPostsTabs>
                <TabButton as={'a'} href={'#'} isActive name={'All posts'}/>
                <TabButton as={'a'} href={'#'} name={'My posts'}/>
                <TabButton as={'a'} href={'#'} name={'Post archive'}/>
            </FilterPostsTabs>
            <Button>Search</Button>
        </StyledNavigationUserPosts>
    );
};



const StyledNavigationUserPosts = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dcdada;
`


const FilterPostsTabs = styled.div`
    display: flex;
    max-width: 262px;
    padding: 18px 0 18px 20px;
`

const Button = styled.button`
    padding: 2px 8px;
`