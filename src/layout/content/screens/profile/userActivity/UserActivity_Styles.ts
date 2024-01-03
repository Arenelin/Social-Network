import styled from 'styled-components';
import {GeneralBlockWrapper} from '../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {theme} from '../../../../../styles/theme';

const UserActivity = styled.div`
    ${GeneralBlockWrapper} {
        padding: 8px;
    }
`

const FriendsHeader = styled.h4`
    padding: 15px 12px 9px;
`

const CurrentFriends = styled.div`
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

export const S = {
    UserActivity,
    FriendsHeader,
    CurrentFriends
}