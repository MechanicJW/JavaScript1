const contents = document.querySelectorAll('.program-line__content')

contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title')
    const descr = elem.querySelector('.program-line__descr')

    title.addEventListener('click', () => {
        descr.classList.toggle('active')
    })
})
