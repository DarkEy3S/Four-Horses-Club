export const sliderBuildControls = () => {

    let controls = document.createElement('div')
    controls.className = 'slider__controls controls'
    let sliderArrowPrev = document.createElement('div')
    sliderArrowPrev.className = 'prev controls__item disable'
    let dotsContainer = document.createElement('ul')
    dotsContainer.className = 'dots controls__item'
    let sliderArrowNext = document.createElement('div')
    sliderArrowNext.className = 'next controls__item'
    controls.appendChild(sliderArrowPrev)
    controls.appendChild(dotsContainer)
    controls.appendChild(sliderArrowNext)
    return controls

}