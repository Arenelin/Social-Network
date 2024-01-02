import React from 'react';
import styled from 'styled-components';
import {TabButton} from '../../../../../components/buttons/TabButton';
import {Icon} from '../../../../../components/icon/Icon';
import {GeneralBlockWrapper} from '../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {PlaceholderNoInformation} from '../../../../../components/placeholders/noInformation/PlaceholderNoInformation';
import {theme} from '../../../../../styles/theme';
import {PageBlockLeft} from '../../../../../components/blockWrappers/pageBlockLeft/PageBlockLeft';
import {PageBlockRight} from '../../../../../components/blockWrappers/pageBlockRight/PageBlockRight';

export const UserActivity = () => {
    return (
        <StyledUserActivity>
                <GeneralBlockWrapper>
                    <FriendsHeader>Friends</FriendsHeader>
                    <CurrentFriends>
                        <PlaceholderNoInformation>You haven't added any friends yet</PlaceholderNoInformation>
                        <TabButton as={'a'} href={'#'} isActive name={'Add friends'}>
                            <Icon iconId={'add-friends'} h={'24'} w={'24'} viewBox={'0 0 16 16'}/>
                        </TabButton>
                    </CurrentFriends>
                </GeneralBlockWrapper>
        </StyledUserActivity>
    );
};

const StyledUserActivity = styled.div`
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