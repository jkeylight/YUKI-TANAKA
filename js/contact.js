function initContact() {
    const title = document.querySelector('.contact-title');
    const details = document.querySelector('.contact-details');
    const endName = document.querySelector('.end-name');

    gsap.fromTo([title, details], 
        { opacity: 0, y: 10 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 1.2, 
            ease: 'power2.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.scene-contact',
                start: 'top 70%'
            }
        }
    );

    gsap.to(endName, {
        opacity: 0.04,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: {
            trigger: '.scene-end',
            start: 'top 80%'
        }
    });
}