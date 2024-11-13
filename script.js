"use strict";
const content = document.getElementById('content');
const next = document.getElementById('next');
const previous = document.getElementById('previous');

var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
var index = 0;
var newImg = () => {
    var newImg = document.createElement('img');
    newImg.src = `slides/${images[index]}`;
    newImg.className = 'fadeShow';
    content.appendChild(newImg);

    if (content.children.length > 2) {
        content.removeChild(content.children[0]);
    }
}

next.onclick = function(evt) {
    evt.preventDefault();
    index++;
    if (index > images.length-1) {
        index = 0;
    }
    newImg();
}
previous.onclick = function(evt) {
    evt.preventDefault();
    index--;
    if (index < 0) {
        index = images.length-1;
    }
    var newImg = document.createElement('img');
    newImg.src = `slides/${images[index]}`;
    newImg.className = 'fadeShow';
    content.appendChild(newImg);

    if (content.children.length > 2) {
        content.removeChild(content.children[0]);
    }
    newImg();
}