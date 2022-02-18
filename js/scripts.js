let banner = document.getElementById('banner');
let logo = document.getElementById('film-logo');
let covers = [document.getElementById('film1-cover'),
document.getElementById('film2-cover'),
document.getElementById('film3-cover'),
document.getElementById('film4-cover'),
document.getElementById('film5-cover'),
document.getElementById('film6-cover')];
let films = [document.getElementById('film1'),
document.getElementById('film2'),
document.getElementById('film3'),
document.getElementById('film4'),
document.getElementById('film5'),
document.getElementById('film6'),]



function changeLogo() {

    banner = document.getElementById('film2-banner')
};

films.addEventListener(MouseEvent(mouseover), changeLogo())


