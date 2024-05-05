let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let Section = document.querySelectorAll('section');
let Navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset+height) {
            Navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let popup = document.getElementById("popup");
function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}