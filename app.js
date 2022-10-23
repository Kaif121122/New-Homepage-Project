
const openIcon = document.querySelector('.icon-open');
const closeIcon = document.querySelector('.icon-close');
const navUl = document.querySelector('.nav-ul');

openIcon.addEventListener('click', () => {
    navUl.classList.add('show-nav');
    setTimeout(() => {

        closeIcon.classList.remove('none')
    }, 300);
    openIcon.classList.add('none')
})

closeIcon.addEventListener('click', () => {
    navUl.classList.remove('show-nav');
    closeIcon.classList.add('none')
    setTimeout(() => {

        openIcon.classList.remove('none')
    }, 300);
})