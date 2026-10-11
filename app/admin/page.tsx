export default function AdminPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-24">
      <div className="rounded-[28px] border border-white/10 bg-[#091827] p-8">
        <h1 className="font-display text-4xl text-white">Admin Dashboard</h1>
        <p className="mt-3 text-slate-300">Manage destinations, packages, itineraries, prices, bookings, and customer inquiries.</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <StatCard label="Destinations" value="26" />
          <StatCard label="Packages" value="12" />
          <StatCard label="Inquiries" value="89" />
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-sm uppercase tracking-[0.18em] text-slate-400">{label}</div>
      <div className="mt-4 text-4xl font-bold text-white">{value}</div>
    </div>
  );
}
