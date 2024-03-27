import styled from 'styled-components';

const Header = styled.header`
    background-color: #ffffff;
    padding: 10px 0;
    height: 50px;
    position: sticky;
    top: 0; 
    left: 0;
    right: 0;
    z-index: 1;
`

const WrapperHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LoginBlock = styled.div`

`
const ShortCurrentUserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const UserName = styled.span`

`
const UserAvatar = styled.img`
    width: 30px;
    height: 30px;
`

export const S = {
    Header,
    WrapperHeader,
    LoginBlock,
    ShortCurrentUserInfo,
    UserName,
    UserAvatar
}