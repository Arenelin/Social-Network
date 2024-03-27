import {Container} from '../../components/Container';
import React from 'react';
import {Icon} from '../../components/icon/Icon';
import {S} from './Header_Styles'
import {NavLink} from "react-router-dom";
import {UniversalButton} from "../../components/buttons/UniversalButton";
import {UserResponseType} from "../../api/users-api";
import defaultPhoto from '../../assets/images/github.webp'

type HeaderType = {
    isAuth: boolean
    currentUser: UserResponseType | null
}

export const Header: React.FC<HeaderType> = (props) => {
    const {isAuth, currentUser,} = props;
    const onClickHandler = () => {
    }
    return (
        <S.Header>
            <Container>
                <S.WrapperHeader>
                    <Icon iconId={'logo'} w={'136px'} h={'24px'}/>
                    <S.LoginBlock>
                        {isAuth && currentUser !== null
                            ? <S.ShortCurrentUserInfo>
                                <S.UserName>{currentUser.fullName}</S.UserName>
                                <S.UserAvatar
                                    src={currentUser.photos.small !== null
                                        ? currentUser.photos.small
                                        : defaultPhoto}/>
                            </S.ShortCurrentUserInfo>

                            : <NavLink to={'/login'}>
                                <UniversalButton name={'Login'} type={'sec-ry'} callback={onClickHandler}/>
                            </NavLink>}
                    </S.LoginBlock>
                </S.WrapperHeader>
            </Container>
        </S.Header>
    )
}