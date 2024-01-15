import React from 'react';
import styled from 'styled-components';

type FriendProps = {
    imgSrc: string
    name: string
}

export const Friend: React.FC<FriendProps> = (props) => {
    const {imgSrc, name} = props;
    return (
        <StyledFriend>
            <ImageFriend src={imgSrc}/>
            <FriendName>{name}</FriendName>
        </StyledFriend>
    );
};

const StyledFriend = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: .4s ease;
    border-radius: 8px;

    &:hover {
        background-color: #f2f3f5;
        cursor: pointer;
    }
`

const ImageFriend = styled.img`
    border-radius: 50%;
    width: 64px;
    height: 64px;
    object-fit: cover;
    margin: 4px 8px;
    
`

const FriendName = styled.span`
    display: inline-block;
padding: 2px 4px 8px;
`