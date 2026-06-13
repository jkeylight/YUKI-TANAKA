function initGallery() {
    const panels = document.querySelectorAll('.gallery-panel');
    
    panels.forEach((panel) => {
        const img = panel.querySelector('.gallery-img');
        
        // Single timeline: fade in → hold → blur + fade out
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: panel,
                start: 'top 85%',
                end: 'bottom top',
                scrub: 1
            }
        });

        tl.to(img, {
            opacity: 0.85,
            duration: 0.35,
            ease: 'power1.out'
        })
        .to(img, {
            opacity: 0.15,
            filter: 'blur(8px)',
            maskImage: 'radial-gradient(circle, transparent 30%, black 70%)',
            webkitMaskImage: 'radial-gradient(circle, transparent 30%, black 70%)',
            duration: 0.2,
            ease: 'none'
        }, '+=0.3');
    });
}