import React from 'react';
import { useState } from 'react';
import '../../styles/slider.css'
import Arrow from '../../assets/arrowslider.svg'



function Slider(hebergImage) {
    const sliderData = hebergImage

    const [current, setCurrent] = useState(0) 
    const length = sliderData.photo.length

    const nextSlide = () => {
        setCurrent( current === length - 1 ? 0 : current + 1) 
    }

    const prevSlide = () => {
        setCurrent( current === 0 ? length - 1 : current - 1) 
    }

    if(!Array.isArray(sliderData.photo) || sliderData.photo.length <=0){
        return null
    }

    if( sliderData.photo.length === 1){
        return(
        <div className='sliderStyle'>
            {sliderData.photo.map((slide, index) => {

                return (
                    <div key={index}>
                        {index === current && (<img src={slide} alt={index} key={index} className="sliderImage"/>)}
                        
                    </div>
                    
                )
            })}
        </div>
        )
    }
    return (
        <div className='sliderStyle'>
            <img src={Arrow} className="sliderLeftArrow" alt='Fleche nav slider gauche' onClick={prevSlide}></img>
            <img src={Arrow} className="sliderRightArrow" alt='Fleche nav slider droite' onClick={nextSlide}></img>
            {sliderData.photo.map((slide, index) => {

                return (
                    <div key={index}>
                        {index === current && (<img src={slide} alt={index} key={index} className="sliderImage"/>)}
                        
                    </div>
                    
                )
            })}
            <p className='sliderCounter'>{(current + 1) + "/" + sliderData.photo.length}</p>
        </div>
    );
}

export default Slider;