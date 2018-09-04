window.onload = function () {

    var introPage = document.getElementById('intro_page');
    var introButton = document.getElementById('get_started');
    var racePage = document.getElementById('race_page');
    var racePic = document.getElementById('racePic');

    introPage.addEventListener('click', function () {
        introPage.style.display = 'none';
        racePage.style.display = 'block';
    });

    racePic.addEventListener('click', function () {
        racePage.style.display = 'none';
        introPage.style.display = 'block';
    });
}



function ChangeImage(image) {
    racePic.src = (image + '.png');
}
