import React, {ChangeEvent, useState} from 'react';
import {S} from './UserFormPost_Styles';
import {UniversalButton} from '../../../../../../../components/buttons/UniversalButton';
import {UserFormPostProps} from './UserFormPostContainer';


export const UserFormPost: React.FC<UserFormPostProps> = (props) => {
    const {addNewPost} = props;
    const [postText, setPostText] = useState('')

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setPostText(e.currentTarget.value)
    }

    const addPost = () => {
        if (postText.trim()) {
            addNewPost(postText)
            setPostText('')
        }
    }

    return (
        <S.UserFormPost>
            <S.TextArea onChange={onChangeHandler} value={postText}/>
            <UniversalButton callback={addPost} type={'sec-ry'} name={'Post'}/>
        </S.UserFormPost>
    );
};