import React from "react"
import { inject, observer } from "mobx-react"
import Modal from "../modal"
import Store from "../../stores/store"
import { EmergencyInfo } from "../../stores/models/data_models"

import "./index.scss"

export interface Props {
    onToggleVisible: (visible: boolean) => void
    store: Store
}

@inject('store')
@observer
export default class EmergencyModal extends React.Component<Props> {

    public static defaultProps = {
        store: null
    }

    public render() {
        return (
            <Modal showModal={true} onToggleModalVisible={this.toggleModal} header="Emergency Support">
                <div className="emergency-modal">
                    <div>
                        {this.renderBody()}
                    </div>
                </div>
            </Modal>
        )
    }

    private toggleModal = (visible: boolean) => {
        if (this.props.onToggleVisible) {
            this.props.onToggleVisible(visible)
        }
    }

    private renderBody() {
        const data = this.props.store.data
        const during = data.emergencyBusinessHourInfo
        const after = data.emergencyAfterHourInfo

        return (
            <>
                {this.renderDescription()}
                {this.renderConcerned()}
                {this.renderSection(during)}
                {this.renderSection(after)}
            </>
        )
    }

    private renderDescription() {
        const data = this.props.store.data
        const header = data.emergencyDescriptionHeader
        const bullets = data.emergencyDescriptionBullets
        const footer = data.emergencyDescriptionFooter

        const body = bullets.map((item, idx) => {
            return (
                <div key={idx}>
                    {`- ${item}`}
                </div>
            )
        })

        return (
            <>
                <div className="emergency-modal__description">
                    {header}
                </div>
                <div className="emergency-modal__description">
                    {body}
                </div>
                <div className="emergency-modal__description">
                    {footer}
                </div>
            </>
        )
    }

    private renderConcerned() {
        const data = this.props.store.data
        const header = data.emergencyConcernHeader
        const bullets = data.emergencyConcernBullets

        const body = bullets.map((item, idx) => {
            return (
                <div key={idx}>
                 `- ${item}`   
                </div>
                
            )
        })

        return (
            <div className="emergency-modal__section">
                <div className="emergency-modal__header">
                    <span>{header}</span>
                </div>
                <div>
                    {body}
                </div>
            </div>
        )
    }

    private renderSection(info: EmergencyInfo) {
        const body = (info.body.map((item, idx) => {
            return (
                <div key={idx}>
                    {`- ${item.body}`}
                </div>
            )
        }))
        return (
            <div className="emergency-modal__section">
                <div className="emergency-modal__header">
                    <span>{info.title}</span>
                </div>
                <span>You can: </span>
                <div>
                    {body}
                </div>
            </div>
        )
    }
}