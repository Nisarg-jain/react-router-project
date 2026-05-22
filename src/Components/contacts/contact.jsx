import React from 'react';

export default function Contact() {
  return (
    <div className="w-full bg-slate-950 text-slate-100 min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Main Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Contact Info Connect */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 blur-xl group-hover:opacity-30 transition duration-300" />
            
            <div className="relative rounded-2xl border border-slate-900 bg-slate-900/40 p-8 backdrop-blur-md space-y-6">
              <div className="h-1.5 w-12 rounded-full bg-emerald-400" />
              <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Have questions about the React Router implementation, data loaders, or system architecture? Drop a message and let's discuss engineering.
              </p>
              
              <div className="space-y-4 pt-4 border-t border-slate-900/60 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400 font-semibold">Email:</span>
                  <span>support@devsphere.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400 font-semibold">Location:</span>
                  <span>Sagar, Madhya Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Premium Interactive Contact Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-400">
              Get in Touch
            </div>
            
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              Drop Us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Message</span>
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-slate-800 bg-slate-900/60 p-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-slate-800 bg-slate-900/60 p-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Type your message here..."
                  className="w-full rounded-lg border border-slate-800 bg-slate-900/60 p-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}