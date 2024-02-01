export const carouselBuildControls = () => {

    let controls = document.createElement('div')
    controls.className = 'carousel__controls controls'
    let carouselArrowPrev = document.createElement('div')
    carouselArrowPrev.className = 'prev controls__item'
    let dotsContainer = document.createElement('div')
    dotsContainer.className = 'dots controls__item '
    dotsContainer.id = 'slide-counter'
    let carouselArrowNext = document.createElement('div')
    carouselArrowNext.className = 'next controls__item'
    controls.appendChild(carouselArrowPrev)
    controls.appendChild(dotsContainer)
    controls.appendChild(carouselArrowNext)
    return controls

}