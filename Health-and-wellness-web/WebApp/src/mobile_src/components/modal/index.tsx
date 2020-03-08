
import React from 'react'
import { IonModal, IonContent, IonButton } from '@ionic/react'

import './index.scss'
import Button from '../button'

export interface ModalProps {
    showModal: boolean
    forceModal: boolean
    onToggleModalVisible: (visible: boolean) => void
}

export default class Modal extends React.Component<ModalProps> {

    public static defaultProps = {
        showModal: false,
        forceModal: false,
        onToggleModalVisible: () => { }
    }

    public render() {
        return (
            <IonContent>
                <IonModal isOpen={this.props.showModal}>
                    {this.props.children}
                    {!this.props.forceModal ?
                        <Button onClick={this.toggleModalVisible(false)}>
                            Close Modal
                    </Button> : null
                    }
                </IonModal>
            </IonContent>
        )
    }

    private toggleModalVisible = (visible: boolean) => {
        const { onToggleModalVisible } = this.props
        return (() => {
            onToggleModalVisible(visible)
        })
    }

}