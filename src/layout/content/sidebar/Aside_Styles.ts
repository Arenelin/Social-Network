import styled from 'styled-components';

const Aside = styled.aside`
    max-width: 164px;
    width: 100%;
    padding-top: 12px;
`

const MenuItems = styled.ul`
    position: sticky;
    top: 12px;
`

const MenuLinkWrapper = styled.div`
    display: flex;
    align-items: center;
`

const MenuItem = styled.li`
    padding: 4px 6px;

    &:hover {
        background-color: #E5E7EB;
    }
`

const MenuLink = styled.a`
    display: flex;
    align-items: center;
`

const IconWrapper = styled.div`
    margin-right: 10px;
`

const MenuTitle = styled.span``

export const S = {
    Aside,
    MenuItems,
    MenuLinkWrapper,
    MenuItem,
    MenuLink,
    IconWrapper,
    MenuTitle
}