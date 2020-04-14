import React from "react"
import { inject, observer } from "mobx-react"
import View from "./view_models/view"
import ScrollTile from "../components/scroll_tile"
import Store from "../stores/store"
import { GuideTile } from "../stores/models/data_models"
import { IonList } from "@ionic/react"
import Slides from "../components/horizontal-slides"
import InfiniteScroll from "../components/infinite-scroll"
import ResourceSlideDock from "../components/resource_slider_dock"

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
                    <div className="guide-view__modal-header">
                        Description
                    </div>
                    <div className="guide-view__modal">
                        {tile.description}
                    </div>
                    <div>
                        {this.renderVideo(tile)}
                    </div>
                    <div className="guide-view__modal-header">
                        Warning Signs
                    </div>
                    <div className="guide-view__modal">
                        {this.renderWarningSigns(tile)}
                    </div>
                    <div className="guide-view__modal-header">
                        {"Do's & Don'ts"}
                    </div>
                    <div>
                        {this.renderDosDonts(tile)}
                    </div>
                    <div className="guide-view__modal-header">
                        Relevant Resources
                    </div>
                    <div>
                        {this.renderResources(tile)}
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
                <div className="guide-view__warning-signs" key={idx}>
                    - {sign}
                </div>
            )
        })
    }

    private renderDosDonts(tile: GuideTile) {
        const slides = tile.dosDonts.map((item, idx) => {
            const doBull = item.doBullets.map((d, num) => {
                return (
                    <div key={num} className="guide-view__modal-bullets">
                        - {d}
                    </div>
                )
            })
            const dontBull = item.dontBullets.map((d, num) => {
                return (
                    <div key={num} className="guide-view__modal-bullets">
                        - {d}
                    </div>
                )
            })
            return (
                {
                    body: (
                        <div key={idx}>
                            <div className="guide-view__modal-text">
                                <div>
                                    <span className="guide-view__modal-subheader">Do:</span> {item.do}
                                </div>
                                <div>
                                    {doBull}
                                </div>
                            </div>
                            <div className="guide-view__modal-text">
                                <div>
                                    <span className="guide-view__modal-subheader">Dont:</span> {item.dont}
                                </div>
                                <div>
                                    {dontBull}
                                </div>
                            </div>
                        </div>
                    )
                }
            )
        })

        return (
            <div>
                <IonList>
                    <Slides slides={slides} />
                    <InfiniteScroll threshold={'100px'} infinite={this.onInfinite} />
                </IonList>
            </div>
        )
    }

    private renderResources(tile: GuideTile) {
        const resources = this.props.store.data.guideResourceTiles(tile)
        return (
            <ResourceSlideDock resources={resources} />
        )
    }

    private onInfinite = (e: CustomEvent<void>) => {
        (e.target as HTMLIonInfiniteScrollElement).complete()
    }
}