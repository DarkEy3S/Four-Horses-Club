export const animationSlider = (oldIndex, newIndex, content, contentClass) => {
    const isPrev = newIndex > 0
    const isNext = newIndex < content.length - 1
    const isPrevOld = oldIndex > 0
    const isNextOld = oldIndex < content.length - 1
    let prevClass = `${contentClass}-prev`
    let nextClass = `${contentClass}-next`

    if (isPrevOld && oldIndex > 1) content[oldIndex - 1].classList.remove(`${prevClass}`)
    if (isPrev && newIndex > 1) content[newIndex - 1].classList.add(`${prevClass}`)
    if (isNextOld) content[oldIndex + 1].classList.remove(`${nextClass}`)
    if (isNext) content[newIndex + 1].classList.add(`${nextClass}`)

}