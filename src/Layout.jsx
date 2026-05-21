import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/header/header'
import Footer from './Components/Footer/Footer'

export default function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
