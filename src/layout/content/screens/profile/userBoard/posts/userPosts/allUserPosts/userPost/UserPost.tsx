import React from 'react';
import {GeneralBlockWrapper} from '../../../../../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {FlexWrapper} from '../../../../../../../../../components/FlexWrapper';
import {Icon} from '../../../../../../../../../components/icon/Icon';
import {S} from './UserPost_Styles'
import {UniversalButton} from '../../../../../../../../../components/buttons/UniversalButton';

type UserPostProps = {
    message: string
    likesCount: number
}

export const UserPost:React.FC<UserPostProps> = (props) => {
    const {message, likesCount} = props;
    return (
        <S.UserPost>
            <GeneralBlockWrapper>
                <FlexWrapper jc={'space-between'} ai={'center'}>
                    <S.AuthorInfo>
                        <S.Avatar></S.Avatar>
                        <S.AuthorWrapper>
                            <S.AuthorName>Nikita Akmaykin</S.AuthorName>
                            <S.PublicationDate>Today</S.PublicationDate>
                        </S.AuthorWrapper>
                    </S.AuthorInfo>
                    <UniversalButton type={'onlyIcon'}>
                        <Icon iconId={'ellipsis'} viewBox={'0 0 24 24'} w={'24'} h={'24'}/>
                    </UniversalButton>
                </FlexWrapper>
                <S.Content>{message}</S.Content>
                <S.ActionsWrapper>
                    <UniversalButton type={'onlyIcon'}>
                        <Icon iconId={'like'} viewBox={'0 0 24 24'} w={'24'} h={'24'}/>
                    </UniversalButton>
                    <UniversalButton type={'onlyIcon'}>
                        <Icon iconId={'comment'} viewBox={'0 0 24 24'} w={'24'} h={'24'}/>
                    </UniversalButton>
                    <UniversalButton type={'onlyIcon'}>
                        <Icon iconId={'share'} viewBox={'0 0 24 24'} w={'24'} h={'24'}/>
                    </UniversalButton>
                </S.ActionsWrapper>
            </GeneralBlockWrapper>
        </S.UserPost>

    );
};