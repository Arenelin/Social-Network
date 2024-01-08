import React from 'react';
import {FlexWrapper} from '../../../../../../components/FlexWrapper';
import {Icon} from '../../../../../../components/icon/Icon';
import {PlaceholderNoInformation} from '../../../../../../components/placeholders/noInformation/PlaceholderNoInformation';
import {GeneralBlockWrapper} from '../../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import { S } from './Interests_Styles';
import {UniversalButton} from '../../../../../../components/buttons/UniversalButton';

export const Interests:React.FC = () => {
    return (
        <S.Interests>
            <GeneralBlockWrapper>
                <S.InterestsTabs>
                    <FlexWrapper gap={'6px'} >
                        <UniversalButton name={'Photos'} withIconLeft type={'tab'}>
                            <Icon iconId={'tab-photos'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </UniversalButton>
                        <UniversalButton name={'Clips'} withIconLeft type={'tab'}>
                            <Icon iconId={'tab-clips'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </UniversalButton>
                        <UniversalButton name={'Music'} withIconLeft type={'tab'}>
                            <Icon iconId={'tab-music'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </UniversalButton>
                        <UniversalButton name={'Articles'} withIconLeft type={'tab'}>
                            <Icon iconId={'tab-articles'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </UniversalButton>
                        <UniversalButton name={'Albums'} withIconLeft type={'tab'}>
                            <Icon iconId={'tab-albums'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </UniversalButton>
                    </FlexWrapper>
                </S.InterestsTabs>
                <S.CurrentInterestInfo>
                    <PlaceholderNoInformation>You haven't added any photos yet</PlaceholderNoInformation>
                    <UniversalButton name={'Upload photo'}/>
                </S.CurrentInterestInfo>
            </GeneralBlockWrapper>

        </S.Interests>
    );
};