# Utkarsha's Portfolio Website

A modern, professional developer portfolio website built with React, Tailwind CSS, and Framer Motion. Features smooth animations, responsive design, and dark/light mode toggle.

## 🚀 Features

- **Modern Design**: Clean, minimal, and professional layout
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **SEO Optimized**: Meta tags, Open Graph, and sitemap included
- **Fast Loading**: Optimized for performance and speed

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App

## 📋 Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About**: Personal background and technologies
3. **Skills**: Categorized technical skills
4. **Projects**: Featured projects with live demos and GitHub links
5. **Achievements**: Professional experience and accomplishments
6. **Problem Solving**: Algorithmic skills and competitive programming
7. **Contact**: Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/utkarsha/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🎨 Customization

### Colors
The primary color scheme uses violet-blue tones. You can customize colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom color palette
  }
}
```

### Content
Update the following files to customize content:
- `src/components/Hero.js` - Personal introduction
- `src/components/About.js` - Background and bio
- `src/components/Projects.js` - Project showcase
- `src/components/Contact.js` - Contact information

### Images
Replace placeholder images in the `public` folder:
- `favicon.ico` - Website favicon
- `logo192.png` - App icon
- `og-image.jpg` - Open Graph image for social sharing

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Performance Optimizations

- Lazy loading for images
- Code splitting with React.lazy()
- Optimized animations with Framer Motion
- Minimal bundle size with tree shaking
- Compressed assets

## 📈 SEO Features

- Meta tags for search engines
- Open Graph tags for social media
- Twitter Card support
- Structured data markup
- Sitemap.xml
- Robots.txt

## 🌙 Dark Mode

The website includes a dark/light mode toggle that:
- Remembers user preference in localStorage
- Respects system preference on first visit
- Smooth transitions between themes

## 📞 Contact Form

The contact form includes:
- Form validation
- Responsive design
- Smooth animations
- Email integration ready (backend required)

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure custom domain (optional)

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically build and deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Deploy: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/utkarsha/portfolio/issues).

## 📧 Contact

- **Email**: utkarsha@example.com
- **LinkedIn**: [linkedin.com/in/utkarsha](https://linkedin.com/in/utkarsha)
- **GitHub**: [github.com/utkarsha](https://github.com/utkarsha)

---

**Designed & Built by Utkarsha © 2025**