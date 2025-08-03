# 🎟️ Tier-Based Event Showcase App

A full-stack web app built with **Next.js (App Router)**, **Clerk.dev** for authentication and user metadata, **Supabase** for database, and **Tailwind CSS** for UI.

Users can sign in and upgrade their tier (Free → Silver → Gold → Platinum), unlocking different levels of events based on their tier.

---

## 🔗 Live Demo

👉[(live)](https://tier-event-loavw4wyf-hafilues-projects.vercel.app/)

---

## 🧪 Demo Users

You can use any of these users to test tier-based access:

| Tier     | Email                 | Password     |
|----------|-----------------------|--------------|
| Silver   | silver1@gmail.com   | Silver1@123  |
| Silver   | silver2@gmail.com   | Silver2@123  |
| Gold     | gold1@gmail.com     | Gold1@123    |
| Gold     | gold2@gmail.com     | Gold2@123    |
| Platinum | platinum1@gmail.com  | platinum1@123  |

Or register a new user from the app.

---

## ⚙️ Features

- 🔐 Clerk authentication with `publicMetadata` tier tracking
- 🎯 Tier upgrade simulation (Free → Silver → Gold → Platinum)
- 📦 Supabase backend to store and filter events
- 🌐 Public/Private API routes using App Router
- 💅 Fully responsive with Tailwind CSS

---

## 🛠️ Tech Stack

- Next.js (App Router)
- Clerk.dev for auth & metadata
- Supabase for database
- Tailwind CSS
- TypeScript

---

## 🧰 Local Development

### 1. Clone the repository

```bash
git clone https://github.com/Hafilu/tier-event-app.git
cd tier-event-app
npm install
npm run dev

.env

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= 
CLERK_SECRET_KEY= 
CLERK_JWKS_URL= 
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=



