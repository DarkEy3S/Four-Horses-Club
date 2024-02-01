import { carouselBuildControls } from "./caruselBuildControls.js"
import { buildCarousel } from "./carusel.js"
export const carousel = () => {



    const contentClass = 'carousel-participants__item'
    const carouselContainerClass = 'carousel-participants__content'
    const carouselClass = 'carousel-participants'

    const carousel = document.querySelector(`.${carouselClass}`)

    const controls = carouselBuildControls()
    carousel.appendChild(controls)
    const carouselArrowPrev = controls.querySelector('.prev')
    const carouselArrowNext = controls.querySelector('.next')
    const dotsContainer = controls.querySelector('.dots')


    buildCarousel(contentClass, carouselContainerClass, controls, carouselArrowNext, carouselArrowPrev, 1)

}
