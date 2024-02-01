import React from 'react';
import {FlexWrapper} from '../../../../../../../components/FlexWrapper';
import {NavLink} from 'react-router-dom';
import {S} from './Chat_Styles'

type ChatProps = {
    id: number
    lastMessage: string
    authorName: string
    date: string
}

export const Chat: React.FC<ChatProps> = (props) => {
    const {id, lastMessage, authorName, date} = props;
    return (
        <S.Chat>
            <NavLink to={`/messenger/${id}`}>
                <FlexWrapper ai={'center'}>
                    <S.AvatarOfInterlocutor/>
                    <S.BriefInfoAboutChat>
                        <S.AuthorAndDateWrapper>
                            <S.InterlocutorName>{authorName}</S.InterlocutorName>
                            <S.MessageDate>{date}</S.MessageDate>
                        </S.AuthorAndDateWrapper>
                        <S.LastMessage>
                            <S.UserAvatar/>
                            <S.Message>{lastMessage}</S.Message>
                        </S.LastMessage>
                    </S.BriefInfoAboutChat>
                </FlexWrapper>
            </NavLink>
        </S.Chat>
    );
};