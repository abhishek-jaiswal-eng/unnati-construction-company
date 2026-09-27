const STATS = [
  { value: '25+', label: 'Years of experience' },
  { value: '15+', label: 'Projects delivered' },
  { value: '10M+', label: 'Sq. Ft. developed' },
];

export default function StatsBlock() {
  return (
    <div className="flex flex-wrap gap-10 md:gap-16">
      {STATS.map((stat) => (
        <div key={stat.label}>
          <p className="font-display text-[36px] text-text-primary leading-none mb-2">
            {stat.value}
          </p>
          <p className="font-sans text-[13px] text-text-secondary">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
