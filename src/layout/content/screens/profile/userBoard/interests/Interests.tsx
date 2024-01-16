import React from 'react';
import {FlexWrapper} from '../../../../../../components/FlexWrapper';
import {Icon} from '../../../../../../components/icon/Icon';
import {PlaceholderNoInformation} from '../../../../../../components/placeholders/noInformation/PlaceholderNoInformation';
import {GeneralBlockWrapper} from '../../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import { S } from './Interests_Styles';
import {UniversalButton} from '../../../../../../components/buttons/UniversalButton';

export const Interests:React.FC = () => {
    const someFunction = () => {}
    return (
        <S.Interests>
            <GeneralBlockWrapper>
                <S.InterestsTabs>
                    <FlexWrapper gap={'6px'} >
                        <UniversalButton callback={someFunction} name={'Photos'} withIconLeft type={'tab'} isActive>
                            <Icon iconId={'tab-photos'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </UniversalButton>
                        <UniversalButton callback={someFunction} name={'Clips'} withIconLeft type={'tab'}>
                            <Icon iconId={'tab-clips'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </UniversalButton>
                        <UniversalButton callback={someFunction} name={'Music'} withIconLeft type={'tab'}>
                            <Icon iconId={'tab-music'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </UniversalButton>
                        <UniversalButton callback={someFunction} name={'Articles'} withIconLeft type={'tab'}>
                            <Icon iconId={'tab-articles'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </UniversalButton>
                        <UniversalButton callback={someFunction} name={'Albums'} withIconLeft type={'tab'}>
                            <Icon iconId={'tab-albums'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </UniversalButton>
                    </FlexWrapper>
                </S.InterestsTabs>
                <S.CurrentInterestInfo>
                    <PlaceholderNoInformation>You haven't added any photos yet</PlaceholderNoInformation>
                    <UniversalButton callback={someFunction} name={'Upload photo'}/>
                </S.CurrentInterestInfo>
            </GeneralBlockWrapper>
        </S.Interests>
    );
};