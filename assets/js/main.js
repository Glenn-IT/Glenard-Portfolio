/*=============== SHOW MENU ===============*/
const   navMenu = document.getElementById( 'nav-menu' ),
        navToggle = document.getElementById( 'nav-toggle' ),
        navClose = document.getElementById( 'nav-close' )
/* Menu Show */
if (navToggle){
    navToggle.addEventListener( 'click' , () => {
        navMenu.classList.add( 'show-menu' )
})
}
/* Menu Hidden */
if (navClose){
    navClose.addEventListener( 'click' , () => {
        navMenu.classList.remove( 'show-menu' )
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const  navLink = document.querySelectorAll( '.nav__link' )

const linkAction  = () => {
    const navMenu = document.getElementById( 'nav-menu' )
    navMenu.classList.remove( 'show-menu' )
}
 navLink.forEach( n => n.addEventListener( 'click' , linkAction ) )


/*=============== ADD BLUR HEADER ===============*/
const blurHeader =() =>{
    const header = document.getElementById( 'header' )
    this.scrollY >= 50 ? header.classList.add( 'blur-header' ) 
                        : header.classList.remove( 'blur-header' )
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
// serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_tv7ruxg','template_g4y0oxl','#contact-form','dnrwsj7bChitiOmpx')
    .then(() =>{
        //Show sent message
        contactMessage.textContent = 'Message sent successfully ✅';

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
        }, () => {
            //Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}


contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const   sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
        }
        else{
        sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    durattion: 2500,
    delay: 400,


})

sr.reveal(`.home__data, .experience, .skills, .contact__container`)
sr.reveal(`.home__img`, {delay: 600})
sr.reveal(`.home__scroll`, {delay: 800})
sr.reveal(`.work__card, .services__card`, {nterval: 100})
sr.reveal(`.about__content`, {origin: 'right'})
sr.reveal(`.about__img`, {origin: 'left'})

/*=============== VISITOR COUNTER ===============*/
const initVisitorCounter = () => {
    // Get current counts from localStorage
    let visitorCount = localStorage.getItem('visitorCount');
    let pageViews = localStorage.getItem('pageViews');
    let lastVisit = localStorage.getItem('lastVisit');
    
    // Initialize if first time
    if (!visitorCount) {
        visitorCount = 0;
    } else {
        visitorCount = parseInt(visitorCount);
    }
    
    if (!pageViews) {
        pageViews = 0;
    } else {
        pageViews = parseInt(pageViews);
    }
    
    // Check if this is a new visitor (hasn't visited in the last 24 hours)
    const now = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    
    if (!lastVisit || (now - parseInt(lastVisit)) > oneDay) {
        visitorCount++;
        localStorage.setItem('lastVisit', now.toString());
        localStorage.setItem('visitorCount', visitorCount.toString());
    }
    
    // Always increment page views
    pageViews++;
    localStorage.setItem('pageViews', pageViews.toString());
    
    // Update the display
    updateCounterDisplay(visitorCount, pageViews);
}

const updateCounterDisplay = (visitors, views) => {
    const visitorElement = document.getElementById('visitor-count');
    const pageViewsElement = document.getElementById('page-views');
    
    if (visitorElement) {
        // Add animation effect
        visitorElement.style.opacity = '0';
        setTimeout(() => {
            visitorElement.textContent = visitors.toLocaleString();
            visitorElement.style.opacity = '1';
        }, 200);
    }
    
    if (pageViewsElement) {
        // Add animation effect
        pageViewsElement.style.opacity = '0';
        setTimeout(() => {
            pageViewsElement.textContent = views.toLocaleString();
            pageViewsElement.style.opacity = '1';
        }, 400);
    }
}

// Initialize counter when page loads
document.addEventListener('DOMContentLoaded', initVisitorCounter);

// Optional: Reset counters function (for testing)
const resetCounters = () => {
    localStorage.removeItem('visitorCount');
    localStorage.removeItem('pageViews');
    localStorage.removeItem('lastVisit');
    initVisitorCounter();
}

// Uncomment the line below if you want to reset counters (for testing)
// resetCounters();