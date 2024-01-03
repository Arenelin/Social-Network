import styled from 'styled-components';

const Content = styled.div`
overflow: hidden;
`

const ScreensWrapper = styled.div`
    max-width: 911px;
    width: 100%;
    padding-top: 16px;
    height: calc(100vh - 50px);
    overflow: auto;
`

export const S = {
    Content,
    ScreensWrapper,
}