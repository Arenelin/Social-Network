import styled from 'styled-components';
import myPhoto from '../../../../../assets/images/photo_2021-09-05_17-53-37.jpg'
import {GeneralButton} from '../../../../../components/button/GeneralButton';
import {Icon} from '../../../../../components/icon/Icon';
import React from 'react';

export const AboutUser = () => {
    return (
        <StyledAboutUser>
            <UserDescription>
                <UserPhotoWrapper>
                    <div></div>
                </UserPhotoWrapper>
                <UserBody>
                    <UserInfo>
                        <UserName>Nikita Akmaykin</UserName>
                        <UserStatus>When I am building an empire, do not come to me without materials and
                            tools.</UserStatus>
                    </UserInfo>
                    <WrapperButtons>
                        <GeneralButton as={'a'} href={'#'} primary name={'Edit profile'}/>
                        <GeneralButton primary name={'More'}>
                            <Icon iconId={'arrow-to-down'} viewBox={'0 0 512 512'} w={'16'} h={'12'}/>
                        </GeneralButton>
                    </WrapperButtons>
                </UserBody>
            </UserDescription>
        </StyledAboutUser>
    )
}

const StyledAboutUser = styled.div`
    width: 100%;
    min-height: 322px;
    margin-bottom: 20px;
    background-image: url("https://sneg.top/uploads/posts/2023-03/1678037075_sneg-top-p-oboi-dlya-glavnogo-ekrana-priroda-instagra-49.jpg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: end;
    border-radius: 25px;
`

const UserDescription = styled.div`
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: end;
    padding: 20px;
    position: relative;
    border-radius: 10px;
    max-height: 139px;
`
const UserBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    max-width: 700px;
    width: 100%;
`

const UserInfo = styled.div`
    max-width: 450px;

`
const UserName = styled.span`
    font-size: 21px;
    font-weight: 600;
    line-height: 26px;
`
const UserStatus = styled.p`
    font-size: 13px;
    line-height: 16px;
    font-family: -apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif;
`

const UserPhotoWrapper = styled.div`
    width: 150px;
    height: 150px;
    background-image: url(${myPhoto});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 50%;
    position: absolute;
    left: 20px;
    bottom: 20%;

`

const WrapperButtons = styled.div`
    display: flex;
    gap: 10px;
`