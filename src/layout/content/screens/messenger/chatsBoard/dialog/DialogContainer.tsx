import {Dialog} from './Dialog';
import {addMessage, MessageType} from '../../../../../../redux/reducers/messagesReducer';
import {AppRootReducerType} from '../../../../../../redux/redux-store';
import {connect} from 'react-redux';

type MapStateProps = {
    messages: MessageType[],
}
type MapDispatchProps = {
    addMessage: (messageText: string) => void
}

export type DialogProps = MapStateProps & MapDispatchProps
const mapStateToProps = (state: AppRootReducerType): MapStateProps => {
    debugger
    return {
        messages: state.messages,
    }
}
export const DialogContainer =
    connect(mapStateToProps, {addMessage})(Dialog)


