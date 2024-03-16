import React from 'react';
import {PossibleFriendsProfileFunc} from "./PossibleFriendsProfileFunc/PossibleFriendsProfileFunc";
import {usersApi} from "../../../../../../../../../api/users-api";
import {PossibleFriendsProfileProps} from "../PossibleFriendProfileContainer";
import {Preloader} from "../../../../../../../../../components/Preloader/Preloader";

export class PossibleFriendProfileAPIContainer extends React.Component<PossibleFriendsProfileProps, any> {
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
                    : <PossibleFriendsProfileFunc isFetching={this.props.isFetching} userProfile={this.props.userProfile}/>
                }
            </>


        )
    }
}

