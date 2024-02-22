import {AllUserPosts} from './AllUserPosts';
import {AppRootReducerType} from '../../../../../../../../redux/redux-store';
import {connect} from 'react-redux';
import {ProfilePageType} from '../../../../../../../../redux/reducers/profileReducer';
import {Dispatch} from 'redux';

type MapStateProps = Omit<ProfilePageType, 'friends'>

export type AllUserProps = MapStateProps

const mapStateToProps = (state: AppRootReducerType): MapStateProps => {
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {}
}

export const AllUserPostsContainer =
    connect(mapStateToProps, mapDispatchToProps)(AllUserPosts)