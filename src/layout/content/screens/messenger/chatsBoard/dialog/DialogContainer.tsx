import {Dialog} from './Dialog';
import {addMessage, MessageType} from '../../../../../../redux/reducers/messagesReducer';
import {AppRootReducerType} from '../../../../../../redux/redux-store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

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

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => {
    return {
        addMessage: (messageText: string) =>
            dispatch(addMessage(messageText))
    }
}
export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)


