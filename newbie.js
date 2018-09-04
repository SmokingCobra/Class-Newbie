window.onload = function () {
    document.getElementById('get_started').addEventListener('click', function () {
        document.getElementById('intro_page').style.display = 'none';
        document.getElementById('race_page').style.display = 'block';
    });

    document.getElementById('race_page').addEventListener('click', function () {
        this.style.display = 'none';
        document.getElementById('intro_page').style.display = 'block';
    });
}
