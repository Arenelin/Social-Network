import {connect} from "react-redux";
import {HeaderAPIContainer} from "./HeaderAPIContainer";
import {AppRootReducerType} from "../../redux/redux-store";
import {setAuthUserData, setCurrentUser} from "../../redux/reducers/auth-reducer";
import {UserDataType} from "../../api/auth-api";
import {UserResponseType} from "../../api/users-api";

// types
export type HeaderProps = MapStateType & MapDispatchType
type MapStateType = {
    isAuth: boolean
    currentUser: UserResponseType | null
}
type MapDispatchType = {
    setAuthUserData: (userData: UserDataType) => void
    setCurrentUser: (currentUser: UserResponseType) => void
}

// data
const mapStateToProps = (state: AppRootReducerType): MapStateType => {
    return {
        isAuth: state.auth.isAuth,
        currentUser: state.auth.currentUser
    }
}
export const HeaderContainer =
    connect(mapStateToProps, {setAuthUserData, setCurrentUser})(HeaderAPIContainer)