import React from "react"
import View from "./view_models/view"
import ScrollTile from "../components/scroll-tile"

export default class HomeView extends React.Component {
    public render() {
        const body = (
            <>
          <ScrollTile label="I have a student that I am concerned about" link="/guide"/>
          <ScrollTile label="Classroom techniques and resources"/>
          <ScrollTile label="Campus resources" link="/resources"/>
            </>
        )
        return (
        <View title="Mental Health Guide" body={body} route="/home" homePage={true}/>
        )
    }
}