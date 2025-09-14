# Modern Portfolio Website

A clean, modern, and responsive portfolio website built with HTML5, CSS3, and JavaScript. Features beautiful animations, smooth scrolling, and a professional design.

## 🌟 Features

- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Modern Animations**: Smooth scroll animations, typing effects, and hover interactions
- **Clean Code**: Well-organized, commented, and maintainable code structure
- **Fast Loading**: Optimized for performance with efficient CSS and JavaScript
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation support

## 📁 File Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
├── wireframe-guide.html # Development wireframe reference
├── README.md           # This documentation
├── package.json        # Project configuration
└── images/             # Image assets
    ├── favicon.svg     # Website favicon (SVG format)
    ├── profile-placeholder.svg     # Profile image placeholder
    ├── about-placeholder.svg       # About section image placeholder
    ├── project1-placeholder.svg    # Project 1 image placeholder
    ├── project2-placeholder.svg    # Project 2 image placeholder
    └── project3-placeholder.svg    # Project 3 image placeholder
```

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Add your images** to the `images/` folder
3. **Customize the content** in `index.html`
4. **Update colors/styling** in `styles.css` using CSS variables
5. **Deploy** to your preferred hosting service

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
Update the following in `index.html`:
- Replace "Your Name" with your actual name
- Update the hero section description
- Add your actual projects in the projects section
- Update contact information
- Add your social media links

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

The `script.js` file includes:
- Mobile navigation toggle
- Smooth scrolling
- Contact form handling
- Scroll-triggered animations
- Typing animation effect
- Parallax effects
- Performance optimizations

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
2. Modify the CSS variables in the `:root` section
3. The entire site will update automatically

### Adding a New Project
1. Copy an existing project card in `index.html`
2. Update the content, links, and technology tags
3. Add a project image to replace the placeholder

### Modifying Animations
1. Animation timing is controlled by CSS variables
2. Scroll animations are in the JavaScript file
3. Hover effects are defined in CSS

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

If you need help customizing this portfolio:
1. Check the comments in the code files
2. Review this README for guidance
3. Look at the wireframe guide (`wireframe-guide.html`) for structure reference

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Font: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- Icons: [Font Awesome](https://fontawesome.com/)
- Design inspiration from modern web design trends

---