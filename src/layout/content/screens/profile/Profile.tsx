import styled from 'styled-components';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import React from 'react';
import {UserBoard} from './userBoard/UserBoard';
import {PageBlockLeft} from '../../../../components/blockWrappers/pageBlockLeft/PageBlockLeft';
import {PageBlockRight} from '../../../../components/blockWrappers/pageBlockRight/PageBlockRight';
import {UserActivityContainer} from './userActivity/UserActivityContainer';
import {UserResponseType} from "../../../../api/users-api";
import {AboutUser} from "./about/AboutUser";
import defaultPhoto from '../../../../assets/images/github.webp'
import {Preloader} from "../../../../components/Preloader/Preloader";

type ProfileProps = {
    userProfile: UserResponseType | null
}

export const Profile: React.FC<ProfileProps> = (props) => {
    const {userProfile} = props;
    return (
        <>
            {userProfile === null
                ? <Preloader/>
                : <StyledMain>
                    <AboutUser fullName={userProfile.fullName}
                               status={userProfile.aboutMe}
                               avatarSrc={userProfile.photos.large ? userProfile.photos.large : defaultPhoto}
                    />
                    <FlexWrapper gap={'16px'}>
                        <PageBlockLeft>
                            <UserBoard/>
                        </PageBlockLeft>
                        <PageBlockRight>
                            <UserActivityContainer/>
                        </PageBlockRight>
                    </FlexWrapper>
                </StyledMain>}
        </>
    )
}

const StyledMain = styled.main``

