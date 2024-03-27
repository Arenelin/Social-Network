import {Container} from '../../components/Container';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Aside} from './sidebar/Aside';
import {Navigate, Route, Routes} from 'react-router-dom';
import {S} from './Content_Styles'
import React from 'react';
import {News} from './screens/news/News/News';
import {Messenger} from './screens/messenger/Messenger';
import {Friends} from './screens/friends/Friends/Friends';
import {Music} from './screens/music/Music/Music';
import {Error404} from './screens/error/Error404/Error404';
import {DialogContainer} from './screens/messenger/chatsBoard/dialog/DialogContainer';
import {AllUserFriends} from './screens/friends/Friends/AllUserFriends/AllUserFriends';
import {PossibleFriendsContainer} from './screens/friends/PossibleFriendsContainer';
import {UserProfileContainer} from "./screens/userProfile/userProfileContainer/UserProfileContainer";

type ContentProps = {}

const PATH = {
    FEED: '/feed',
    MESSENGER: {
        allDialogs: '/messenger',
        currentDialog: '/messenger:id'
    } ,
    FRIENDS: {
        allFriends: '/friends/*',
        findFriends: 'find-friends'
    },
    MUSIC: '/audios',
    ERROR: '/error404',
    USER_PROFILE: '/id/:userId?',
    WRONG: '*'
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
                            <Route path={PATH.USER_PROFILE} element={<UserProfileContainer/>}/>
                            <Route path={PATH.MESSENGER.allDialogs} element={<Messenger/>}>
                                <Route path={PATH.MESSENGER.currentDialog} element={<DialogContainer/>}/>
                            </Route>
                            <Route path={PATH.FRIENDS.allFriends} element={<Friends/>}>
                                <Route path={''} element={<AllUserFriends/>}/>
                                <Route path={PATH.FRIENDS.findFriends} element={<PossibleFriendsContainer/>}/>
                            </Route>
                            <Route path={PATH.MUSIC} element={<Music/>}/>

                            <Route path={PATH.WRONG} element={<Navigate to={PATH.ERROR}/>}/>

                            <Route path={PATH.ERROR} element={<Error404/>}/>
                        </Routes>
                    </S.ScreensWrapper>
                </FlexWrapper>
            </Container>
        </S.Content>
    )
}