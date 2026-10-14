/**
 * CV Interactive Features
 * - Smooth scroll for anchor links
 * - Print button functionality
 * - Theme toggle (optional)
 * - Scroll animations
 */

(function() {
    'use strict';

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                target.focus({ preventScroll: true });
            }
        });
    });

    // --- Print CV Functionality ---
    function createPrintButton() {
        const printBtn = document.createElement('button');
        printBtn.textContent = '🖨️ In CV / Save as PDF';
        printBtn.className = 'print-btn';
        printBtn.setAttribute('aria-label', 'In CV hoặc lưu thành PDF');
        printBtn.style.cssText = `
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 1000;
            padding: 12px 20px;
            background: var(--color-primary, #2563eb);
            color: white;
            border: none;
            border-radius: var(--radius-full, 9999px);
            font-size: 14px;
            font-weight: 600;
            font-family: inherit;
            cursor: pointer;
            box-shadow: var(--shadow-lg, 0 10px 15px -3px rgb(0 0 0 / 0.1));
            transition: all var(--transition-base, 250ms ease);
            opacity: 0;
            transform: translateY(20px);
            pointer-events: none;
        `;

        printBtn.addEventListener('mouseenter', () => {
            printBtn.style.background = 'var(--color-primary-dark, #1d4ed8)';
            printBtn.style.transform = 'translateY(-2px)';
            printBtn.style.boxShadow = 'var(--shadow-xl, 0 20px 25px -5px rgb(0 0 0 / 0.1))';
        });

        printBtn.addEventListener('mouseleave', () => {
            printBtn.style.background = 'var(--color-primary, #2563eb)';
            printBtn.style.transform = 'translateY(0)';
            printBtn.style.boxShadow = 'var(--shadow-lg, 0 10px 15px -3px rgb(0 0 0 / 0.1))';
        });

        printBtn.addEventListener('click', () => {
            window.print();
        });

        document.body.appendChild(printBtn);

        // Show button after page load
        requestAnimationFrame(() => {
            printBtn.style.opacity = '1';
            printBtn.style.transform = 'translateY(0)';
            printBtn.style.pointerEvents = 'auto';
        });

        // Hide on print
        window.addEventListener('beforeprint', () => {
            printBtn.style.opacity = '0';
            printBtn.style.pointerEvents = 'none';
        });

        window.addEventListener('afterprint', () => {
            printBtn.style.opacity = '1';
            printBtn.style.pointerEvents = 'auto';
        });
    }

    // --- Scroll Reveal Animation ---
    function initScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all sections and cards
        document.querySelectorAll('.section, .experience-item, .project-card, .education-item, .cert-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Add revealed class styles dynamically
        const style = document.createElement('style');
        style.textContent = `
            .revealed {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    }

    // --- Keyboard Navigation Enhancement ---
    function initKeyboardNav() {
        // Make cards focusable for keyboard users
        document.querySelectorAll('.project-card, .cert-item, .experience-item, .education-item').forEach(card => {
            card.setAttribute('tabindex', '0');
        });
    }

    // --- Dynamic Year in Footer ---
    function updateFooterYear() {
        const footer = document.querySelector('.cv-footer p');
        if (footer) {
            const currentYear = new Date().getFullYear();
            footer.innerHTML = footer.innerHTML.replace(/\d{4}/, currentYear);
        }
    }

    // --- Initialize All ---
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        createPrintButton();
        initScrollReveal();
        initKeyboardNav();
        updateFooterYear();

        // Add loaded class to body for CSS transitions
        document.body.classList.add('cv-loaded');
    }

    init();

    // --- Export for potential external use ---
    window.CVApp = {
        print: () => window.print(),
        scrollToSection: (id) => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };
})();