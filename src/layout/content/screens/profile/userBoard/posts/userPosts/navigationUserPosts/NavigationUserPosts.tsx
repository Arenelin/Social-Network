import React from 'react';
import {GeneralBlockWrapper} from '../../../../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {FlexWrapper} from '../../../../../../../../components/FlexWrapper';
import {Icon} from '../../../../../../../../components/icon/Icon';
import {S} from './NavigationUserPosts_Styles'
import {UniversalButton} from '../../../../../../../../components/buttons/UniversalButton';

export const NavigationUserPosts: React.FC = () => {
    return (
        <S.NavigationUserPosts>
            <GeneralBlockWrapper>
                <FlexWrapper jc={'space-between'}>
                    <S.FilterPostsTabs>
                        <UniversalButton name={'All posts'} type={'tab'} isActive/>
                        <UniversalButton name={'My posts'} type={'tab'}/>
                        <UniversalButton name={'Post archive'} type={'tab'}/>
                    </S.FilterPostsTabs>
                    <UniversalButton type={'onlyIconPrimary'}>
                        <Icon iconId={'search'} w={'20'} h={'20'} viewBox={'0 0 20 20'}/>
                    </UniversalButton>
                </FlexWrapper>
            </GeneralBlockWrapper>
        </S.NavigationUserPosts>
    );
};