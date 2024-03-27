import React from 'react';
import {useParams} from "react-router-dom";
import {UserProfileProps} from "../UserProfileContainer";
import {UserProfileAPIContainer} from "../userProfileAPIContainer/UserProfileAPIContainer";

type ParamsType = {
    userId: string
}

export const WithUrlDataContainer: React.FC<UserProfileProps> = (props) => {
    const {userProfile, isFetching, setUserProfile, toggleFetchStatus} = props;
    const paramsData = useParams<ParamsType>()
    return <UserProfileAPIContainer
        userProfile={userProfile}
        isFetching={isFetching}
        userId={paramsData.userId}
        setUserProfile={setUserProfile}
        toggleFetchStatus={toggleFetchStatus}
    />
};
