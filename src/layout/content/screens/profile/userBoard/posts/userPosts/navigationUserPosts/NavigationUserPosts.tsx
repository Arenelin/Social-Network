import React from 'react';
import {SecondaryButton} from '../../../../../../../../components/buttons/SecondaryButton';
import styled from 'styled-components';
import {GeneralBlockWrapper} from '../../../../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {FlexWrapper} from '../../../../../../../../components/FlexWrapper';
import {ButtonSvg} from '../../../../../../../../components/buttons/ButtonSvg';
import {Icon} from '../../../../../../../../components/icon/Icon';

export const NavigationUserPosts = () => {
    return (
        <StyledNavigationUserPosts>
            <GeneralBlockWrapper>
                <FlexWrapper jc={'space-between'}>
                    <FilterPostsTabs>
                        <SecondaryButton as={'a'} href={'#'} isActive name={'All posts'}/>
                        <SecondaryButton as={'a'} href={'#'} name={'My posts'}/>
                        <SecondaryButton as={'a'} href={'#'} name={'Post archive'}/>
                    </FilterPostsTabs>
                   <ButtonSvg>
                       <Icon iconId={'search'} w={'20'} h={'20'} viewBox={'0 0 20 20'}/>
                   </ButtonSvg>
                </FlexWrapper>
            </GeneralBlockWrapper>
        </StyledNavigationUserPosts>
    );
};



const StyledNavigationUserPosts = styled.div`
    border-bottom: 1px solid #dcdada;
    ${GeneralBlockWrapper}{
        margin-bottom: 0;
        border-radius: 12px 12px 0 0;
        padding: 0 20px;
    }
`


const FilterPostsTabs = styled.div`
    display: flex;
    max-width: 262px;
    padding: 18px 0 18px;
`