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
        currentFontSizeButton = parseInt(localStorage.getItem("currentFontSizeButton"));

        var body = document.body;
        var title = document.getElementsByClassName('title');
        var subtitle = document.getElementsByClassName('subtitle');
        var buttonIncrease = document.getElementsByClassName('font-size-button');


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
            elementButton.style.fontSize = currentFontSizeButton + 'px';
        }
    }
}


function increaseFontSize() {

    // retrieving, and caching, the <body> element:
    var body = document.body;
    var title = document.getElementsByClassName('title');
    var subtitle = document.getElementsByClassName('subtitle');
    var buttonFontSize = document.getElementsByClassName('font-size-button');


    if (localStorage.getItem("body") != null) {

        currentFontSizeBody = parseInt(localStorage.getItem("body"));
        currentFontSizeTitle = parseInt(localStorage.getItem("title"));
        currentFontSizeSubTitle = parseInt(localStorage.getItem("subtitle"));
        currentFontSizeButton = parseInt(localStorage.getItem("buttonIncrease"));

    } else {
        currentFontSizeBody = parseInt(window.getComputedStyle(body, null).fontSize);
        currentFontSizeTitle = parseInt(window.getComputedStyle(title[0], null).fontSize);
        currentFontSizeSubTitle = parseInt(window.getComputedStyle(subtitle[0], null).fontSize);
        currentFontSizeButton = parseInt(window.getComputedStyle(buttonIncrease[0], null).fontSize);
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
            currentFontSizeButton = ++currentFontSizeButton
            localStorage.setItem("buttonIncrease", currentFontSizeButton)
            elementFontSizeButton.style.fontSize = currentFontSizeButton + 'px';

        }
    }
}

function decreaseFontSize() {
    var body = document.body;
    var title = document.getElementsByClassName('title');
    var subtitle = document.getElementsByClassName('subtitle');
    var buttonIncrease = document.getElementsByClassName('font-increase-button');
    var button2 = document.getElementsByClassName('font-decrease-button');


    if (localStorage.getItem("body") != null) {

        currentFontSizeBody = parseInt(localStorage.getItem("body"));
        currentFontSizeTitle = parseInt(localStorage.getItem("title"));
        currentFontSizeSubTitle = parseInt(localStorage.getItem("subtitle"));
        currentFontSizeButton = parseInt(localStorage.getItem("buttonIncrease"));
        currentFontSizeButton2 = parseInt(localStorage.getItem("button2"));

    } else {
        currentFontSizeBody = parseInt(window.getComputedStyle(body, null).fontSize);
        currentFontSizeTitle = parseInt(window.getComputedStyle(title[i], null).fontSize);
        currentFontSizeSubTitle = parseInt(window.getComputedStyle(subtitle[i], null).fontSize);
        currentFontSizeButton = parseInt(window.getComputedStyle(buttonIncrease[0], null).fontSize);
        currentFontSizeButton2 = parseInt(window.getComputedStyle(button2[0], null).fontSize);
    }

    if (currentFontSizeButton2 > minFontSize) {
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
            var elementB = buttonIncrease[i];
            currentFontSizeSubButton = --currentFontSizeButton
            localStorage.setItem("buttonIncrease", currentFontSizeButton)
            elementB.style.fontSize = currentFontSizeButton + 'px';
        }
        for (var i = 0; i < button2.length; i++) {
            var elementB = button2[i];
            currentFontSizeSubButton2 = --currentFontSizeButton2
            localStorage.setItem("button2", currentFontSizeButton2)
            elementB.style.fontSize = currentFontSizeButton + 'px';
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
