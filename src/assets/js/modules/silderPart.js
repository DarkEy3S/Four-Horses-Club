export const sliderPart = () => {
    const content = document.querySelectorAll('.slider__item')
    const sliderContainer = document.querySelector('.slider__content')
    const slider = document.querySelector('.slider')
    const controls = buildControls()
    slider.appendChild(controls)
    const sliderArrowPrev = controls.querySelector('.prev')
    const sliderArrowNext = controls.querySelector('.next')
    const dotsContainer = controls.querySelector('.dots')

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

    const show = (index) => {
        content[oldIndex].classList.remove('active')
        dots[oldIndex].classList.remove('active')
        animationSlider(oldIndex, index)
        content[index].classList.add('active')
        dots[index].classList.add('active')
        oldIndex = index
    }

    function buildControls() {
        const controls = document.createElement('div')
        controls.className = 'slider__controls controls'
        const sliderArrowPrev = document.createElement('div')
        sliderArrowPrev.className = 'prev controls__item disable'
        const dotsContainer = document.createElement('ul')
        dotsContainer.className = 'dots controls__item'
        const sliderArrowNext = document.createElement('div')
        sliderArrowNext.className = 'next controls__item'
        controls.appendChild(sliderArrowPrev)
        controls.appendChild(dotsContainer)
        controls.appendChild(sliderArrowNext)
        return controls
    }

    function animationSlider(oldIndex, newIndex) {
        const isPrev = newIndex > 0
        const isNext = newIndex < content.length - 1
        const isPrevOld = oldIndex > 0
        const isNextOld = oldIndex < content.length - 1

        if (isPrevOld && oldIndex > 1) content[oldIndex - 1].classList.remove('slider__item-prev')
        if (isPrev && newIndex > 1) content[newIndex - 1].classList.add('slider__item-prev')
        if (isNextOld) content[oldIndex + 1].classList.remove('slider__item-next')
        if (isNext) content[newIndex + 1].classList.add('slider__item-next')
    }

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
