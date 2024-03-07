import React from 'react';
import {usersApi} from '../../../../../../api/users-api';
import {PossibleFriendsProps} from '../../PossibleFriendsContainer';
import {PossibleFriendsFunc} from './PossibleFriendsFunc/PossibleFriendsFunc';
import {Preloader} from '../../../../../../components/Preloader/Preloader';

export class PossibleFriendsAPIComponent extends React.Component<PossibleFriendsProps, any> {
    componentDidMount() {
        this.props.toggleFetchStatus(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(res => {
                this.props.setPossibleFriends(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
                this.props.toggleFetchStatus(false)
            })
    }

    onPageChanged = (currentPage: number) => {
        this.props.toggleFetchStatus(true)
        this.props.setCurrentPage(currentPage)
        usersApi.getUsers(currentPage, this.props.pageSize)
            .then(res => {
                this.props.setPossibleFriends(res.data.items)
                this.props.toggleFetchStatus(false)
            })

    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <PossibleFriendsFunc totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                                     currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                                     possibleFriends={this.props.possibleFriends} addFriend={this.props.addFriend}
                                     unfriend={this.props.unfriend}/>
            </>

        )
    }
}