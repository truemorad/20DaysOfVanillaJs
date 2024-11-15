"use strict";
const content = document.getElementById('content');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const para = document.getElementById('numbers');

var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
var index = 0;
// function updates displayed image
var newImg = (i) => {
    if (i) {
        var newImg = document.createElement('img');
        newImg.src = `slides/${images[i]}`;
        newImg.className = 'fadeShow';
        content.appendChild(newImg);
    } else {
        var newImg = document.createElement('img');
        newImg.src = `slides/${images[index]}`;
        newImg.className = 'fadeShow';
        content.appendChild(newImg);
    }
    if (content.children.length > 2) {
        content.removeChild(content.children[0]);
    }
}
// images counter + button for each image
window.addEventListener('load', () => {
    for (let i = 0; i < images.length; i++) {
        var anchor = document.createElement('a');
        var textAnchor = document.createTextNode(i+1);
        anchor.id = `a${i}`;
        anchor.addEventListener('click', () => newImg(i));
        anchor.appendChild(textAnchor);
        para.appendChild(anchor);
    }
});
// next button function
next.onclick = function(evt) {
    evt.preventDefault();
    index++;
    if (index > images.length-1) {
        index = 0;
    }
    newImg();
}
// previous button function
previous.onclick = function(evt) {
    evt.preventDefault();
    index--;
    if (index < 0) {
        index = images.length-1;
    }
    newImg();
}