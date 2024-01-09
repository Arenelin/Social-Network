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
import {ChatData, PostType} from '../../index';

type ContentProps = {
    posts: PostType[]
    chats: ChatData[]
}

export const Content: React.FC<ContentProps> = (props) => {
    const {posts, chats} = props;
    return (
        <S.Content>
            <Container>
                <FlexWrapper gap={'6px'}>
                    <Aside/>
                    <S.ScreensWrapper>
                        <Route path="/profile" render={() => <Profile posts={posts}/>}/>
                        <Route exact path="/messenger" render={() => <Messenger chats={chats}/>}/>
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