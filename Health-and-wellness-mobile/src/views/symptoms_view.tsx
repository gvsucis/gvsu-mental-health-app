import React from "react"
import View from "./view_models/view"

export default class SymptomsView extends React.Component {
    public render() {
        const body = (
            <>
            </>
        )
        return (
        <View title="Symptoms" body={body} route="/symptoms"/>
        )
    }
}