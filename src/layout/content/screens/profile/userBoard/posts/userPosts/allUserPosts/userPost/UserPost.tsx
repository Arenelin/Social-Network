import React from 'react';
import {GeneralBlockWrapper} from '../../../../../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import styled from 'styled-components';
import {FlexWrapper} from '../../../../../../../../../components/FlexWrapper';
import {ButtonSvg} from '../../../../../../../../../components/buttons/ButtonSvg';
import {Icon} from '../../../../../../../../../components/icon/Icon';

type UserPostPropsType = {
    message: string
    likesCount: number
}

export const UserPost = (props: UserPostPropsType) => {
    return (
        <StyledUserPost>
            <GeneralBlockWrapper>
                <FlexWrapper jc={'space-between'} ai={'center'}>
                    <AuthorInfo>
                        <Avatar></Avatar>
                        <AuthorWrapper>
                            <AuthorName>Nikita Akmaykin</AuthorName>
                            <PublicationDate>Today</PublicationDate>
                        </AuthorWrapper>
                    </AuthorInfo>
                    <ButtonSvg>
                        <Icon iconId={'ellipsis'} viewBox={'0 0 24 24'} w={'24'} h={'24'}/>
                    </ButtonSvg>
                </FlexWrapper>
                <Content>{props.message}</Content>
                <ActionsWrapper>
                    <ButtonSvg>
                        <ButtonWrapper>
                            <Icon iconId={'like'} viewBox={'0 0 24 24'} w={'24'} h={'24'}/>
                        </ButtonWrapper>
                    </ButtonSvg> <ButtonSvg>
                        <ButtonWrapper>
                            <Icon iconId={'comment'} viewBox={'0 0 24 24'} w={'24'} h={'24'}/>
                        </ButtonWrapper>
                    </ButtonSvg> <ButtonSvg>
                        <ButtonWrapper>
                            <Icon iconId={'share'} viewBox={'0 0 24 24'} w={'24'} h={'24'}/>
                        </ButtonWrapper>
                    </ButtonSvg>
                </ActionsWrapper>
            </GeneralBlockWrapper>
        </StyledUserPost>

    );
};

const StyledUserPost = styled.div`

    ${GeneralBlockWrapper} {
        padding: 16px 20px 0;
    }
`

const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
`
const Avatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #d7d5d5;
    margin-right: 12px;
`
const AuthorWrapper = styled.div`
`
const AuthorName = styled.div`

`
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
