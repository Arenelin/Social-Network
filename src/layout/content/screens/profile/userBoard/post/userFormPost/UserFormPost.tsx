import React from 'react';
import styled from 'styled-components';
import {GeneralButton} from '../../../../../../../components/button/GeneralButton';

export const UserFormPost = () => {
    return (
        <StyledUserFormPost>
            <TextArea/>
            <GeneralButton name={'Post'}/>
        </StyledUserFormPost>
    );
};

const StyledUserFormPost = styled.form`
    width: 100%;
    background-color: #ffffff;
    border-radius: 12px;
    padding: 16px 42px 16px 12px;
    margin-bottom: 16px;
`
const TextArea = styled.textarea`

`