type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div>
      <p className="text-sm uppercase tracking-[0.28em] text-[#f4c76a]">{eyebrow}</p>
      <h2 className="mt-4 max-w-3xl font-display text-3xl text-white md:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-slate-300">{subtitle}</p>
    </div>
  );
}
