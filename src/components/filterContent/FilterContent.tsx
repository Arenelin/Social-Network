import React from 'react';
import {FilterTab} from '../buttons/filterTab/FilterTab';
import {GeneralBlockWrapper} from '../blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import styled from 'styled-components';

type DataFilterContent = {
    id: string
    text: string
    href: string
}

type FilterContentProps = {
    data: DataFilterContent[]
}

export const FilterContent: React.FC<FilterContentProps> = (props) => {
    const {data} = props;
    const listFilters = data.map(el =>
        <FilterTab text={el.text} href={el.href} key={el.id}/>)
    return (
        <StyledFilterContent>
            <GeneralBlockWrapper>
                {listFilters}
            </GeneralBlockWrapper>
        </StyledFilterContent>
    );
};

const StyledFilterContent = styled.div`
    position: sticky;
    top: 66px;

    ${GeneralBlockWrapper} {
        padding: 8px;
    }
`

