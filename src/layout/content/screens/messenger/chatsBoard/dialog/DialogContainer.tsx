import React from 'react';
import {Dialog} from './Dialog';
import {EmptyObject, Store} from 'redux';
import {AllActionsType, AppRootReducerType} from '../../../../../../redux/redux-store';
import {useParams} from 'react-router-dom';
import {addMessage} from '../../../../../../redux/messagesReducer';

type DialogProps = {
    store: Store<EmptyObject & AppRootReducerType, AllActionsType>
}

type MyParams = {
    id: string
}

export const DialogContainer: React.FC<DialogProps> = (props) => {
    const {store} = props;
    const {id} = useParams<MyParams>() as MyParams

    const messages = store.getState().messages[id].addedMessages;
    const nameAuthorOfMessage = store.getState().chats.filter(u=>u.id === id)[0].authorName;
    const dispatch = store.dispatch;
    const addMessageInDialog = (messageText: string) => {
        dispatch(addMessage(id, nameAuthorOfMessage, messageText));
    }

    return <Dialog messages={messages} addMessage={addMessageInDialog}/>
};
