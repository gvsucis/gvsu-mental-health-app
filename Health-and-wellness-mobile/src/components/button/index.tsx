import * as React from 'react'
import { IonButton, IonLabel } from '@ionic/react'
import { classNames } from '../../utils/system'

import './index.scss' //scss import

export type ButtonType = 'icon' | 'standard' | 'tabs'
export type ButtonColor = 'primary' | 'secondary'
export type ButtonFill = 'opaque' | 'outline' | 'clear'

export interface ButtonProps {
    type: ButtonType
    color: ButtonColor
    fill: ButtonFill
    busy: boolean
    fillWidth: boolean
    disabled?: boolean
    onClick?: () => void
}

export default class Button extends React.Component<ButtonProps> {

    public static defaultProps = {
        type: 'standard',
        color: 'primary',
        fill: 'opaque',
        busy: false,
        fillWidth: false
    }

    public render() {
        const { onClick, type, fillWidth } = this.props

        const buttonClass = classNames('button-wrapper', 
        [{name: 'button-wrapper__fill-width', include: fillWidth}])
        if (type === 'standard') {
            return (
                <div className={buttonClass}>
                    <IonButton onClick={onClick}>
                    <span>{this.props.children}</span>
                </IonButton>
                </div >
            )
        }
        else if (type === 'icon') {

        }
    }
}