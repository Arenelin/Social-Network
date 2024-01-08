import React from 'react';
import {Icon} from '../../../../../components/icon/Icon';
import {GeneralBlockWrapper} from '../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {PlaceholderNoInformation} from '../../../../../components/placeholders/noInformation/PlaceholderNoInformation';
import { S } from './UserActivity_Styles';
import {UniversalButton} from '../../../../../components/buttons/UniversalButton';

export const UserActivity:React.FC = () => {
    return (
        <S.UserActivity>
                <GeneralBlockWrapper>
                    <S.FriendsHeader>Friends</S.FriendsHeader>
                    <S.CurrentFriends>
                        <PlaceholderNoInformation>You haven't added any friends yet</PlaceholderNoInformation>
                        <UniversalButton name={'Add friends'} withIconLeft>
                            <Icon iconId={'add-friends'} h={'24'} w={'24'} viewBox={'0 0 16 16'}/>
                        </UniversalButton>
                    </S.CurrentFriends>
                </GeneralBlockWrapper>
        </S.UserActivity>
    );
};