import {Container} from '../../components/Container';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Aside} from './sidebar/Aside';
import {Navigate, Route, Routes} from 'react-router-dom';
import {S} from './Content_Styles'
import React from 'react';
import {News} from './screens/news/News/News';
import {Profile} from './screens/profile/Profile';
import {Messenger} from './screens/messenger/Messenger';
import {Friends} from './screens/friends/Friends/Friends';
import {Music} from './screens/music/Music/Music';
import {Error404} from './screens/error/Error404/Error404';
import {DialogContainer} from './screens/messenger/chatsBoard/dialog/DialogContainer';
import {AllUserFriends} from './screens/friends/Friends/AllUserFriends/AllUserFriends';
import {PossibleFriendsContainer} from './screens/friends/PossibleFriendsContainer';
import {
    PossibleFriendProfileContainer
} from "./screens/friends/PossibleFriends/PossibleFriendsAPIComponent/PossibleFriendsFunc/PossibleFriendProfileContainer/PossibleFriendProfileContainer";

type ContentProps = {}

const PATH = {
    FEED: '/feed',
    MY_PROFILE: '/profile',
    MESSENGER: '/messenger',
    FRIENDS: '/friends/*',
    MUSIC: '/audios',
    ERROR: '/error404',
    USER_PROFILE:'/id/:userId'
} as const

export const Content: React.FC<ContentProps> = () => {

    return (
        <S.Content>
            <Container>
                <FlexWrapper gap={'6px'}>
                    <Aside/>
                    <S.ScreensWrapper>
                        <Routes>
                            <Route path={'/'} element={<Navigate to={PATH.FEED}/>}/>
                            <Route path={PATH.FEED} element={<News/>}/>
                            <Route path={PATH.MY_PROFILE} element={<Profile/>}/>
                            <Route path={PATH.MESSENGER} element={<Messenger/>}>
                                <Route path={':id'} element={<DialogContainer/>}/>
                            </Route>
                            <Route path={PATH.FRIENDS} element={<Friends/>}>
                                <Route path={''} element={<AllUserFriends/>}/>
                                <Route path={'find-friends'} element={<PossibleFriendsContainer/>}/>
                            </Route>
                            <Route path={PATH.MUSIC} element={<Music/>}/>

                            <Route path={'*'} element={<Navigate to={PATH.ERROR}/>}/>
                            <Route path={PATH.USER_PROFILE} element={<PossibleFriendProfileContainer/>}/>
                            <Route path={PATH.ERROR} element={<Error404/>}/>
                        </Routes>
                    </S.ScreensWrapper>
                </FlexWrapper>
            </Container>
        </S.Content>
    )
}