import React from 'react';
import {FlexWrapper} from '../../../../../../components/FlexWrapper';
import {Icon} from '../../../../../../components/icon/Icon';
import {S} from './SearchChat_Styles'
import {UniversalButton} from '../../../../../../components/buttons/UniversalButton';

export const SearchChat: React.FC = () => {
    const someFunction = () => {}

    return (
        <S.SearchChat>
            <FlexWrapper jc={'space-between'} ai={'center'}>
                <S.WrapperInputSearch>
                    <S.SearchInput placeholder={'Search'}/>
                </S.WrapperInputSearch>
                <S.WrapperButtonsForChats>
                    <FlexWrapper gap={'12px'}>
                        <UniversalButton callback={someFunction} type={'onlyIconPrimary'}>
                            <Icon iconId={'callInChats'} h={'24'} viewBox={'0 0 24 24'} w={'24'}/>
                        </UniversalButton>
                        <UniversalButton callback={someFunction} type={'onlyIconPrimary'}>
                            <Icon iconId={'createNewChat'} h={'24'} viewBox={'0 0 24 24'} w={'24'}/>
                        </UniversalButton>
                        <UniversalButton callback={someFunction} type={'onlyIconPrimary'}>
                            <Icon iconId={'settingsChats'} h={'24'} viewBox={'0 0 24 24'} w={'24'}/>
                        </UniversalButton>
                    </FlexWrapper>
                </S.WrapperButtonsForChats>
            </FlexWrapper>
        </S.SearchChat>
    );
};