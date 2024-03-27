import {AllUserPosts} from './AllUserPosts';
import {AppRootReducerType} from '../../../../../../../../redux/redux-store';
import {connect} from 'react-redux';
import {PostType} from '../../../../../../../../redux/reducers/profileReducer';
import {UserResponseType} from "../../../../../../../../api/users-api";

type MapStateProps = {
    posts: PostType[]
    currentUser: UserResponseType | null
}

export type AllUserProps = MapStateProps

const mapStateToProps = (state: AppRootReducerType): MapStateProps => {
    return {
        posts: state.profilePage.posts,
        currentUser: state.auth.currentUser
    }
}
export const AllUserPostsContainer =
    connect(mapStateToProps, {})(AllUserPosts)