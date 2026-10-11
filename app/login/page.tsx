import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-5 py-24">
      <div className="rounded-[28px] border border-white/10 bg-[#091827] p-8 shadow-glow">
        <p className="text-sm uppercase tracking-[0.28em] text-[#f4c76a]">Admin access</p>
        <h1 className="mt-4 font-display text-4xl text-white">Login</h1>

        <form className="mt-8 space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-200">Email</label>
            <input type="email" className="input" placeholder="admin@incredibleindia.travel" />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-200">Password</label>
            <input type="password" className="input" placeholder="••••••••" />
          </div>

          <button type="submit" className="btn-primary w-full">Sign in</button>
        </form>

        <p className="mt-6 text-sm text-slate-300">
          Need a protected dashboard? Connect NextAuth and role-based access for production use.
        </p>

        <Link href="/admin" className="mt-6 inline-block text-sm text-[#f4c76a] hover:underline">
          Go to dashboard preview
        </Link>
      </div>
    </div>
  );
}
