export const slider = () => {
    const content = document.querySelectorAll('.slider__item')
    const controls = document.querySelectorAll('.controls')
    let imageIndex = 0

    const show = (index) => {
        content[imageIndex].classList.remove('active')
        content[index].classList.add('active')
        imageIndex = index
    }

    controls.forEach((button) => {
        button.addEventListener('click', () => {
            if (event.target.classList.contains('prev')) {
                let index = imageIndex - 1
                if (index < 0) {
                    index = content.length - 1
                }

                show(index)

            } else if (event.target.classList.contains('next')) {
                let index = imageIndex + 1
                if (index >= content.length) {
                    index = 0
                }
                show(index)
            }

        })
    })

    show(imageIndex)
}

