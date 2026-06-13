function initCursor() {
    // 1. Check if mobile. If so, do nothing.
    const isMobile = window.matchMedia('(max-width: 1000px)').matches;
    if (isMobile) return;

    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');

    if (!dot || !ring) {
        console.error('Cursor elements not found in DOM');
        return;
    }

    // 2. Track mouse position
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // 3. Animation Loop
    function animateCursor() {
        // Dot follows mouse instantly
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

        // Ring follows with a smooth lag (lerp)
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

        requestAnimationFrame(animateCursor);
    }

    // Start the loop
    animateCursor();

    // 4. Hover Interactions
    const interactables = document.querySelectorAll('a, button, .archive-item, .menu-trigger, .gallery-panel');
    
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            ring.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            ring.classList.remove('hover');
        });
    });

    console.log('✓ Custom cursor initialized successfully');
}