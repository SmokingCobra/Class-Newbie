window.onload = function () {

    var introPage = document.getElementById('intro_page');
    var introButton = document.getElementById('get_started');
    var racePage = document.getElementById('race_page');
    var racePic = document.getElementById('racePic');

    function introChange() {
        introPage.style.display = 'none';
        racePage.style.display = 'block';
    }


    introPage.addEventListener('click', introChange, false);
}

/* Change the picture depending on race selection */
function ChangeImage(image) {
    racePic.src = (image + '.png');
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

var character = {
    charName = "None",
    charRace = "None",
    charClass = "None",
    charAlign = "None",
    charStr = 0,
    charDex = 0,
    charCon = 0,
    charInt = 0,
    charWis = 0,
    charChr = 0,
}
