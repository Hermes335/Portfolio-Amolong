// JavaScript for dynamic orbit paths
document.addEventListener('DOMContentLoaded', function() {
    // Get orbit elements
    const orbit1 = document.querySelector('.orbit-1');
    const orbit2 = document.querySelector('.orbit-2');
    const orbit3 = document.querySelector('.orbit-3');
    
    // Tech icons groups by orbit (based on CSS orbit assignments)
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
        document.querySelector('.tech-particle.p2')
    ];
    
    const techParticlesOrbit2 = [
        document.querySelector('.tech-particle.p3'),
        document.querySelector('.tech-particle.p5')
    ];
    
    const techParticlesOrbit3 = [
        document.querySelector('.tech-particle.p4'),
        document.querySelector('.tech-particle.p6')
    ];

    // Configure animations and positions
    function configureOrbits() {
        // Position tech icons on orbit 1 (360px diameter = 180px radius)
        positionElementsOnOrbit(techIconsOrbit1, 180, 35, true, 'orbit-rotate');
        
        // Position tech icons on orbit 2 (280px diameter = 140px radius)
        positionElementsOnOrbit(techIconsOrbit2, 140, 30, false, 'orbit-rotate-reverse');
        
        // Position tech particles on orbit 1
        positionElementsOnOrbit(techParticlesOrbit1, 180, 35, true, 'orbit-rotate');
        
        // Position tech particles on orbit 2
        positionElementsOnOrbit(techParticlesOrbit2, 140, 30, false, 'orbit-rotate-reverse');
        
        // Position tech particles on orbit 3 (200px diameter = 100px radius)
        positionElementsOnOrbit(techParticlesOrbit3, 100, 25, true, 'orbit-rotate-small');
    }
    
    // Position elements on orbit with equal spacing
    function positionElementsOnOrbit(elements, radius, duration, clockwise, animationName) {
        elements = elements.filter(el => el !== null);
        if (elements.length === 0) return;
        
        elements.forEach((element, index) => {
            if (!element) return;
            
            // Calculate equal spacing around the orbit
            const angleStep = 360 / elements.length;
            const startAngle = index * angleStep;
            const delay = (index * (duration / elements.length));
            
            // Set the animation with proper timing
            element.style.animation = `${animationName} ${duration}s linear infinite ${delay}s`;
            
            // For debugging
            console.log(`Positioned ${element.className} on ${radius}px radius orbit at angle ${startAngle}° with ${delay}s delay`);
        });
    }
    
    // Run the configuration
    configureOrbits();
});