import {Chats} from './chats/Chats';
import {connect} from 'react-redux';
import {AppRootReducerType} from '../../../../../redux/redux-store';
import {Dispatch} from 'redux';
import {ChatType} from '../../../../../redux/reducers/messagesReducer';

export type ChatsProps = MapStateType

type MapStateType = {
    chats: ChatType[]
}

const mapStateToProps = (state: AppRootReducerType): MapStateType => {
    return {
        chats: state.chats
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {}
}

export const ChatsContainer = connect(mapStateToProps, mapDispatchToProps)(Chats)