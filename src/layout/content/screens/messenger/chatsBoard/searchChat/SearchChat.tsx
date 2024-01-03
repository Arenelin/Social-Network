import React from 'react';
import {FlexWrapper} from '../../../../../../components/FlexWrapper';
import {ButtonSvg} from '../../../../../../components/buttons/ButtonSvg';
import {Icon} from '../../../../../../components/icon/Icon';
import {S} from './SearchChat_Styles'

export const SearchChat:React.FC = () => {
    return (
        <S.SearchChat>
            <FlexWrapper jc={'space-between'} ai={'center'}>
                <S.WrapperInputSearch>
                    <S.SearchInput placeholder={'Search'}/>
                </S.WrapperInputSearch>
                <S.WrapperButtonsForChats>
                    <FlexWrapper gap={'12px'}>
                        <ButtonSvg>
                            <Icon iconId={'callInChats'} h={'24'} viewBox={'0 0 24 24'} w={'24'}/>
                        </ButtonSvg>
                        <ButtonSvg>
                            <Icon iconId={'createNewChat'} h={'24'} viewBox={'0 0 24 24'} w={'24'}/>
                        </ButtonSvg>
                        <ButtonSvg>
                            <Icon iconId={'settingsChats'} h={'24'} viewBox={'0 0 24 24'} w={'24'}/>
                        </ButtonSvg>
                    </FlexWrapper>
                </S.WrapperButtonsForChats>
            </FlexWrapper>
        </S.SearchChat>
    );
};