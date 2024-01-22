import React, {useRef} from 'react';
import {S} from './UserFormPost_Styles';
import {UniversalButton} from '../../../../../../../components/buttons/UniversalButton';

type UserFormPostProps = {
    addPost: () => void
    changeCurrentPostMessage: (symbol: string) => void
    currentPostMessage: string
}

export const UserFormPost: React.FC<UserFormPostProps> = (props) => {
    const {addPost, changeCurrentPostMessage, currentPostMessage} = props;
    const refTextArea = useRef<HTMLTextAreaElement>(null);

    const onChangeHandler = () => {
        if (refTextArea.current !== null) {
            changeCurrentPostMessage(refTextArea.current.value)
        }
    }

    return (
        <S.UserFormPost>
            <S.TextArea ref={refTextArea} onChange={onChangeHandler} value={currentPostMessage}/>
            <UniversalButton callback={addPost} type={'sec-ry'} name={'Post'}/>
        </S.UserFormPost>
    );
};