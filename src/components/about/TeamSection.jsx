import { founder, coFounder } from '@/data/team';
import TeamMemberCard from './TeamMemberCard';

export default function TeamSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <p className="font-sans text-[12px] font-semibold uppercase tracking-widest text-accent mb-4">
        Leadership
      </p>
      <h2 className="font-display text-[32px] md:text-[40px] text-text-primary mb-16">
        The people behind Unnati
      </h2>

      <div className="space-y-20">
        <TeamMemberCard member={founder} />
        <TeamMemberCard member={coFounder} reverse />
      </div>
    </div>
  );
}