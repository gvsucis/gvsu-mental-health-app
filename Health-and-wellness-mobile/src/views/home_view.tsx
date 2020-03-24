import React from "react"
import View from "./view_models/view"
import { inject } from "mobx-react"
import ScrollTile from "../components/scroll-tile"
import Store from "../stores/store"

import './views.scss'

export interface ViewProps {
    store: Store
}

@inject('store')
export default class HomeView extends React.Component<ViewProps> {

    public static defaultProps = {
        store: null
    }

    public render() {
        const tiles = this.props.store.data.homeTiles
        const body = (
            <div className="home-view">
                <div className="home-view__wrappers">
                    <ScrollTile label={tiles[0].label} link={tiles[0].link} homeView={true} />
                    <ScrollTile label={tiles[1].label} link={tiles[1].link} homeView={true} />
                    <ScrollTile label={tiles[2].label} link={tiles[2].link} homeView={true} />
                </div>
                <div className="home-view__wrappers ">
                    <div className="home-view__dock">
                        <ScrollTile label={tiles[3].label} link={tiles[3].link} homeView={true}/>
                        <ScrollTile label={tiles[4].label} link={tiles[4].link} homeView={true}/>
                    </div>
                </div>
            </div>
        )
        return (
            <View title="Mental Health Guide" body={body} route="/home" homePage={true} enableEmergencyModal={false}/>
        )
    }
}