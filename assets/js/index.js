//..................... Show Menu..........................//

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

//....................Remove Menu Page....................//

const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//...................Scroll active link...................//

const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
    const scrolly = window.pageYOffset
    sections.forEach(current => {
        const sectionHeigth = current.offsetHeigth
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeigth) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

//............... Background Header .................//

const scrollHeader = () => {
    const nav = document.getElementById('header')
    if (this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// ...............Show Scroll Top...................//

const scrollTop = () => {
    const scrollTop = document.getElementById('scroll-top')

    if (this.scrollY >= 560) scrollTop.classList.add('scroll-top');
    else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)


// ...................Dark Ligth Theme................//

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'


// LocalStorage
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


// Validation Interface
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'ligth'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-mon' : 'fa-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}


// ........Active Button 
themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// ....... Animation Scroll

const sr = ScrollReveal({

    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true,
});

sr.reveal(`.home_data , .home_img ,
 .about_data, .about_img,
 .services_content, .menu_content,
 .app_data, .app_img, .contact_data,
  .contact_button, .footer_content`), {
    interval: 200
}