/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */
function openMenu(event) {
    event.stopPropagation();
    event.preventDefault();

    var currentDropDownButton = event.target;
    var currentDropDownMenu =
        currentDropDownButton.parentNode.querySelector('.dropdown-menu');
    var isOpen = currentDropDownMenu.classList.contains('show');
    var dropDownMenus =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
    for (var j = 0; j < dropDownMenus.length; j++) {
        dropDownMenus[j].classList.remove('show');
    }

    if (!isOpen) {
        currentDropDownMenu.classList.add('show');
    }
}

/**
 * Toggle the navigation content
 * @param {object} event - The DOM event
 */
function toggleNavigation(event) {
    event.stopPropagation();
    event.preventDefault();

    var content = document.getElementById('nav-bar-content');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
    } else {
        content.classList.add('collapse');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var dropDownToggles =
        document.querySelectorAll('#nav-bar-content .dropdown-toggle');

        for (var i = 0; i < dropDownToggles.length; i++) {
        dropDownToggles[i].addEventListener('click', openMenu, false);
    }

    document.querySelector('.navbar-toggler')
        .addEventListener('click', toggleNavigation, false);
}, false);

const body = document.querySelector('body');
const increaseButton = document.querySelector('.font-increase-button');
const decreaseButton = document.querySelector('.font-decrease-button');

increaseButton.addEventListener('click', () => {
  body.style.fontSize = parseInt(getComputedStyle(body).fontSize) + 1 + 'px';
  increaseButton.setAttribute('aria-pressed', 'true');
  decreaseButton.setAttribute('aria-pressed', 'false');
});

decreaseButton.addEventListener('click', () => {
  body.style.fontSize = parseInt(getComputedStyle(body).fontSize) - 1 + 'px';
  decreaseButton.setAttribute('aria-pressed', 'true');
  increaseButton.setAttribute('aria-pressed', 'false');
});