import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050b16]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-4">
        <div>
          <div className="font-display text-3xl text-white">Incredible India</div>
          <p className="mt-4 text-slate-300">Luxury journeys shaped around devotion, heritage, nature, and unforgettable stories.</p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-[#f4c76a]">Explore</h4>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li><Link href="#">Temples</Link></li>
            <li><Link href="#">Heritage</Link></li>
            <li><Link href="#">Nature</Link></li>
            <li><Link href="#">Family trips</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-[#f4c76a]">Company</h4>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li><Link href="/privacy">Privacy policy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/login">Admin login</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-[#f4c76a]">Newsletter</h4>
          <form className="mt-4 flex flex-col gap-3">
            <input className="input" placeholder="Email address" />
            <button className="btn-secondary">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 text-sm text-slate-300">
          <span>© 2025 Incredible India Travel</span>
          <div className="flex gap-4">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>WhatsApp</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
