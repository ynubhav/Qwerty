
# Medium Clone 📝

A modern **Medium-style blogging platform** built with **React (TSX)** on the frontend and **Hono + TypeScript** on the backend.  
Deployed globally using **Vercel (frontend)** and **Cloudflare Workers (backend)**, with **PostgreSQL + Prisma Accelerate** for a scalable, production-ready database layer.

----------

## 🔗 Live Demo

👉 [Medium Clone – Live App](https://medium-two-kappa.vercel.app/)

----------

## 🚀 Tech Stack

### **Frontend**

-   ⚛️ React + TypeScript (modern component architecture)
    
-   🎨 Tailwind CSS for responsive styling
    
-   ▲ Deployed on Vercel (global CDN + serverless)
    

### **Backend**

-   ⚡ Hono (blazing-fast TypeScript framework for Edge runtimes)
    
-   📦 Prisma ORM + PostgreSQL
    
-   🚀 Prisma Accelerate for optimized queries & reduced latency
    
-   ☁️ Cloudflare Workers (edge-first deployment)
    

----------

## ✨ Key Features

-   🔐 **Authentication & Authorization**: Secure JWT-based login system
    
-   📝 **Blog Management**: Create, edit, delete posts with Image Upload

-  💽 **Database Pooling**: Using Prisma Accelerate
    
-   🖼️ **Image Handling**: Upload & render images in blog posts
    
-   🔎 **Search & Filter**: Fast searching and filtering of articles
    
-   📱 **Responsive UI**: Optimized for mobile, tablet, and desktop
    
-   ⚡ **Performance**: Prisma Accelerate + Edge deployment for low-latency DB access
    
-   🌍 **Scalable Infra**: Serverless architecture on Cloudflare + Vercel

- 🌑 **Dark Mode**: Themes like : Light, Dark and System theme.
    

----------

## 📂 Project Structure

```
/frontend        → React + TSX client (Vercel)
/backend         → Hono + TS API (Cloudflare Workers)
/backend/prisma  → Prisma schema + migrations
``` 

----------

## 🛠️ Getting Started

### Prerequisites

-   Node.js >= 18
    
-   PostgreSQL database
    
-   pnpm / npm / yarn
    

### 1️⃣ Clone the Repo

```
git clone https://github.com/ynubhav/qwerty.git 
cd qwerty
``` 

### 2️⃣ Install Dependencies

Frontend:

```
cd frontend
npm install
``` 

Backend:

```
cd backend
npm install
``` 

### 3️⃣ Setup Environment Variables

**Frontend (`.env.local`)**

`VITE_BACKEND_URL=https://your-backend-url.workers.dev` 

**Backend (`.env`)**

`DATABASE_URL="postgresql://user:password@host:port/dbname"
PRISMA_ACCELERATE_URL="your-prisma-accelerate-url"
JWT_SECRET="supersecretkey"` 

### 4️⃣ Database Setup

`cd backend
npx prisma migrate dev` 

### 5️⃣ Run Locally

Frontend:

`npm run dev` 

Backend:

`npm run dev` 

----------

## 🚀 Deployment

**Frontend (Vercel)**

-   Deploy `/frontend` folder directly to Vercel.
    

**Backend (Cloudflare Workers)**

`npm run deploy` 

----------

## 📌 Roadmap

-   Rich text editor with drag-and-drop image support
    
-   Comments & likes system
    
-   Blog categories + tagging
    
-   Analytics dashboard for authors
    

----------

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.  
Open an issue first to discuss major changes.

----------

## 📜 License

MIT License.