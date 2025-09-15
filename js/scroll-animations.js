// Scroll Animation Script
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with scroll animation classes
    const scrollElements = document.querySelectorAll(
        '.scroll-fade-in, .scroll-scale-in, .scroll-slide-left, .scroll-slide-right'
    );
    
    // Function to check if an element is in viewport
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            (rect.top <= (window.innerHeight * 0.75) && rect.bottom >= 0) ||
            (rect.bottom >= (window.innerHeight * 0.25) && rect.top <= window.innerHeight)
        );
    };
    
    // Function to check if an element is in horizontal viewport
    const isElementInHorizontalViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.left <= (window.innerWidth * 0.9) && rect.right >= 0
        );
    };
    
    // Function to handle scroll animation
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (isElementInViewport(el)) {
                el.classList.add('visible');
            }
        });
    };
    
    // Function to handle project card animations
    const animateProjectCards = () => {
        // Initialize project cards with staggered delay classes
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.classList.add('scroll-scale-in');
            card.style.transitionDelay = `${0.1 * index}s`;
            
            // Check if card is in viewport on horizontal scroll
            const scrollContainer = card.closest('.projects-scroll-container');
            if (scrollContainer) {
                const checkCardVisibility = () => {
                    if (isElementInHorizontalViewport(card)) {
                        card.classList.add('visible');
                    }
                };
                
                scrollContainer.addEventListener('scroll', checkCardVisibility);
                checkCardVisibility(); // Initial check
            }
        });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Initial check on page load
    handleScrollAnimation();
    animateProjectCards();
});