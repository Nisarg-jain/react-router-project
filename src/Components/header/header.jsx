import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  // Shared transition styles for our navigation links
  const baseLinkStyle = "relative text-sm font-medium transition-all duration-300 ease-in-out py-2 px-1 hover:text-emerald-400";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo Section */}
        <div className="flex flex-1 items-center justify-start">
          <Link to="/" className="flex items-center gap-2 group">
            {/* Animated Gradient Logo Box */}
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-105 transition-transform duration-300" />
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-300 transition-all duration-300">
              Dev<span className="text-emerald-400">Sphere</span>
            </span>
          </Link>
        </div>

        {/* Dynamic Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `${baseLinkStyle} ${isActive ? 'text-emerald-400 font-semibold' : 'text-slate-400'}`
            }
          >
            {({ isActive }) => (
              <>
                Home
                {/* Glowing neon underline indicator appears only when route is active */}
                {isActive && <span className="absolute bottom-0 left-0 h-[2px] w-full bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.6)]" />}
              </>
            )}
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `${baseLinkStyle} ${isActive ? 'text-emerald-400 font-semibold' : 'text-slate-400'}`
            }
          >
            {({ isActive }) => (
              <>
                About
                {isActive && <span className="absolute bottom-0 left-0 h-[2px] w-full bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.6)]" />}
              </>
            )}
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `${baseLinkStyle} ${isActive ? 'text-emerald-400 font-semibold' : 'text-slate-400'}`
            }
          >
            {({ isActive }) => (
              <>
                Contact
                {isActive && <span className="absolute bottom-0 left-0 h-[2px] w-full bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.6)]" />}
              </>
            )}
          </NavLink>

          <NavLink 
            to="/github" 
            className={({ isActive }) => 
              `${baseLinkStyle} ${isActive ? 'text-emerald-400 font-semibold' : 'text-slate-400'}`
            }
          >
            {({ isActive }) => (
              <>
                GitHub
                {isActive && <span className="absolute bottom-0 left-0 h-[2px] w-full bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.6)]" />}
              </>
            )}
          </NavLink>
        </nav>

        {/* Action Buttons Section */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <Link 
            to="#" 
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
          >
            Log in
          </Link>
          <Link 
            to="#" 
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(52,211,153,0.4)] transition-all duration-300"
          >
            Get started
          </Link>
        </div>

      </div>
    </header>
  );
}