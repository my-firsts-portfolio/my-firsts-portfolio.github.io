const navButton = document.querySelector('.burger-menu');

navButton.addEventListener('click', navEvent)

function navEvent(event) {
    navButton.classList.toggle('open');
}