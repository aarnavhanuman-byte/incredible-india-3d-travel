import { ArrowRight, Clock3, MapPin } from 'lucide-react';

export type PackageType = {
  slug: string;
  name: string;
  duration: string;
  difficulty: string;
  price: string;
  itinerary: string[];
  highlights: string[];
};

export default function PackageCard({ packageItem }: { packageItem: PackageType }) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-[#091827] p-6">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-[#f4c76a]/40 bg-[#f4c76a]/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#f4c76a]">Signature</span>
        <span className="text-2xl font-bold text-white">{packageItem.price}</span>
      </div>

      <h3 className="mt-5 text-2xl font-semibold text-white">{packageItem.name}</h3>

      <div className="mt-4 flex gap-4 text-sm text-slate-300">
        <span className="inline-flex items-center gap-2"><Clock3 size={14} /> {packageItem.duration}</span>
        <span className="inline-flex items-center gap-2"><MapPin size={14} /> {packageItem.difficulty}</span>
      </div>

      <ul className="mt-6 space-y-3">
        {packageItem.itinerary.map((stop) => (
          <li key={stop} className="text-sm text-slate-300">• {stop}</li>
        ))}
      </ul>

      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Includes</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {packageItem.highlights.map((item) => (
            <span key={item} className="rounded-full bg-white/5 px-2 py-1 text-xs text-slate-300">{item}</span>
          ))}
        </div>
      </div>

      <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/5">
        View details <ArrowRight size={14} />
      </button>
    </article>
  );
}
