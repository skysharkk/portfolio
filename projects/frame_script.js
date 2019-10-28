const mobile = document.querySelector('.mobile');
const desktop = document.querySelector('.desktop');
const wrapper = document.querySelector('.iframe_wrapper');

window.addEventListener('resize', () => {
    if(window.screen.width <= 640) {
        desktop.classList.add('disable');
        mobile.classList.add('disable');
    } else {
        if (wrapper.classList.contains('mobile_width')) {
            desktop.classList.remove('disable');
        } else {
            mobile.classList.remove('disable');
        }
    }
});

mobile.addEventListener('click', function () {
    desktop.classList.remove('disable');
    wrapper.classList.add('mobile_width');
    mobile.classList.add('disable');
});

desktop.addEventListener('click', function () {
    desktop.classList.add('disable');
    wrapper.classList.remove('mobile_width');
    mobile.classList.remove('disable');
});