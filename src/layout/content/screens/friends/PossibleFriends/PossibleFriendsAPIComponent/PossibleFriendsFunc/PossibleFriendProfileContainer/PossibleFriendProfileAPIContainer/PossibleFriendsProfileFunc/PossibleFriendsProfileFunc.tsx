import * as React from 'react';
import {UserResponseType} from "../../../../../../../../../../api/users-api";
import {Preloader} from "../../../../../../../../../../components/Preloader/Preloader";

type PossibleFriendsProfileProps = {
    userProfile: UserResponseType | null
    isFetching: boolean
};
export const PossibleFriendsProfileFunc: React.FC<PossibleFriendsProfileProps> = (props) => {
    const {userProfile, isFetching} = props
    if (!userProfile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                {userProfile.fullName}
                <img src={userProfile.photos.large}/>
            </div>
        </div>
    );
};