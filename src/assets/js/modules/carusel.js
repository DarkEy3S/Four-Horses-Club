
import { animationSlider } from "./animationSolder.js"



export const buildCarousel = (contentClass, carouselContainerClass, controls) => {
    const content = document.querySelectorAll(`.${contentClass}`)
    const carouselContainer = document.querySelector(`.${carouselContainerClass}`)

    let oldIndex = 0
    let isHovering = false
    let touchStartX = null
    let isDragging = false
    let autoPlayInterval
    let index = 0


    const autoPlay = () => {
        if (!isHovering) {
            if (index == content.length) {
                index = 0
            }

            index = oldIndex + 1
            index = index % content.length
            if (document.body.clientWidth < 768) {
                if (index == content.length) {
                    index = 0
                }
                if (index == content.length) {
                    index = 3

                }
                else {
                    if (index == content.length - 2) {
                        index = 0
                    }
                    if (index == content.length - 1) {
                        index = 3
                    }

                }
                show(index)
            }
        }
    }

    const startAutoPlay = () => {
        autoPlayInterval = setInterval(autoPlay, 5000)  // adjust the time as needed
    }

    const stopAutoPlay = () => {
        clearInterval(autoPlayInterval)
    }

    controls.addEventListener('click', (event) => {
        let index = event.target.classList.contains('prev') ? oldIndex - 1 : oldIndex + 1
        index = (index + content.length) % content.length

        if (document.body.clientWidth < 768) {

            if (index == content.length) {
                index = 0
            }
            if (index == content.length) {
                index = 3

            }
        } else {
            if (index == content.length - 2) {
                index = 0
            }
            if (index == content.length - 1) {
                index = 3
            }

        }

        show(index)
        stopAutoPlay()
        startAutoPlay()
    })

    let offset = 33
    const show = (index) => {
        // Update slide counter
        if (document.body.clientWidth < 768) {
            const slideCounter = document.getElementById('slide-counter')
            slideCounter.textContent = `${index + 1} / ${content.length}`
        } else {
            const slideCounter = document.getElementById('slide-counter')
            slideCounter.textContent = `${index + 1} / ${content.length - 2}`

        }


        // Calculate offset based on index and total number of slides
        if (index >= 0) {


            if (document.body.clientWidth < 768) {
                offset = index * 100
            } else {
                offset = (((index + 1) / content.length * 2) * 100) - 33

            }
            carouselContainer.style.left = -offset + '%'

            oldIndex = index
        }
    }
    show(oldIndex)
    startAutoPlay()

    const startAction = (event) => {
        isDragging = true
        touchStartX = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX
    }

    const moveAction = (event) => {
        if (!isDragging) return
        const touchEndX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX
        const diff = touchStartX - touchEndX
        if (Math.abs(diff) > 50) {
            let index = diff > 0 ? oldIndex + 1 : oldIndex - 1
            index = (index + content.length) % content.length
            if (document.body.clientWidth < 768) {

                if (index == content.length) {
                    index = 0
                }
                if (index == content.length) {
                    index = 3

                }
            } else {
                if (index == content.length - 2) {
                    index = 0
                }
                if (index == content.length - 1) {
                    index = 3
                }

            }
            show(index)
            stopAutoPlay()
            startAutoPlay()
            isDragging = false
        }
    }

    const endAction = () => {
        isDragging = false
    }

    carouselContainer.addEventListener('mousedown', startAction)
    carouselContainer.addEventListener('mousemove', moveAction)
    carouselContainer.addEventListener('mouseup', endAction)
    carouselContainer.addEventListener('mouseleave', endAction)
    carouselContainer.addEventListener('touchstart', startAction)
    carouselContainer.addEventListener('touchmove', moveAction)
    carouselContainer.addEventListener('touchend', endAction)
    carouselContainer.addEventListener('mouseenter', () => { isHovering = true; stopAutoPlay() })
    carouselContainer.addEventListener('mouseleave', () => { isHovering = false; startAutoPlay() })
}
