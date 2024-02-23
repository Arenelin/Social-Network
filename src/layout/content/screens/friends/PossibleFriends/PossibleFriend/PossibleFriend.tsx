import React from 'react';
import styled from 'styled-components';
import {PossibleFriendsType} from '../../../../../../redux/reducers/possibleFriendsReducer';

type PossibleFriendProps = PossibleFriendsType & {
    addFriend: (userId: string) => void
    unfriend: (userId: string) => void
    removeUserFromList: (userId: string) => void
}

export const PossibleFriend: React.FC<PossibleFriendProps> = (props) => {
    const {
        id,
        firstName,
        lastName,
        avatar,
        mutualFriends,
        isAddedFriend,
        addFriend,
        unfriend,
        removeUserFromList
    } = props;

    const onAddFriendHandler = () => {
        addFriend(id)
    }

    const onUnfriendHandler = () => {
        unfriend(id)
    }

    const onRemoveUserFromList = () => {
        removeUserFromList(id)
    }

    return (
        <StyledPossibleFriend>
            <UserPhotoWrapper>
                <UserPhoto src={avatar}/>
                <ButtonRemoveUser onClick={onRemoveUserFromList}>x</ButtonRemoveUser>
            </UserPhotoWrapper>
            <UserInfo>
                <UserDescription>
                    <UserName>{firstName} {lastName}</UserName>
                    <UserLabel>{mutualFriends.length === 0
                        ? 'no mutual friends'
                        : `${mutualFriends.length} mutual friends`}</UserLabel>
                </UserDescription>
                {!isAddedFriend
                    ? <UserButton onClick={onAddFriendHandler}>add</UserButton>
                    : <UserButton onClick={onUnfriendHandler}>remove</UserButton>}
            </UserInfo>
        </StyledPossibleFriend>
    );
};

const StyledPossibleFriend = styled.div`
    max-width: 160px;
`
const UserPhoto = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 3px;
    object-fit: cover;
`
const UserInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0 21px;
`
const UserDescription = styled.div``
const UserName = styled.div`
    padding-bottom: 4px;
`
const UserLabel = styled.span``
const UserButton = styled.button``

const UserPhotoWrapper = styled.div`
    position: relative;
`

const ButtonRemoveUser = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgb(34, 34, 34);
    color: white;
    padding: 0 6px 2px 6px;
    border-radius: 0 3px 0 3px;
    display: flex;
    align-items: center;
    justify-content: center;
`