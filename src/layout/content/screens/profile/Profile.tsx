import styled from 'styled-components';
import {About} from './about/About';

export function Profile(){
    return(
        <StyledMain>
            <About/>
                <div>My posts</div>
                <div>New post</div>
                <div>Post 1</div>
                </StyledMain>
    )
}

const StyledMain = styled.main`
        max-width: 911px;
        width: 100%;
    padding-top: 25px;
`