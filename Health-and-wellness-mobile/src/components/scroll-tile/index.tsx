import React from "react";
import { IonItem, IonCard, IonIcon, IonCardHeader, IonCardContent } from '@ionic/react'
import { arrowDown } from "ionicons/icons";
import { classNames } from "../../utils/system";

import './index.scss'

export interface ScrollTileProps {
    label: string
    enableDropdown: boolean
    description: string
}

export default class ScrollTile extends React.Component<ScrollTileProps> {

    private open: boolean = true

    public static defaultProps = {
        enableDropdown: false,
        open: false,
        onOpen: () => { },
        description: ''
    }

    public render() {
        const { enableDropdown, description, label } = this.props
        const IconClass = classNames('scroll-tile__icon', [{ name: "scroll-tile__icon--open", include: this.open }])
        return (
            <IonItem className="scroll-title__label" onClick={this.handleClickArrow}>
                <div className="scroll-tile">
                    {label}
                    {enableDropdown ?
                        <IonIcon slot="end" color="medium" icon={arrowDown} className={IconClass} />
                        : null
                    }
                    {enableDropdown && this.open ?
                        <div className="scroll-tile__description">
                            {description}
                    </div> : null
                    }
                </div>
            </IonItem>
        )
    }

    private handleClickArrow = () => {
        this.open = !this.open
        console.log(this.open + this.props.label)
    }

}