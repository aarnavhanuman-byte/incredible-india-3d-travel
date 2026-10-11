import Link from 'next/link';
import { Menu, Search, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050b16]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f4c76a]/40 bg-[#f4c76a]/10 text-[#f4c76a]">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-[0.3em] text-[#f4c76a]">Incredible</span>
            <span className="font-display text-2xl text-white">India</span>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
          <Link href="#">Home</Link>
          <Link href="#destinations">Destinations</Link>
          <Link href="#packages">Packages</Link>
          <Link href="#journey">Journey planner</Link>
          <Link href="#stories">Stories</Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200">
            <Search className="h-4 w-4" />
          </button>
          <button className="btn-primary">Book a journey</button>
        </div>

        <button className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 md:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  );
}
