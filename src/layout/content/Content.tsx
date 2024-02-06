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
import {Music} from './screens/music/Music/Music';
import {DialogContainer} from './screens/messenger/chatsBoard/dialog/DialogContainer';
import {EmptyObject, Store} from 'redux';
import {AppRootReducerType} from '../../redux/redux-store';

type ContentProps = {
    state: RootStateType
    store: Store<EmptyObject & AppRootReducerType, AppRootAction>
}

export const Content: React.FC<ContentProps> = (props) => {
    const {state, store} = props;
    return (
        <S.Content>
            <Container>
                <FlexWrapper gap={'6px'}>
                    <Aside/>
                    <S.ScreensWrapper>
                         <Route path="/profile" render={() =>
                             <Profile state={state.profilePage} store={store}/>}
                         />
                         <Route exact path="/messenger" render={() =>
                             <Messenger state={state.messengerPage} store={store}/>}
                         />
                         <Route path="/friends" render={() => <Friends/>}/>
                         <Route path="/audios" render={() => <Music/>}/>
                         <Route path="/messenger/1" render={() =>
                             <DialogContainer store={store}/>}
                         />
                         <Route path="/messenger/2" render={() =>
                             <DialogContainer store={store}/>}
                         />
                         <Route path="/messenger/3" render={() =>
                             <DialogContainer store={store}/>}
                         />
                    </S.ScreensWrapper>
                </FlexWrapper>
            </Container>
        </S.Content>
    )
}

