const listButton = document.querySelector('.education_wrapper--button');
const list = document.querySelector('.education_wrapper--list');

listButton.addEventListener('click', () => {
    if(window.getComputedStyle(list).display === 'none') {
        list.style.display = 'block';
        status = true;
    } else {
        list.style.display = 'none';
    }
});

