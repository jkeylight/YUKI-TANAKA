function initHero() {
    const jp = document.querySelector('.name-jp');
    const en = document.querySelector('.name-en');
    
    gsap.to([jp, en], {
        opacity: 1,
        duration: 2,
        ease: 'power1.out',
        stagger: 0.2,
        delay: 3.5
    });

    gsap.to([jp, en], {
        opacity: 0.15,
        duration: 2,
        ease: 'power1.out',
        delay: 6.5
    });
}