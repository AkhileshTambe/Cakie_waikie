# 🎂 CakeCraft — Online Custom Cake Design & Ordering Platform

> Design your dream cake online and order it from nearby bakeries.

![CakeCraft](https://img.shields.io/badge/CakeCraft-v1.0-orange?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB5PSIuOWVtIiBmb250LXNpemU9IjkwIj7wn46CPC90ZXh0Pjwvc3ZnPg==)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📌 Overview

**CakeCraft** is a full-featured, responsive website for an online custom cake design and ordering platform. Customers can design their own cakes step-by-step and place orders with nearby partner bakeries — no phone calls required.

### The Problem It Solves
- Customers cannot easily design custom cakes online
- Most cake orders require visiting the bakery or calling
- Custom cake communication between customer and bakery is often confusing

### Our Solution
- A website that allows customers to design cakes step-by-step
- Customers select cake weight, flavour, design, shape, theme, and message
- The order is sent to nearby partner bakeries

---

## 🌐 Live Pages

| Page | File | Description |
|------|------|-------------|
| 🏠 Home | `index.html` | Landing page with hero, features, how it works, testimonials, vision |
| 🎨 Designer | `designer.html` | Full interactive cake customiser with live price calculation |
| 🏪 Bakeries | `bakeries.html` | Browse & filter nearby partner bakeries |

---

## ✨ Features

### Customer Features
- 🎨 **Step-by-step Cake Designer** — Choose weight, flavour, shape, theme, tiers, frosting, add-ons and message
- 💰 **Live Price Calculation** — Price updates in real-time as you customise
- 📍 **Nearby Bakery Discovery** — Browse verified bakeries with ratings & reviews
- 🔍 **Search & Filter** — Find bakeries by city, speciality, delivery option, dietary needs
- 🚚 **Pickup or Delivery** — Choose your preferred fulfilment method
- 📸 **Photo Cake Upload** — Upload a photo for edible printing
- 📱 **Fully Responsive** — Works beautifully on mobile, tablet and desktop

### Platform Features
- Smooth scroll animations throughout
- Counter animations on stats
- Modal popups for order placement and partner applications
- Toast notifications for user feedback
- Mobile hamburger menu
- Progress bar in the cake designer

---

## 🗂️ File Structure

```
cakecraft/
├── index.html       ← Homepage / Landing page
├── designer.html    ← Interactive cake designer
├── bakeries.html    ← Bakery listing & search
├── style.css        ← All styles (CSS variables, responsive, animations)
├── script.js        ← Shared JavaScript (navbar, animations, utilities)
└── README.md        ← This file
```

---

## 🚀 Getting Started

### Option 1: Open Directly
Just open `index.html` in any modern browser — no build step or server required.

### Option 2: Local Server (recommended)
```bash
# Using Python
python3 -m http.server 3000

# Using Node.js / npx
npx serve .

# Then visit: http://localhost:3000
```

### Option 3: Deploy to GitHub Pages
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://yourusername.github.io/cakecraft/`

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--cream` | `#FAF5EC` | Page background |
| `--orange` | `#E8834A` | Primary accent, CTAs |
| `--brown` | `#3D1F0E` | Headings, dark buttons |
| `--brown2` | `#6B3F2A` | Body text |
| Display Font | Cormorant Garamond | Headings, hero text |
| Body Font | DM Sans | Body copy, UI labels |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| `> 1024px` | Full desktop grid |
| `768–1024px` | 2-column grids |
| `< 768px` | Single column, hamburger menu |
| `< 480px` | Stacked CTAs |

---

## 🗺️ Business Model

| Revenue Stream | Description |
|----------------|-------------|
| 💸 Commission | % fee on every order processed |
| 📋 Subscriptions | Monthly/annual plans for bakery partners |
| ⭐ Featured Listings | Promoted slots in bakery search results |

---

## 🔮 Roadmap

- [ ] **3D Cake Preview** — Three.js-powered real-time 3D cake viewer
- [ ] **AI Design Suggestions** — Claude/GPT-powered personalised design ideas
- [ ] **Occasion Reminders** — Push notifications for upcoming celebrations
- [ ] **Mobile App** — React Native iOS & Android app
- [ ] **Bakery Dashboard** — Order management portal for partner bakeries
- [ ] **Real-time Chat** — Direct messaging with bakery staff
- [ ] **Payment Gateway** — Razorpay / Stripe integration
- [ ] **Google Maps API** — Real location-based bakery finding

---

## 🧑‍💻 Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, CSS Grid, Flexbox, animations
- **Vanilla JavaScript** — No framework dependencies
- **Google Fonts** — Cormorant Garamond + DM Sans
- **IntersectionObserver API** — Scroll-triggered animations

---

## 📄 License

MIT License — free to use, modify and distribute.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Made with 🧡 for India's cake lovers and talented local bakers.