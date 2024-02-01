export const part = () => {
    const sliderItems = document.querySelectorAll('.slider-part__item')
    const slider = document.querySelector('.slider-part')
    const sliderContent = document.querySelector('.slider-part__content')
    window.addEventListener('resize', (event) => {
        changeResult()
    })
    window.addEventListener('load', (event) => {
        changeResult()
    })


    function changeResult() {
        const width = document.body.clientWidth
        if (width > 972) {

            sliderItems.forEach(sliderItem => {

                sliderItem.classList.remove('slider-part__item')
            })
            slider.classList.remove('slider')
            sliderContent.classList.remove('slider-part__content')
        } else {



            sliderItems.forEach(sliderItem => {

                sliderItem.classList.add('slider-part__item')
            })
            slider.classList.add('slider-part')

            sliderContent.classList.add('slider-part__content')
        }
    }

}