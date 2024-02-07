import {Container} from '../../components/Container';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Aside} from './sidebar/Aside';
import {Navigate, Route, Routes} from 'react-router-dom';
import {S} from './Content_Styles'
import React from 'react';
import {EmptyObject, Store} from 'redux';
import {AllActionsType, AppRootReducerType} from '../../redux/redux-store';
import {News} from './screens/news/News/News';
import {Profile} from './screens/profile/Profile';
import {Messenger} from './screens/messenger/Messenger';
import {Friends} from './screens/friends/Friends/Friends';
import {Music} from './screens/music/Music/Music';
import {Error404} from './screens/error/Error404/Error404';
import {DialogContainer} from './screens/messenger/chatsBoard/dialog/DialogContainer';

type ContentProps = {
    store: Store<EmptyObject & AppRootReducerType, AllActionsType>
}

const PATH = {
    FEED: '/feed',
    PROFILE: '/profile',
    MESSENGER: '/messenger',
    FRIENDS: '/friends',
    MUSIC: '/audios',
    ERROR: '/error404'
} as const

export const Content: React.FC<ContentProps> = (props) => {
    const {store} = props;
    return (
        <S.Content>
            <Container>
                <FlexWrapper gap={'6px'}>
                    <Aside/>
                    <S.ScreensWrapper>
                        <Routes>
                            <Route path={'/'} element={<Navigate to={PATH.FEED}/>}/>
                            <Route path={PATH.FEED} element={<News/>}/>
                            <Route path={PATH.PROFILE} element={<Profile store={store}/>}/>
                            <Route path={PATH.MESSENGER} element={<Messenger store={store}/>}>
                                <Route path={':id'} element={<DialogContainer store={store}/>}/>
                            </Route>
                            <Route path={PATH.FRIENDS} element={<Friends/>}/>
                            <Route path={PATH.MUSIC} element={<Music/>}/>

                            <Route path={'*'} element={<Navigate to={PATH.ERROR}/>}/>
                            <Route path={PATH.ERROR} element={<Error404/>}/>
                        </Routes>
                    </S.ScreensWrapper>
                </FlexWrapper>
            </Container>
        </S.Content>
    )
}