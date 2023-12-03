window.addEventListener('scroll', () => {
    const element = document.querySelector('.hide-on-scroll');
    const position = element.getBoundingClientRect();
    const fixed = document.querySelector('.fixed');

    if (position.bottom < window.innerHeight) {
        fixed.style.opacity = '0'
    } else  fixed.style.opacity = '1'
})