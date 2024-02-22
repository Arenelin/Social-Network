import React from 'react';
import styled from 'styled-components';
import {MessageType} from '../../../../../../../redux/reducers/messagesReducer';

type MessageProps = Omit<MessageType, 'id'>

export const Message: React.FC<MessageProps> = (props) => {
    const {text, authorName, authorAvatar, time} = props;
    return (
        <StylesMessage>
            <AuthorAvatar src={authorAvatar}/>
            <MessageWrapper>
                <InfoMessageWrapper>
                    <AuthorName>{authorName}</AuthorName>
                    <TimeMessage>{time}</TimeMessage>
                </InfoMessageWrapper>
                <MessageText>{text}</MessageText>
            </MessageWrapper>
        </StylesMessage>
    );
};

const StylesMessage = styled.li`
    display: flex;
    margin-bottom: 12px;
    padding-top: 6px;
`
const AuthorAvatar = styled.img`
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
`
const AuthorName = styled.span`
color: #2a5885;
    line-height: 13px;
    font-weight: 700;
    font-size: 13px;
`
const TimeMessage = styled.span`
color: #818c99;
    line-height: 17px;
    font-size: 12px;
    margin-left: 8px;
`
const MessageText = styled.p`
padding-top: 2px;
  
`
const MessageWrapper = styled.div`
    margin-left: 15px;

`
const InfoMessageWrapper = styled.div`

`

