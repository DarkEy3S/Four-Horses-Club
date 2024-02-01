import { sliderBuildControls } from "./sliderBuildControls.js"
import { buildSlider } from "./slider.js"


export const sliderPart = () => {
    const contentClass = 'slider-part__item'
    const sliderContainerClass = 'slider-part__content'
    const sliderClass = 'slider-part'

    const slider = document.querySelector(`.${sliderClass}`)

    const controls = sliderBuildControls()
    slider.appendChild(controls)
    const sliderArrowPrev = controls.querySelector('.prev')
    const sliderArrowNext = controls.querySelector('.next')
    const dotsContainer = controls.querySelector('.dots')


    buildSlider(contentClass, sliderContainerClass, dotsContainer, controls, sliderArrowNext, sliderArrowPrev, 1)



}
