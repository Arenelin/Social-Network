import React from 'react';
import {TabButton} from '../../../../../../../components/button/TabButton';
import styled from 'styled-components';
import {Icon} from '../../../../../../../components/icon/Icon';
import {PlaceholderNoInformation} from '../../../../../../../components/placeholderNoInformation/PlaceholderNoInformation';
import {GeneralBlockWrapper} from '../../../../../../../components/generalBlockWrapper/GeneralBlockWrapper';

export const UserPosts = () => {
    return (
        <StyledUserPosts>
            <GeneralBlockWrapper>
                <TabsWrapper>
                    <FilterPostsTabs>
                        <TabButton as={'a'} href={'#'} isActive name={'All posts'}/>
                        <TabButton as={'a'} href={'#'} name={'My posts'}/>
                        <TabButton as={'a'} href={'#'} name={'Post archive'}/>
                    </FilterPostsTabs>
                    <Button>Search</Button>
                </TabsWrapper>
                <Posts>
                    <NoPostsCover>
                        <Icon iconId={'stub-posts'} w={'56'} h={'56'} viewBox={'0 0 56 56'}/>
                    </NoPostsCover>
                    <PlaceholderNoInformation>There are no posts here yet</PlaceholderNoInformation>
                </Posts>
            </GeneralBlockWrapper>

        </StyledUserPosts>
    );
};

const StyledUserPosts = styled.div``

const NoPostsCover = styled.div`
    margin-bottom: 12px;
`

const TabsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`


const FilterPostsTabs = styled.div`
    display: flex;
    max-width: 262px;
    padding: 18px 0 18px 20px;
`

const Button = styled.button`
    padding: 2px 8px;
`

const Posts = styled.div`
    padding: 36px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${PlaceholderNoInformation} {
        text-align: center;
        margin-bottom: 0;
    }
`