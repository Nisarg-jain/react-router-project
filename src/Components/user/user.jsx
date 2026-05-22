import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
  // This hook grabs the dynamic piece of the URL
  const { userid } = useParams();

  return (
    <div className="w-full bg-slate-950 text-slate-100 min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="relative group max-w-lg w-full text-center">
        
        {/* Ambient background glow */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 blur-xl group-hover:opacity-30 transition duration-300" />
        
        {/* Main Card Element */}
        <div className="relative rounded-2xl border border-slate-900 bg-slate-900/40 p-10 backdrop-blur-md">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-400 mb-6">
            Dynamic Route Parameter
          </div>
          
          <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2">
            Active User Profile
          </h2>
          <p className="text-sm text-slate-400 mb-8">
            React Router dynamically intercepted the URL and extracted this value:
          </p>
          
          {/* Output Display Box */}
          <div className="inline-block rounded-xl bg-slate-950 border border-slate-800 px-8 py-4 shadow-inner">
            <span className="text-slate-500 font-medium mr-3 uppercase tracking-wider text-sm">Target ID:</span>
            <span className="text-3xl font-mono font-bold text-emerald-400">{userid}</span>
          </div>
        </div>

      </div>
    </div>
  );
}