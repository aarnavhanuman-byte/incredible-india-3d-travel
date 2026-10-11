import { useState } from 'react';

export default function PlannerForm() {
  const [selected, setSelected] = useState('Temple tours');

  return (
    <div className="rounded-[28px] border border-white/10 bg-[#091827] p-6">
      <div className="flex flex-wrap gap-2">
        {['Temple tours', 'Spiritual journeys', 'Heritage trails', 'Beaches', 'Mountains', 'Family holidays'].map((choice) => (
          <button
            key={choice}
            type="button"
            onClick={() => setSelected(choice)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              selected === choice
                ? 'bg-[#f4c76a] text-slate-950'
                : 'border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10'
            }`}
          >
            {choice}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
        <h3 className="text-xl font-semibold text-white">Selected experience</h3>
        <p className="mt-3 text-slate-300">{selected} gives you the ideal balance of rituals, places, and comfortable pacing for a memorable India journey.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-slate-200">Trip length</label>
            <input className="input" placeholder="5-7 days" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-200">Travel month</label>
            <input className="input" placeholder="October" />
          </div>
        </div>

        <button className="btn-primary mt-6">Build my itinerary</button>
      </div>
    </div>
  );
}
