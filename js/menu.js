function initMenu() {
    const trigger = document.getElementById('menu-trigger');
    const overlay = document.getElementById('menu-overlay');
    const items = overlay.querySelectorAll('.menu-item');

    if (!trigger || !overlay) return;

    const toggleMenu = () => {
        const isOpen = trigger.classList.contains('active');

        if (isOpen) {
            trigger.classList.remove('active');
            overlay.classList.remove('active');
            trigger.setAttribute('aria-expanded', 'false');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        } else {
            trigger.classList.add('active');
            overlay.classList.add('active');
            trigger.setAttribute('aria-expanded', 'true');
            overlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    };

    trigger.addEventListener('click', toggleMenu);

    // Close menu when a nav item is clicked
    items.forEach(item => {
        item.addEventListener('click', () => {
            trigger.classList.remove('active');
            overlay.classList.remove('active');
            trigger.setAttribute('aria-expanded', 'false');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            trigger.classList.remove('active');
            overlay.classList.remove('active');
            trigger.setAttribute('aria-expanded', 'false');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    });
}
