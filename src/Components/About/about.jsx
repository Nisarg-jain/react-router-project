import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="w-full bg-slate-950 text-slate-100 min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Main Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Premium Visual Graphic Container */}
          <div className="lg:col-span-5 relative group">
            {/* Soft Ambient Core Glow behind the visual element */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 blur-xl group-hover:opacity-30 transition duration-300" />
            
            <div className="relative rounded-2xl border border-slate-900 bg-slate-900/40 p-8 backdrop-blur-md space-y-6">
              <div className="h-1.5 w-12 rounded-full bg-emerald-400" />
              <h3 className="text-xl font-bold text-white">Our Architecture Core</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                We believe frontend engineering shouldn't just look stunning—it needs to be mathematically sound, lightning fast, and structurally declarative.
              </p>
              
              {/* Dynamic Stats Row */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-900">
                <div>
                  <div className="text-2xl font-bold text-emerald-400">0ms</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Layout Lag</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Tailwind Native</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Descriptive Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-400">
              Technical Overview
            </div>
            
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              Pushing the Boundaries of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Single Page Applications</span>
            </h2>
            
            <p className="text-base text-slate-400 leading-relaxed">
              This sandbox project serves as a production-grade proving ground for exploring nested layouts, dynamic path capturing via hooks, and optimized asynchronous data prefetching patterns inside modern client-side routing structures.
            </p>
            
            <p className="text-base text-slate-400 leading-relaxed">
              By separating persistent structural shells like headers and footers from variable inner route segments, we maximize operational rendering efficiency and deliver flawless, instant view transitions.
            </p>

            <div className="pt-4 flex gap-4">
              <Link 
                to="/contact" 
                className="rounded-lg bg-slate-900 border border-slate-800 px-4 py-2.5 text-sm font-semibold text-white hover:border-slate-700 transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}