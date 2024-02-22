import React from 'react';
import {PageBlockLeft} from '../../../../../components/blockWrappers/pageBlockLeft/PageBlockLeft';
import {GeneralBlockWrapper} from '../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {PossibleFriendsProps} from '../PossibleFriendsContainer';

export const PossibleFriends: React.FC<PossibleFriendsProps> = (props) => {
    const {possibleFriends, addFriend, unfriend, removeUserFromList} = props;
    return (
        <div>
            <PageBlockLeft>
                <GeneralBlockWrapper>
                    fr
                </GeneralBlockWrapper>
            </PageBlockLeft>
        </div>

    );
};

