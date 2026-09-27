import clsx from 'clsx';

const FILTERS = ['All', 'Residential', 'Commercial', 'Mixed Use'];

export default function ProjectFilterTabs({ active, onChange }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={clsx(
            'font-sans text-[13px] font-medium px-4 py-2 rounded-pill border transition-colors',
            active === filter
              ? 'bg-button-primary text-bg-primary border-button-primary'
              : 'border-border text-text-secondary hover:text-text-primary hover:border-accent'
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
