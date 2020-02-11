import React from "react";
import { IonItem, IonCard, IonIcon, IonCardHeader, IonCardContent } from '@ionic/react'
import { arrowDown } from "ionicons/icons";
import { classNames } from "../../utils/system";
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import './index.scss'

export interface ScrollTileProps {
    label: string
    enableDropdown: boolean
    description: string
}

@observer
export default class ScrollTile extends React.Component<ScrollTileProps> {

    @observable private open: boolean = false

    public static defaultProps = {
        enableDropdown: false,
        open: false,
        onOpen: () => { },
        description: 'This is some sample input for you to see how this component looks'
    }

    public render() {
        const { enableDropdown, description, label } = this.props
        const IconClass = classNames('scroll-tile__icon', [{ name: "scroll-tile__icon--open", include: this.open }])
        console.log(IconClass)
        return (
            <div className="scroll-tile">
                <div className="scroll-tile__button" onClick={this.handleClickArrow}>
                    <IonItem className="scroll-tile__button-label" >
                        {label}
                    </IonItem>
                    {enableDropdown ?
                        <div className="scroll-tile__icon-wrapper">
                            <IonIcon slot="end" color="medium" icon={arrowDown} className={IconClass} />
                        </div> : null
                    }
                </div>
                {enableDropdown && this.open ?
                    <div className="scroll-tile__description">
                        {description}
                    </div> : null
                }
            </div>
        )
    }

    private handleClickArrow = () => {
        this.open = !this.open
        console.log(this.open + this.props.label)
    }

}