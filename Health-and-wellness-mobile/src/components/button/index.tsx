import { IonButton } from '@/ionic/react'
import * as React from "react"

import '@/components/button/index.scss'

export type ButtonType = 'icon' | 'standard'
export type ButtonColor = 'primary' | 'secondary'
export type ButtonFill = 'opaque' | 'outline' | 'clear'

export interface ButtonProps {
    type: ButtonType
    color: ButtonColor
    fill: ButtonFill
    busy?: boolean
    disabled?: boolean
    onClick: () => void
}

export default class Button extends React.Component<ButtonProps> {

    public render() {
        return (
            <div>
                <IonButton onClick={this.props.onClick}>
                    {this.props.children}
                </IonButton>
            </div>
        )
    }
}