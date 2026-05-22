import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Github() {
  const data = useLoaderData();

  return (
    <div className="w-full bg-slate-950 text-slate-100 min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="relative group max-w-2xl w-full text-center">
        
        {/* Ambient background glow */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 blur-xl group-hover:opacity-30 transition duration-300" />
        
        {/* Main Card Element */}
        <div className="relative rounded-2xl border border-slate-900 bg-slate-900/40 p-10 backdrop-blur-md flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-400 mb-6">
            Data Prefetched via Router Loader
          </div>
          
          {/* GitHub Avatar */}
          <img 
            src={data.avatar_url} 
            alt="GitHub Avatar" 
            className="w-32 h-32 rounded-full border-4 border-slate-800 shadow-[0_0_20px_rgba(52,211,153,0.2)] mb-4"
          />

          {/* Profile Name */}
          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-1">
            {data.name || "Nisarg Jain"}
          </h1>

          {/* Username Handle */}
          <p className="text-sm font-mono text-emerald-400 mb-6">
            @{data.login || "Nisarg-Jain"}
          </p>

          {/* Extra GitHub Info Metrics Grid */}
          <div className="w-full max-w-sm mt-2 flex justify-around text-sm text-slate-400 border-t border-slate-800/60 pt-6">
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-xl">{data.followers}</span>
              <span className="uppercase tracking-wider text-xs mt-1">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-xl">{data.public_repos}</span>
              <span className="uppercase tracking-wider text-xs mt-1">Repositories</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-lg">{data.following}</span>
              <span className="uppercase tracking-wider text-xs mt-1">Following</span>
            </div>
          </div>

          {/* Premium Interactive LinkedIn Button */}
          <div className="w-full max-w-sm mt-8 pt-6 border-t border-slate-800/60">
            <a 
              href="https://www.linkedin.com/in/nisarg-jain0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-blue-600 hover:bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(37,99,235,0.15)] hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-200 group/btn"
            >
              <span>Connect on LinkedIn</span>
              <span className="transform group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Nisarg-Jain');
  return response.json();
};