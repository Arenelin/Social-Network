import React from 'react';
import {PageBlockLeft} from '../../../../../components/blockWrappers/pageBlockLeft/PageBlockLeft';
import {GeneralBlockWrapper} from '../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {PossibleFriendsProps} from '../PossibleFriendsContainer';
import styled from 'styled-components';
import {PossibleFriend} from './PossibleFriend/PossibleFriend';
import {v1} from 'uuid';
import f1 from '../../../../../assets/images/friend1.jpg';
import f2 from '../../../../../assets/images/friend2.jpg';
import f3 from '../../../../../assets/images/friend3.jpg';
import f4 from '../../../../../assets/images/friend4.jpg';
import f5 from '../../../../../assets/images/friend5.jpg';
import f6 from '../../../../../assets/images/friend6.jpg';
import f7 from '../../../../../assets/images/friend7.jpg';
import f8 from '../../../../../assets/images/friend8.jpg';

export const PossibleFriends: React.FC<PossibleFriendsProps> = (props) => {
    const {possibleFriends, addFriend, unfriend, removeUserFromList, setPossibleFriends} = props;
    const listUsers = possibleFriends.map(f =>
        <PossibleFriend
            key={f.id}
            id={f.id}
            firstName={f.firstName}
            lastName={f.lastName}
            avatar={f.avatar}
            mutualFriends={f.mutualFriends}
            isAddedFriend={f.isAddedFriend}
            addFriend={addFriend}
            unfriend={unfriend}
            removeUserFromList={removeUserFromList}
        />);

    const users = [
        {
            id: v1(),
            firstName: 'Kristina',
            lastName: 'Ovsyannikova',
            avatar: f1,
            mutualFriends: [],
            isAddedFriend: false
        },
        {id: v1(), firstName: 'Anastasia', lastName: 'Sudakina', avatar: f2, mutualFriends: [], isAddedFriend: false},
        {id: v1(), firstName: 'Roman', lastName: 'Azarov', avatar: f3, mutualFriends: [], isAddedFriend: false},
        {id: v1(), firstName: 'Leonid', lastName: 'Gempel', avatar: f4, mutualFriends: [], isAddedFriend: false},
        {id: v1(), firstName: 'Evgeny', lastName: 'Andreev', avatar: f5, mutualFriends: [], isAddedFriend: false},
        {id: v1(), firstName: 'Marina', lastName: 'Bantser', avatar: f6, mutualFriends: [], isAddedFriend: false},
        {id: v1(), firstName: 'Ekaterina', lastName: 'Feyn', avatar: f7, mutualFriends: [], isAddedFriend: false},
        {id: v1(), firstName: 'Natasha', lastName: 'Vlasova', avatar: f8, mutualFriends: [], isAddedFriend: false}
    ]
    if (possibleFriends.length === 0) {
        setPossibleFriends(users)
    }

    return (
        <div>
            <PageBlockLeft>
                <GeneralBlockWrapper>
                    <TitleSearchFriends>Find friends</TitleSearchFriends>
                    <FormSearchFriends>
                        <InputSearchFriends placeholder={'Search'}/>
                        <ButtonSearchFriends>+</ButtonSearchFriends>
                    </FormSearchFriends>
                    <PossibleFriendsWrapper>
                        {listUsers}
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