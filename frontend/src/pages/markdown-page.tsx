import ReactMarkdown from 'react-markdown';

const markdowncode =`
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
`

export default function MarkdownPage() {
  return (
    <div className="markdown-page text-center">
      <h1>Markdown Page</h1>
      <p>This is a placeholder for the markdown content.</p>
      <ReactMarkdown>
        {markdowncode}
      </ReactMarkdown>
      {/* Add your markdown content here */}
    </div>
  );
}