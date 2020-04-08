import React from "react"
import View from "./view_models/view"
import { inject, observer } from "mobx-react"
import ScrollTile from "../components/scroll-tile"
import Store from "../stores/store"

import './views.scss'
import { observable } from "mobx"
import EmergencyModal from "../components/emergency_modal"

export interface ViewProps {
    store: Store
}

@inject('store')
@observer
export default class HomeView extends React.Component<ViewProps> {

    @observable private emergencyModalOpen: boolean = false

    public static defaultProps = {
        store: null
    }

    public render() {
        const tiles = this.props.store.data.homeTiles
        const body = (
            <div className="home-view">
                <div className="home-view__wrappers">
                    <ScrollTile label={tiles[0].label} link={tiles[0].link} homeView={true} />
                    <ScrollTile label={tiles[2].label} link={tiles[2].link} homeView={true}
                        enableModal={true} onClick={this.toggleEmergencyModalOpen} />
                </div>
                <div className="home-view__wrappers ">
                    <ScrollTile label={tiles[1].label} link={tiles[1].link} homeView={true} />
                    <div className="home-view__dock">
                        <ScrollTile label={tiles[3].label} link={tiles[3].link} homeView={true} />
                        <ScrollTile label={tiles[4].label} link={tiles[4].link} homeView={true} />
                    </div>
                </div>
                {this.emergencyModalOpen ?
                    <EmergencyModal onToggleVisible={this.toggleEmergencyModalOpen} /> : null
                }
            </div>
        )
        return (
            <View title="Mental Health Guide" body={body} route="/home" enableEmergencyModal={false} />
        )
    }

    private toggleEmergencyModalOpen() {
        this.emergencyModalOpen = !this.emergencyModalOpen
    }
}