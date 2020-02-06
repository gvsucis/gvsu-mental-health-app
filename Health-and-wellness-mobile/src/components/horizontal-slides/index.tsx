import React from "react";
import { IonSlides, IonSlide } from '@ionic/react';
import { classNames } from "../../utils/system";
import ScrollTile from "../scroll-tile";
import "./index.scss";


export interface SlideProps {
    slides: Array<string>,
    loop: boolean,
    slidesPerView: number,
}

export default class Slides extends React.Component<SlideProps> {
    public static defaultProps = {
        loop: true,
        slidesPerView: 4
    }

    public render() {
        const {slides, loop, slidesPerView} = this.props;
        let slidesOpts = {
            loop: loop,
            slidesPerView: slidesPerView,
        };
        return (
            <IonSlides options={slidesOpts}>
            {
                slides.map(slide => 
                    <IonSlide>
                        <ScrollTile label={slide}/>
                    </IonSlide>)
            }
            </IonSlides>
        );
    }
}
