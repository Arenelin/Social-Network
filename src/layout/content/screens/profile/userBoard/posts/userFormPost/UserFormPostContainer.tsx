import {addPost} from '../../../../../../../redux/reducers/profileReducer';
import {UserFormPost} from './UserFormPost';
import {AppRootReducerType} from '../../../../../../../redux/redux-store';
import {connect} from 'react-redux';

export type UserFormPostProps = MapDispatchType

type MapDispatchType = {
    addPost: (value: string) => void
}
const mapStateToProps = (state: AppRootReducerType) => {
    return {name:'oleg', age:20}
}
export const UserFormPostContainer =
    connect(mapStateToProps, {addPost})(UserFormPost)