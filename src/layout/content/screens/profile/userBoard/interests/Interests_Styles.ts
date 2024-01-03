import styled from 'styled-components';
import {GeneralBlockWrapper} from '../../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';

const Interests = styled.div`
    ${GeneralBlockWrapper}{
        padding: 8px;
    }
`

const InterestsTabs = styled.div`
    margin: 8px 0 8px 12px;
`

const CurrentInterestInfo = styled.div`
    padding: 56px 44px 60px 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const S = {
    Interests,
    InterestsTabs,
    CurrentInterestInfo
}