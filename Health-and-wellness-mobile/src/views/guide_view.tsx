import React from "react"
import View from "./view_models/view"
import ScrollTile from "../components/scroll-tile"
import Slides from "../components/horizontal-slides"
import { IonList } from "@ionic/react"

export default class GuideView extends React.Component {
    public render() {
        let arr = [
            {
              label: "Resource 1",
              element: (
                <div>
                  this is a short explanation
              </div>)
            }, {
              label: "Resource 2",
              element: (
                <div>
                  this is a short explanation
              </div>)
            }, {
              label: "Resource 3",
              element: (
                <div>
                  this is a short explanation
              </div>)
            }, {
              label: "Resource 4",
              element: (
                <div>
                  this is a short explanation
              </div>)
            }]
        const body = (
            <>
            <div className="view__header">
                I have a student who is...
            </div>
            <ScrollTile label="Anxious" enableModal={true}>
                <h1>Anxiety Information</h1>    
                <div>Anxiety is defined as..... but may be also be related to (synonyms)</div>
                <IonList>
                    <Slides slides={arr} />
                </IonList>
            </ScrollTile>
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