
// Ajout d'effet scroll sur la page via le lien

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    
    event.preventDefault();
    
    const target = document.querySelector(link.getAttribute('href'));
    
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Changement de background du menu
    document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('li a');
    

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(el => el.classList.remove('active'));
            item.classList.add('active'); 
        
        }); 
    });
});

    /* surbrillance auto */
    const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const currentPosition = window.scrollY + 200; 

    sections.forEach((section) => {
        const sectionTop = section.offsetTop; 
        const sectionHeight = section.offsetHeight;

        if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
            
            const currentSectionId = section.getAttribute('id');
           
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
            


// Defillement
const ratio = .1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries,observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible');
            
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll("[class*='reveal-']").forEach(function (r) {
    observer.observe(r)
})