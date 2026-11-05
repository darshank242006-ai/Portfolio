# Darshan K — Portfolio

A high-performance, modern single-page developer portfolio showcasing full-stack Java projects, technical skills, and professional experience.

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

## Live Site

- **Live URL**: [https://YOUR-SITE-URL/](https://YOUR-SITE-URL/)

## Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS 4**
- **Framer Motion**
- **AOS (Animate On Scroll)**
- **EmailJS**
- **WebGL (SplashCursor fluid simulation)**

## Run Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

To enable contact form delivery with EmailJS, add the following variables to `.env.local`:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

*(Note: If left unconfigured, the contact form gracefully uses direct mailto communication).*
