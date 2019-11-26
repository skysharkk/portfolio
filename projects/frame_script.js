const mobile = document.querySelector('.mobile');
const desktop = document.querySelector('.desktop');
const wrapper = document.querySelector('.iframe_wrapper');
const MIN_WIDTH_THEYALOW = 640;
const MIN_WIDTH_DESIGN_PROJECT = 375;


window.addEventListener('resize', () => {
    if(window.innerWidth <= MIN_WIDTH_THEYALOW || window.innerWidth <= MIN_WIDTH_DESIGN_PROJECT) {
        desktop.classList.add('disable');
        mobile.classList.add('disable');
    } else {
        if (wrapper.classList.contains('mobile_width_theyalow')
            || wrapper.classList.contains('mobile_width_design_project')) {
            desktop.classList.remove('disable');
        } else {
            mobile.classList.remove('disable');
        }
    }
});

mobile.addEventListener('click', function () {
    desktop.classList.remove('disable');
    if (wrapper.dataset.name === 'theyalow') {
        wrapper.classList.add('mobile_width_theyalow');
    } else if (wrapper.dataset.name === 'design-project') {
        wrapper.classList.add('mobile_width_design_project');
    }
    mobile.classList.add('disable');
});

desktop.addEventListener('click', function () {
    desktop.classList.add('disable');
    wrapper.classList.remove('mobile_width_theyalow', 'mobile_width_design_project');
    mobile.classList.remove('disable');
});
