import styled from 'styled-components';
import {
    GeneralBlockWrapper
} from '../../../../../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';

const UserPost = styled.div`

    ${GeneralBlockWrapper} {
        padding: 16px 20px 0;
    }
`

const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
`

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 12px;
`

const AuthorWrapper = styled.div``

const AuthorName = styled.div``

const PublicationDate = styled.div`
    margin-top: 2px;
`

const ActionsWrapper = styled.div`
    display: flex;
    padding: 12px 0;
    gap: 8px;
`

const Content = styled.p`
    padding-top: 8px;
`

const ButtonWrapper = styled.div`
padding: 4px 12px;
    border-radius: 32px;
    background-color: #f0f2f5;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const S = {
    UserPost,
    AuthorInfo,
    Avatar,
    AuthorWrapper,
    AuthorName,
    PublicationDate,
    ActionsWrapper,
    Content,
    ButtonWrapper,
}