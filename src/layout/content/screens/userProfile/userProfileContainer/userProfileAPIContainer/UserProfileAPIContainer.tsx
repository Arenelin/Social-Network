import React from 'react';
import {UserProfileProps} from "../UserProfileContainer";
import {UserProfileFunc} from "./userProfileFunc/UserProfileFunc";
import {usersApi} from "../../../../../../api/users-api";
import {Preloader} from "../../../../../../components/Preloader/Preloader";

export class UserProfileAPIContainer extends React.Component<UserProfileProps, any> {
    componentDidMount() {
        this.props.toggleFetchStatus(true)
        usersApi.getCurrentUser(2)
            .then(res => {
                this.props.setUserProfile(res.data)
                this.props.toggleFetchStatus(false)
            })
    }
    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <UserProfileFunc userProfile={this.props.userProfile}/>
                }
            </>
        )
    }
}

