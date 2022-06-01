let films =['film1', 'film2', 'film3', 'film4', 'film4', 'film5', 'film6'];
let covers = [];
let banners = [];
let logos = [];
let src = [];
let banner = document.getElementById('banner');
let logo = document.getElementById('banner-logo');

function pushClass(arr, className){
    arr.push(document.getElementsByClassName(className))
    return arr
};
function changeLogo(path){
    logo.setAttribute('src', path)
    return path
};
function getSrc(){
    for (let i = 0; i > covers[0].length; i ++){
      src.push(document.getElementById(covers[0][i]).getAttribute('src'))
    }
    return src
};

let cov = document.getElementById('film1').getElementsByClassName('film-cover')


pushClass(covers, 'film-cover');
pushClass(banners, 'film-banner')
pushClass(logos, 'film-logo')