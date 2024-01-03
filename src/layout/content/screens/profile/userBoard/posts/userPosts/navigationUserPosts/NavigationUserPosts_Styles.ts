import styled from 'styled-components';
import {
    GeneralBlockWrapper
} from '../../../../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';

const NavigationUserPosts = styled.div`
    border-bottom: 1px solid #dcdada;
    ${GeneralBlockWrapper}{
        margin-bottom: 0;
        border-radius: 12px 12px 0 0;
        padding: 0 20px;
    }
`

const FilterPostsTabs = styled.div`
    display: flex;
    max-width: 262px;
    padding: 18px 0 18px;
`

export const S = {
    NavigationUserPosts,
    FilterPostsTabs,
}