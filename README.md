# 🛣️ React Router v6 Showcase

## 📝 Description
A modern Single Page Application (SPA) built to demonstrate advanced routing capabilities in React. This project focuses entirely on navigation architecture using `react-router-dom`, moving beyond simple UI design to implement real-world functional routing, dynamic parameters, and optimized data fetching.

## ✨ Key Features & Concepts Learned
* **Persistent Layouts:** Implemented a unified layout structure using the `<Outlet />` component to keep the Header and Footer static while the middle content dynamically changes.
* **Client-Side Routing:** Utilized `createBrowserRouter` and `RouterProvider` to navigate between pages (Home, About, Contact) without triggering a browser refresh.
* **Active State UI:** Used `<NavLink>` to automatically detect the current URL and apply conditional CSS classes to highlight the active menu item.
* **Dynamic URL Parameters:** Built a dynamic User page that extracts parameters directly from the URL path (e.g., `/user/:id`) using the `useParams` hook.
* **Optimized API Fetching:** Integrated React Router v6.4+ `loader` functions to fetch external data (GitHub API) *before* the component mounts, drastically improving perceived performance and preventing UI lag.

## 🛠️ Technologies Used
* **Frontend:** React.js (Bootstrapped with Vite)
* **Routing:** React Router v6 (Modern Object-Based Architecture)
* **Styling:** Tailwind CSS
* **API:** GitHub Public API

