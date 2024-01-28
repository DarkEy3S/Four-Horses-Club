export const marquee = () => {
    const root = document.documentElement
    const marqueeContents = document.querySelectorAll('ul.marquee__items')

    marqueeContents.forEach(marqueeContent => {
        root.style.setProperty('--marquee-elements', marqueeContent.children.length)

        const marqueeElementsDisplayed = parseInt(getComputedStyle(root).getPropertyValue('--marquee-elements-displayed').trim())

        for (let index = 0; index < marqueeElementsDisplayed; index++) {
            marqueeContent.appendChild(marqueeContent.children[index].cloneNode(true))
        }
    })
}

window.onload = marquee
