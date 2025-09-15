// Tech Illustration Interactive Effects
document.addEventListener('DOMContentLoaded', function() {
    const techVisual = document.querySelector('.tech-visual-container');
    
    if (!techVisual) return;
    
    // Add interactive class on mouse enter
    techVisual.addEventListener('mouseenter', function() {
        techVisual.classList.add('interactive');
    });
    
    // Remove interactive class on mouse leave
    techVisual.addEventListener('mouseleave', function() {
        techVisual.classList.remove('interactive');
        techVisual.style.transform = '';
    });
    
    // Mouse move effect for 3D rotation
    let isMoving = false;
    let animationFrame;
    let lastX = 0;
    let lastY = 0;
    
    techVisual.addEventListener('mousemove', function(e) {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
        
        const rect = techVisual.getBoundingClientRect();
        lastX = e.clientX - rect.left - rect.width / 2;
        lastY = e.clientY - rect.top - rect.height / 2;
        
        if (!isMoving) {
            isMoving = true;
            animationFrame = requestAnimationFrame(updateRotation);
        }
    });
    
    function updateRotation() {
        // Calculate rotation angle based on mouse position
        const rect = techVisual.getBoundingClientRect();
        const maxRotation = 15;
        const xRotation = (lastY / (rect.height / 2)) * maxRotation;
        const yRotation = -(lastX / (rect.width / 2)) * maxRotation;
        
        // Apply rotation transform
        techVisual.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        
        isMoving = false;
    }
    
    // Add click interaction to tech icons
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent propagation to container
            
            // Create a pulse effect
            const iconName = this.classList[1]; // Get the tech name class
            this.classList.add('icon-pulse');
            
            // Show tech name
            const techName = document.createElement('div');
            techName.classList.add('tech-name-popup');
            techName.textContent = iconName;
            this.appendChild(techName);
            
            // Remove pulse class and tech name after animation
            setTimeout(() => {
                this.classList.remove('icon-pulse');
                if (techName.parentNode) {
                    techName.parentNode.removeChild(techName);
                }
            }, 1000);
        });
    });
});