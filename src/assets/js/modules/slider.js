
import { animationSlider } from "./animationSolder.js"




export const buildSlider = (contentClass, sliderContainerClass, dotsContainer, controls, sliderArrowNext, sliderArrowPrev) => {

    const content = document.querySelectorAll(`.${contentClass}`)
    const sliderContainer = document.querySelector(`.${sliderContainerClass}`)


    let oldIndex = 0
    let isHovering = false
    let touchStartX = null
    let isDragging = false


    content.forEach((_, i) => {
        const dot = document.createElement('span')
        dot.classList.add('dot')
        if (i === oldIndex) dot.classList.add('active')
        dotsContainer.appendChild(dot)
    })

    const dots = dotsContainer.querySelectorAll('.dot')




    function updateControls(index) {
        sliderArrowPrev.classList.toggle('disable', index === 0)
        sliderArrowNext.classList.toggle('disable', index === content.length - 1)
    }

    controls.addEventListener('click', (event) => {
        let index = event.target.classList.contains('prev') ? oldIndex - 1 : oldIndex + 1
        index = Math.max(0, Math.min(content.length - 1, index))
        updateControls(index)
        show(index)
    })

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => show(i))
    })


    const show = (index) => {

        dots[oldIndex].classList.remove('active')
        dots[index].classList.add('active')
        content[oldIndex].classList.remove('active')
        content[oldIndex].classList.remove('active')

        animationSlider(oldIndex, index, content, contentClass)
        content[index].classList.add('active')






        oldIndex = index

    }






    show(oldIndex)

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
            index = Math.max(0, Math.min(content.length - 1, index))
            updateControls(index)
            show(index)
            isDragging = false
        }
    }

    const endAction = () => {
        isDragging = false
    }

    sliderContainer.addEventListener('mousedown', startAction)
    sliderContainer.addEventListener('mousemove', moveAction)
    sliderContainer.addEventListener('mouseup', endAction)
    sliderContainer.addEventListener('mouseleave', endAction)
    sliderContainer.addEventListener('touchstart', startAction)
    sliderContainer.addEventListener('touchmove', moveAction)
    sliderContainer.addEventListener('touchend', endAction)
    sliderContainer.addEventListener('mouseenter', () => isHovering = true)
    sliderContainer.addEventListener('mouseleave', () => isHovering = false)
}