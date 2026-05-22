import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import './index.css'

// Importing your persistent shell frame
import Layout from './components/layout/layout.jsx'

// Importing your upgraded pages with exact folder casing matched
import Home from './components/home/home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/contacts/contact.jsx'
import User from './components/user/user.jsx'

// 1. Fixed the Github import to include the Loader function!
import Github, { githubInfoLoader } from './components/github/github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      
      {/* 2. Added your missing Github route with the loader attached! */}
      <Route 
        loader={githubInfoLoader} 
        path='github' 
        element={<Github />} 
      />
      
      {/* 3. Commented out the NotFound route so Vite stops crashing. 
             Uncomment this once you create and import a NotFound.jsx file! */}
      {/* <Route path='*' element={<div>Page Not Found</div>} /> */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)