import React from "react"
import { IonSlides, IonSlide } from '@ionic/react'
import ScrollTile from "../scroll-tile"
import { ResourceTiles } from "../../stores/models/data_models"
import "./index.scss"
import Card from "../card-view"

export interface SlideProps {
    slides: Array<ResourceTiles>,
    loop: boolean,
    slidesPerView: number,
}

export default class Slides extends React.Component<SlideProps> {
    public static defaultProps = {
        loop: true,
        slidesPerView: 1
    }

    public render() {
        const { slides, loop, slidesPerView } = this.props
        const slidesOpts = {
            loop: loop,
            slidesPerView: slidesPerView,
        }
        
        return (
            <IonSlides options={slidesOpts}>
                {
                    slides.map((slide) => 
                            <IonSlide>
                                <ScrollTile label={slide.label} fillWidth={true}>
                                    {slide.body}
                                </ScrollTile>
                            </IonSlide>
                    )
                }
            </IonSlides>
        )
    }
}
