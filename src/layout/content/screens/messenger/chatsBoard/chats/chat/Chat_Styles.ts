import styled from 'styled-components';

const Chat = styled.div`
    padding-left: 20px;
    &:hover {
        background-color: rgba(174, 183, 194, 0.12);
        cursor: pointer;
    }
`

const AvatarOfInterlocutor = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fd8686;
    margin: 11px 14px 7px 0;
`

const BriefInfoAboutChat = styled.div`
    padding: 10px 15px 10px 0;
    flex: 1 1 auto;
`

const AuthorAndDateWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LastMessage = styled.div`
    display: flex;
    align-items: center;
`

const Message = styled.span``

const InterlocutorName = styled.span`
    font-size: 13px;
    font-weight: 600;
    display: inline-block;
    margin: 3px 0 7px;
`

const MessageDate = styled.span`
    font-size: 13px;
    color: #9f9c9c;
`

const UserAvatar = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #d9d6d6;
    margin-right: 12px;
`

export const S = {
    Chat,
    AvatarOfInterlocutor,
    BriefInfoAboutChat,
    AuthorAndDateWrapper,
    LastMessage,
    Message,
    InterlocutorName,
    MessageDate,
    UserAvatar
}