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
import {RootStateType, store} from '../../redux/state';

type ContentProps = {
    state: RootStateType
    // addPost:()=>void
    // changeCurrentPostMessage: (symbol:string)=> void
    store: any
}

export const Content: React.FC<ContentProps> = (props) => {
    const {state,store} = props;
    return (
        <S.Content>
            <Container>
                <FlexWrapper gap={'6px'}>
                    <Aside/>
                    <S.ScreensWrapper>
                        <Route path="/profile" render={() =>
                            <Profile
                                state={state.profilePage}
                                store={store}
                            />}/>
                        <Route exact path="/messenger" render={() => <Messenger state={state.messengerPage}/>}/>
                        <Route path="/friends" render={() => <Friends/>}/>
                        <Route path="/audios" render={() => <Music/>}/>
                        <Route path="/messenger/1" render={() => <Dialog/>}/>
                        <Route path="/messenger/2" render={() => <Dialog/>}/>
                        <Route path="/messenger/3" render={() => <Dialog/>}/>
                    </S.ScreensWrapper>
                </FlexWrapper>
            </Container>
        </S.Content>
    )
}