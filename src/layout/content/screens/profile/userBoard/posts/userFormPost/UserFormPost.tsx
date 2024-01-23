import React, {useRef} from 'react';
import {S} from './UserFormPost_Styles';
import {UniversalButton} from '../../../../../../../components/buttons/UniversalButton';
import {log} from 'node:util';

type UserFormPostProps = {
    // addPost: () => void
    // changeCurrentPostMessage: (symbol: string) => void
    store: any
    currentPostMessage: string
}

export const UserFormPost: React.FC<UserFormPostProps> = (props) => {
    const {store,currentPostMessage} = props;
    const refTextArea = useRef<HTMLTextAreaElement>(null);

    const onChangeHandler = () => {
        if (refTextArea.current !== null) {
            store.changeCurrentPostMessage(refTextArea.current.value)
        }
    }

    const onClickAddPostHandler = ()=>{
        store.addPost()
    }

    return (
        <S.UserFormPost>
            <S.TextArea ref={refTextArea} onChange={onChangeHandler} value={currentPostMessage}/>
            <UniversalButton callback={onClickAddPostHandler} type={'sec-ry'} name={'Post'}/>
        </S.UserFormPost>
    );
};