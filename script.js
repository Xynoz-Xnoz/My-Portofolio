document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. RANDOMIZE FLOATING BG ICONS --- */
    const icons = document.querySelectorAll('.floating-icon');
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    
    icons.forEach(icon => {
        // Random horizontal start position
        const randomX = Math.floor(Math.random() * vw);
        // Random animation delay
        const randomDelay = Math.floor(Math.random() * 20);
        // Random duration between 15s and 30s
        const randomDuration = Math.floor(Math.random() * 15) + 15;
        // Random scale
        const randomScale = (Math.random() * 0.5) + 0.5;

        icon.style.left = `${randomX}px`;
        icon.style.animationDelay = `-${randomDelay}s`;
        icon.style.animationDuration = `${randomDuration}s`;
        icon.style.transform = `scale(${randomScale})`;
    });


    /* --- 2. SCROLL REVEAL (Ultra Smooth) --- */
    function reveal() {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', reveal);
    // Trigger on load
    reveal();

    /* --- 3. SUBTLE PARALLAX ON MOUSEMOVE --- */
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (window.innerWidth / 2 - e.pageX) / speed;
            const yOffset = (window.innerHeight / 2 - e.pageY) / speed;
            
            // Because blob already has animations, we apply transform gently via margin or transform string
            // For smoother effect we'll just adjust marginLeft/marginTop
            blob.style.marginLeft = `${xOffset}px`;
            blob.style.marginTop = `${yOffset}px`;
        });
    });

    /* --- 4. PAYMENT METHOD SELECTOR --- */
    const methods = document.querySelectorAll('.method-btn');
    methods.forEach(btn => {
        btn.addEventListener('click', () => {
            methods.forEach(m => m.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });
});


