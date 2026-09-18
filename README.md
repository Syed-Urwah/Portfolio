<h1 align="center">Developer Portfolio</h1>

<p align="center">
  <strong>A modern, responsive, and customizable portfolio template for developers and freelancers</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js" alt="Next.js 16.0.1">
  <img src="https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react" alt="React 19.2.0">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS 4">
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License">
</p>

---

## Overview

A professional portfolio template built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. Features a modern App Router architecture, server components, and data-driven configuration for easy customization.

---

## Features

- **Cutting-Edge Tech Stack**: Built with Next.js 16, React 19, and Tailwind CSS 4
- **Fully Responsive**: Optimized for all devices and screen sizes
- **SEO Optimized**: Better visibility on search engines with Next.js metadata API
- **Blazing Fast Performance**: Leverages Next.js 16 server components and streaming
- **App Router**: Uses the modern Next.js App Router architecture
- **Easy Customization**: Simple data-driven configuration
- **Contact Form**: Integrated email and Telegram notifications
- **Blog Integration**: Automatically fetch posts from dev.to
- **Dark Theme**: Beautiful gradient design with Lottie animations
- **Docker Support**: Easy containerized deployment
- **Google Analytics**: Track visitor insights with GTM support

---

## Sections

| Section           | Description                                         |
| ----------------- | --------------------------------------------------- |
| **Hero**          | Eye-catching introduction with animated elements    |
| **About Me**      | Personal information and professional summary       |
| **Experience**    | Work history and professional accomplishments       |
| **Skills**        | Technical skills with animated marquee display      |
| **Projects**      | Showcase your best work with descriptions and links |
| **Education**     | Academic background and certifications              |
| **Blog**          | Latest articles from dev.to (auto-fetched)          |
| **Contact**       | Get in touch form with email/Telegram integration   |

---

## Tech Stack

| Technology       | Version | Purpose                                   |
| ---------------- | ------- | ----------------------------------------- |
| **Next.js**      | 16.0.1  | React framework with App Router           |
| **React**        | 19.2.0  | UI component library with latest features |
| **Tailwind CSS** | 4.x     | Utility-first CSS framework               |
| **SASS**         | Latest  | CSS preprocessor                          |
| **Lottie**       | Latest  | Lightweight animations                    |
| **Nodemailer**   | Latest  | Email sending functionality               |
| **Axios**        | Latest  | HTTP client for API requests              |
| **Docker**       | -       | Containerization platform                 |

---

## Installation

### Prerequisites

- **Node.js** v18.17.0+ ([Download](https://nodejs.org/en/download/))
- **Git** ([Download](https://git-scm.com/downloads))
- **pnpm** (recommended) or npm

### Getting Started

```bash
# Clone the repository
git clone https://github.com/Syed-Urwah/developer-portfolio.git
cd developer-portfolio

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env` file in the root directory:

```env
# Google Tag Manager (Optional)
NEXT_PUBLIC_GTM=GTM-XXXXXXX

# Your deployed app URL
NEXT_PUBLIC_APP_URL=https://your-domain.com

# Telegram Bot Configuration (Optional)
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here

# Gmail Configuration (Optional)
GMAIL_PASSKEY=your_gmail_app_password
EMAIL_ADDRESS=your_email@gmail.com
```

---

## Docker Deployment

```bash
# Using Docker Compose
docker-compose up --build

# Or using Docker directly
docker build -t developer-portfolio:prod -f Dockerfile.prod .
docker run -p 3000:3000 developer-portfolio:prod
```

---

## Customization

All portfolio content is managed through data files in the `utils/data/` folder:

| File               | Purpose                                        |
| ------------------ | ---------------------------------------------- |
| `personal-data.js` | Your personal information and social links     |
| `experience.js`    | Your work experience and job history           |
| `projects-data.js` | Portfolio projects with descriptions and links |
| `skills.js`        | Technical skills and competencies              |
| `educations.js`    | Academic background and certifications         |
| `contactsData.js`  | Contact form configuration                     |

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add some AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Author

**Syed Urwah**
- GitHub: [https://github.com/Syed-Urwah](https://github.com/Syed-Urwah)
- Email: syedurwahdev@gmail.com
