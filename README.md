#  BookNest - Online Book Borrowing Platform

A modern, responsive, and secure **Online Book Borrowing System** built with **Next.js, Tailwind CSS, MongoDB, and BetterAuth**.

This application digitizes the traditional library experience, allowing users to browse books, filter by categories, view details, and borrow books with authentication.

---

##  Live Link
https://book-best-xjen.vercel.app/

---

##  Project Overview

BookNest is designed to provide a seamless digital library experience where users can:

- Browse a large collection of books
- Filter books by categories (Story, Tech, Science)
- View detailed book information
- Borrow books securely
- Manage user profiles
- Authenticate using Email/Password or Google Login

---

## Key Features

### 🏠 Home Page
- Hero Banner ("Find Your Next Read")
- Featured Books (Top 4 books)
- Marquee announcement section
- Popular Categories section
- Fully responsive UI (Mobile, Tablet, Desktop)

---

###  All Books Page
- Search books by title
- Category filtering sidebar
- Responsive book grid layout
- Book cards with image and "Details" button

---

###  Book Details Page (Protected Route)
- Only accessible for logged-in users
- Large book cover display
- Full book details (title, author, description, quantity)
- "Borrow This Book" button
- Toast notification for actions

---

###  Profile Page (Protected Route)
- User profile information
- Display name, email, image, user ID
- Member since date
- Update profile feature (Name & Image)
- Borrowed books section (UI prepared)

---

### Authentication System
- Email & Password Registration
- Email & Password Login
- Google Social Login (OAuth)
- Secure session handling using BetterAuth
- Protected routes for private pages

---

###  Responsive Design
- Mobile-friendly layout
- Tablet optimized UI
- Desktop full experience
- Tailwind CSS responsive system used

---

##  Tech Stack

- ⚡ Next.js (App Router)
- 🎨 Tailwind CSS
- 🧩 DaisyUI
- 🔐 BetterAuth
- 🍃 MongoDB
- ⚛️ React Icons
- 🔔 React Toastify

---

## 📦 NPM Packages Used

```bash
better-auth
mongodb
react-icons
react-toastify
Animate.css
