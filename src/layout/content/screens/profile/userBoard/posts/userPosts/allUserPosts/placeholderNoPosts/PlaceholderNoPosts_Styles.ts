import styled from 'styled-components';
import {
    PlaceholderNoInformation
} from '../../../../../../../../../components/placeholders/noInformation/PlaceholderNoInformation';

const NoPostsCover = styled.div`
    margin-bottom: 12px;
    text-align: center;
`

const PlaceholderNoPosts_Styles = styled.div`
    padding: 36px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 0 0 12px 12px;
    margin-bottom: 16px;
    
    ${PlaceholderNoInformation} {
        text-align: center;
        margin-bottom: 0;
    }
`

export const S = {
    NoPostsCover,
    PlaceholderNoPosts: PlaceholderNoPosts_Styles
}