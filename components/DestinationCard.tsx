import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Destination } from '@/lib/data';

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1220]">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#f4c76a]">{destination.region}</span>
          <span className="text-xs text-slate-400">{destination.bestTime}</span>
        </div>

        <h3 className="text-2xl font-semibold text-white">{destination.name}</h3>
        <p className="mt-2 text-sm text-slate-300">{destination.tagline}</p>

        <div className="mt-4 flex gap-2 text-xs text-slate-300">
          <span>{destination.state}</span>
          <span>•</span>
          <span>{destination.duration}</span>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-300">{destination.description}</p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {destination.packages.map((pkg) => (
              <span key={pkg} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-300">
                {pkg}
              </span>
            ))}
          </div>

          <button className="inline-flex items-center gap-2 text-[#f4c76a]">
            Explore
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
