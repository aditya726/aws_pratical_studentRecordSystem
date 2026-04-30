import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <nav className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <GraduationCap size={20} />
            </div>
            <span className="text-xl font-bold text-slate-900">EduManage</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Log in</Link>
            <Link to="/register" className="btn-primary hidden sm:inline-flex text-sm">Get Started</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Manage student records with <span className="text-indigo-600">ease</span> and <span className="text-indigo-600">security</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto mb-10">
            A premium platform for modern educational institutions. Keep track of students, grades, and details seamlessly in one secure location.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/register" className="btn-primary text-base px-8 py-3 rounded-full">
              Start for free <ArrowRight size={18} className="ml-2 inline" />
            </Link>
          </div>
        </div>

        <div className="bg-white border-t border-slate-200 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Fast</h3>
                <p className="text-slate-500">Built on modern technologies ensuring instant updates and real-time responsiveness.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Secure by Default</h3>
                <p className="text-slate-500">Industry-standard JWT authentication keeps all your student records private and safe.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">User Friendly</h3>
                <p className="text-slate-500">An intuitive, beautifully designed interface that requires zero training to use effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 py-12 text-center text-slate-400">
        <div className="flex justify-center items-center gap-2 mb-4">
          <GraduationCap size={24} className="text-indigo-400" />
          <span className="text-xl font-bold text-white">EduManage</span>
        </div>
        <p>&copy; {new Date().getFullYear()} EduManage Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
