// JavaScript for dynamic orbit paths
document.addEventListener('DOMContentLoaded', function() {
    // Get orbit elements
    const orbit1 = document.querySelector('.orbit-1');
    const orbit2 = document.querySelector('.orbit-2');
    const orbit3 = document.querySelector('.orbit-3');
    
    // Tech icons groups by orbit
    const techIconsOrbit1 = [
        document.querySelector('.tech-icon.html'),
        document.querySelector('.tech-icon.css'),
        document.querySelector('.tech-icon.js'),
        document.querySelector('.tech-icon.react')
    ];
    
    const techIconsOrbit2 = [
        document.querySelector('.tech-icon.node'),
        document.querySelector('.tech-icon.python')
    ];
    
    // Tech particles by orbit
    const techParticlesOrbit1 = [
        document.querySelector('.tech-particle.p1'),
        document.querySelector('.tech-particle.p6')
    ];
    
    const techParticlesOrbit2 = [
        document.querySelector('.tech-particle.p3'),
        document.querySelector('.tech-particle.p5')
    ];
    
    const techParticlesOrbit3 = [
        document.querySelector('.tech-particle.p2'),
        document.querySelector('.tech-particle.p4')
    ];

    // Configure animations and positions
    function configureOrbits() {
        // Position tech icons on orbit 1
        positionElementsOnOrbit(techIconsOrbit1, 180, 35, true);
        
        // Position tech icons on orbit 2
        positionElementsOnOrbit(techIconsOrbit2, 140, 30, false);
        
        // Position tech particles on orbit 1
        positionElementsOnOrbit(techParticlesOrbit1, 180, 35, true);
        
        // Position tech particles on orbit 2
        positionElementsOnOrbit(techParticlesOrbit2, 140, 30, false);
        
        // Position tech particles on orbit 3
        positionElementsOnOrbit(techParticlesOrbit3, 100, 25, true);
    }
    
    // Position elements on orbit with equal spacing
    function positionElementsOnOrbit(elements, radius, duration, clockwise) {
        elements = elements.filter(el => el !== null);
        if (elements.length === 0) return;
        
        elements.forEach((element, index) => {
            if (!element) return;
            
            // Calculate equal spacing
            const angleStep = 360 / elements.length;
            const angleOffset = index * angleStep;
            const delay = (index * (duration / elements.length)) + 's';
            
            // Set the animation
            element.style.animation = clockwise ? 
                `orbit-rotate ${duration}s linear infinite ${delay}` : 
                `orbit-rotate-reverse ${duration}s linear infinite ${delay}`;
            
            // For debugging
            console.log(`Positioned element on ${radius}px radius orbit with ${delay} delay`);
        });
    }
    
    // Run the configuration
    configureOrbits();
});