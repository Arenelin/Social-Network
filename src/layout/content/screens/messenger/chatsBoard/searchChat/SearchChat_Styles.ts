import styled from 'styled-components';

const SearchChat = styled.div`
    border-bottom: 1px solid #DCE1E6FF;
`

const WrapperInputSearch = styled.div`
    flex: 1 1 auto;
    padding: 15px 10px 15px 26px;

`

const WrapperButtonsForChats = styled.div`
    margin: 0 9px 0 6px;
`

const SearchInput = styled.input`
    width: 100%;
    outline: none;
    border-left: 15px solid white;

    &::placeholder {
        font-size: 13px;
        font-family: -apple-system, BlinkMacSystemFont, Roboto, "Open Sans", "Helvetica Neue", "Noto Sans Armenian", "Noto Sans Bengali", "Noto Sans Cherokee", "Noto Sans Devanagari", "Noto Sans Ethiopic", "Noto Sans Georgian", "Noto Sans Hebrew", "Noto Sans Kannada", "Noto Sans Khmer", "Noto Sans Lao", "Noto Sans Osmanya", "Noto Sans Tamil", "Noto Sans Telugu", "Noto Sans Thai", sans-serif;;
    }
`

export const S = {
    SearchChat,
    WrapperInputSearch,
    WrapperButtonsForChats,
    SearchInput,
}