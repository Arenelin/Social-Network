import React from 'react';
import {authApi} from "../../api/auth-api";
import {Header} from "./Header";
import {HeaderProps} from "./HeaderContainer";

export class HeaderAPIContainer extends React.Component<HeaderProps, any> {
    componentDidMount() {
        authApi.me()
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data)
                    authApi.getUser(res.data.data.id)
                        .then(res => {
                            this.props.setCurrentUser(res.data)
                        })
                }
            })
    }
    render() {
        return <Header isAuth={this.props.isAuth} currentUser={this.props.currentUser}/>
    }
}
