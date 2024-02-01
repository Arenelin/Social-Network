import {Container} from '../../components/Container';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Profile} from './screens/profile/Profile';
import {Aside} from './sidebar/Aside';
import {Route} from 'react-router-dom';
import {Friends} from './screens/friends/Friends/Friends';
import {Messenger} from './screens/messenger/Messenger';
import {S} from './Content_Styles'
import React from 'react';
import {AppRootAction, RootStateType} from '../../redux/store';
import {Dialog} from './screens/messenger/chatsBoard/dialog/Dialog';
import {Music} from './screens/music/Music/Music';

type ContentProps = {
    state: RootStateType
    dispatch:(action:AppRootAction)=>void
}

export const Content: React.FC<ContentProps> = (props) => {
    const {state, dispatch} = props;
    return (
        <S.Content>
            <Container>
                <FlexWrapper gap={'6px'}>
                    <Aside/>
                    <S.ScreensWrapper>
                        <Route path="/profile" render={() =>
                            <Profile
                                state={state.profilePage}
                                dispatch={dispatch}
                            />}/>
                        <Route exact path="/messenger" render={() => <Messenger state={state.messengerPage}/>}/>
                        <Route path="/friends" render={() => <Friends/>}/>
                        <Route path="/audios" render={() => <Music/>}/>
                        <Route path="/messenger/1" render={() =>
                            <Dialog messages={state.messengerPage.messages.addedMessages}
                                    currentDialogMessage={state.messengerPage.messages.currentDialogMessage}
                                    dispatch={dispatch}
                            />}/>
                        <Route path="/messenger/2" render={() =>
                            <Dialog messages={state.messengerPage.messages.addedMessages}
                                    currentDialogMessage={state.messengerPage.messages.currentDialogMessage}
                                    dispatch={dispatch}
                            />}/>
                        <Route path="/messenger/3" render={() =>
                            <Dialog messages={state.messengerPage.messages.addedMessages}
                                    currentDialogMessage={state.messengerPage.messages.currentDialogMessage}
                                    dispatch={dispatch}
                            />}/>
                    </S.ScreensWrapper>
                </FlexWrapper>
            </Container>
        </S.Content>
    )
}