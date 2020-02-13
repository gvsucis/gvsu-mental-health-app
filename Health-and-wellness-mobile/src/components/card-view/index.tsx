import React from 'react'
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import { type } from 'os';


export type ButtonType = "button" | "reset" | "submit";

export interface cardProps{
    title: string;
    subtitle: string;
    button?: boolean;
    type?: ButtonType;
    href?: string;
    target?: string;
}


export default class Card extends React.Component<cardProps> {
    public static defaultProps = {
        type: null,
        target: null,
        button: false,
        href: null
    }


    public render() {
        
        const {title, subtitle, button, href, target, type} = this.props;

        return (
            <IonCard button={button} href={href} target={target} type={type}>
                <IonCardHeader>
                    <IonCardTitle>{title}</IonCardTitle>
                    <IonCardSubtitle>{subtitle}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    {this.props.children}
                </IonCardContent>
            </IonCard>
        );
    }
}