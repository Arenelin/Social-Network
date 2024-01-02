import styled from 'styled-components';
import {Container} from '../../components/Container';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Profile} from './screens/profile/Profile';
import {Aside} from './sidebar/Aside';
import {Dialogs} from './screens/dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {Friends} from './screens/friends/Friends/Friends';
import {Music} from './screens/music/Music/Music';

export function Content() {
    return (
        <StyledContent>
            <Container>
                <FlexWrapper gap={'6px'}>
                    <Aside/>
                    <ScreensWrapper>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/dialogs" component={Dialogs}/>
                        <Route path="/friends" component={Friends}/>
                        <Route path="/audios" component={Music}/>
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
    padding-top: 16px;
    height: calc(100vh - 50px);
    overflow: auto;
`