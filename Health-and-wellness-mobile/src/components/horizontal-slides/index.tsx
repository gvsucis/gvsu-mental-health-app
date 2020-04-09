import React from "react"
import { IonSlides, IonSlide } from '@ionic/react'
import ScrollTile from "../scroll-tile"
import "./index.scss"
import Card from "../card"

export interface Slide {
    title?: string
    body: JSX.Element
}

export interface SlideProps {
    slides: Slide[],
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
                    slides.map((slide, idx) =>
                        <IonSlide key={idx}>
                            <Card title="card" >
                            </Card>
                            {/* <ScrollTile label={slide.title || 'sample'} fillWidth={true}>
                                {slide.body}
                            </ScrollTile> */}
                        </IonSlide>
                    )
                }
            </IonSlides>
        )
    }
}
