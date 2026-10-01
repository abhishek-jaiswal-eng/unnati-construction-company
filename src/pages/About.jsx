import { Link } from 'react-router-dom';
import ImageSlot from '@/components/common/ImageSlot';
import StatsBlock from '@/components/about/StatsBlock';
import Button from '@/components/common/Button';
import TeamSection from '@/components/about/TeamSection';

export default function About() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-sans text-[12px] font-semibold uppercase tracking-widest text-accent mb-4">
            About Us
          </p>
          <h1 className="font-display text-[40px] md:text-[48px] leading-[1.15] text-text-primary mb-6">
            Building enduring value since 1998
          </h1>
          <p className="font-sans text-[16px] leading-[1.6] text-text-secondary mb-10">
            We are a real estate development company focused on creating thoughtfully
            designed spaces that enrich lives and build lasting value for generations.
            Every project reflects our commitment to architectural integrity, sustainable
            practices, and enduring craftsmanship.
          </p>
          <StatsBlock />
          <Button as={Link} to="/journey" variant="secondary" className="mt-10">
            Our Journey
          </Button>
        </div>

        <div className="aspect-[4/5] rounded-card overflow-hidden">
          <ImageSlot
            src="/src/assets/images/about/about-building.jpg"
            alt="UNNATI residential building"
            label={'Place image at:\nsrc/assets/images/about/about-building.jpg'}
            className="w-full h-full"
            imgClassName="w-full h-full"
          />
        </div>
      </div>

      <TeamSection />
    </div>
  );
}
