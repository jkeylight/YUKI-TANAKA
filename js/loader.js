function initLoader() {
    const loader = document.getElementById('loader');
    const stroke = loader.querySelector('path');
    const length = stroke.getTotalLength();
    
    gsap.set(stroke, { strokeDasharray: length, strokeDashoffset: length });
    
    const tl = gsap.timeline({
        onComplete: () => {
            loader.style.display = 'none';
            ScrollTrigger.refresh();
        }
    });

    tl.to({}, { duration: 1.5 })
      .to(stroke, { strokeDashoffset: 0, duration: 1.5, ease: 'power2.inOut' })
      .to({}, { duration: 0.8 })
      .to(loader, { opacity: 0, duration: 1, ease: 'power1.out' });
}