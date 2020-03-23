import React from "react"
import { inject, observer } from "mobx-react"
import View from "./view_models/view"
import ScrollTile from "../components/scroll-tile"
import Store from "../stores/store"

export interface ViewProps {
    store: Store
}

@inject('store')
@observer
export default class GuideView extends React.Component<ViewProps> {

    public static defaultProps = {
        store: null
    }

    public render() {
        const body = (
            <>
                <div className="view__header">
                    I have a student who....
            </div>
                {this.renderGuideTiles()}
            </>
        )
        return (
            <View title="Student Support Aid" body={body} route="/home" />
        )
    }

    private renderGuideTiles = () => {
        const { store } = this.props
        const tiles = store.data.guideTiles
        return tiles.map((tile) => {
            return (
                <ScrollTile subscript={tile.subscript} label={tile.label} enableModal={true}/>
            )
        })
    }
}