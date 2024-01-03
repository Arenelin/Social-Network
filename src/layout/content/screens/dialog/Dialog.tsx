import React from 'react';
import {NavLink} from 'react-router-dom';

export const Dialog = () => {
    return (
        <div>
            Dialog
            <div>
                <NavLink to={'/messenger'}>Back</NavLink>
            </div>
        </div>
    );
};