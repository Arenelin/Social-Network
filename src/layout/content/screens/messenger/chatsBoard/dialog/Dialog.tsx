import React, {KeyboardEvent, useRef} from 'react';
import {PageBlockLeft} from '../../../../../../components/blockWrappers/pageBlockLeft/PageBlockLeft';
import {PageBlockRight} from '../../../../../../components/blockWrappers/pageBlockRight/PageBlockRight';
import {FilterChats} from '../../filterChats/FilterChats';
import {FlexWrapper} from '../../../../../../components/FlexWrapper';
import {GeneralBlockWrapper} from '../../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import styled from 'styled-components';
import {AppRootAction, MessageType} from '../../../../../../redux/store';
import {Message} from './message/Message';
import {addMessage, changeDialogMessage} from '../../../../../../redux/messengerReducer';

type DialogProps = {
    messages: MessageType[]
    currentDialogMessage: string
    dispatch: (action: AppRootAction) => void
}

export const Dialog: React.FC<DialogProps> = (props) => {
    const {messages, currentDialogMessage, dispatch} = props;
    const listMessages: JSX.Element[] = messages.map(m =>
        <Message key={m.id}
                 text={m.text}
                 authorName={m.authorName}
                 time={m.time}
                 authorAvatar={m.authorAvatar}
        />)
    const refTextArea = useRef<HTMLTextAreaElement>(null)
    const onChangeHandler = () => {
        if (refTextArea.current !== null) {
            dispatch(changeDialogMessage(refTextArea.current.value))
        }
    }
    const addNewMessage = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && refTextArea.current?.value.trim()) {
            dispatch(addMessage())
        }
    }
    return (
        <div>
            <FlexWrapper gap={'16px'}>
                <PageBlockLeft>
                    <GeneralBlockWrapper>
                        <DialogBoard>
                            <HeaderDialogBoard>Darya Akmaykina</HeaderDialogBoard>
                            <BodyDialogBoard>{listMessages}</BodyDialogBoard>
                            <MessageForm>
                                <textarea
                                    value={currentDialogMessage}
                                    ref={refTextArea}
                                    onChange={onChangeHandler}
                                    onKeyPress={addNewMessage}
                                    autoFocus
                                    placeholder={'Write a message...'}
                                />
                            </MessageForm>
                        </DialogBoard>
                    </GeneralBlockWrapper>
                </PageBlockLeft>
                <PageBlockRight>
                    <FilterChats/>
                </PageBlockRight>
            </FlexWrapper>
        </div>
    );
};

const DialogBoard = styled.div`
    min-height: calc(100vh - 82px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const HeaderDialogBoard = styled.div`

`
const BodyDialogBoard = styled.div``

const MessageForm = styled.form`

`
// <NavLink to={'/messenger'}>Back</NavLink>