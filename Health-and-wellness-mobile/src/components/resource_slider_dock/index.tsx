import React from "react"
import { ResourceTile } from "../../stores/models/data_models"
import { IonList } from "@ionic/react"
import Slides from "../horizontal-slides"
import InfiniteScroll from "../infinite-scroll"

import "./index.scss"

export interface ResourceSlideDockProps {
    resources: ResourceTile[]
}

export default class ResourceSlideDock extends React.Component<ResourceSlideDockProps> {
    public static defaultProps = {
        loop: true,
        slidesPerView: 1
    }

    public render() {

        const slides = this.props.resources.map((item) => {
            return ({
                title: item.department,
                body: (
                    <>
                        {item.picture}
                        {item.phone}
                        {item.link}
                        {item.email}
                    </>
                )
            }
            )
        })

        return (
            <div>
                <IonList>
                    <Slides slides={slides} />
                </IonList>
                <InfiniteScroll threshold={'100px'} infinite={this.onInfinite} />
            </div>
        )
    }

    private onInfinite = (e: CustomEvent<void>) => {
        (e.target as HTMLIonInfiniteScrollElement).complete()
    }
}
