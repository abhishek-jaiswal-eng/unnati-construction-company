import ImageSlot from '@/components/common/ImageSlot';

export default function TeamMemberCard({ member, size = 'default' }) {
  const isFeatured = size === 'featured';

  return (
    <div className={isFeatured ? 'flex flex-col items-center text-center' : 'text-center'}>
      <div
        className={
          isFeatured
            ? 'w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-5'
            : 'w-28 h-28 rounded-full overflow-hidden mb-4 mx-auto'
        }
      >
        <ImageSlot
          src={member.image}
          alt={member.name}
          label={`Place image at:\n${member.image}`}
          className="w-full h-full"
          imgClassName="w-full h-full"
        />
      </div>
      <h3 className={isFeatured ? 'font-display text-[24px] text-text-primary' : 'font-display text-[18px] text-text-primary'}>
        {member.name}
      </h3>
      <p className={isFeatured ? 'font-sans text-[13px] text-accent uppercase tracking-wide mt-1 mb-4' : 'font-sans text-[12px] text-accent uppercase tracking-wide mt-1 mb-2'}>
        {member.role}
      </p>
      <p className={isFeatured ? 'font-sans text-[15px] leading-[1.6] text-text-secondary mx-auto' : 'font-sans text-[13px] leading-[1.5] text-text-secondary'}>
        {member.bio}
      </p>
    </div>
  );
}