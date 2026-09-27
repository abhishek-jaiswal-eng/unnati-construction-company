import Button from '@/components/common/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-end bg-bg-secondary overflow-hidden">
      {/* Phase 2 will replace this with the real hero image + gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto w-full px-6 pb-20">
        <h1 className="font-display font-light text-[48px] md:text-[72px] leading-[1.1] text-text-primary max-w-2xl">
          Spaces for a better tomorrow
        </h1>
        <p className="font-sans text-[16px] text-text-secondary max-w-md mt-6 mb-8">
          Thoughtfully designed residences and communities that stand the test of time.
        </p>
        <Button variant="primary">Explore Our Projects</Button>
      </div>
    </section>
  );
}
