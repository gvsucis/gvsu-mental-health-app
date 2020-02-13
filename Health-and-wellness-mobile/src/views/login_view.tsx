import React from "react"
import View from "./view_models/view"
import { IonContent, IonLabel, IonInput, IonButton, IonItem } from "@ionic/react"
import Button from "../../src/components/button"
import "./login_view.scss"

export default class LoginView extends React.Component{

    public render() {
        const body = (
            <>
                <IonContent className="content">
                    <div className="view-body">
                        {this.renderBody()}
                    </div>
                </IonContent>
            </>
        )
        return (<View title="Login" route="/login" body={body}/>)
    }
    private renderBody() {
        return (
            
            <>
            <div>
                <img className="image" src={require("../assets/gv.jpg")} alt="Grand Valley Logo"/>
            </div>
            <IonItem className="labelButton">
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput inputMode="email" type="email" ></IonInput>
            </IonItem>
            <IonItem className="labelButton">
                <IonLabel position="stacked">Password</IonLabel>
                <IonInput inputMode="text" type="password"></IonInput>
            </IonItem>
                <Button fillWidth={true}>Login</Button>
            </>
        )
    }


}