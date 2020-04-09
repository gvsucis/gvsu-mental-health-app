import React from "react"
import { IonRouterLink, IonList, } from '@ionic/react'
import { classNames } from "../../utils/system"
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import Modal from "../modal"
import InfiniteScroll from "../infinite-scroll"
import Slides from "../horizontal-slides"
import { ResourceTiles } from "../../stores/models/data_models"

import './index.scss'

export interface ScrollTileProps {
  label: string
  link?: string
  subscript?: string
  onClick?: () => void
  enableModal?: boolean
  enableDropdown?: boolean
  fillWidth: boolean
  description: string
  homeView: boolean
}

@observer
export default class ScrollTile extends React.Component<ScrollTileProps> {

  @observable private modalOpen: boolean = false
  @observable private dropdownOpen: boolean = false

  public static defaultProps = {
    enableModal: false,
    fillWidth: false,
    open: false,
    onOpen: () => { },
    description: 'This is some sample input for you to see how this component looks',
    homeView: false
  }

  public render() {
    const { label, fillWidth, link, subscript, homeView } = this.props
    const classes = classNames('scroll-tile', [
      { name: "scroll-tile--fill", include: fillWidth },
      { name: "scroll-tile__home", include: homeView }
    ])

    const arr: ResourceTiles[] = []

    const subscriptClass = subscript ? 'scroll-tile__heading' : ''
    const titleClass = homeView ? 'scroll-tile__home--title' : ''

    return (
      <>
        <div className={classes} onClick={this.handleOpenTile} >
          <IonRouterLink routerLink={link ? link : undefined}>
            <div className="scroll-tile__button" >
              {subscript ?
                <div className={subscriptClass}>
                  <div className="scroll-tile__subscript">
                    {subscript}
                  </div>
                </div> : null
              }
              <div className={titleClass}>{label}</div>
            </div>
          </IonRouterLink>
          {this.dropdownOpen ?
            <div>
              {this.props.children}
            </div> : null
          }
        </div>

        {this.modalOpen ?
          <Modal showModal={true} onToggleModalVisible={this.handleClickScrollTile}>
            {this.props.description}
            <IonList>
              <Slides slides={arr} />
            </IonList>
            <InfiniteScroll threshold={'100px'} infinite={this.onInfinite} />
          </Modal> : null
        }
      </>
    )
  }

  private onInfinite = (e: CustomEvent<void>) => {
    (e.target as HTMLIonInfiniteScrollElement).complete()
  }

  private handleOpenTile = () => {
    this.handleClickScrollTile(true)
  }

  private handleClickScrollTile = (visible: boolean) => {
    const { onClick, enableModal, enableDropdown } = this.props
    if (onClick) {
      onClick()
    }
    else if (enableModal) {
      this.modalOpen = !this.modalOpen
    }
    else if (enableDropdown) {
      this.dropdownOpen = !this.dropdownOpen
    }
  }
}