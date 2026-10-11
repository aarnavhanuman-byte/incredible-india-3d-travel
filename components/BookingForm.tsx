"use client";

import { useState } from 'react';

const initialState = {
  destination: '',
  startCity: '',
  travelDate: '',
  travelers: '2',
  nights: '5',
  hotelPreference: '3-star',
  transport: 'Private car',
  budget: '₹30,000 - ₹60,000',
  specialRequirements: '',
  fullName: '',
  email: '',
  phone: '',
};

export default function BookingForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState('');

  function validate() {
    const next: Record<string, string> = {};
    if (!form.destination) next.destination = 'Please select a destination.';
    if (!form.fullName) next.fullName = 'Please provide your name.';
    if (!form.email) next.email = 'Email is required.';
    if (!form.phone) next.phone = 'Phone number is required.';
    if (!form.travelDate) next.travelDate = 'Travel date is required.';
    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSuccess('');
      return;
    }

    const response = await fetch('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      setSuccess('');
      setErrors({ api: data?.error || 'Your inquiry could not be sent.' });
      return;
    }

    setSuccess('Your travel inquiry has been received. Our team will contact you with package options.');
    setForm(initialState);
    setErrors({});
  }

  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-4">
      <div className="rounded-[32px] border border-white/10 bg-[#091827] p-6 md:p-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.28em] text-[#f4c76a]">Booking inquiry</p>
          <h2 className="mt-3 font-display text-3xl text-white md:text-5xl">Plan a custom India journey</h2>
          <p className="mt-3 text-slate-300">This form initiates an inquiry only. Confirmed bookings are arranged after review and confirmation by our travel team.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-slate-200">Destination</label>
            <select value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} className="input">
              <option value="">Select destination</option>
              <option value="Tirumala Tirupati Temple">Tirumala Tirupati Temple</option>
              <option value="Kashi Vishwanath Temple">Kashi Vishwanath Temple</option>
              <option value="Golden Temple">Golden Temple</option>
              <option value="Taj Mahal">Taj Mahal</option>
              <option value="Kerala Backwaters">Kerala Backwaters</option>
              <option value="Ladakh">Ladakh</option>
            </select>
            {errors.destination && <p className="mt-2 text-sm text-red-300">{errors.destination}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-200">Starting city</label>
            <input value={form.startCity} onChange={(e) => setForm({ ...form, startCity: e.target.value })} className="input" placeholder="e.g. Hyderabad" />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-200">Travel date</label>
            <input type="date" value={form.travelDate} onChange={(e) => setForm({ ...form, travelDate: e.target.value })} className="input" />
            {errors.travelDate && <p className="mt-2 text-sm text-red-300">{errors.travelDate}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-200">Travelers</label>
            <input type="number" min={1} value={form.travelers} onChange={(e) => setForm({ ...form, travelers: e.target.value })} className="input" />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-200">Number of days</label>
            <input type="number" min={2} value={form.nights} onChange={(e) => setForm({ ...form, nights: e.target.value })} className="input" />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-200">Hotel preference</label>
            <select value={form.hotelPreference} onChange={(e) => setForm({ ...form, hotelPreference: e.target.value })} className="input">
              <option>3-star</option>
              <option>4-star</option>
              <option>5-star luxury</option>
              <option>Heritage stay</option>
              <option>Eco retreat</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-200">Transportation</label>
            <select value={form.transport} onChange={(e) => setForm({ ...form, transport: e.target.value })} className="input">
              <option>Private car</option>
              <option>Train + stay</option>
              <option>Flight + private transfer</option>
              <option>Group coach</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-200">Budget range</label>
            <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="input">
              <option>₹30,000 - ₹60,000</option>
              <option>₹60,000 - ₹1,20,000</option>
              <option>₹1,20,000 - ₹2,00,000</option>
              <option>₹2,00,000+</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-slate-200">Special requirements</label>
            <textarea value={form.specialRequirements} onChange={(e) => setForm({ ...form, specialRequirements: e.target.value })} rows={4} className="input" placeholder="Accessibility, vegetarian meals, family needs, temple timing, etc." />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-200">Full name</label>
            <input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className="input" placeholder="Your full name" />
            {errors.fullName && <p className="mt-2 text-sm text-red-300">{errors.fullName}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-200">Email</label>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" placeholder="you@example.com" />
            {errors.email && <p className="mt-2 text-sm text-red-300">{errors.email}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-slate-200">Phone number</label>
            <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input" placeholder="+91 ..." />
            {errors.phone && <p className="mt-2 text-sm text-red-300">{errors.phone}</p>}
          </div>

          {errors.api && <div className="md:col-span-2 text-sm text-red-300">{errors.api}</div>}
          {success && <div className="md:col-span-2 text-sm text-emerald-300">{success}</div>}

          <div className="md:col-span-2">
            <button type="submit" className="btn-primary">Send inquiry</button>
          </div>
        </form>
      </div>
    </section>
  );
}
