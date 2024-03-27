import React from 'react';
import {
    GeneralBlockWrapper
} from '../../../../../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {FlexWrapper} from '../../../../../../../../../components/FlexWrapper';
import {Icon} from '../../../../../../../../../components/icon/Icon';
import {S} from './UserPost_Styles'
import {UniversalButton} from '../../../../../../../../../components/buttons/UniversalButton';
import {UserResponseType} from "../../../../../../../../../api/users-api";
import defaultPhoto from '../../../../../../../../../assets/images/github.webp'

type UserPostProps = {
    message: string
    likesCount: number
    currentUser: UserResponseType | null
}

export const UserPost: React.FC<UserPostProps> = (props) => {
    const {message, likesCount, currentUser} = props;
    const userName = currentUser !== null
        ? currentUser.fullName
        : ''

    const userPhoto = currentUser !== null && currentUser.photos.small !== null
        ? currentUser.photos.small
        : defaultPhoto
    const someFunction = () => {
    }
    return (
        <S.UserPost>
            <GeneralBlockWrapper>
                <FlexWrapper jc={'space-between'} ai={'center'}>
                    <S.AuthorInfo>
                        <S.Avatar src={userPhoto}/>
                        <S.AuthorWrapper>
                            <S.AuthorName>{userName}</S.AuthorName>
                            <S.PublicationDate>Today</S.PublicationDate>
                        </S.AuthorWrapper>
                    </S.AuthorInfo>
                    <UniversalButton callback={someFunction} type={'onlyIconPrimary'}>
                        <Icon iconId={'ellipsis'} viewBox={'0 0 24 24'} w={'24'} h={'24'}/>
                    </UniversalButton>
                </FlexWrapper>
                <S.Content>{message}</S.Content>
                <S.ActionsWrapper>
                    <UniversalButton callback={someFunction} type={'onlyIconSecondary'}>
                        <Icon iconId={'like'} viewBox={'0 0 24 24'} w={'24'} h={'24'}/>
                    </UniversalButton>
                    <UniversalButton callback={someFunction} type={'onlyIconSecondary'}>
                        <Icon iconId={'comment'} viewBox={'0 0 24 24'} w={'24'} h={'24'}/>
                    </UniversalButton>
                    <UniversalButton callback={someFunction} type={'onlyIconSecondary'}>
                        <Icon iconId={'share'} viewBox={'0 0 24 24'} w={'24'} h={'24'}/>
                    </UniversalButton>
                </S.ActionsWrapper>
            </GeneralBlockWrapper>
        </S.UserPost>

    );
};