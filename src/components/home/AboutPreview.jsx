import { Link } from 'react-router-dom';
import ImageSlot from '@/components/common/ImageSlot';
import StatsBlock from '@/components/about/StatsBlock';

export default function AboutPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="font-sans text-[12px] font-semibold uppercase tracking-widest text-accent mb-4">
          About Us
        </p>
        <h2 className="font-display text-[40px] md:text-[48px] leading-[1.15] text-text-primary mb-6">
          Building enduring value since 1998
        </h2>
        <p className="font-sans text-[16px] leading-[1.6] text-text-secondary mb-10">
          We are a real estate development company focused on creating thoughtfully
          designed spaces that enrich lives and build lasting value for generations.
        </p>
        <StatsBlock />
        <Link
          to="/about"
          className="inline-block mt-10 font-sans text-[13px] font-semibold uppercase tracking-wide text-text-primary underline underline-offset-4"
        >
          Learn More →
        </Link>
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
    </section>
  );
}
