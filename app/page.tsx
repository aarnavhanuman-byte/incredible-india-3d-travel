import EarthHero from '@/components/EarthHero';
import DestinationCard from '@/components/DestinationCard';
import PackageCard from '@/components/PackageCard';
import PlannerForm from '@/components/PlannerForm';
import BookingForm from '@/components/BookingForm';
import SectionHeading from '@/components/SectionHeading';
import { destinations, experiences, packages } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      <EarthHero />

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-10">
        <SectionHeading
          eyebrow="Explore by experience"
          title="Travel India through culture, devotion, and wonder."
          subtitle="Temple tours, spiritual journeys, heritage trails, beaches, mountains, and family holidays curated for meaningful memories."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
          {experiences.map((experience) => (
            <div key={experience.name} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[#f4c76a]/60 hover:bg-white/10">
              <div className="mb-4 text-3xl">{experience.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-white">{experience.name}</h3>
              <p className="text-sm leading-6 text-slate-300">{experience.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeading
          eyebrow="Featured destinations"
          title="Cinematic journeys across India"
          subtitle="From sacred cities to alpine escapes, every destination is designed to feel unforgettable."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {destinations.slice(0, 6).map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </section>

      <section className="bg-[#0b1220] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Interactive India explorer"
            title="Discover regions, sacred routes, and scenic highlights"
            subtitle="Filter by journey style and dive into the travel experiences that match your pace and interests."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[32px] border border-white/10 bg-[#07131d] p-5 shadow-glow">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(244,199,106,0.18),_rgba(7,19,29,1)_60%)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(1,5,10,0.35)_52%,rgba(2,8,18,0.7)_100%)]" />
                <div className="absolute left-[18%] top-[25%] h-3 w-3 rounded-full bg-[#f4c76a] shadow-[0_0_20px_rgba(244,199,106,0.95)]" />
                <div className="absolute left-[34%] top-[18%] h-3 w-3 rounded-full bg-[#f4c76a] shadow-[0_0_20px_rgba(244,199,106,0.95)]" />
                <div className="absolute left-[49%] top-[36%] h-3 w-3 rounded-full bg-[#f4c76a] shadow-[0_0_20px_rgba(244,199,106,0.95)]" />
                <div className="absolute left-[63%] top-[28%] h-3 w-3 rounded-full bg-[#f4c76a] shadow-[0_0_20px_rgba(244,199,106,0.95)]" />
                <div className="absolute left-[72%] top-[64%] h-3 w-3 rounded-full bg-[#f4c76a] shadow-[0_0_20px_rgba(244,199,106,0.95)]" />
                <div className="absolute left-[44%] top-[62%] h-3 w-3 rounded-full bg-[#f4c76a] shadow-[0_0_20px_rgba(244,199,106,0.95)]" />
                <div className="absolute left-[24%] top-[68%] h-3 w-3 rounded-full bg-[#f4c76a] shadow-[0_0_20px_rgba(244,199,106,0.95)]" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">Regional filters</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['North', 'South', 'East', 'West', 'Himalaya', 'Coast'].map((region) => (
                    <button key={region} className="rounded-full border border-[#f4c76a]/40 bg-[#f4c76a]/10 px-4 py-2 text-sm text-[#f5d98a] transition hover:bg-[#f4c76a]/20">
                      {region}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="mb-4 text-lg font-semibold text-white">Popular destinations</h3>
                <ul className="space-y-3">
                  {destinations.slice(0, 6).map((item) => (
                    <li key={item.slug} className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3">
                      <span>{item.name}</span>
                      <span className="text-xs uppercase tracking-[0.2em] text-[#f4c76a]">{item.region}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeading
          eyebrow="Popular tour packages"
          title="Curated journeys built around your travel style"
          subtitle="Choose by duration, family fit, or spiritual depth."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.slug} packageItem={pkg} />
          ))}
        </div>
      </section>

      <section className="bg-[#0c1421] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading
                eyebrow="Plan your journey"
                title="Tell us what kind of India you want to experience."
                subtitle="We design custom spiritual, heritage, family, and nature journeys with transparent planning."
              />
            </div>
            <PlannerForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeading
          eyebrow="Why travel with us"
          title="Local expertise. Thoughtful planning. Genuine care."
          subtitle="Your India journey should feel personal, comfortable, and deeply informed."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Local expertise', 'Experienced specialists across temples, heritage cities, and nature retreats.'],
            ['Transparent pricing', 'No hidden charges. Clear packages and flexible trip planning.'],
            ['Personalized itineraries', 'Crafted around your pace, interests, and travel style.'],
            ['Round-the-clock support', 'Guidance before, during, and after your journey.'],
          ].map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#091420] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Traveler stories"
            title="Real journeys. Honest reflections."
            subtitle="We share testimonials only when they come from real traveler feedback."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                name: 'Shreya M.',
                location: 'Bengaluru',
                quote: 'The temple itinerary was elegant, deeply respectful, and wonderfully paced. It felt premium without losing the sense of spirituality.',
              },
              {
                name: 'Rahul V.',
                location: 'Mumbai',
                quote: 'Our heritage route across Tamil Nadu and Uttar Pradesh was immersive and beautifully organized. Every detail felt purposeful and authentic.',
              },
              {
                name: 'Aditi S.',
                location: 'Hyderabad',
                quote: 'The trip planning felt warm, reliable, and thoughtful. It balanced cultural depth with comfort and easy logistics.',
              },
            ].map((story) => (
              <div key={story.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-lg leading-8 text-slate-200">“{story.quote}”</p>
                <div className="mt-6">
                  <div className="font-semibold text-white">{story.name}</div>
                  <div className="text-sm text-[#f4c76a]">{story.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeading
          eyebrow="Travel inspiration"
          title="Guides for the mindful traveler"
          subtitle="Insights on rituals, cultural etiquette, best times to visit, and seasonal highlights."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            '10 temple travel tips for a first pilgrimage in India',
            'The best months to visit Kerala, Hampi, and Varanasi',
            'How to plan a family heritage trip across iconic landmarks',
          ].map((article) => (
            <article key={article} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 h-44 rounded-xl bg-[radial-gradient(circle_at_top,_rgba(244,199,106,0.22),_rgba(6,10,18,1)_62%)]" />
              <h3 className="text-xl font-semibold text-white">{article}</h3>
              <button className="mt-4 text-[#f4c76a] underline-offset-4 hover:underline">Read guide</button>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 pt-16">
        <div className="rounded-[32px] border border-[#f4c76a]/30 bg-[linear-gradient(135deg,rgba(244,199,106,0.14),rgba(11,18,32,0.9))] p-8 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-[#f4c76a]">Your Incredible India journey starts here</p>
          <h2 className="mt-4 font-display text-4xl text-white md:text-6xl">Start planning a journey that will stay with you forever.</h2>
          <div className="mt-8 flex justify-center gap-4">
            <button className="btn-primary">Explore packages</button>
            <button className="btn-secondary">Talk to an advisor</button>
          </div>
        </div>
      </section>

      <BookingForm />
    </>
  );
}
