import React, {useRef} from 'react';
import {S} from './UserFormPost_Styles';
import {UniversalButton} from '../../../../../../../components/buttons/UniversalButton';

type UserFormPostProps = {
    currentPostMessage: string
    addNewPost: () => void
    changeMessageOfPost: (value: string) => void
}

export const UserFormPost: React.FC<UserFormPostProps> = (props) => {
    const {currentPostMessage, addNewPost, changeMessageOfPost} = props;
    const refTextArea = useRef<HTMLTextAreaElement>(null);

    const onChangeHandler = () => {
        if (refTextArea.current !== null) {
            changeMessageOfPost(refTextArea.current.value)
        }
    }

    return (
        <S.UserFormPost>
            <S.TextArea ref={refTextArea} onChange={onChangeHandler} value={currentPostMessage}/>
            <UniversalButton callback={addNewPost} type={'sec-ry'} name={'Post'}/>
        </S.UserFormPost>
    );
};