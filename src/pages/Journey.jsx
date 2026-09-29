import clsx from 'clsx';
import ImageSlot from '@/components/common/ImageSlot';
import { journeyMilestones } from '@/data/journey';

export default function Journey() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-sans text-[12px] font-semibold uppercase tracking-widest text-accent mb-4">
        Our Journey
      </p>
      <h1 className="font-display text-[40px] md:text-[48px] leading-[1.15] text-text-primary mb-6 max-w-xl">
        Milestones along the way
      </h1>
      <p className="font-sans text-[16px] leading-[1.6] text-text-secondary mb-20">
        From our founding to today, every milestone reflects our continued commitment
        to building trust and lasting value.
      </p>

      {/* ===== Mobile: simple left-rail timeline (alternating sides doesn't fit narrow screens) ===== */}
      <div className="md:hidden relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
        <div className="space-y-16">
          {journeyMilestones.map((milestone) => (
            <div key={milestone.id} className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-pill bg-button-primary border-4 border-bg-primary ring-1 ring-border" />
              <div className="aspect-[4/3] rounded-card overflow-hidden mb-4">
                <ImageSlot
                  src={milestone.image}
                  alt={milestone.title}
                  label={`Place image at:\n${milestone.image}`}
                  className="w-full h-full"
                  imgClassName="w-full h-full"
                />
              </div>
              <p className="font-display text-[26px] text-accent leading-none mb-2">
                {milestone.date}
              </p>
              <h3 className="font-display text-[20px] text-text-primary mb-2">
                {milestone.title}
              </h3>
              <p className="font-sans text-[14px] leading-[1.6] text-text-secondary">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Desktop/tablet: alternating left/right timeline ===== */}
      <div className="hidden md:block relative">
        {/* Center vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-border" />

        <div className="space-y-24">
          {journeyMilestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={milestone.id}
                data-milestone-index={index}
                data-milestone-side={isLeft ? 'left' : 'right'}
                className="relative grid grid-cols-[1fr_48px_1fr] items-center gap-0"
              >
                {/* Center dot, anchored on the timeline */}
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-pill bg-button-primary border-4 border-bg-primary ring-1 ring-border z-10" />

                {/* Left column */}
                <div className={clsx('pr-10', isLeft ? 'block' : 'invisible')}>
                  {isLeft && <MilestoneContent milestone={milestone} align="right" />}
                </div>

                {/* Center spacer (keeps the dot column width consistent) */}
                <div />

                {/* Right column */}
                <div className={clsx('pl-10', !isLeft ? 'block' : 'invisible')}>
                  {!isLeft && <MilestoneContent milestone={milestone} align="left" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MilestoneContent({ milestone, align }) {
  return (
    <div className={align === 'right' ? 'text-right' : 'text-left'}>
      <div className="aspect-[4/3] rounded-card overflow-hidden mb-5">
        <ImageSlot
          src={milestone.image}
          alt={milestone.title}
          label={`Place image at:\n${milestone.image}`}
          className="w-full h-full"
          imgClassName="w-full h-full"
        />
      </div>
      <p className="font-display text-[28px] text-accent leading-none mb-2">
        {milestone.date}
      </p>
      <h3 className="font-display text-[22px] text-text-primary mb-2">{milestone.title}</h3>
      <p
        className={clsx(
          'font-sans text-[14px] leading-[1.6] text-text-secondary',
          align === 'right' ? 'ml-auto' : ''
        )}
      >
        {milestone.description}
      </p>
    </div>
  );
}