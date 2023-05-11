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

    var {dropDownMenus, dropDownButtons} = get_menu_buttons();

    for (var j = 0; j < dropDownMenus.length; j++) {
        dropDownMenus[j].classList.remove('show');
        dropDownButtons[j].setAttribute('aria-expanded', 'false');
    }

    if (!isOpen) {
        currentDropDownMenu.classList.add('show');
        currentDropDownButton.setAttribute('aria-expanded', 'true');
    }
}

$(document).keyup(function (e) {
    var {dropDownMenus, dropDownButtons} = get_menu_buttons();

    const esc_key = 27;
    const tab_key = 9;
    // https://css-tricks.com/snippets/javascript/javascript-keycodes/

    if (e.keyCode === esc_key) {
        for (var j = 0; j < dropDownMenus.length; j++) {
            if (dropDownMenus[j].classList.contains('show')) {
                dropDownButtons[j].focus();
            }
            dropDownMenus[j].classList.remove('show');
            dropDownButtons[j].setAttribute('aria-expanded', 'false');
        }
    } else if (e.keyCode === tab_key) {
        currentDropDownMenu = document.activeElement.parentNode.parentNode;
        for (var k = 0; k < dropDownMenus.length; k++) {
            if (dropDownMenus[k] !== currentDropDownMenu) {
                dropDownMenus[k].classList.remove('show');
                dropDownButtons[k].setAttribute('aria-expanded', 'false');
            }
        }
    }
});
$(document).keydown(function (e) {

    const space_key = 32;
    // https://css-tricks.com/snippets/javascript/javascript-keycodes/

    if ($(document.activeElement).is('a') && e.keyCode === space_key) {
        e.preventDefault();
        document.activeElement.click();
    }
});

function get_menu_buttons() {
    var dropDownMenus =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
    var dropDownButtons =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-toggle');
    return {dropDownMenus, dropDownButtons};
}

/**
 * Toggle the navigation content
 * @param {object} event - The DOM event
 */
function toggleNavigation(event) {
    event.stopPropagation();
    event.preventDefault();

    var content = document.getElementById('nav-bar-content');
    var navButton = document.getElementById('nav-bar-button');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
        navButton.setAttribute('aria-pressed', 'true');
    } else {
        content.classList.add('collapse');
        navButton.setAttribute('aria-pressed', 'false');
    }
}

document.addEventListener('DOMContentLoaded', function () {
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