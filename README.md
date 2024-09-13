# Ochi Website Clone

This is a clone of the **Ochi Website**, built using modern web technologies including **Next.js**, **React.js**, **TypeScript**, **Tailwind CSS**, **GSAP**, **Framer Motion**, and **Locomotive Scroll**. The project replicates the interactive and smooth scrolling experience of the original Ochi website while showcasing these powerful frameworks and libraries.

## Tech Stack

- **Next.js**: Framework for building fast, server-rendered React applications.
- **React.js**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript that adds static types.
- **Tailwind CSS**: Utility-first CSS framework for fast UI development.
- **GSAP (GreenSock Animation Platform)**: High-performance JavaScript animation library.
- **Framer Motion**: A React animation library for creating smooth animations.
- **Locomotive Scroll**: A smooth scrolling library that adds inertia, parallax effects, and better scroll handling.

## Features

- **Smooth Scrolling**: Implemented using Locomotive Scroll for enhanced user experience.
- **Animations**: Interactive animations using GSAP and Framer Motion.
- **Responsive Design**: Fully responsive across devices, leveraging Tailwind CSS utilities.
- **TypeScript**: Strict type checking and IntelliSense for better development experience.
- **SEO Optimized**: Built with Next.js, which includes features like server-side rendering (SSR) and static site generation (SSG) for better performance and SEO.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AJAY260505/ochi-website-clone.git
   cd ochi-website-clone
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

## Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the project for production.
- **`npm run start`**: Start the production server.
- **`npm run lint`**: Run ESLint for code quality checks.

## Folder Structure

```
.
├── components       # Reusable UI components
├── pages            # Next.js pages and routes
├── public           # Static assets
├── styles           # Global and component-specific styles
├── animations       # GSAP and Framer Motion animations
├── tsconfig.json    # TypeScript configuration
├── next.config.js   # Next.js configuration
└── package.json     # Dependencies and scripts
```

## Animations & Interactivity

- **GSAP**: For smooth scrolling animations and complex interactions.
- **Framer Motion**: For component-level animations and transitions.
- **Locomotive Scroll**: Adds smooth scrolling with inertia, parallax effects, and scroll-triggered animations.

## Customization

- **Tailwind CSS**: Tailwind is fully customizable. Modify the `tailwind.config.js` file to add custom colors, spacing, and more.
- **Animations**: GSAP and Framer Motion animations can be customized in the `animations` folder.

## Deployment

To deploy this project, you can use platforms like **Vercel** (recommended for Next.js projects) or **Netlify**.

### Deploying to Vercel

1. Push your project to a Git repository (GitHub, GitLab, Bitbucket).
2. Go to [Vercel](https://vercel.com/), log in, and click **New Project**.
3. Import your repository and follow the instructions to deploy.
4. Your site will be live with automatic builds on each push.

## Contributing

Feel free to submit issues or pull requests if you'd like to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
