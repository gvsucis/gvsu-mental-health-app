import React from 'react'
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react'

import './index.scss'

export type ButtonType = "button" | "reset" | "submit"

export interface cardProps {
    title?: string
}

export default class Card extends React.Component<cardProps> {

    public render() {

        const { title } = this.props

        return (
            <IonCard className="card" >
                <IonCardHeader>
                    {
                        title ?
                            <IonCardTitle>{title}</IonCardTitle>
                            : null
                    }
                </IonCardHeader>
                <IonCardContent>
                    {this.props.children}
                </IonCardContent>
            </IonCard>
        )
    }
}