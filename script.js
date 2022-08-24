console.log('Responsive Website in HTML , CSS & JavaScript..!');

let burger=document.querySelector('.burger');
let navLeft=document.querySelector('.nav-left');
let navRight=document.querySelector('.nav-right');
let navbar=document.querySelector('.navbar');

burger.addEventListener('click', ()=>{
    navLeft.classList.toggle('v-class-resp');
    navRight.classList.toggle('v-class-resp');
    navbar.classList.toggle('nav-height-resp');
})