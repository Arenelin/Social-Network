import React from 'react';
import {GeneralBlockWrapper} from '../../../../../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {FlexWrapper} from '../../../../../../../../../components/FlexWrapper';
import {ButtonSvg} from '../../../../../../../../../components/buttons/ButtonSvg';
import {Icon} from '../../../../../../../../../components/icon/Icon';
import {S} from './UserPost_Styles'

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
                    <ButtonSvg>
                        <Icon iconId={'ellipsis'} viewBox={'0 0 24 24'} w={'24'} h={'24'}/>
                    </ButtonSvg>
                </FlexWrapper>
                <S.Content>{message}</S.Content>
                <S.ActionsWrapper>
                    <ButtonSvg>
                        <S.ButtonWrapper>
                            <Icon iconId={'like'} viewBox={'0 0 24 24'} w={'24'} h={'24'}/>
                        </S.ButtonWrapper>
                    </ButtonSvg> <ButtonSvg>
                        <S.ButtonWrapper>
                            <Icon iconId={'comment'} viewBox={'0 0 24 24'} w={'24'} h={'24'}/>
                        </S.ButtonWrapper>
                    </ButtonSvg> <ButtonSvg>
                        <S.ButtonWrapper>
                            <Icon iconId={'share'} viewBox={'0 0 24 24'} w={'24'} h={'24'}/>
                        </S.ButtonWrapper>
                    </ButtonSvg>
                </S.ActionsWrapper>
            </GeneralBlockWrapper>
        </S.UserPost>

    );
};