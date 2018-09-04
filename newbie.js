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



function ChangeImage(image) {
    racePic.src = (image + '.png');
}
