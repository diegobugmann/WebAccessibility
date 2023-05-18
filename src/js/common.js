/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */


maxAdjustor = 8;
minAdjustor = -5;

factorH1 = 2;
factorH2 = 1.5;
factorOthers = 1;

relevantTags = ['p', 'h1', 'h2', 'a', 'button', 'label', 'input', 'select', 'small', 'table'];

window.onload = function () {

    // fetch the sizeAdjustor from the local storage
    if (localStorage.getItem("sizeAdjustor") != null) {
        sizeAdjustor = parseInt(localStorage.getItem("sizeAdjustor"));

        // Increase the font size for each relevant element
        relevantTags.forEach(function(tagName) {
            var elements = document.getElementsByTagName(tagName);

            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                var computedStyle = window.getComputedStyle(element);
                var currentSize = parseFloat(computedStyle.fontSize);
                
                if (tagName === 'h1') {
                    element.style.fontSize = (currentSize + (factorH1 * sizeAdjustor)) + 'px';
                } else if (tagName === 'h2') {
                    element.style.fontSize = (currentSize + (factorH2 * sizeAdjustor)) + 'px';
                } else {
                    // if the element has id "article1-title", "article2-title" or "article3-title", don't increase the font size (they are already h2)
                    if (element.id === 'article1-title' || element.id === 'article2-title' || element.id === 'article3-title') 
                        continue;
                    element.style.fontSize = (currentSize + (factorOthers * sizeAdjustor)) + 'px';
                }
            }
        });
    } else {
        sizeAdjustor = 0;
        localStorage.setItem("sizeAdjustor", sizeAdjustor);
    }
}


// Increase the font size for each relevant element
function increaseFontSize() {
    if (sizeAdjustor < maxAdjustor) {
        sizeAdjustor += 1;
        localStorage.setItem("sizeAdjustor", sizeAdjustor);
    } else {
        return;
    }
    relevantTags.forEach(function(tagName) {
      var elements = document.getElementsByTagName(tagName);
  
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var computedStyle = window.getComputedStyle(element);
        var currentSize = parseFloat(computedStyle.fontSize);
        
        if (tagName === 'h1') {
            element.style.fontSize = (currentSize + 2) + 'px';
        } else if (tagName === 'h2') {
            element.style.fontSize = (currentSize + 1.5) + 'px';
        } else {
            // if the element has id "article1-title", "article2-title" or "article3-title", don't increase the font size (they are already h2)
            if (element.id === 'article1-title' || element.id === 'article2-title' || element.id === 'article3-title') 
                continue;
            element.style.fontSize = (currentSize + 1) + 'px';
        }
      }
    });
}

// Decrease the font size for each relevant element
function decreaseFontSize() {
    if (sizeAdjustor > minAdjustor) {
        sizeAdjustor -= 1;
        localStorage.setItem("sizeAdjustor", sizeAdjustor);
    } else {
        return;
    }
    relevantTags.forEach(function(tagName) {
      var elements = document.getElementsByTagName(tagName);
  
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var computedStyle = window.getComputedStyle(element);
        var currentSize = parseFloat(computedStyle.fontSize);
        
        if (tagName === 'h1') {
            element.style.fontSize = (currentSize - 2) + 'px';
        } else if (tagName === 'h2') {
            element.style.fontSize = (currentSize - 1.5) + 'px';
        } else {
            // if the element has id "article1-title", "article2-title" or "article3-title", don't increase the font size (they are already h2)
            if (element.id === 'article1-title' || element.id === 'article2-title' || element.id === 'article3-title') 
                continue;
            element.style.fontSize = (currentSize - 1) + 'px';
        }
      }
    });
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
