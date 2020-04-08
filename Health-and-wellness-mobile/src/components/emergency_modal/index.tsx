import React from "react"
import { inject, observer } from "mobx-react"
import Modal from "../modal"

export interface Props {
onToggleVisible: (visible: boolean) => void
}

@observer
export default class EmergencyModal extends React.Component<Props> {
    
    public render() {
        return (
            <Modal showModal={true} onToggleModalVisible={this.props.onToggleVisible}>
                In case of Emergency...
            </Modal>
        )
    }
}