import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../../../../components/FlexWrapper';
import {SecondaryButton} from '../../../../../../components/buttons/SecondaryButton';
import {Icon} from '../../../../../../components/icon/Icon';
import {GeneralButton} from '../../../../../../components/buttons/GeneralButton';
import {PlaceholderNoInformation} from '../../../../../../components/placeholders/noInformation/PlaceholderNoInformation';
import {GeneralBlockWrapper} from '../../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import { S } from './Interests_Styles';

export const Interests:React.FC = () => {
    return (
        <S.Interests>
            <GeneralBlockWrapper>
                <S.InterestsTabs>
                    <FlexWrapper gap={'6px'} >
                        <SecondaryButton name={'Photos'} >
                            <Icon iconId={'tab-photos'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </SecondaryButton>
                        <SecondaryButton name={'Clips'}>
                            <Icon iconId={'tab-clips'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </SecondaryButton>
                        <SecondaryButton name={'Music'} isActive>
                            <Icon iconId={'tab-music'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </SecondaryButton>
                        <SecondaryButton name={'Articles'}>
                            <Icon iconId={'tab-articles'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </SecondaryButton>
                        <SecondaryButton name={'Albums'}>
                            <Icon iconId={'tab-albums'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </SecondaryButton>
                    </FlexWrapper>
                </S.InterestsTabs>
                <S.CurrentInterestInfo>
                    <PlaceholderNoInformation>You haven't added any photos yet</PlaceholderNoInformation>
                    <GeneralButton primary name={'Upload photo'}/>
                </S.CurrentInterestInfo>
            </GeneralBlockWrapper>

        </S.Interests>
    );
};