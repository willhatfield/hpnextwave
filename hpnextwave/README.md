# H&P NextWave Website

This repository contains the website for H&P NextWave, a technology company specializing in AI innovations.

## Repository Structure

```
hpnextwave/
├── html/              # Main website (HTML + React components)
│   ├── components/    # React components used in the hybrid version
│   ├── assets/       # Images, styles, and other static assets
│   └── *.html        # HTML pages
├── reference/        # Reference implementations
│   └── react/       # Full React version (for reference and testing)
└── README.md        # This file
```

## Main Website (HTML Version)

The main website is located in the `/html` directory and uses a hybrid approach combining static HTML with React components for enhanced interactivity.

### Development
1. Navigate to the `/html` directory
2. Open any HTML file in a web browser to view
3. Edit HTML files directly to make changes

### Technologies Used
- HTML5
- CSS3
- React (via CDN)
- Google Fonts

## Reference Implementation (React Version)

The `/reference/react` directory contains a full React implementation of the website. This version serves as a reference and testing ground for new features before they are integrated into the main hybrid version.

### Development
1. Navigate to `/reference/react`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Technologies Used
- React
- TypeScript
- Vite
- Tailwind CSS

## Deployment

The website is deployed using GitHub Pages. The deployment process is automated using GitHub Actions and will deploy the contents of the `/html` directory to the main website.

### Custom Domain
The website is configured to use the custom domain `hpnextwave.com`. The CNAME file in the `/html` directory manages this configuration.

## Contributing

1. Create a new branch for your changes
2. Make your changes
3. Submit a pull request

## License

All rights reserved. © 2025 H&P NextWave 