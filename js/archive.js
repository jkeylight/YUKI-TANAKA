function initArchive() {
    const items = document.querySelectorAll('.archive-item');
    const bg = document.getElementById('archive-bg');
    const isMobile = window.matchMedia('(max-width: 1000px)').matches;

    const showBg = (src) => {
        bg.style.backgroundImage = `url(${src})`;
        gsap.to(bg, { opacity: 0.15, duration: 1.2, ease: 'power2.inOut' });
    };

    const hideBg = () => {
        gsap.to(bg, { opacity: 0, duration: 1.2, ease: 'power2.inOut' });
    };

    items.forEach(item => {
        const src = item.getAttribute('data-bg');
        
        if (isMobile) {
            item.addEventListener('click', () => {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                    hideBg();
                } else {
                    items.forEach(i => i.classList.remove('active'));
                    item.classList.add('active');
                    showBg(src);
                }
            });
        } else {
            item.addEventListener('mouseenter', () => showBg(src));
            item.addEventListener('mouseleave', hideBg);
        }
    });
}