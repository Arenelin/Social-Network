import React from 'react';

type UserPostPropsType = {
    message: string
    likesCount: number
}

export const UserPost = (props: UserPostPropsType) => {
    return (
        <div>
            <p>{props.message}</p>
           Количество лайков: <span>{props.likesCount}</span>
        </div>
    );
};

