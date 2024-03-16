import {UserResponseType} from "../../../../../../../api/users-api";
import {Preloader} from "../../../../../../../components/Preloader/Preloader";
import React from "react";

type PossibleFriendsProfileProps = {
    userProfile: UserResponseType | null
};
export const UserProfileFunc: React.FC<PossibleFriendsProfileProps> = (props) => {
    const {userProfile} = props
    if (!userProfile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                {userProfile.fullName}
                <img src={userProfile.photos.large} alt='User photo'/>
            </div>
        </div>
    );
};