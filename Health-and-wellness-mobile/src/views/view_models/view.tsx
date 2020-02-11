import * as React from 'react'
import { IonToolbar, IonHeader, IonTitle, IonPage, IonContent } from '@ionic/react'
import EmergencyButton from '../../components/emergency-button'

import "./view.scss"

export interface ViewProps {
    title: string
    route: string
    body: React.ReactElement
}

export default class View extends React.Component<ViewProps> {

    public render() {
        const { title, body } = this.props
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{title}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="view-body">
                    {body}
                </IonContent>
                <div>
                    <EmergencyButton />
                </div>
            </IonPage>
        )
    }
}