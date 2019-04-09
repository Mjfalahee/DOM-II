// Your code goes here

let navlinks = document.querySelector('.nav');

navlinks.addEventListener('mouseover', event => {
    if (event.target.className === 'nav-link') {
        console.log(event.target);
        let x = event.target;
        x.style.color = 'blue';
    }
});

navlinks.addEventListener('click', event => {
    if (event.target.className === 'nav-link') {
        event.preventDefault();
        console.log('NAV LINK DEFAULT DENIED');
    }
})

let systemalert = document;

systemalert.addEventListener('keydown', event => {
    console.log('STOP PRESSING KEYS. SCROLL WHEEL ONLY.');
});

let busimage = document.querySelector('#partybus');
let x = 0;
busimage.addEventListener('wheel', event => {
    busimage.style.border = '5px solid black';
    console.log('wheels on the bus');
    });


let secondimage = document.querySelector('#secondimage');

secondimage.addEventListener('drag', event => {
    event.target.style.border = '3px solid red';
})

let thirdimage = document.querySelector('#thirdimage');

thirdimage.addEventListener('mousemove', event => {
    event.target.style.border = '3px solid orange';
})

let contentsection = document.querySelector('.content-section');


contentsection.addEventListener('click', event => {
    event.target.style.border = '3px solid blue';
})

let destination = document.querySelectorAll('.destination');

for (i=0; i<3; i++){
destination[i].addEventListener('dblclick', event => {
    event.target.style.color = 'grey';
    event.stopPropagation();
})
}

let fun = document.querySelector('#fun');
let headertext = document.querySelector('.logo-heading');
fun.addEventListener('dblclick', event => {
    headertext.style.color = 'purple';
})

let cutandcopy = document.querySelector('body');

cutandcopy.addEventListener('copy', event => {
    console.log('copy target: ' + event.target.textContent);
});

document.addEventListener('contextmenu', event => {
    console.log('rightclick on: ' + event.target);
})

document.addEventListener('keyup', event => {
    console.log('They have released the ' + event.key + ' key');
})