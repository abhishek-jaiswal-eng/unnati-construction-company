import { founder, coFounder, coreTeam } from '@/data/team';
import TeamMemberCard from './TeamMemberCard';

export default function TeamSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <p className="font-sans text-[12px] font-semibold uppercase tracking-widest text-accent mb-4">
        Our Team
      </p>
      <h2 className="font-display text-[32px] md:text-[40px] text-text-primary mb-16">
        The people behind Unnati
      </h2>

      {/* Founder + Co-Founder — featured, larger */}
      <div className="grid sm:grid-cols-2 gap-12 md:gap-20 mb-20 pb-20 border-b border-border">
        <TeamMemberCard member={founder} size="featured" />
        <TeamMemberCard member={coFounder} size="featured" />
      </div>

      {/* Core team — 6 slots */}
      <h3 className="font-display text-[24px] text-text-primary mb-10">Core Team</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {coreTeam.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}