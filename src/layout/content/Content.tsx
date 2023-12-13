import styled from 'styled-components';
import {Container} from '../../components/Container';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Profile} from './screens/profile/Profile';
import {Aside} from './sidebar/Aside';

export function Content(){
    return (
        <StyledContent>
            <Container>
                <FlexWrapper gap={'6px'}>
                    <Aside/>
                    <Profile/>
                </FlexWrapper>
            </Container>
        </StyledContent>
    )
}

const StyledContent = styled.div`
height: calc(100vh - 120.89px);
`