import styled from 'styled-components';
import {Container} from '../../components/Container';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Profile} from './screens/profile/Profile';
import {Aside} from './sidebar/Aside';
import {Dialogs} from './screens/dialogs/Dialogs/Dialogs';

export function Content() {
    return (
        <StyledContent>
            <Container>
                <FlexWrapper gap={'6px'}>
                    <Aside/>
                    <ScreensWrapper>
                        <Profile/>
                        {/*<Dialogs/>*/}
                    </ScreensWrapper>
                </FlexWrapper>
            </Container>
        </StyledContent>
    )
}

const StyledContent = styled.div`
    overflow: hidden;
`
const ScreensWrapper = styled.div`
    max-width: 911px;
    width: 100%;
    padding-top: 25px;
    height: calc(100vh - 50px);
    overflow: auto;
`

