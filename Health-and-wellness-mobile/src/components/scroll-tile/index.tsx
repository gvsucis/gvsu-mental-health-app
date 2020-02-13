import React from "react"
import { IonItem, IonIcon, } from '@ionic/react'
import { arrowDown } from "ionicons/icons"
import { classNames } from "../../utils/system"
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import './index.scss'
import Modal from "../modal"

export interface ScrollTileProps {
    label: string
    enableModal: boolean
    fillWidth: boolean
    description: string
}

@observer
export default class ScrollTile extends React.Component<ScrollTileProps> {

    @observable private open: boolean = false

    public static defaultProps = {
        enableModal: false,
        fillWidth: false,
        open: false,
        onOpen: () => { },
        description: 'This is some sample input for you to see how this component looks'
    }

    public render() {
        const { label, fillWidth, enableModal } = this.props

        const classes = classNames("scroll-tile", [{ name: "scroll-tile--fill", include: fillWidth }])

        return (
            <div className={classes}>
                <div className="scroll-tile__button" onClick={this.toggleModal}>
                    <span>{label}</span>
                </div>
                {enableModal ?
                    <Modal showModal={this.open} onToggleModalVisible={this.toggleModal}/> : null
                }
            </div>
        )
    }

    private toggleModal = () => {
        this.open = !this.open
    }

}