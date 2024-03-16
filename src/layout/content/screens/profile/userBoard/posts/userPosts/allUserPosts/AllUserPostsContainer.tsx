import {AllUserPosts} from './AllUserPosts';
import {AppRootReducerType} from '../../../../../../../../redux/redux-store';
import {connect} from 'react-redux';
import {PostType} from '../../../../../../../../redux/reducers/profileReducer';

type MapStateProps = {
    posts: PostType[]
}

export type AllUserProps = MapStateProps

const mapStateToProps = (state: AppRootReducerType): MapStateProps => {
    return {
        posts: state.profilePage.posts,
    }
}
export const AllUserPostsContainer =
    connect(mapStateToProps, {})(AllUserPosts)