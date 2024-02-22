import {addPost} from '../../../../../../../redux/reducers/profileReducer';
import {UserFormPost} from './UserFormPost';
import {AppRootReducerType} from '../../../../../../../redux/redux-store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

export type UserFormPostProps = MapDispatchType

type MapDispatchType = {
    addNewPost: (value: string) => void
}
const mapStateToProps = (state: AppRootReducerType) => {
    return {}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        addNewPost: (value: string) => dispatch(addPost(value))
    }
}

export const UserFormPostContainer =
    connect(mapStateToProps, mapDispatchToProps)(UserFormPost)