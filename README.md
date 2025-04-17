🚴‍♂️ Bike Bliss Landing Page with Authentication
Welcome to the Bike Bliss landing page project! This repository contains the source code for a Next.js-based web application that replicates a Figma-designed landing page. It includes a credential-based authentication system using NextAuth.js to ensure secure user login functionality.

📑 Table of Contents
Overview

Features

Technologies Used

Installation and Setup

Project Structure

Authentication Flow

Security Considerations

Bonus Features


📌 Overview
This project was developed as part of a developer assignment, with the following objectives:

Recreate a landing page design from a Figma file (desktop view only) using Next.js, Tailwind CSS, and TypeScript

Implement credential-based authentication using NextAuth.js

Ensure adherence to best practices for performance, security, and maintainability

The landing page is desktop-optimized and uses reusable components for scalability. Secure session management is implemented using NextAuth.js.

✨ Features
Core Features
Landing Page Replication: Matches the Figma design layout exactly

Authentication:

Credential-based login using NextAuth.js

Session management for route protection

Integrated Login/Logout in the Navbar

Responsive Design:

Desktop view optimized only

Bonus Features
Accessibility:

Semantic HTML tags

Focus styles for interactive elements

Animations:

Subtle hover effects using Tailwind CSS

SEO Optimization:

Meta tags and structured headings

🛠 Technologies Used
Frontend Framework: Next.js

Styling: Tailwind CSS

Language: TypeScript

Authentication: NextAuth.js

UI Components: shadcn/ui

Version Control: Git

⚙️ Installation and Setup
Clone the Repository:


git clone https://github.com/your-username/bike-bliss.git
cd bike-bliss
Install Dependencies:
npm install


Set Up Environment Variables:
Create a .env.local file in the root directory and add:


NEXTAUTH_SECRET=your-secret-key-here
Replace your-secret-key-here with a secure key generated from generate-secret.vercel.app

Run the Development Server:
npm run dev

Access the Application: Open http://localhost:3000 in your browser

📁 Project Structure

/app
  ├── api
  │   └── auth
  │       └── [...nextauth]
  │           └── route.ts
  ├── login
  │   └── page.tsx
  ├── page.tsx
  ├── layout.tsx
  └── globals.css
/components
  ├── ui
  │   ├── button.tsx
  │   ├── input.tsx
  │   └── label.tsx
  ├── Navbar.tsx
  ├── AccordionItem.tsx
  ├── CollectionExploration.tsx
  ├── FAQ.tsx
  ├── FeatureCard.tsx
  ├── FeatureSection.tsx
  ├── Footer.tsx
  ├── HeroSection.tsx
  └── Testimonial.tsx
/.env.local
/package.json
/tsconfig.json


🔐 Authentication Flow
🔓 Login
Navigate to /login and log in using credentials (e.g., testuser / password)

Upon success, user is redirected to the homepage (/)

🔒 Session Management
Authenticated users can access protected routes

Unauthenticated users are redirected to /login

🚪 Logout
Users can log out via the Logout button in the Navbar

🛡️ Security Considerations
Environment Security:
Sensitive variables like NEXTAUTH_SECRET are stored in .env.local and excluded via .gitignore

Error Handling:
Invalid credentials and other errors are handled gracefully

HTTPS:
Ensure the app runs over HTTPS in production for secure data transmission

💎 Bonus Features
Accessibility:
Semantic HTML and focus styles improve usability

Animations:
Subtle hover and transition effects using Tailwind

SEO Optimization:
Descriptive meta tags and structured headings for better search engine indexing
