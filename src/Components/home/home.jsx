import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full bg-slate-950 text-slate-100 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-32">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_50%)]" />
        
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Master Modern Web Apps With <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Clean Architecture</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-400 max-w-2xl mx-auto">
            Stop building fragile interfaces. Learn how to structure scalable frontend frameworks, integrate blazing-fast routing engines, and manage production-ready states.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] transition-all duration-300"
            >
              Get Started Free
            </Link>
            <Link to="/about" className="text-sm font-semibold leading-6 text-slate-300 hover:text-white transition-colors duration-200">
              Learn More <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features Grid Section (Replacing Lorem Ipsum) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Engineered for High Performance
          </h2>
          <p className="mt-4 text-slate-400">
            Everything you need to step away from basic UI templates and step into engineering functional web ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Feature Card 1 */}
          <div className="rounded-xl border border-slate-900 bg-slate-950/40 p-6 backdrop-blur-sm hover:border-emerald-500/30 transition-colors duration-300 group">
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
              <span className="font-bold">01</span>
            </div>
            <h3 className="text-lg font-semibold text-white">Dynamic Routing</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Load files dynamically based on URL segments using multi-nested engines and catch-all state patterns.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="rounded-xl border border-slate-900 bg-slate-950/40 p-6 backdrop-blur-sm hover:border-emerald-500/30 transition-colors duration-300 group">
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
              <span className="font-bold">02</span>
            </div>
            <h3 className="text-lg font-semibold text-white">Optimized Loaders</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Prefetch API responses before structural mount executions to eradicate rendering layout layout lags entirely.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="rounded-xl border border-slate-900 bg-slate-950/40 p-6 backdrop-blur-sm hover:border-emerald-500/30 transition-colors duration-300 group">
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
              <span className="font-bold">03</span>
            </div>
            <h3 className="text-lg font-semibold text-white">Tailwind Styling</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Leverage utility frameworks to generate bespoke, responsive, interactive themes without writing heavy CSS.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}