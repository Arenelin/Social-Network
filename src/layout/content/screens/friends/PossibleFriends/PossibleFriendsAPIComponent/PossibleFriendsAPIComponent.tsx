import React from 'react';
import {usersApi} from '../../../../../../api/users-api';
import {PossibleFriendsProps} from '../../PossibleFriendsContainer';
import {PossibleFriendsFunc} from './PossibleFriendsFunc/PossibleFriendsFunc';

export class PossibleFriendsAPIComponent extends React.Component<PossibleFriendsProps, any> {
    componentDidMount() {
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(res => {
                this.props.setPossibleFriends(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
            })
    }
    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        usersApi.getUsers(currentPage, this.props.pageSize)
            .then(res => this.props.setPossibleFriends(res.data.items))
    }
    render() {
        return (
            <PossibleFriendsFunc totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                             possibleFriends={this.props.possibleFriends} addFriend={this.props.addFriend}
                             unfriend={this.props.unfriend}/>
        )
    }
}