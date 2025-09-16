# Herald Kent Amolong - Interactive Portfolio Website

Hi, I'm Herald Kent Amolong, a passionate Computer Science student specializing in web development and programming. Welcome to my personal portfolio website showcasing my journey, skills, and projects in technology. Built with HTML5, CSS3, and JavaScript, this portfolio features advanced animations, interactive elements, and responsive design to create an engaging user experience.

## 🌟 Features

- **Responsive Design**: Seamlessly adapts to all devices (mobile, tablet, desktop)
- **Advanced Animations**: Dynamic orbit animations, particle effects, typewriter animations, and interactive hover states
- **Interactive Elements**: Tech orbit visualization, scrollable project galleries, and animated particle backgrounds
- **Modern UI/UX**: Glassmorphism effects, gradient overlays, and subtle motion design
- **Optimized Performance**: Efficient CSS variables, optimized JavaScript, and minimal dependencies
- **SEO Friendly**: Structured meta tags, semantic HTML, and proper document architecture
- **Accessibility**: ARIA labels, keyboard navigation, and proper contrast ratios

## 📁 File Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # Main JavaScript functionality
├── particles.js        # Particle background animations
├── orbit.js            # Tech orbit animations
├── js/
│   ├── scroll-animations.js  # Scroll-based animations
│   └── tech-visual.js        # Interactive tech visualization
├── README.md           # This documentation
├── package.json        # Project configuration
└── images/             # Image assets
```

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Install dependencies** (if any) with `npm install`
3. **Run development server** with a tool like Five Server or Live Server
4. **Customize the content** in `index.html`
5. **Update colors/styling** in `styles.css` using CSS variables
6. **Deploy** to your preferred hosting service

## 🎨 Customization

### Colors
All colors are defined as CSS variables in `styles.css`. Update these to match your brand:

```css
:root {
    --primary-color: #6366f1;
    --accent-color: #06b6d4;
    --text-primary: #1f2937;
    /* ... more variables */
}
```

### Content
This portfolio is personalized for Herald Kent Amolong and includes:
- Interactive hero section with tech orbit visualization and particle animations
- About section highlighting his passion for web development and programming
- Dynamic skills section showcasing technology competencies with visual categories
- Horizontally scrollable projects section featuring Herald's development work
- Interactive contact section with form and social media connections

To further customize:
- Update project descriptions and links as you complete new work
- Add new technologies to the interactive orbit visualization
- Modify particle animation parameters for different visual effects
- Update contact information and social profiles
- Add new project categories to the horizontally scrolling gallery

### Images
The portfolio now includes beautiful SVG placeholder images:
- **Profile image**: Modern gradient-based profile placeholder
- **About section image**: Clean design representing your coding journey
- **Project images**: Unique placeholders for each project with relevant visual elements

To replace with your own images:
1. Keep the same file names or update the `src` attributes in `index.html`
2. Recommended formats: JPG, PNG, or SVG
3. Recommended sizes:
   - Profile image: 400x400px (square, will be displayed as circle)
   - About image: 500x350px (rectangular)
   - Project images: 400x300px (rectangular)
   - Favicon: 32x32px (square)

## 📱 Sections

1. **Navigation**: Fixed header with smooth scroll links
2. **Hero**: Introduction with call-to-action buttons
3. **About**: Personal information and statistics
4. **Skills**: Technology skills organized by category
5. **Projects**: Featured work with links and descriptions
6. **Contact**: Contact form and social links
7. **Footer**: Copyright and additional info

## 🛠 JavaScript Features

The portfolio includes several JavaScript files with specialized features:

### `script.js` - Core Functionality
- Mobile navigation toggle with smooth transitions
- Form validation and submission handling
- Scroll-triggered animations and effects
- Typewriter text animation in hero section
- Performance optimizations and lazy loading

### `particles.js` - Background Effects
- Canvas-based particle systems for visual interest
- Dynamic particle movement and interactions
- Background effects for hero and contact sections

### `orbit.js` - Tech Visualization
- Interactive orbit animation of technology icons
- Dynamic positioning of tech particles
- Smooth animations with proper timing and delays

### `js/scroll-animations.js`
- Element reveal on scroll
- Parallax effects and scroll-based transitions
- Animation timing coordination

### `js/tech-visual.js`
- Interactive tech visualization behaviors
- Hover effects and tooltip display
- Technology category management

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔧 Development

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation links if needed
4. Add any interactive functionality in `script.js`

### Performance Tips
- Optimize images before adding them
- Use CSS transforms for animations (GPU accelerated)
- Minimize DOM queries in JavaScript
- Use CSS variables for consistent theming

## 📝 Customization Guide

### Changing the Color Scheme
1. Open `styles.css`
2. Modify the CSS variables in the `:root` section:
   ```css
   :root {
       --primary-color: #6366f1;
       --accent-color: #06b6d4;
       /* more color variables */
   }
   ```
3. The entire site will update automatically through the CSS variable system

### Adding a New Project
1. Copy an existing project card in the horizontal scrolling section
2. Update the content, links, and technology tags
3. Add a project image to the proper size and format
4. Ensure proper category assignment for filtering

### Modifying Orbit Animations
1. Edit orbit animation parameters in `styles.css` for visual changes:
   ```css
   @keyframes orbit-rotate {
       from { transform: translate(-50%, -50%) rotate(0deg) translateX(180px) rotate(0deg); }
       to { transform: translate(-50%, -50%) rotate(360deg) translateX(180px) rotate(-360deg); }
   }
   ```
2. Adjust orbit.js for timing and positioning of tech icons
3. Modify particle positions and animation delays for varied effects

### Customizing Particle Effects
1. Find the particle settings in particles.js
2. Adjust particle count, size, speed, and colors
3. Modify movement patterns and interaction behaviors

## 🚀 Deployment

### GitHub Pages
1. Push code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch
4. Your site will be available at `username.github.io/repository-name`

### Netlify
1. Drag and drop the project folder to netlify.com
2. Your site will be live instantly with a custom URL

### Vercel
1. Connect your GitHub repository to Vercel
2. Automatic deployments on every push

## 📞 Support

If you need help understanding this portfolio:
1. Check the comments in the code files
2. Review this README for guidance
3. Explore the clean, well-structured code organization

## 👨‍💻 About the Developer

This portfolio was created by **Herald Kent Amolong**, a Computer Science student passionate about web development and programming. The portfolio showcases not only my projects but also my growing skills in:

- Interactive UI/UX design
- Modern CSS techniques (variables, animations, flexbox, grid)
- Vanilla JavaScript for dynamic content
- Canvas-based animations and effects
- Responsive and accessible web design

Follow my journey as I continue learning and building exciting projects!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Font: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- Icons: [Font Awesome](https://fontawesome.com/)
- Design inspiration from modern web design trends including glassmorphism and neumorphism
- Animations inspired by creative coding communities

---