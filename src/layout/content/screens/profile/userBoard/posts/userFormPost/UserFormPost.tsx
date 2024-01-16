import React, {useRef} from 'react';
import {S} from './UserFormPost_Styles';
import {UniversalButton} from '../../../../../../../components/buttons/UniversalButton';

type UserFormPostProps = {
    addPost: (postMessage: string) => void
}

export const UserFormPost: React.FC<UserFormPostProps> = (props) => {
    const {addPost} = props;
    const refTextArea = useRef<HTMLTextAreaElement>(null);

    const addPostHandler = () => {
        if (refTextArea.current !== null) {
            addPost(refTextArea.current.value)
            refTextArea.current.value = '';
        }
    }

    return (
        <S.UserFormPost>
            <S.TextArea ref={refTextArea}/>
            <UniversalButton callback={addPostHandler} type={'sec-ry'} name={'Post'}/>
        </S.UserFormPost>
    );
};