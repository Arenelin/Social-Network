import React from 'react';
import {AppRootAction} from '../../../../../../redux/store';
import {addMessage, changeDialogMessage} from '../../../../../../redux/messengerReducer';
import {Dialog} from './Dialog';
import {EmptyObject, Store} from 'redux';
import {AppRootReducerType} from '../../../../../../redux/redux-store';

type DialogProps = {
    store: Store<EmptyObject & AppRootReducerType, AppRootAction>
}

export const DialogContainer: React.FC<DialogProps> = (props) => {
    const {store} = props;

    const messages = store.getState().messengerPage.messages.addedMessages
    const currentDialogMessage = store.getState().messengerPage.messages.currentDialogMessage
    const dispatch = store.dispatch

    const changeMessageOfDialog = (value: string) => {
        dispatch(changeDialogMessage(value))
    }
    const addMessageInDialog = () => {
        dispatch(addMessage())
    }

    return (
        <Dialog messages={messages}
                currentDialogMessage={currentDialogMessage}
                changeMessageOfDialog={changeMessageOfDialog}
                addMessage={addMessageInDialog}
        />
    );
};
