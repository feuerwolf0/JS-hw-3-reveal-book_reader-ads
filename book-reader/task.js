const controlsFontSize = document.querySelector('.book__control_font-size').querySelectorAll('.font-size')
const controlsFontColor = document.querySelector('.book__control_color').querySelectorAll('.color')
const controlsBackgroundColor = document.querySelector('.book__control_background').querySelectorAll('.color')
const book = document.getElementById('book')

sizes = {
    big: 'book_fs-big',
    small: 'book_fs-small'
}

colors = {
    gray: 'book_color-gray',
    whitesmoke: 'book_color-whitesmoke',
    black: 'book_color-black'
}

backgrounds = {
    gray: 'book_bg-gray',
    black: 'book_bg-black',
    white: 'book_bg-white'
}

function clearBook(type) {
    if (type === 'sizes') {
        Object.values(sizes).map((value) => {
            book.classList.remove(value);
        })
    } else if (type === 'colors') {
        Object.values(colors).map((value) => {
            book.classList.remove(value);
        });
    } else {
        Object.values(backgrounds).map((value) => {
            book.classList.remove(value);
        });
    }
}

function clearActive(controls, classActive) {
    controls.forEach((elem) => {
        elem.classList.remove(classActive)
    })
}

controlsFontSize.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        e.preventDefault()
        clearBook('sizes')
        clearActive(controlsFontSize, 'font-size_active')
        elem.classList.add('font-size_active')
        if (elem.dataset.size) {
            book.classList.add(sizes[elem.dataset.size])
        }
    });
})

controlsFontColor.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        e.preventDefault()
        clearBook('colors')
        clearActive(controlsFontColor, 'color_active')
        elem.classList.add('color_active')
        if (elem.dataset.textColor) {
            book.classList.add(colors[elem.dataset.textColor])
        }
    })
})


controlsBackgroundColor.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        e.preventDefault()
        clearBook('backgrounds')
        clearActive(controlsBackgroundColor, 'color_active')
        elem.classList.add('color_active')
        if (elem.dataset.bgColor) {
            book.classList.add(backgrounds[elem.dataset.bgColor])
        }
    })
})
