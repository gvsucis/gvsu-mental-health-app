import React from "react";
import Button from "../button";

export default class EmergencyButton extends React.Component {
    public render() {
        return (
            <Button onClick={this.handlebuttonClick} fillWidth={true}>
                In case of EmergencyS
          </Button>
        )
    }

    private handlebuttonClick = () => {
        console.log("In case of Emergency")
      }
}