import React from 'react';
import {Dialog} from './Dialog';
import {useParams} from 'react-router-dom';
import {addMessage} from '../../../../../../redux/messagesReducer';
import {StoreContext} from '../../../../../../context/StoreContext';

type DialogProps = {}

type MyParams = {
    id: string
}

export const DialogContainer: React.FC<DialogProps> = () => {
    const {id} = useParams<MyParams>() as MyParams

    return (
        <StoreContext.Consumer>
            {store => {
                const nameAuthorOfMessage = store.getState().chats.filter(u => u.id === id)[0].authorName;
                const dispatch = store.dispatch;
                const messages = store.getState().messages[id].addedMessages;
                const addMessageInDialog = (messageText: string) => {
                    dispatch(addMessage(id, nameAuthorOfMessage, messageText));
                }

                return <Dialog messages={messages} addMessage={addMessageInDialog}/>
            }}
        </StoreContext.Consumer>
    )
};
