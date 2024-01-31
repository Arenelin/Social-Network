import React, {useRef} from 'react';
import {S} from './UserFormPost_Styles';
import {UniversalButton} from '../../../../../../../components/buttons/UniversalButton';
import {addPost, changePostMessage} from '../../../../../../../redux/state';

type UserFormPostProps = {
    currentPostMessage: string
    dispatch: (action: any) => void
}

export const UserFormPost: React.FC<UserFormPostProps> = (props) => {
    const {currentPostMessage, dispatch} = props;
    const refTextArea = useRef<HTMLTextAreaElement>(null);

    const onChangeHandler = () => {
        if (refTextArea.current !== null) {
            dispatch(changePostMessage(refTextArea.current.value))
        }
    }
    const onClickHandler = () => {
        dispatch(addPost())
    }

    return (
        <S.UserFormPost>
            <S.TextArea ref={refTextArea} onChange={onChangeHandler} value={currentPostMessage}/>
            <UniversalButton callback={onClickHandler} type={'sec-ry'} name={'Post'}/>
        </S.UserFormPost>
    );
};