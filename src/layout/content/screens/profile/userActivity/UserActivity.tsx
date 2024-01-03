import React from 'react';
import styled from 'styled-components';
import {SecondaryButton} from '../../../../../components/buttons/SecondaryButton';
import {Icon} from '../../../../../components/icon/Icon';
import {GeneralBlockWrapper} from '../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {PlaceholderNoInformation} from '../../../../../components/placeholders/noInformation/PlaceholderNoInformation';
import {theme} from '../../../../../styles/theme';
import {PageBlockLeft} from '../../../../../components/blockWrappers/pageBlockLeft/PageBlockLeft';
import {PageBlockRight} from '../../../../../components/blockWrappers/pageBlockRight/PageBlockRight';
import { S } from './UserActivity_Styles';

export const UserActivity:React.FC = () => {
    return (
        <S.UserActivity>
                <GeneralBlockWrapper>
                    <S.FriendsHeader>Friends</S.FriendsHeader>
                    <S.CurrentFriends>
                        <PlaceholderNoInformation>You haven't added any friends yet</PlaceholderNoInformation>
                        <SecondaryButton as={'a'} href={'#'} isActive name={'Add friends'}>
                            <Icon iconId={'add-friends'} h={'24'} w={'24'} viewBox={'0 0 16 16'}/>
                        </SecondaryButton>
                    </S.CurrentFriends>
                </GeneralBlockWrapper>
        </S.UserActivity>
    );
};