let films =[];
let covers = [];
let banners = [];
let logos = [];
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
function getSrc(arr){
    for (let i=0 ; i > arr.length; i++){
        arr[0][i].getAttribute('src')
    }
    return
};
function eventLogo(over){
    for (let i = 0; i>over.length; i++){
        over[0][i].addEventListner(mouseover, changeLogo(getSrc(covers)))
    }
}

pushClass(films, 'film');
pushClass(covers, 'film-cover');
pushClass(banners, 'film-banner')
pushClass(logos, 'film-logo')