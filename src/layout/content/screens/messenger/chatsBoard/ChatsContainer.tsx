import {Chats} from './chats/Chats';
import {connect} from 'react-redux';
import {AppRootReducerType} from '../../../../../redux/redux-store';
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
export const ChatsContainer = connect(mapStateToProps, {})(Chats)