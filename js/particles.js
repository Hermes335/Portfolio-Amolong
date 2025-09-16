/**
 * Interactive Particle System
 * Inspired by modern 3D portfolio designs
 */

class ParticleSystem {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.animationId = null;
        
        // Configuration options
        this.config = {
            particleCount: options.particleCount || 50,
            particleSize: options.particleSize || 2,
            particleColor: options.particleColor || '#ffffff',
            particleOpacity: options.particleOpacity || 0.6,
            connectionDistance: options.connectionDistance || 120,
            mouseInfluence: options.mouseInfluence || 100,
            speed: options.speed || 0.5,
            ...options
        };
        
        this.init();
    }
    
    init() {
        this.resizeCanvas();
        this.createParticles();
        this.bindEvents();
        this.animate();
        console.log('ParticleSystem initialized with', this.config.particleCount, 'particles');
        console.log('Canvas size:', this.canvas.width, 'x', this.canvas.height);
    }
    
    resizeCanvas() {
        const container = this.canvas.parentElement;
        if (container) {
            this.canvas.width = container.offsetWidth;
            this.canvas.height = container.offsetHeight;
        } else {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
        console.log('Canvas resized to:', this.canvas.width, 'x', this.canvas.height);
    }
    
    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.config.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * this.config.speed,
                vy: (Math.random() - 0.5) * this.config.speed,
                originalVx: (Math.random() - 0.5) * this.config.speed,
                originalVy: (Math.random() - 0.5) * this.config.speed,
                opacity: Math.random() * this.config.particleOpacity + 0.1
            });
        }
    }
    
    bindEvents() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.createParticles();
        });
        
        window.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });
        
        window.addEventListener('mouseleave', () => {
            this.mouse.x = -1000;
            this.mouse.y = -1000;
        });
    }
    
    updateParticles() {
        this.particles.forEach(particle => {
            // Calculate distance from mouse
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Mouse influence on particles
            if (distance < this.config.mouseInfluence) {
                const force = (this.config.mouseInfluence - distance) / this.config.mouseInfluence;
                const angle = Math.atan2(dy, dx);
                particle.vx -= Math.cos(angle) * force * 0.5;
                particle.vy -= Math.sin(angle) * force * 0.5;
            } else {
                // Return to original velocity
                particle.vx += (particle.originalVx - particle.vx) * 0.02;
                particle.vy += (particle.originalVy - particle.vy) * 0.02;
            }
            
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Boundary conditions
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx *= -1;
                particle.originalVx *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.vy *= -1;
                particle.originalVy *= -1;
            }
            
            // Keep particles within bounds
            particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
        });
    }
    
    drawParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw particles
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, this.config.particleSize, 0, Math.PI * 2);
            this.ctx.fillStyle = this.hexToRgba(this.config.particleColor, particle.opacity);
            this.ctx.fill();
        });
        
        // Draw connections between nearby particles
        this.drawConnections();
    }
    
    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.config.connectionDistance) {
                    const opacity = (this.config.connectionDistance - distance) / this.config.connectionDistance;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = this.hexToRgba(this.config.particleColor, opacity * 0.3);
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        }
    }
    
    hexToRgba(hex, alpha) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result) {
            const r = parseInt(result[1], 16);
            const g = parseInt(result[2], 16);
            const b = parseInt(result[3], 16);
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        }
        return `rgba(255, 255, 255, ${alpha})`;
    }
    
    animate() {
        this.updateParticles();
        this.drawParticles();
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        window.removeEventListener('resize', this.resizeCanvas);
        window.removeEventListener('mousemove', this.mousemove);
    }
}

// Enhanced 3D Card Effect
class Card3D {
    constructor(element, options = {}) {
        this.element = element;
        this.config = {
            maxTilt: options.maxTilt || 15,
            perspective: options.perspective || 1000,
            scale: options.scale || 1.05,
            speed: options.speed || 400,
            glare: options.glare || true,
            ...options
        };
        
        this.init();
    }
    
    init() {
        this.element.style.transformStyle = 'preserve-3d';
        this.element.style.transition = `transform ${this.config.speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
        
        if (this.config.glare) {
            this.createGlareEffect();
        }
        
        this.bindEvents();
    }
    
    createGlareEffect() {
        const glare = document.createElement('div');
        glare.className = 'card-glare';
        glare.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
            pointer-events: none;
            opacity: 0;
            transition: opacity ${this.config.speed}ms ease;
            border-radius: inherit;
        `;
        this.element.appendChild(glare);
        this.glareElement = glare;
    }
    
    bindEvents() {
        this.element.addEventListener('mouseenter', (e) => this.handleMouseEnter(e));
        this.element.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.element.addEventListener('mouseleave', (e) => this.handleMouseLeave(e));
    }
    
    handleMouseEnter(e) {
        if (this.glareElement) {
            this.glareElement.style.opacity = '1';
        }
    }
    
    handleMouseMove(e) {
        const rect = this.element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * this.config.maxTilt;
        const rotateY = (centerX - x) / centerX * this.config.maxTilt;
        
        this.element.style.transform = `
            perspective(${this.config.perspective}px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(${this.config.scale})
        `;
        
        if (this.glareElement) {
            const glareX = (x / rect.width) * 100;
            const glareY = (y / rect.height) * 100;
            this.glareElement.style.background = `
                radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, transparent 70%)
            `;
        }
    }
    
    handleMouseLeave(e) {
        this.element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        if (this.glareElement) {
            this.glareElement.style.opacity = '0';
        }
    }
}

// Orbiting Elements System
class OrbitingElements {
    constructor(container, elements, options = {}) {
        this.container = container;
        this.elements = elements;
        this.config = {
            radius: options.radius || 100,
            speed: options.speed || 2,
            direction: options.direction || 1, // 1 for clockwise, -1 for counter-clockwise
            ...options
        };
        
        this.angle = 0;
        this.init();
    }
    
    init() {
        this.container.style.position = 'relative';
        this.positionElements();
        this.animate();
    }
    
    positionElements() {
        const angleStep = (Math.PI * 2) / this.elements.length;
        
        this.elements.forEach((element, index) => {
            element.style.position = 'absolute';
            element.style.transition = 'none';
            
            const elementAngle = this.angle + (angleStep * index);
            const x = Math.cos(elementAngle) * this.config.radius;
            const y = Math.sin(elementAngle) * this.config.radius;
            
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
    
    animate() {
        this.angle += (this.config.speed * this.config.direction * Math.PI) / 180;
        this.positionElements();
        requestAnimationFrame(() => this.animate());
    }
}

// Export for use in other files
window.ParticleSystem = ParticleSystem;
window.Card3D = Card3D;
window.OrbitingElements = OrbitingElements;