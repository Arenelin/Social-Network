import React from 'react';
import {MessageType} from '../../../../../../../redux/store';
import styled from 'styled-components';

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
`
const AuthorAvatar = styled.img`
width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
`
const AuthorName = styled.span`

`
const TimeMessage = styled.span`

`
const MessageText = styled.p`

`
const MessageWrapper = styled.div`

`
const InfoMessageWrapper = styled.div`

`

