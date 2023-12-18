import styled from 'styled-components';
import {About} from './about/About';
import {FlexWrapper} from '../../../../components/FlexWrapper';

export function Profile() {
    return (
        <StyledMain>
            <About/>
            <FlexWrapper gap={'16px'}>
                <UserBoard>
                    <UserInterests>
                        <IntesrestsTabs>
                            <FlexWrapper gap={'6px'}>
                                <Button>Photos</Button>
                                <Button>Clips</Button>
                                <Button>Music</Button>
                                <Button>Articles</Button>
                                <Button>Albums</Button>
                            </FlexWrapper>
                        </IntesrestsTabs>
                        <CurrentInterestInfo>
                            <InerestDescription>You haven't added any photos yet</InerestDescription>
                            <Button2>Upload photo</Button2>
                        </CurrentInterestInfo>
                    </UserInterests>
                    <UserFormPost>
                        <TextArea/>
                        <Button2>Post</Button2>
                    </UserFormPost>
                    <UserPosts>
                        <TabsWrapper>
                            <FilterPostsTabs>
                                <Button>All posts</Button>
                                <Button>My posts</Button>
                                <Button>Post archive</Button>
                            </FilterPostsTabs>
                            <Button>Search</Button>
                        </TabsWrapper>
                        <Posts>
                            <PostDescription>There are no posts here yet</PostDescription>
                        </Posts>
                    </UserPosts>
                </UserBoard>
                <UserActivity>
                    <UserFriends>
                        <FriendsHeader>Friends</FriendsHeader>
                        <CurrentFriends>
                            <FriendsDescription>You haven't added any friends yet</FriendsDescription>
                            <Button3>Add friends</Button3>
                        </CurrentFriends>
                    </UserFriends>
                </UserActivity>
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    max-width: 911px;
    width: 100%;
    padding-top: 25px;
    height: calc(100vh - 50px);
    overflow: auto;
`

const UserBoard = styled.div`
max-width: 550px;
    width: 100%;
`
const UserActivity = styled.div`
max-width: 345px;
    width: 100%;
`
const UserInterests = styled.div`
padding: 8px;
    background-color: #ffffff;
    flex-basis: 550px;
    border-radius: 12px;
    margin-bottom: 16px;    
`
const UserFormPost = styled.form`
width: 100%;
    background-color: #ffffff;
    border-radius: 12px;
    padding: 16px 42px 16px 12px;
    margin-bottom: 16px;
`
const UserPosts = styled.div`
background-color: #ffffff;
    border-radius: 12px;
`
const UserFriends = styled.div`
    background-color: #ffffff;
    padding: 8px;
    border-radius: 12px;
    margin-bottom: 16px;
`
const UserSubscriptions = styled.div`

`
const IntesrestsTabs = styled.div`

`
const CurrentInterestInfo = styled.div`
padding: 56px 44px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const Button = styled.button`
padding: 2px 8px;
`
const Button2 = styled.button`
margin-top: 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    font-family: -apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif;;
    padding: 5px 16px;
    border-radius: 5px;
    color: #1f76c7;
    background-color: #e5eeff;
`
const InerestDescription = styled.p`

`
const FriendsHeader = styled.h4`
padding: 15px 12px 9px;
`

const CurrentFriends = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 32px;
   
`
const FriendsDescription = styled.span`

`
const Button3 = styled.button`

`
const TextArea = styled.textarea`

`
const Posts = styled.div`
padding: 36px 20px;
`
const PostDescription = styled.p`
text-align: center;
`
const FilterPostsTabs = styled.div`
display: flex;
    max-width: 262px;
    padding: 18px 0 18px 20px;
`


const TabsWrapper = styled.div`
display: flex;
    justify-content: space-between;
`