const listButton = document.querySelector('.education_wrapper--title_wrapper');
const list = document.querySelector('.education_wrapper--list');
let slides = document.querySelectorAll('.slider_wrapper--slide');
let currentSlide = 0;
let isEnable = true;

function changeCurrentSlide (n) {
    currentSlide = (n + slides.length) % slides.length;
}

function previousSlide (n) {
    hideSlide('to-right');
    changeCurrentSlide (n - 1);
    showSlide ('from-left');
}

function nextSlide (n) {
    hideSlide('to-left');
    changeCurrentSlide (n + 1);
    showSlide ('from-right');
}

function hideSlide (direction) {
    isEnable = false;
    slides[currentSlide].classList.add(direction);
    slides[currentSlide].addEventListener('animationend', function () {
        this.classList.remove('slider_wrapper--slide-active', direction);
    })
}

function showSlide (direction) {
    slides[currentSlide].classList.add('slider_wrapper--slide-next', direction);
    slides[currentSlide].addEventListener('animationend', function () {
        this.classList.remove('slider_wrapper--slide-next', direction);
        this.classList.add('slider_wrapper--slide-active');
        isEnable = true;
    })
}

listButton.addEventListener('click', () => {
    if(window.getComputedStyle(list).display === 'none') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
});

document.querySelector('.slider_wrapper--left_arrow_wrapper').addEventListener('click', () => {
    if (isEnable) {
        previousSlide(currentSlide);
    }
});

document.querySelector('.slider_wrapper--right_arrow_wrapper').addEventListener('click', () => {
    if (isEnable) {
        nextSlide (currentSlide);
    }
});

const swipeDetect = (element) => {
    let surface = element;
    let startX = 0;
    let startY = 0;
    let distX = 0;
    let distY = 0;
    let dist = 0;

    let elapsedTime = 0;
    let startTime = 0;

    let threshold = 150;
    let allowedTime = 300;

    surface.addEventListener('mousedown', (e) => {
        dist = 0;
        startX= e.pageX;
        startY = e.pageY;
        startTime = new Date().getTime();
        e.preventDefault();
    });
    surface.addEventListener('mouseup', (e) => {
        distX = e.pageX - startX;
        distY = e.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;
        if (elapsedTime <= allowedTime) {
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= threshold) {
                if (distX > 0) {
                    if (isEnable) {
                        previousSlide(currentSlide);
                    }
                } else {
                    if (isEnable) {
                        nextSlide(currentSlide);
                    }
                }
            }
        }

        e.preventDefault();
    });

    surface.addEventListener('touchstart', (e) => {
            if (e.target.classList.contains('slider_wrapper--left_arrow')) {
                if (isEnable) {
                    previousSlide(currentSlide);
                }
            } else if (e.target.classList.contains('slider_wrapper--right_arrow')) {
                if (isEnable) {
                    nextSlide(currentSlide);
                }
            }


        let touchObj = e.changedTouches[0];
        startX= touchObj.pageX;
        startY = touchObj.pageY;
        startTime = new Date().getTime();
        e.preventDefault();
    });

    surface.addEventListener('touchend', (e) => {
        let touchObj = e.changedTouches[0];
        distX = touchObj.pageX - startX;
        distY = touchObj.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;

        if (elapsedTime <= allowedTime) {
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= threshold) {
                if (distX > 0) {
                    if (isEnable) {
                        previousSlide(currentSlide);
                    }
                } else {
                    if (isEnable) {
                        nextSlide(currentSlide);
                    }
                }
            }
        }
        e.preventDefault();
    });

};

let element = document.querySelector('.slider_wrapper');

swipeDetect(element);

