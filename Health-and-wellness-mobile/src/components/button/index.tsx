import {
    IonButton
} from '@ionic/react'

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

const Button: React.