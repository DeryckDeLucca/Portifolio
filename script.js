// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animação de entrada (Fade-in)
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200 * index);
    });

    // 2. Intersection Observer para revelar seções ao rolar
    const observerOptions = {
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });

    // 3. Log de Maturidade Técnica no Console
    // Um pequeno "easter egg" para recrutadores técnicos que abrirem o console
    console.log(
        "%c Deryck.dev %c Tech Profile: Clean Code & Architecture Ready ",
        "background: #2563eb; color: white; font-weight: bold; padding: 4px; border-radius: 3px 0 0 3px;",
        "background: #1e293b; color: white; padding: 4px; border-radius: 0 3px 3px 0;"
    );
});

// 4. Header dinâmico ao rolar
window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
    } else {
        header.style.boxShadow = 'none';
    }
});