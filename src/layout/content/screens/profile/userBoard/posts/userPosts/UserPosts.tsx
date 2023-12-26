import React, {useState} from 'react';
import styled from 'styled-components';
import {NavigationUserPosts} from './navigationUserPosts/NavigationUserPosts';
import {AllUserPosts, PostType} from './allUserPosts/AllUserPosts';

export const UserPosts = () => {
    const [posts, setPosts] = useState<PostType[]>([
        {id: -1, title: 'Lorem ipsum dolor sit amet hey hey,', likesCount: 100},
        {id: 0, title: 'Lorem ipsum dolor sit amet,', likesCount: 0},
        {id: 1, title: 'Lorem ipsum dolor sit amet,', likesCount: 0},
        {id: 2, title: ' consectetur adipisicing elit.', likesCount: 14},
        {id: 3, title: 'Adipisci cupiditate deserunt', likesCount: 2},
        {id: 4, title: 'explicabo iure laboriosam nam nostrum', likesCount: 10},
        {id: 5, title: '  reiciendis repellendus sed temporibus?', likesCount: 8}
    ]);

    return (
        <StyledUserPosts>
            <NavigationUserPosts/>
            <AllUserPosts posts={posts}/>
        </StyledUserPosts>
    );
};

const StyledUserPosts = styled.div``