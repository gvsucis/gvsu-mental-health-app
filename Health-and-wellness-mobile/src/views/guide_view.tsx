import React from "react"
import View from "./view_models/view"
import ScrollTile from "../components/scroll-tile"

export default class GuideView extends React.Component {
    public render() {
        const body = (
            <>
            <div className="view__header">
                I have a student who is feeling...
            </div>
            <ScrollTile label="Anxious" enableModal={true}/>
            <ScrollTile label="Depressed"/>
            <ScrollTile label="Suicidal"/>
            <ScrollTile label="Acting bizarre"/>
            <ScrollTile label="Having outbursts"/>

            </>
        )
        return (
        <View title="Student Support Aid" body={body} route="/home"/>
        )
    }
}