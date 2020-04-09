import React from "react"
import { inject, observer } from "mobx-react"
import View from "./view_models/view"
import ScrollTile from "../components/scroll-tile"
import Store from "../stores/store"
import { GuideTile } from "../stores/models/data_models"
import { IonList } from "@ionic/react"
import Slides, { Slide } from "../components/horizontal-slides"

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
                {this.renderGuideTiles()}
            </>
        )
        return (
            <View title="I have a student who...." body={body} route="/home" />
        )
    }

    private renderGuideTiles() {
        const { store } = this.props
        const tiles = store.data.guideTiles
        return tiles.map((tile, idx) => {
            return (
                <ScrollTile subscript={tile.subscript} label={tile.label} enableModal={true} key={idx}>
                    <div>
                        {tile.description}
                    </div>
                    <div>
                        {this.renderVideo(tile)}
                    </div>
                    <div>
                        {this.renderWarningSigns(tile)}
                    </div>
                    <div>
                        {this.renderDosDonts(tile)}
                    </div>
                </ScrollTile>
            )
        })
    }

    private renderVideo(tile: GuideTile) {
        return ('')
    }

    private renderWarningSigns(tile: GuideTile) {
        return tile.warningSigns.map((sign, idx) => {
            return (
                <div key={idx}>
                    - {sign}
                </div>
            )
        })
    }

    private renderDosDonts(tile: GuideTile) {
        const slides = tile.dosDonts.map((item, idx) => {
            const doBull = item.doBullets.map((d, num) => {
                return (
                    <div key={num}>
                        {d}
                    </div>
                )
            })
            const dontBull = item.dontBullets.map((d, num) => {
                return (
                    <div key={num}>
                        {d}
                    </div>
                )
            })
            return (
                {
                    title: tile.label,
                    body: (
                        <div key={idx}>
                            {item.do}
                            {doBull}
                            {item.dont}
                            {dontBull}
                        </div>
                    )
                }
            )
        })

        return (
            <div>
                <IonList>
                    <Slides slides={slides} />
                </IonList>
            </div>
        )
    }
}