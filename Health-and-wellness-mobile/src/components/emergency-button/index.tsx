import React from "react"
import Button from "../button"
import { inject, observer } from "mobx-react"
import { action, observable } from "mobx"
import Modal from "../modal"

@observer
export default class EmergencyButton extends React.Component {

    @observable private modalVisible: boolean = false

    public render() {
        return (<>
            <Button onClick={this.handleToggleModalVisible} fillWidth={true}>
                I have an Emergency
          </Button>
          { this.modalVisible ?
            <Modal showModal={true} onToggleModalVisible={this.handleToggleModalVisible} title="Emergency">
            In case of Emergency...
            
            </Modal> : null
          }
          </>
        )
    }

    private handleToggleModalVisible = () => {
        this.modalVisible = !this.modalVisible
    }
}