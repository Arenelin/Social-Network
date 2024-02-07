import React, {KeyboardEvent, useRef} from 'react';
import {PageBlockLeft} from '../../../../../../components/blockWrappers/pageBlockLeft/PageBlockLeft';
import {FlexWrapper} from '../../../../../../components/FlexWrapper';
import {GeneralBlockWrapper} from '../../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import styled from 'styled-components';
import {MessageType} from '../../../../../../redux/store';
import {Message} from './message/Message';
import {NavLink} from 'react-router-dom';

type DialogProps = {
    messages: MessageType[]
    currentDialogMessage: string
    changeMessageOfDialog: (value: string) => void
    addMessage: () => void
}

export const Dialog: React.FC<DialogProps> = (props) => {
    const {messages, currentDialogMessage, addMessage, changeMessageOfDialog} = props;
    const listMessages: JSX.Element[] = messages.map(m =>
        <Message key={m.id}
                 text={m.text}
                 authorName={m.authorName}
                 time={m.time}
                 authorAvatar={m.authorAvatar}
        />)
    const refTextArea = useRef<HTMLInputElement>(null)
    const onChangeHandler = () => {
        if (refTextArea.current !== null) {
            changeMessageOfDialog(refTextArea.current.value)
        }
    }
    const addNewMessage = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && refTextArea.current?.value.trim()) {
            addMessage()
        }
    }
    return (
        <div>
            <FlexWrapper gap={'16px'}>
                <PageBlockLeft>
                    <GeneralBlockWrapper>
                        <DialogBoard>
                            <HeaderDialogBoard>
                                <NavLink to={'/messenger'}>Back</NavLink>
                                <InterlocutorInfo>
                                    <InterlocutorName>{'Darya Akmaykina'}</InterlocutorName>
                                    <OnlineTime>{'last seen today at 07:15'}</OnlineTime>
                                </InterlocutorInfo>
                                Button
                                Button
                                Button
                            </HeaderDialogBoard>
                            <BodyDialogBoard>{listMessages}</BodyDialogBoard>
                            <MessageForm>
                                <input
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
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid grey;
`

const BodyDialogBoard = styled.ul`
    max-width: 430px;
    //width: 100%;
    padding: 0 40px;

`

const InterlocutorInfo = styled.div`
    padding: 8px 0 4px;
`

const OnlineTime = styled.div`
    color: #626d7a;
    font-size: 12px;
    line-height: 17px;
`
const InterlocutorName = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
`

const MessageForm = styled.div`

`
