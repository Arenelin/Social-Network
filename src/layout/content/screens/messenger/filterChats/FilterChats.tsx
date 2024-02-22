import React from 'react';
import {FilterContent} from '../../../../../components/filterContent/FilterContent';
import {dataFilterContent} from './dataFilterContent/dataFilterContent';

export const FilterChats: React.FC = () => {
    return <FilterContent data={dataFilterContent}/>
};