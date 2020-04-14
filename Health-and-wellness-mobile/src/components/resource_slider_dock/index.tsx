import React from "react"
import { ResourceTile } from "../../stores/models/data_models"
import { IonList, IonImg, IonRouterLink, IonIcon } from "@ionic/react"
import Slides from "../horizontal-slides"
import InfiniteScroll from "../infinite-scroll"
import gv from "../../assets/gv_placeholder_logo.jpg"
import { call, link, mail } from 'ionicons/icons'


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
                        {this.renderImage(item)}
                        {this.renderContact(item)}
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

    private renderImage(tile: ResourceTile) {
        const tileLocation = tile.picture ? `../../assets/resource_photos/${tile.picture}` : gv
        return (
            <IonImg className="resource-tile__image" src={tileLocation} />
        )
    }

    private renderContact(tile: ResourceTile) {
        return (
            <div className="resource-tile__contact">
                {tile.link ?
                    <div>
                        <IonIcon className="resource-tile__icon" icon={link} />
                        <IonRouterLink href={tile.link} >
                            Visit site
                </IonRouterLink>
                    </div> : null
                }
                {tile.phone ?
                    <div >
                        <a href={`tel:${tile.phone}`}>
                            <IonIcon icon={call} className="resource-tile__icon" />
                            {tile.phone}
                        </a>
                    </div> : null
                }
                {tile.email ?
                    <a href={`mailto:${tile.email}`}>
                        <div>
                            <IonIcon icon={mail} className="resource-tile__icon" />
                            {tile.email}
                        </div>
                    </a> : null
                }
            </div>
        )
    }

    private onInfinite = (e: CustomEvent<void>) => {
        (e.target as HTMLIonInfiniteScrollElement).complete()
    }
}
