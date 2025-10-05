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
const initVisitorCounter = async () => {
    try {
        // Track this visit by sending a POST request
        const trackResponse = await fetch('api/visitor_counter.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                page_url: window.location.href,
                referrer: document.referrer
            })
        });

        const data = await trackResponse.json();
        
        if (data.success) {
            updateCounterDisplay(data.data);
            
            // Set up periodic updates every 30 seconds to get real-time data
            setInterval(async () => {
                try {
                    const response = await fetch('api/visitor_counter.php');
                    const updateData = await response.json();
                    if (updateData.success) {
                        updateCounterDisplay(updateData.data);
                    }
                } catch (error) {
                    console.log('Error updating counter:', error);
                }
            }, 30000); // Update every 30 seconds
            
        } else {
            console.error('Error tracking visit:', data.error);
            // Fallback to localStorage if server is unavailable
            initLocalStorageCounter();
        }
    } catch (error) {
        console.error('Error connecting to server:', error);
        // Fallback to localStorage if server is unavailable
        initLocalStorageCounter();
    }
}

const updateCounterDisplay = (data) => {
    const elements = {
        'visitor-count': data.total_visitors,
        'page-views': data.total_page_views,
        'today-visitors': data.today_visitors,
        'today-views': data.today_page_views
    };
    
    Object.keys(elements).forEach((elementId, index) => {
        const element = document.getElementById(elementId);
        if (element) {
            // Add staggered animation effect
            element.style.opacity = '0';
            setTimeout(() => {
                element.textContent = elements[elementId].toLocaleString();
                element.style.opacity = '1';
                
                // Add a subtle pulse effect for new updates
                element.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                }, 200);
            }, index * 100);
        }
    });
}

// Fallback localStorage counter for when server is unavailable
const initLocalStorageCounter = () => {
    let visitorCount = localStorage.getItem('visitorCount');
    let pageViews = localStorage.getItem('pageViews');
    let lastVisit = localStorage.getItem('lastVisit');
    
    if (!visitorCount) visitorCount = 0;
    else visitorCount = parseInt(visitorCount);
    
    if (!pageViews) pageViews = 0;
    else pageViews = parseInt(pageViews);
    
    const now = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    
    if (!lastVisit || (now - parseInt(lastVisit)) > oneDay) {
        visitorCount++;
        localStorage.setItem('lastVisit', now.toString());
        localStorage.setItem('visitorCount', visitorCount.toString());
    }
    
    pageViews++;
    localStorage.setItem('pageViews', pageViews.toString());
    
    // Update display with localStorage data
    const fallbackData = {
        total_visitors: visitorCount,
        total_page_views: pageViews,
        today_visitors: visitorCount,
        today_page_views: pageViews
    };
    
    updateCounterDisplay(fallbackData);
}

// Initialize counter when page loads
document.addEventListener('DOMContentLoaded', initVisitorCounter);

// Optional: Manual refresh function
const refreshCounters = async () => {
    try {
        const response = await fetch('api/visitor_counter.php');
        const data = await response.json();
        if (data.success) {
            updateCounterDisplay(data.data);
        }
    } catch (error) {
        console.error('Error refreshing counters:', error);
    }
}

// Add visibility change listener to refresh when tab becomes active
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        refreshCounters();
    }
});