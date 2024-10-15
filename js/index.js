
// Hero section Zoom in/Zoom out effect

const slideImg = document.querySelector('.slideImg');
// console.log(slideImg);

let images = new Array(
    "images/Gym1.jpg",
    "images/Gym7.jpg",
    "images/Gym8.jpg"
);

let length = images.length;
let count = 0;

function slider() {
    if(count > length - 1) {
        count = 0;
    }
    slideImg.src = images[count];
    count++;
    setTimeout('slider()', 3000);
}

// Navbar bg change when scroll

window.addEventListener('scroll',function(){
    const navbar = document.querySelector('nav');
    // console.log(navbar);
    
    var scroll_Y = window.scrollY;
    // console.log(scroll_Y);

    if(scroll_Y < 50) {
        navbar.classList.remove('navbgChange');
    }else {
        navbar.classList.add('navbgChange');
    }
})

// Navbar responsive with hamburger

// const burgerEl = document.querySelector('.burger');
// const navbarEl = document.querySelector('.navbar');
// const rightNavEl = document.querySelector('.right-nav');
// const ulListEl = document.querySelector('.ul-list');

// burgerEl.addEventListener('click', () => {
//     navbarEl.classList.toggle("h-nav-resp");
//     ulListEl.classList.toggle("v-nav-resp");
//     rightNavEl.classList.toggle("v-nav-resp");
// })

// READ MORE -- ABOUT US

var btn = document.querySelector('.rm-btn');
// console.log(btn);
var notv = document.querySelector('.invisible');
// console.log(notv);

notv.style.display = "none";

btn.addEventListener('click', function() {
    var dots = document.querySelector('.dots');
    // console.log(dots);
    

    if( dots.style.display != "none") {
        dots.style.display = "none";
        notv.style.display = "inline";
        // notv.style.fontSize = "1.5rem";
        btn.textContent = "Read Less";
    }else {
        dots.style.display = "initial"
        notv.style.display = "none";
        // notv.style.fontSize = "1rem";
        btn.textContent = "Read More."
    }
})

// Gsap section

