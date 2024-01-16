import styled from 'styled-components';
import {GeneralBlockWrapper} from '../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {theme} from '../../../../../styles/theme';

const UserActivity = styled.div`
    ${GeneralBlockWrapper} {
        padding: 8px 8px 10px;
    }
`

const FriendsHeader = styled.h4`
   
`
const CurrentUserFriendsBoard = styled.div`
//max-height: 256px;
//    overflow: hidden; //Высчитать корректный размер блока, на основании гридов и размера лишки. Нет смысла делать это,
    //так как с бэка будет приходить не вся пачка друзей, а только кусочек из 8 штук
`
const FriendsBoard = styled.div`

`
const PlaceholderNoFriends = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 32px;
    & a {
        box-shadow: none;

        &:hover {
            background-color: ${theme.colors.buttons.background.hover.primary};
        }
    }
`
const FriendsHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 12px 11px;

`
const NumberOfFriends = styled.span`
    color: rgb(98, 109, 122);
    font-weight: 500;
    font-size: 13px;
    display: inline-block;
    margin: 0 0 2px 6px;
`
const CurrentFriends = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: repeat(2, 96px);
`

export const S = {
    UserActivity,
    FriendsHeader,
    CurrentFriends,
    CurrentUserFriendsBoard,
    NumberOfFriends,
    FriendsHeaderWrapper,
    PlaceholderNoFriends,
    FriendsBoard
}