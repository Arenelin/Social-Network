import {Container} from '../../components/Container';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Profile} from './screens/profile/Profile';
import {Aside} from './sidebar/Aside';
import {Route} from 'react-router-dom';
import {Friends} from './screens/friends/Friends/Friends';
import {Music} from './screens/music/Music/Music';
import {Messenger} from './screens/messenger/Messenger';
import {Dialog} from './screens/dialog/Dialog';
import {S} from './Content_Styles'
import React from 'react';

export const Content:React.FC = () =>{
    return (
        <S.Content>
            <Container>
                <FlexWrapper gap={'6px'}>
                    <Aside/>
                    <S.ScreensWrapper>
                        <Route path="/profile" component={Profile}/>
                        <Route exact path="/messenger" component={Messenger}/>
                        <Route path="/friends" component={Friends}/>
                        <Route path="/audios" component={Music}/>
                        <Route path="/messenger/1" component={Dialog}/>
                        <Route path="/messenger/2" component={Dialog}/>
                        <Route path="/messenger/3" component={Dialog}/>
                    </S.ScreensWrapper>
                </FlexWrapper>
            </Container>
        </S.Content>
    )
}