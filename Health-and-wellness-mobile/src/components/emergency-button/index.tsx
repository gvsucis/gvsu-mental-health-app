import React from "react"
import Button from "../button"
import {observer } from "mobx-react"
import { action, observable } from "mobx"
import Modal from "../modal"
import EmergencyModal from "../emergency_modal"

@observer
export default class EmergencyButton extends React.Component {

    @observable private modalVisible: boolean = false

    public render() {
        return (<>
            <Button onClick={this.handleToggleModalVisible} fillWidth={true}>
                I have an Emergency
          </Button>
          { this.modalVisible ?
           <EmergencyModal onToggleVisible={this.handleToggleModalVisible}/> : null
          }
          </>
        )
    }

    @action
    private handleToggleModalVisible = () => {
        this.modalVisible = !this.modalVisible
    }
}