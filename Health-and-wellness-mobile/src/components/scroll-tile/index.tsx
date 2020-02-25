import React from "react"
import { IonRouterLink, IonList, } from '@ionic/react'
import { classNames } from "../../utils/system"
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import Modal from "../modal"
import InfiniteScroll from "../infinite-scroll"
import Slides from "../horizontal-slides"

import './index.scss'

export interface ScrollTileProps {
  label: string
  link?: string
  subscript?: string
  enableModal: boolean
  fillWidth: boolean
  description: string
}

@observer
export default class ScrollTile extends React.Component<ScrollTileProps> {

  @observable private open: boolean = false

  public static defaultProps = {
    enableModal: false,
    fillWidth: false,
    open: false,
    onOpen: () => { },
    description: 'This is some sample input for you to see how this component looks'
  }

  public render() {
    const { label, fillWidth, enableModal, link, subscript } = this.props

    const classes = classNames("scroll-tile", [{ name: "scroll-tile--fill", include: fillWidth }])

    let arr = [
      {
        label: "Resource 1",
        element: (
          <div>
            this is a short explanation
              </div>)
      }, {
        label: "Resource 2",
        element: (
          <div>
            this is a short explanation
              </div>)
      }, {
        label: "Resource 3",
        element: (
          <div>
            this is a short explanation
              </div>)
      }, {
        label: "Resource 4",
        element: (
          <div>
            this is a short explanation
              </div>)
      }]

    const subscriptClass = subscript ? "scroll-tile__heading" : ''

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
              <span>{label}</span>
            </div>
          </div>
        </IonRouterLink>
        {enableModal ?
          <Modal showModal={this.open} onToggleModalVisible={this.handleClickScrollTile}>
            Anxiety is defined as..... but may be also be related to (synonyms)
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
    else {

    }
  }

}