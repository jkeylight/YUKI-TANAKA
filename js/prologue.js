function initPrologue() {
    const img = document.querySelector('.prologue-img');
    
    gsap.to(img, {
        opacity: 0.85,
        duration: 3,
        ease: 'power1.out',
        scrollTrigger: {
            trigger: '.scene-prologue',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
}