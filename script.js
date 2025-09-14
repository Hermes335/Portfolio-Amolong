/**
 * Portfolio Website JavaScript
 * Author: Herald Kent Amolong
 * Description: Interactive functionality for modern portfolio website
 */

// ===========================================
// MOBILE NAVIGATION
// ===========================================

/**
 * Initialize mobile navigation toggle functionality
 */
function initMobileNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (!hamburger || !navMenu) return;

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ===========================================
// SMOOTH SCROLLING
// ===========================================

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===========================================
// CONTACT FORM
// ===========================================

/**
 * Initialize contact form submission handling
 */
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.btn');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with your actual form handling)
        setTimeout(() => {
            // Show success message
            showNotification('Thank you for your message! I will get back to you soon.', 'success');
            
            // Reset form and button
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.style.opacity = '1';
            submitBtn.disabled = false;
        }, 1500);
    });
}

/**
 * Show notification message to user
 * @param {string} message - The message to display
 * @param {string} type - The type of notification ('success', 'error', 'info')
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '8px',
        color: 'white',
        backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ===========================================
// SCROLL EFFECTS
// ===========================================

/**
 * Initialize navbar scroll effects and progress indicator
 */
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    const scrollProgress = document.getElementById('scroll-progress');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Navbar background change
        if (scrollY > 100) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
        
        // Scroll progress indicator
        if (scrollProgress) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            scrollProgress.style.width = scrolled + "%";
        }
    });
}

// ===========================================
// INTERSECTION OBSERVER ANIMATIONS
// ===========================================

/**
 * Initialize scroll-triggered animations using Intersection Observer
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.project-card, .skill-category, .stat, .contact-item'
    );
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ===========================================
// PARALLAX EFFECTS
// ===========================================

/**
 * Initialize subtle parallax effects for enhanced visual appeal
 */
function initParallaxEffects() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        const speed = 0.5;

        parallaxElements.forEach(element => {
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}

// ===========================================
// TYPING ANIMATION
// ===========================================

/**
 * Create typing animation effect for text elements with HTML support
 * @param {HTMLElement} element - The element to apply the typing effect to
 * @param {string} text - The text to type
 * @param {number} speed - Typing speed in milliseconds
 */
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/**
 * Simple typing effect for testing
 * @param {HTMLElement} element - The element to apply the typing effect to
 * @param {string} text - The text to type
 * @param {number} speed - Typing speed in milliseconds
 */
function simpleTypeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/**
 * Enhanced typing effect that preserves HTML structure with cursor
 * @param {HTMLElement} element - The element to apply the typing effect to
 * @param {string} htmlContent - The HTML content to type
 * @param {number} speed - Typing speed in milliseconds
 */
function typeWriterHTML(element, htmlContent, speed = 100) {
    let i = 0;
    let isInsideTag = false;
    let currentTag = '';
    let visibleText = '';
    
    console.log('Starting typing animation for:', htmlContent);
    
    // Add typing cursor styles
    const style = document.createElement('style');
    style.textContent = `
        .typing-cursor::after {
            content: '|';
            color: #f093fb;
            animation: blink 1s infinite;
            font-weight: 100;
            margin-left: 2px;
        }
        
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        
        .typing-complete .typing-cursor::after {
            display: none;
        }
        
        .hero-title.typing-hidden {
            opacity: 0;
        }
        
        .hero-title.typing-active {
            opacity: 1;
        }
    `;
    
    if (!document.querySelector('style[data-typing-cursor]')) {
        style.setAttribute('data-typing-cursor', 'true');
        document.head.appendChild(style);
    }
    
    // Clear content and add cursor class
    element.innerHTML = '';
    element.classList.add('typing-cursor', 'typing-active');
    
    function type() {
        if (i < htmlContent.length) {
            const char = htmlContent.charAt(i);
            
            // Check if we're entering or leaving an HTML tag
            if (char === '<') {
                isInsideTag = true;
                currentTag = char;
            } else if (char === '>') {
                currentTag += char;
                element.innerHTML += currentTag;
                isInsideTag = false;
                currentTag = '';
            } else if (isInsideTag) {
                currentTag += char;
            } else {
                // Regular character - add with typing effect
                element.innerHTML += char;
                visibleText += char;
            }
            
            i++;
            
            // Only delay for visible characters (not HTML tags)
            const delay = isInsideTag ? 0 : speed;
            setTimeout(type, delay);
        } else {
            // Typing complete - remove cursor after a delay
            console.log('Typing animation completed');
            setTimeout(() => {
                element.classList.remove('typing-cursor');
                element.classList.add('typing-complete');
            }, 1000);
        }
    }
    
    type();
}

/**
 * Initialize typing effect for hero title with highlight preservation
 */
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    
    console.log('initTypingEffect called');
    
    if (heroTitle) {
        // Store the original content
        const fullText = "Hi, I'm " + "Herald Kent Amolong";
        const nameStart = fullText.indexOf("Herald Kent Amolong");
        const beforeName = fullText.substring(0, nameStart);
        const name = "Herald Kent Amolong";
        
        console.log('Before name:', beforeName);
        console.log('Name:', name);
        
        // Clear and hide initially
        heroTitle.innerHTML = '';
        heroTitle.style.opacity = '1';
        
        // Add cursor styles
        const style = document.createElement('style');
        style.textContent = `
            .typing-cursor::after {
                content: '|';
                color: #1827f3ff;
                animation: blink 1s infinite;
                font-weight: 100;
                margin-left: 2px;
            }
            
            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
        `;
        
        if (!document.querySelector('style[data-typing-cursor]')) {
            style.setAttribute('data-typing-cursor', 'true');
            document.head.appendChild(style);
        }
        
        heroTitle.classList.add('typing-cursor');
        
        let currentText = '';
        let i = 0;
        
        function typeNextChar() {
            if (i < fullText.length) {
                currentText += fullText.charAt(i);
                
                // Check if we've reached the name part
                if (i >= nameStart) {
                    const beforePart = beforeName;
                    const namePart = currentText.substring(nameStart);
                    heroTitle.innerHTML = beforePart + '<span class="highlight">' + namePart + '</span>';
                } else {
                    heroTitle.innerHTML = currentText;
                }
                
                i++;
                setTimeout(typeNextChar, 80);
            } else {
                // Typing complete
                setTimeout(() => {
                    heroTitle.classList.remove('typing-cursor');
                }, 1000);
            }
        }
        
        // Start typing after delay
        setTimeout(typeNextChar, 1000);
        
    } else {
        console.error('Hero title element not found!');
    }
}

// ===========================================
// SKILL ITEM INTERACTIONS
// ===========================================

/**
 * Initialize interactive hover effects for skill items
 */
function initSkillInteractions() {
    document.querySelectorAll('.skill-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ===========================================
// PRELOADER
// ===========================================

/**
 * Initialize and handle preloader functionality
 */
function initPreloader() {
    const preloader = document.querySelector('.loading');
    
    if (preloader) {
        // Hide preloader after page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.remove('active');
            }, 1000);
        });
    }
}

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

/**
 * Update footer with current year
 */
function updateFooterYear() {
    const yearElement = document.querySelector('.footer-content p');
    
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = yearElement.textContent.replace(/\d{4}/, currentYear);
    }
}

/**
 * Initialize theme toggle functionality (optional)
 */
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            // Save theme preference
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }
}

/**
 * Add keyboard navigation support
 */
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Escape key closes mobile menu
        if (e.key === 'Escape') {
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('nav-menu');
            
            if (hamburger?.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu?.classList.remove('active');
            }
        }
    });
}

// ===========================================
// INITIALIZATION
// ===========================================

/**
 * Initialize all functionality when DOM is loaded
 */
function init() {
    // Core functionality
    initMobileNavigation();
    initSmoothScrolling();
    initContactForm();
    initScrollEffects();
    
    // Animations and effects
    initScrollAnimations();
    initParallaxEffects();
    initTypingEffect();
    initSkillInteractions();
    
    // Utility functions
    initPreloader();
    updateFooterYear();
    initThemeToggle();
    initKeyboardNavigation();
    
    console.log('Portfolio website initialized successfully! 🚀');
}

// ===========================================
// EVENT LISTENERS
// ===========================================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Handle page visibility changes for performance optimization
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is hidden
        document.body.classList.add('page-hidden');
    } else {
        // Resume animations when page is visible
        document.body.classList.remove('page-hidden');
    }
});

// ===========================================
// PERFORMANCE OPTIMIZATION
// ===========================================

/**
 * Debounce function to limit how often a function can be called
 * @param {Function} func - The function to debounce
 * @param {number} wait - The delay in milliseconds
 * @returns {Function} The debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit how often a function can be called
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time limit in milliseconds
 * @returns {Function} The throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export functions for testing (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        init,
        typeWriter,
        showNotification,
        debounce,
        throttle
    };
}