# 🔐 Authentication Frontend (React + Vite)

This project is the **frontend** for the Authentication App, built with **React**, **Vite**, and **Tailwind CSS**.  
It provides authentication flows with **signup, login, email verification, and password reset** along with branded UI.  

---

## 📑 Table of Contents
- [🚀 Getting Started](#-getting-started)
- [📂 Project Structure](#-project-structure)
- [⚙️ Environment Variables](#️-environment-variables)
- [🛠 Available Scripts](#-available-scripts)
- [👨‍💻 Tech Stack](#-tech-stack)
---

##  Getting Started  

### 1️ Clone the Repository  
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

### 2 Clone the Repository 
npm install

3. Run the Development Server
npm run dev

The app will be available at 👉 http://localhost:5173

### 1. Available Scripts

npm run dev → Start dev server with HMR

npm run build → Build production bundle

npm run preview → Preview production build locally

npm run lint → Run ESLint checks

📂 Project Structure
authentication-frontend/
├── public/             # Static assets
├── src/
│   ├── assets/         # Logos, images
│   ├── components/     # Reusable UI components
│   ├── features/       # App pages (Login, Signup, ConfirmEmail, etc.)
│   ├── services/       # Backend API Urls
│   └── main.jsx        # App entry point
├── .env                # Environment variables
├── package.json
└── vite.config.js

⚙️ Environment Variables

Create a .env file in the root of your project and add:

VITE_API_BASE=http://localhost:5000/api

👨‍💻 Tech Stack

- React + Vite → Fast frontend development

- Tailwind CSS → Utility-first styling

- Axios → API calls

- React Router → Routing


