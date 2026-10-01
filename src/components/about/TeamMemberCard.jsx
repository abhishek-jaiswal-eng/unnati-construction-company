import clsx from 'clsx';
import ImageSlot from '@/components/common/ImageSlot';

export default function TeamMemberCard({ member, reverse = false, className }) {
  return (
    <div className={clsx('relative', className)}>
      {/* Center axis line — hidden on mobile where columns stack */}
      <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border" />

      <div className="grid sm:grid-cols-2 gap-10 sm:gap-0 items-center">
        <div
          className={clsx(
            'aspect-[4/5] rounded-card overflow-hidden',
            reverse ? 'sm:order-2 sm:ml-10 md:ml-16' : 'sm:mr-10 md:mr-16'
          )}
        >
          <ImageSlot
            src={member.image}
            alt={member.name}
            label={`Place image at:\n${member.image}`}
            className="w-full h-full"
            imgClassName="w-full h-full"
          />
        </div>

        <div
          className={clsx(
            reverse ? 'sm:order-1 sm:mr-10 md:mr-16 sm:text-right' : 'sm:ml-10 md:ml-16'
          )}
        >
          <h3 className="font-display text-[28px] md:text-[32px] text-text-primary mb-1">
            {member.name}
          </h3>
          <p className="font-sans text-[13px] font-semibold text-accent uppercase tracking-wide mb-5">
            {member.role}
          </p>
          <p
            className={clsx(
              'font-sans text-[16px] leading-[1.7] text-text-secondary',
              reverse ? 'sm:ml-auto' : ''
            )}
          >
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
}