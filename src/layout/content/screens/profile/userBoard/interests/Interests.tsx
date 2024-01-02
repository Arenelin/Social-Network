import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../../../../components/FlexWrapper';
import {TabButton} from '../../../../../../components/buttons/TabButton';
import {Icon} from '../../../../../../components/icon/Icon';
import {GeneralButton} from '../../../../../../components/buttons/GeneralButton';
import {PlaceholderNoInformation} from '../../../../../../components/placeholders/noInformation/PlaceholderNoInformation';
import {GeneralBlockWrapper} from '../../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';

export const Interests = () => {
    return (
        <StyledInterests>
            <GeneralBlockWrapper>
                <InterestsTabs>
                    <FlexWrapper gap={'6px'} >
                        <TabButton name={'Photos'} >
                            <Icon iconId={'tab-photos'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </TabButton>
                        <TabButton name={'Clips'}>
                            <Icon iconId={'tab-clips'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </TabButton>
                        <TabButton name={'Music'} isActive>
                            <Icon iconId={'tab-music'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </TabButton>
                        <TabButton name={'Articles'}>
                            <Icon iconId={'tab-articles'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </TabButton>
                        <TabButton name={'Albums'}>
                            <Icon iconId={'tab-albums'} w={'20'} h={'20'} viewBox={'0 0 24 24'}/>
                        </TabButton>
                    </FlexWrapper>
                </InterestsTabs>
                <CurrentInterestInfo>
                    <PlaceholderNoInformation>You haven't added any photos yet</PlaceholderNoInformation>
                    <GeneralButton primary name={'Upload photo'}/>
                </CurrentInterestInfo>
            </GeneralBlockWrapper>

        </StyledInterests>
    );
};

const StyledInterests = styled.div`
    ${GeneralBlockWrapper}{
        padding: 8px;
    }
`
const InterestsTabs = styled.div`
    margin: 8px 0 8px 12px;
`

const CurrentInterestInfo = styled.div`
    padding: 56px 44px 60px 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
