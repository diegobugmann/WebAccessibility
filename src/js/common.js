/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */


maxFontSize = 54;
minFontSize = 8;

window.onload = function () {
    if (localStorage.getItem("body") != null) {
        currentFontSizeBody = localStorage.getItem("body")
        currentFontSizeTitle = parseInt(localStorage.getItem("title"));
        currentFontSizeSubTitle = parseInt(localStorage.getItem("subtitle"));
        currentFontSizeIncreaseButton = parseInt(localStorage.getItem("fontSizeIncreaseButton"));
        currentFontSizeDecreaseButton = parseInt(localStorage.getItem("fontSizeDecreaseButton"));



        var body = document.body;
        var title = document.getElementsByClassName('title');
        var subtitle = document.getElementsByClassName('subtitle');
        var buttonIncrease = document.getElementsByClassName('font-increase-button');
        var buttonDecrease = document.getElementsByClassName('font-decrease-button');


        body.style.fontSize = currentFontSizeBody + 'px';

        for (var i = 0; i < title.length; i++) {
            var elementTitle = title[i];
            elementTitle.style.fontSize = currentFontSizeTitle + 'px';
        }
        for (var i = 0; i < subtitle.length; i++) {
            var elementSubtitle = subtitle[i];
            elementSubtitle.style.fontSize = currentFontSizeSubTitle + 'px';
        }
        for (var i = 0; i < buttonIncrease.length; i++) {
            var elementButton = buttonIncrease[i];
            elementButton.style.fontSize = currentFontSizeIncreaseButton + 'px';
        }
        for (var i = 0; i < buttonDecrease.length; i++) {
            var elementButton = buttonDecrease[i];
            elementButton.style.fontSize = currentFontSizeDecreaseButton + 'px';
        }
    }
}


function increaseFontSize() {

    // retrieving, and caching, the <body> element:
    var body = document.body;
    var title = document.getElementsByClassName('title');
    var subtitle = document.getElementsByClassName('subtitle');
    var buttonIncrease = document.getElementsByClassName('font-increase-button');
    var buttonDecrease = document.getElementsByClassName('font-decrease-button');


    if (localStorage.getItem("body") != null) {

        currentFontSizeBody = parseInt(localStorage.getItem("body"));
        currentFontSizeTitle = parseInt(localStorage.getItem("title"));
        currentFontSizeSubTitle = parseInt(localStorage.getItem("subtitle"));
        currentFontSizeIncreaseButton = parseInt(localStorage.getItem("fontSizeIncreaseButton"));
        currentFontSizeDecreaseButton = parseInt(localStorage.getItem("fontSizeDecreaseButton"));

    } else {
        currentFontSizeBody = parseInt(window.getComputedStyle(body, null).fontSize);
        currentFontSizeTitle = parseInt(window.getComputedStyle(title[0], null).fontSize);
        currentFontSizeSubTitle = parseInt(window.getComputedStyle(subtitle[0], null).fontSize);
        currentFontSizeIncreaseButton = parseInt(window.getComputedStyle(buttonIncrease[0], null).fontSize);
        currentFontSizeDecreaseButton = parseInt(window.getComputedStyle(buttonDecrease[1], null).fontSize);
    }


    if (currentFontSizeTitle < maxFontSize) {

        currentFontSizeBody = ++currentFontSizeBody
        localStorage.setItem("body", currentFontSizeBody)
        body.style.fontSize = currentFontSizeBody + 'px';


        for (var i = 0; i < title.length; i++) {
            var element = title[i];
            currentFontSizeTitle = ++currentFontSizeTitle
            localStorage.setItem("title", currentFontSizeTitle)
            element.style.fontSize = currentFontSizeTitle + 'px';
        }
        for (var i = 0; i < subtitle.length; i++) {
            var elementSubtitle = subtitle[i];
            currentFontSizeSubTitle = ++currentFontSizeSubTitle
            localStorage.setItem("subtitle", currentFontSizeSubTitle)
            elementSubtitle.style.fontSize = currentFontSizeSubTitle + 'px';
        }
        for (var i = 0; i < buttonIncrease.length; i++) {
            var elementFontSizeButton = buttonIncrease[i];
            currentFontSizeIncreaseButton = ++currentFontSizeIncreaseButton
            localStorage.setItem("fontSizeIncreaseButton", currentFontSizeIncreaseButton)
            elementFontSizeButton.style.fontSize = currentFontSizeIncreaseButton + 'px';
        }

        for (var i = 0; i < buttonDecrease.length; i++) {
            var elementFontSizeButton = buttonDecrease[i];
            currentFontSizeDecreaseButton = ++currentFontSizeDecreaseButton
            localStorage.setItem("fontSizeDecreaseButton", currentFontSizeDecreaseButton)
            elementFontSizeButton.style.fontSize = currentFontSizeDecreaseButton + 'px';
        }
    }
}

function decreaseFontSize() {
    var body = document.body;
    var title = document.getElementsByClassName('title');
    var subtitle = document.getElementsByClassName('subtitle');
    var buttonIncrease = document.getElementsByClassName('font-increase-button');
    var buttonDecrease = document.getElementsByClassName('font-decrease-button');


    if (localStorage.getItem("body") != null) {

        currentFontSizeBody = parseInt(localStorage.getItem("body"));
        currentFontSizeTitle = parseInt(localStorage.getItem("title"));
        currentFontSizeSubTitle = parseInt(localStorage.getItem("subtitle"));
        currentFontSizeIncreaseButton = parseInt(localStorage.getItem("fontSizeIncreaseButton"));
        currentFontSizeDecreaseButton = parseInt(localStorage.getItem("fontSizeDecreaseButton"));

    } else {
        currentFontSizeBody = parseInt(window.getComputedStyle(body, null).fontSize);
        currentFontSizeTitle = parseInt(window.getComputedStyle(title[i], null).fontSize);
        currentFontSizeSubTitle = parseInt(window.getComputedStyle(subtitle[i], null).fontSize);
        currentFontSizeIncreaseButton = parseInt(window.getComputedStyle(buttonIncrease[0], null).fontSize);
        currentFontSizeDecreaseButton = parseInt(window.getComputedStyle(buttonDecrease[1], null).fontSize);
    }

    if (currentFontSizeTitle > minFontSize) {
        currentFontSizeBody = --currentFontSizeBody
        localStorage.setItem("body", currentFontSizeBody)
        body.style.fontSize = currentFontSizeBody + 'px';


        for (var i = 0; i < title.length; i++) {
            var element = title[i];
            currentFontSizeTitle = --currentFontSizeTitle
            localStorage.setItem("title", currentFontSizeTitle)
            element.style.fontSize = currentFontSizeTitle + 'px';
        }
        for (var i = 0; i < subtitle.length; i++) {
            var elementS = subtitle[i];
            currentFontSizeSubTitle = --currentFontSizeSubTitle
            localStorage.setItem("subtitle", currentFontSizeSubTitle)
            elementS.style.fontSize = currentFontSizeSubTitle + 'px';
        }
        
        for (var i = 0; i < buttonIncrease.length; i++) {
            var elementFontSizeButton = buttonIncrease[i];
            currentFontSizeIncreaseButton = --currentFontSizeIncreaseButton
            localStorage.setItem("fontSizeIncreaseButton", currentFontSizeIncreaseButton)
            elementFontSizeButton.style.fontSize = currentFontSizeIncreaseButton + 'px';
        }

        for (var i = 0; i < buttonDecrease.length; i++) {
            var elementFontSizeButton = buttonDecrease[i];
            currentFontSizeDecreaseButton = --currentFontSizeDecreaseButton
            localStorage.setItem("fontSizeDecreaseButton", currentFontSizeDecreaseButton)
            elementFontSizeButton.style.fontSize = currentFontSizeDecreaseButton + 'px';
        }
    }

}


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
