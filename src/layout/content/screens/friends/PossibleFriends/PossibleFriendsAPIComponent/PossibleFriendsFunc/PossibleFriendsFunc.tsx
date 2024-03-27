import React from 'react';
import {PageBlockLeft} from '../../../../../../../components/blockWrappers/pageBlockLeft/PageBlockLeft';
import {
    GeneralBlockWrapper
} from '../../../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {UserDomainType} from '../../../../../../../api/users-api';
import {PossibleFriend} from './PossibleFriend/PossibleFriend';
import defaultUserPhoto from '../../../../../../../assets/images/github.webp';
import styled from 'styled-components';
import s from '../possibleFriendsAPIComponent.module.css';

type PossibleFriendsProps = {
    totalCount: number
    pageSize: number
    currentPage: number
    possibleFriends: UserDomainType[]
    onPageChanged: (currentPage: number) => void
    addFriend: (userId: number) => void
    unfriend: (userId: number) => void
    toggleFetchStatus: (status: boolean) => void
};
export const PossibleFriendsFunc: React.FC<PossibleFriendsProps> = (props) => {
    const {
        totalCount,
        pageSize,
        currentPage,
        possibleFriends,
        onPageChanged,
        addFriend,
        unfriend,
        toggleFetchStatus
    } = props;

    const pagesCount = Math.ceil(totalCount / pageSize)
    const listPagination = [];
    for (let i = 1; i <= pagesCount; i++) {
        listPagination.push(i)
    }
    const listOfButtonPagination = listPagination
        .map(p => {
            return <button key={p} className={currentPage === p ? `${s.selected}  ${s.default}` : s.default}
                           onClick={() => onPageChanged(p)}>{p}</button>
        })
    return (
        <div>
            <PageBlockLeft>
                <GeneralBlockWrapper>
                    <TitleSearchFriends>Find friends</TitleSearchFriends>
                    <FormSearchFriends>
                        <InputSearchFriends placeholder={'Search'}/>
                        <ButtonSearchFriends>+</ButtonSearchFriends>
                    </FormSearchFriends>
                    <div>{listOfButtonPagination}</div>
                    <PossibleFriendsWrapper>
                        {possibleFriends.map((f: UserDomainType) =>
                            <PossibleFriend
                                key={f.id}
                                id={f.id}
                                followed={f.followed}
                                name={f.name}
                                avatar={f.photos.large ? f.photos.large : defaultUserPhoto}
                                status={f.status}
                                addFriend={addFriend}
                                unfriend={unfriend}
                                toggleFetchStatus={toggleFetchStatus}
                            />)}
                    </PossibleFriendsWrapper>
                </GeneralBlockWrapper>
            </PageBlockLeft>
        </div>
    );
};


const TitleSearchFriends = styled.h3`
    padding: 20px;
    font-size: 15px;
    font-weight: 400;
`

const FormSearchFriends = styled.form`
    display: flex;
    padding: 0 20px 28px;
`
const InputSearchFriends = styled.input`
    padding: 8px 70px 8px 12px;
    border: 1px solid rgb(211, 217, 222);
    border-right: none;
    border-radius: 5px 0 0 5px;
    width: 100%;
    outline: none;

`
const ButtonSearchFriends = styled.button`
    padding: 0 19px;
    background-color: #ebf2fafc;
    border: 1px solid rgb(211, 217, 222);
    border-radius: 0 5px 5px 0;
`

const PossibleFriendsWrapper = styled.div`
    display: grid;
    grid-template-columns: 160px 160px 160px;
    column-gap: 15px;
    justify-content: center;
`