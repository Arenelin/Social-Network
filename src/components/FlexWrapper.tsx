import styled from 'styled-components';


type FlexWrapperPropsType = {
    direction?: string,
    jc?: string,
    ai?: string,
    wrap?: string,
    gap?: string,
    rowG?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    justify-content: ${props => props.jc || 'flex-start'};
    align-items: ${props => props.ai || 'stretch'};
    flex-direction: ${props => props.direction || 'row'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    //height: 100%;
    width: 100%;
    gap: ${props => props.gap || '0px'};
    row-gap: ${props => props.rowG || '0px'};
`