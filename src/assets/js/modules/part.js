export const part = () => {
    const sliderItems = document.querySelectorAll('.slider__item')
    const slider = document.querySelector('.slider')
    const sliderContent = document.querySelector('.slider__content')
    window.addEventListener('resize', (event) => {
        changeResult()
    })
    window.addEventListener('load', (event) => {
        changeResult()
    })


    function changeResult() {
        const width = document.body.clientWidth
        if (width >= 992) {

            sliderItems.forEach(sliderItem => {

                sliderItem.classList.remove('slider__item')
            })
            slider.classList.remove('slider')
            sliderContent.classList.remove('slider__content')
        } else {



            sliderItems.forEach(sliderItem => {

                sliderItem.classList.add('slider__item')
            })
            slider.classList.add('slider')

            sliderContent.classList.add('slider__content')
        }
    }

}