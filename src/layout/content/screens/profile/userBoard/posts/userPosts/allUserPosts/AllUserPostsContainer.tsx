import {AllUserPosts} from './AllUserPosts';
import {AppRootReducerType} from '../../../../../../../../redux/redux-store';
import {connect} from 'react-redux';
import {ProfilePageType} from '../../../../../../../../redux/reducers/profileReducer';

type MapStateProps = Omit<ProfilePageType, 'friends'>

export type AllUserProps = MapStateProps

const mapStateToProps = (state: AppRootReducerType): MapStateProps => {
    return {
        posts: state.profilePage.posts,
    }
}
export const AllUserPostsContainer =
    connect(mapStateToProps, {})(AllUserPosts)