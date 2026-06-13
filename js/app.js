document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    window.YUKI = window.YUKI || {};
    
    const isMobile = window.matchMedia('(max-width: 1000px)').matches;
    
    if (!isMobile && typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            lerp: 0.05
        });
        
        window.YUKI.lenis = lenis;

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
    }

    initMenu();
    initCursor();
    initLoader();
    initHero();
    initPrologue();
    initGallery();
    initPassage();
    initArchive();
    initContact();
});