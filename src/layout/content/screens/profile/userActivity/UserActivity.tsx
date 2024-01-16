import React from 'react';
import {Icon} from '../../../../../components/icon/Icon';
import {GeneralBlockWrapper} from '../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {PlaceholderNoInformation} from '../../../../../components/placeholders/noInformation/PlaceholderNoInformation';
import {S} from './UserActivity_Styles';
import {UniversalButton} from '../../../../../components/buttons/UniversalButton';
import {FriendType} from '../../../../../redux/state';
import {Friend} from './Friend/Friend';
import {NavLink} from 'react-router-dom';

type UserActivityProps = {
    friends: FriendType[]
}

export const UserActivity: React.FC<UserActivityProps> = (props) => {
    const {friends} = props;

    const someFunction = () => {}
    const friendsList = friends.map(f =>
        <Friend
            key={f.id}
            name={f.firstName}
            imgSrc={f.avatar}
        />)

    return (
        <S.UserActivity>
            <S.CurrentUserFriendsBoard>
                <GeneralBlockWrapper>
                    <NavLink to={'/friends'}>
                        <S.FriendsHeaderWrapper>
                            <S.FriendsHeader>Friends</S.FriendsHeader>
                            <S.NumberOfFriends>{friendsList.length > 0 ? friendsList.length : 0}</S.NumberOfFriends>
                        </S.FriendsHeaderWrapper>
                    </NavLink>
                    <S.FriendsBoard>
                        {friendsList.length > 0
                            ? <S.CurrentFriends>
                                {friendsList}
                            </S.CurrentFriends>
                            : <S.PlaceholderNoFriends>
                                <PlaceholderNoInformation>You haven't added any friends yet</PlaceholderNoInformation>
                                <UniversalButton callback={someFunction} name={'Add friends'} withIconLeft>
                                    <Icon iconId={'add-friends'} h={'24'} w={'24'} viewBox={'0 0 16 16'}/>
                                </UniversalButton>
                            </S.PlaceholderNoFriends>
                        }
                    </S.FriendsBoard>
                </GeneralBlockWrapper>
            </S.CurrentUserFriendsBoard>
        </S.UserActivity>
    );
};