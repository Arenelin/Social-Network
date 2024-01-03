import React from 'react';
import {SecondaryButton} from '../../../../../../../../components/buttons/SecondaryButton';
import {GeneralBlockWrapper} from '../../../../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {FlexWrapper} from '../../../../../../../../components/FlexWrapper';
import {ButtonSvg} from '../../../../../../../../components/buttons/ButtonSvg';
import {Icon} from '../../../../../../../../components/icon/Icon';
import {S} from './NavigationUserPosts_Styles'

export const NavigationUserPosts: React.FC = () => {
    return (
        <S.NavigationUserPosts>
            <GeneralBlockWrapper>
                <FlexWrapper jc={'space-between'}>
                    <S.FilterPostsTabs>
                        <SecondaryButton as={'a'} href={'#'} isActive name={'All posts'}/>
                        <SecondaryButton as={'a'} href={'#'} name={'My posts'}/>
                        <SecondaryButton as={'a'} href={'#'} name={'Post archive'}/>
                    </S.FilterPostsTabs>
                    <ButtonSvg>
                        <Icon iconId={'search'} w={'20'} h={'20'} viewBox={'0 0 20 20'}/>
                    </ButtonSvg>
                </FlexWrapper>
            </GeneralBlockWrapper>
        </S.NavigationUserPosts>
    );
};