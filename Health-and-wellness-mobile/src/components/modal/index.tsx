
import React from 'react'
import { IonModal, IonContent, IonHeader } from '@ionic/react'

import './index.scss'
import Button from '../button'
import { classNames } from '../../utils/system'

export interface ModalProps {
    showModal: boolean
    forceModal: boolean
    title: string
    bodyClassName?: string
    headerClassName?: string
    onToggleModalVisible: (visible: boolean) => void
}

export default class Modal extends React.Component<ModalProps> {

    public static defaultProps = {
        showModal: false,
        forceModal: false,
        title: "",
        onToggleModalVisible: () => { }
    }

    public render() {

        const { showModal, forceModal, title, bodyClassName, headerClassName, onToggleModalVisible} = this.props;

        const modalClass = classNames('modal-wrapper',
        [{ name: bodyClassName!, include: bodyClassName !== null || bodyClassName !== undefined}
        ]);

        const headerClass = classNames('header-wrapper',
        [{ name: headerClassName!, include: headerClassName !== null || headerClassName !== undefined}
        ]);

        if (title === "") {
            return (
                <IonContent>
                    <div className={modalClass}>
                    <IonModal isOpen={this.props.showModal}>
                        {this.props.children}
                        {!this.props.forceModal ?
                            <Button onClick={this.toggleModalVisible(false)} className="button">
                                Close
                        </Button> : null
                        }
                    </IonModal>
                    </div>
                </IonContent>
            );
        } else {
             return (
                <IonContent>
                    <div className={modalClass}>
                    <IonModal isOpen={this.props.showModal}>
                        <IonHeader className={headerClass}>{this.props.title}</IonHeader>
                        {this.props.children}
                        {!this.props.forceModal ?
                            <Button onClick={this.toggleModalVisible(false)} className="button">
                                Close
                        </Button> : null
                        }
                    </IonModal>
                    </div>
                </IonContent>
            );
        }
    }

    private toggleModalVisible = (visible: boolean) => {
        const { onToggleModalVisible } = this.props
        return (() => {
            onToggleModalVisible(visible)
        })
    }
}