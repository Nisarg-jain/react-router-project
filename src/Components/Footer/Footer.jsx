import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-900 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        
        {/* Main Grid Layout */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Brand/Identity Column */}
          <div className="space-y-4 xl:col-span-1">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]" />
              <span className="text-lg font-bold tracking-tight text-white">
                Dev<span className="text-emerald-400">Sphere</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-6 text-slate-500">
              Building a modern, premium ecosystem for software developers and designers worldwide.
            </p>
          </div>

          {/* Links Columns Sub-Grid */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-3">
            
            {/* Column 1: Resources (Cross-referenced) */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/" className="text-sm transition-colors duration-200 hover:text-emerald-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm transition-colors duration-200 hover:text-emerald-400">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Follow Us (Cross-referenced) */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Follow us</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/github" className="text-sm transition-colors duration-200 hover:text-emerald-400">
                    GitHub
                  </Link>
                </li>
                <li>
                  <a href="https://discord.gg" target="_blank" rel="noreferrer" className="text-sm transition-colors duration-200 hover:text-emerald-400">
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal (Cross-referenced) */}
            <div className="col-span-2 sm:col-span-1 mt-8 sm:mt-0">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="#" className="text-sm transition-colors duration-200 hover:text-emerald-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm transition-colors duration-200 hover:text-emerald-400">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section: Copyright & Social Accents */}
        <div className="mt-12 border-t border-slate-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 sm:order-1">
            &copy; {new Date().getFullYear()} DevSphere Inc. All rights reserved.
          </p>
          
          {/* Decorative Social Accents (Clean text buttons replacing standard vector logos) */}
          <div className="flex space-x-6 sm:order-2">
            <a href="#" className="text-xs text-slate-600 hover:text-emerald-400 transition-colors">TWITTER</a>
            <a href="#" className="text-xs text-slate-600 hover:text-emerald-400 transition-colors">LINKEDIN</a>
            <a href="#" className="text-xs text-slate-600 hover:text-emerald-400 transition-colors">YOUTUBE</a>
          </div>
        </div>

      </div>
    </footer>
  );
}