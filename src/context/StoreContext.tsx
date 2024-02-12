import React from 'react';
import {EmptyObject, Store} from 'redux';
import {AllActionsType, AppRootReducerType, store} from '../redux/redux-store';

export const StoreContext =
    React.createContext<Store<EmptyObject & AppRootReducerType, AllActionsType>>(store)

type ProviderProps = {
    store: Store<EmptyObject & AppRootReducerType, AllActionsType>
    children: React.ReactNode
}
export const Provider: React.FC<ProviderProps> = (props) => {
    const {store, children} = props;
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}