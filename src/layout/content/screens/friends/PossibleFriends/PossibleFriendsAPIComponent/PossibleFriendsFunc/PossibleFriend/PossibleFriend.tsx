import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";

type PossibleFriendProps = {
    id: number
    name: string
    avatar: string
    followed: boolean
    status: string
    addFriend: (userId: number) => void
    unfriend: (userId: number) => void
}

export const PossibleFriend: React.FC<PossibleFriendProps> = (props) => {
    const {
        id,
        name,
        avatar,
        followed,
        status,
        addFriend,
        unfriend,
    } = props;

    const onAddFriendHandler = () => {
        addFriend(id)
    }
    const onUnfriendHandler = () => {
        unfriend(id)
    }
    return (
        <StyledPossibleFriend>
            <UserPhotoWrapper>
                <NavLink to={`/id/${id}`}>
                    <UserPhoto src={avatar}/>
                </NavLink>
            </UserPhotoWrapper>
            <UserInfo>
                <UserDescription>
                    <NavLink to={`/id/${id}`}>
                        <UserName>{name}</UserName>
                    </NavLink>
                    <UserLabel>{status}</UserLabel>
                </UserDescription>
                {!followed
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