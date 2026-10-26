# Bethel Chukwunyere — Personal Portfolio & Digital Venture Platform

> **Official Personal Portfolio & Brand Platform for Bethel Chukwunyere**, Digital Entrepreneur, AI Innovator, and Founder of **Goodgift Digital**.

This repository contains the complete, production-ready source code for Bethel Chukwunyere's personal portfolio website, showcasing services, real ventures, prototypes, methodologies, and direct business consultation channels.

---

## 🌟 Key Features

- **Brand & Visual Identity**: Deep charcoal palette (`#111318`, `#191B21`) with warm vibrant orange highlights (`#E67E22` to `#F5A623`).
- **Authentic Hero Section**: Displays Bethel Chukwunyere's official portrait, professional headline *"Turning Ideas Into Digital Experiences"*, and clean anchor actions.
- **Goodgift Digital & About Me**: Background narrative, core philosophy callout (*"Technology should not just look impressive. It should solve real problems, create opportunities, and help people grow"*), and strategic focus pillars.
- **5 Comprehensive Service Cards**:
  1. Website Development (Production Ready)
  2. AI-Powered Solutions (Concept & Prototyping)
  3. Mobile Application Development (Concept & Prototyping)
  4. Digital Business Growth (Production Ready)
  5. Product Development (Production Ready)
- **Filterable Venture Gallery**:
  - **Goodgift Digital** (Digital Agency)
  - **Bethelin Covibe TV** (Digital Business Platform)
  - **GGD Ad Network** (Advertising Technology)
  - **HustlePro AI** (AI Business Tools)
  - **Diamond KPI** (Business Analytics)
  - Real-time project inspector and customizer with clear status badges (`Concept`, `In Development`, `Live`).
- **How I Bring Ideas to Life**: 4-stage execution roadmap (Discover, Design, Build, Improve).
- **Why Work With Me**: 5 authentic guiding principles (no fabricated statistics).
- **Tooling & Stack**: Google AI Studio, Lovable, GitHub, Vercel, Supabase, React, Next.js, TypeScript, Tailwind CSS, Node.js.
- **Direct Client Enquiries**:
  - WhatsApp direct link formatted for Nigeria (`+2347043537401`)
  - Direct telephone channel (`07043537401`)
  - Validated brief submission with one-click WhatsApp message formatting, mailto client trigger, and formatted clipboard copy.
- **Performance & SEO**:
  - Full OpenGraph & Twitter Card metadata
  - Schema.org JSON-LD structured data for `Person` and `Organization`
  - Automated `sitemap.xml` and `robots.txt`
  - Zero-pill metadata design complying with modern design standards
  - Full keyboard accessibility and dark/light mode toggle

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 💻 Local Development

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or pnpm

### Quickstart

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/bethel-portfolio.git
   cd bethel-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Verify Type-Checking and Linting**:
   ```bash
   npm run lint
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```
   The production-optimized static bundle will be generated in `/dist`.

---

## 🚀 Deployment to Vercel via GitHub

### Step 1: Push to GitHub

1. Create a new repository on [GitHub](https://github.com/new) named `bethel-portfolio` (set it to Public or Private).
2. Push your project code:
   ```bash
   git init
   git add .
   git commit -m "feat: Bethel Chukwunyere production portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/bethel-portfolio.git
   git push -u origin main
   ```

### Step 2: Connect to Vercel

1. Navigate to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. On your Vercel Dashboard, click **Add New...** → **Project**.
3. Locate `bethel-portfolio` under your GitHub projects and click **Import**.
4. Vercel will automatically detect the **Vite** framework preset:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**. In under a minute, Vercel will publish your site to a live preview URL (e.g., `bethel-portfolio.vercel.app`).

---

## 🌐 Custom Domain & DNS Configuration

Once you acquire your custom domain (e.g. from Namecheap, GoDaddy, Porkbun, or Google Domains):

1. **Add Domain in Vercel**:
   - In your Vercel project dashboard, go to **Settings** → **Domains**.
   - Type your domain name (e.g., `bethelchukwunyere.com`) and click **Add**.
   - Vercel will suggest adding both `bethelchukwunyere.com` and `www.bethelchukwunyere.com`.

2. **Configure DNS Records at Your Domain Registrar**:
   Access your domain registrar's DNS Management console and configure the following records:

   | Record Type | Name / Host | Target / Value | TTL |
   | :--- | :--- | :--- | :--- |
   | **A Record** | `@` (or leave empty) | `76.76.21.21` | Automatic / 300 |
   | **CNAME** | `www` | `cname.vercel-dns.com` | Automatic / 300 |

3. **Automatic SSL / HTTPS**:
   - Vercel automatically detects the DNS records, provisions a free Let's Encrypt SSL/TLS certificate, and enforces HTTPS redirection across all traffic.
   - DNS propagation typically takes between 5 and 30 minutes.

---

## ⚙️ Configuration & Customization

- **Contact & WhatsApp**: All contact details can be configured directly in `src/data/portfolioData.ts` or updated live via the in-app "Direct Channels" edit button.
- **Profile Image**: The hero and about portrait defaults to Bethel's uploaded high-res image `/assets/aistudio/file_000000006acc8210b65c093f7f3761d9_a2059f14.png`, and can be customized via the on-screen photo editor or code.
- **Projects & Ventures**: Edit or add projects anytime in `src/data/portfolioData.ts` or directly within the live app using the "Add Venture / Project" modal.

---

## 📄 License & Attribution

© 2026 Bethel Chukwunyere. All rights reserved.
Developed for Goodgift Digital.
