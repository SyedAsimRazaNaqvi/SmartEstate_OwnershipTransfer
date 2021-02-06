import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"

const ImageSlider = ({slides}) => {
    const[current, setCurrent] = useState(0)
    const length = slides.length



    return (
        <section className="slider">
            <FaArrowCircleLeft className="left-arrow" />
            <FaArrowCircleRight className="right-arrow" />
        {SliderData.map((slide, index) => {
            return(
                <img src={slide.mage} alt="house image1" />
            )
        })}
            
        </section>
    )
}

export default ImageSlider