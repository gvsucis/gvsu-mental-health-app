import React from "react"
import { IonContent } from "@ionic/react"
import Button from "../components/button"
import Input from "../components/input"
import Store from "../stores/store"
import { inject } from "mobx-react"

import "./views.scss"

export interface LoginViewProps {
    store: Store
    toggleVisible: () => void
}

@inject('store')
export default class LoginView extends React.Component<LoginViewProps> {

    public static defaultProps = {
        store: null
    }

    public render() {
        return (
            <div className="login-view">
                <IonContent className="content">
                    <div className="login-view__background">
                        <div className="view__header" >
                            GVSU Mental Health Resource Guide
                        </div>
                        <div className="login-view__login">
                            <Input type='email' />
                            <Input type='password' />
                            <Button onClick={this.handleClickLogin} fillWidth={true}>Login</Button>
                        </div>
                    </div>
                </IonContent>
            </div>
        )
    }

    private handleClickLogin = () => {
        this.props.toggleVisible()
    }
}