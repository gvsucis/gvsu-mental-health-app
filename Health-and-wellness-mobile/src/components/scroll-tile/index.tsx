import React, { ReactChild } from "react"
import { IonRouterLink, IonList, } from '@ionic/react'
import { classNames } from "../../utils/system"
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import Modal from "../modal"
import InfiniteScroll from "../infinite-scroll"
import Slides from "../horizontal-slides"

import './index.scss'
import { ResourceTiles } from "../../stores/models/data_models"

export interface ScrollTileProps {
  label: string
  link?: string
  subscript?: string
  enableModal: boolean
  fillWidth: boolean
  description: string
  homeView: boolean
}

@observer
export default class ScrollTile extends React.Component<ScrollTileProps> {

  @observable private open: boolean = false

  public static defaultProps = {
    enableModal: false,
    fillWidth: false,
    open: false,
    onOpen: () => { },
    description: 'This is some sample input for you to see how this component looks',
    homeView: false
  }

  public render() {
    const { label, fillWidth, enableModal, link, subscript, homeView } = this.props
    const classes = classNames('scroll-tile', [
      { name: "scroll-tile--fill", include: fillWidth },
      { name: "scroll-tile__home", include: homeView }
    ])

    const arr: ResourceTiles[] = []

    const subscriptClass = subscript ? 'scroll-tile__heading' : ''
    const titleClass = homeView ? 'scroll-tile__home--title' : ''

    return (
      <div className={classes}>
        <IonRouterLink routerLink={link ? link : undefined}>
          <div className="scroll-tile__button" onClick={this.handleClickScrollTile} >
            <div className={subscriptClass}>
              {subscript ?
                <div className="scroll-tile__subscript">
                  {subscript}
                </div> : null
              }
              <span className={titleClass}>{label}</span>
            </div>
          </div>
        </IonRouterLink>
        {enableModal ?
          <Modal showModal={this.open} onToggleModalVisible={this.handleClickScrollTile}>
            {this.props.description}
            <IonList>
              <Slides slides={arr} />
            </IonList>
            <InfiniteScroll threshold={'100px'} infinite={this.onInfinite} />
          </Modal> : null
        }
      </div>
    )
  }

  private onInfinite = (e: CustomEvent<void>) => {
    (e.target as HTMLIonInfiniteScrollElement).complete()
  }

  private handleClickScrollTile = () => {
    const { enableModal } = this.props
    if (enableModal) {
      this.open = !this.open
    }
  }
}