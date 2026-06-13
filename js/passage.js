function initPassage() {
    const text = document.querySelector('.passage-text');
    const location = document.querySelector('.passage-location');
    
    gsap.fromTo([text, location], 
        { opacity: 0, y: 20 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 1.2, 
            ease: 'power2.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.scene-passage',
                start: 'top 70%'
            }
        }
    );
}