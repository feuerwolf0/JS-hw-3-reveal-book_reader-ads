const rotatorElements = document.querySelectorAll('.rotator__case')

let toggleRotator = function() {
    rotatorElements[index].classList.remove('rotator__case_active')
    clearTimeout(toggleRotator.timeout)
    index++
    if (index == rotatorElements.length) {
        index = 0
    }
    rotatorElements[index].classList.add('rotator__case_active')
    rotatorElements[index].style.color = rotatorElements[index].dataset.color
    toggleRotator.timeout = setTimeout(toggleRotator, rotatorElements[index].dataset.speed)
}


let index = 0
rotatorElements[index].style.color = rotatorElements[index].dataset.color
setTimeout(toggleRotator, rotatorElements[index].dataset.speed)
