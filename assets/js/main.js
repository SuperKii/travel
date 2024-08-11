/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// Show Menu

if (navToggle) {
    navToggle.addEventListener('click', function () {
        navMenu.classList.add('show-menu');
    })
}

// Menu Hidden

if (navClose) {
    navClose.addEventListener('click', function () {
        navMenu.classList.remove('show-menu');
    })
}




/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header');

    // when the scroll is greater than 50

    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
}

window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true 
})

sr.reveal(`.home-data, .explore-data, .explore-user, .footer-container`)
sr.reveal(`.home-card`, { delay: 600, distance: '100px', interval: 100 })
sr.reveal(`.about-data, .join-image`, { origin: 'right' })
sr.reveal(`.about-image, .join-data`, { origin: 'left' })
sr.reveal(`.popular-card`, { interval: 200 })
