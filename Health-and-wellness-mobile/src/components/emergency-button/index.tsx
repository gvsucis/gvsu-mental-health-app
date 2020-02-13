import React from "react"
import Button from "../button"
import { inject, observer } from "mobx-react"

@inject('store')
@observer
export default class EmergencyButton extends React.Component {
    public render() {
        return (
            <Button onClick={this.handlebuttonClick} fillWidth={true}>
                I have an Emergency
          </Button>
        )
    }

    private handlebuttonClick = () => {
        console.log("In case of Emergency")
    }
}