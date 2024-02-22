import React from 'react';
import {NavLink} from 'react-router-dom';
import {GeneralBlockWrapper} from '../../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {PageBlockLeft} from '../../../../../../components/blockWrappers/pageBlockLeft/PageBlockLeft';

export const AllUserFriends = () => {
    return (
        <div>
            <PageBlockLeft>
                <GeneralBlockWrapper>
                    All friends
                    <div>
                        <NavLink to={'find-friends'}>Find friends</NavLink>
                    </div>
                </GeneralBlockWrapper>
            </PageBlockLeft>
        </div>
    );
};

