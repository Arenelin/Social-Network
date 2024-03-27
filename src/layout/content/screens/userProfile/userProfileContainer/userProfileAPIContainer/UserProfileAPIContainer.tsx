import React from 'react';
import {UserProfileProps} from "../UserProfileContainer";
import {usersApi} from "../../../../../../api/users-api";
import {Profile} from "../../../profile/Profile";

type UserProfileAPIType = UserProfileProps & { userId?: string }

export class UserProfileAPIContainer extends React.Component<UserProfileAPIType, any> {
    componentDidMount() {
        this.props.toggleFetchStatus(true)
        let userId = this.props.userId
            ? +this.props.userId
            : 30652 // Мой id
        usersApi.getCurrentUser(userId)
            .then(res => {
                this.props.setUserProfile(res.data)
                this.props.toggleFetchStatus(false)
            })
    }

    render() {
        return <Profile userProfile={this.props.userProfile}/>

    }
}
