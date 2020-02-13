import React from "react"
import { IonSlides, IonSlide } from '@ionic/react'
import { classNames } from "../../utils/system"
import ScrollTile from "../scroll-tile"
import "./index.scss"

export interface slideCards {
    label: string
    element: JSX.Element
}

export interface SlideProps {
    slides: Array<slideCards>,
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
        let slidesOpts = {
            loop: loop,
            slidesPerView: slidesPerView,
        }
        return (
            <IonSlides options={slidesOpts}>
                {
                    slides.map((slide) => 
                            <IonSlide>
                                <ScrollTile label={slide.label} fillWidth={true}>
                                    {slide.element}
                                </ScrollTile>
                            </IonSlide>
                    )
                }
            </IonSlides>
        )
    }
}
