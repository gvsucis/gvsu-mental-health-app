import React from "react"
import { IonContent } from "@ionic/react"
import Button from "../../src/components/button"
import Input from "../components/input"
import Store from "../stores/store"
import { inject } from "mobx-react"
import Firebase from '../components/firebase'

import "./views.scss"

export interface LoginViewProps {
    store: Store
    fbase: Firebase
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
                            <Button onClick={this.handleClickLogin} fillWidth={true}>Login With GVSU</Button>
                        </div>
                    </div>
                </IonContent>
            </div>
        )
    }

    private handleClickLogin = async () => {
        this.props.fbase.auth.onAuthStateChanged((user:any) =>{
            console.log(user);
            if(user) {
                console.log("user in");
                this.props.toggleVisible();
            } else {
                this.props.fbase.signIn().then((response) => {
                    console.log("success");
                    this.props.toggleVisible();
                }).catch((err) => {
                    console.log("bad");
                    console.log(err);
                });
            }
        });
    }
}