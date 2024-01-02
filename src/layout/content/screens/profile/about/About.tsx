import styled from 'styled-components';
import myPhoto from '../../../../../assets/images/photo_2021-09-05_17-53-37.jpg'
import {GeneralButton} from '../../../../../components/buttons/GeneralButton';
import {Icon} from '../../../../../components/icon/Icon';
import React from 'react';

export const AboutUser = () => {
    return (
        <StyledAboutUser>
            <UserDescription>
                <UserPhotoWrapper>
                    <PhotoUnderlay></PhotoUnderlay>
                    <UserAvatar></UserAvatar>
                </UserPhotoWrapper>
                <UserBody>
                    <UserInfo>
                        <UserName>Nikita Akmaykin</UserName>
                        <UserStatus>When I am building an empire, do not come to me without materials and tools.</UserStatus>
                        <ShortInfoCell>
                            <Icon iconId={'info'} w={'18'} h={'18'} viewBox={'0 0 17 17'}/>
                            <LearnMore>Learn More</LearnMore>
                        </ShortInfoCell>
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
    min-height: 350px;
    margin-bottom: 20px;
    background-image: url("https://w.forfun.com/fetch/8b/8b69e755f97a0501ff93e1edee9bffd6.jpeg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 25px;
    position: relative;
`

const UserDescription = styled.div`
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-radius: 10px;
    max-height: 139px;
    position: absolute;
    bottom: 0;
`
const UserBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    max-width: 700px;
    width: 100%;
    margin-left: 40px;
`

const UserInfo = styled.div`
    max-width: 480px;
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
    margin: 6px 0;
`

const UserPhotoWrapper = styled.div`
    width: 150px;
    height: 150px;
    margin-top: -50px;
    
    position: relative;
    
`

const PhotoUnderlay = styled.div`
background-color: #ffffff;
    width: 158px;
    height: 158px;
    position: absolute;
    left: -4px;
    bottom: 40px;
    border-radius: 50%;
`
const UserAvatar = styled.div`
    background-image: url(${myPhoto});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    position: absolute;
    padding: 20px;
    bottom: 44px;
    left: 0;
`

const WrapperButtons = styled.div`
    display: flex;
    gap: 6px;
    margin-left: 15px;
`

const LearnMore = styled.span`
color: #626d7a;
    font-family: -apple-system, BlinkMacSystemFont, Roboto, "Open Sans", "Helvetica Neue", "Noto Sans Armenian", "Noto Sans Bengali", "Noto Sans Cherokee", "Noto Sans Devanagari", "Noto Sans Ethiopic", "Noto Sans Georgian", "Noto Sans Hebrew", "Noto Sans Kannada", "Noto Sans Khmer", "Noto Sans Lao", "Noto Sans Osmanya", "Noto Sans Tamil", "Noto Sans Telugu", "Noto Sans Thai", sans-serif;
    font-size: 13px;
    padding-top: 3px;
    transition: all .4s;
`

const ShortInfoCell = styled.div`
display: flex;
    gap: 4px;
    align-items: center;
    padding: 3px 3px 2px;
    max-width: 96px;
    &:hover{
        cursor: pointer;
        ${LearnMore}{
            text-decoration: underline;
        }
    }
`