import React from "react"
import View from "./view_models/view"
import ScrollTile from "../components/scroll-tile"

import './views.scss'

export default class HomeView extends React.Component {
    public render() {
        const body = (
            <div className="home-view">
                <div className="home-view__wrappers">
                    <ScrollTile label="I have a student that I am concerned about" link="/guide" />
                </div>
                <div className="home-view__wrappers ">
                    <ScrollTile label="FAQ" link="/faq" />
                    <div className="home-view__dock">
                        <ScrollTile label="Classroom Techniques" link="/techniques"/>
                        <ScrollTile label="Resources" link="/resources"/>
                    </div>
                </div>
            </div>
        )
        return (
            <View title="Mental Health Guide" body={body} route="/home" homePage={true} />
        )
    }
}