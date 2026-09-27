import Button from '@/components/common/Button';
import ImageSlot from '@/components/common/ImageSlot';
import { useTheme } from "@/hooks/useTheme";

export default function Hero() {
  const { theme } = useTheme();
  const heroImage = theme == "dark" ? "/src/assets/images/hero/hero-content-dark.png" : "/src/assets/images/hero/home-hero.png"

  return (
    <section className="relative h-[calc(100vh-72px)] min-h-[560px] overflow-hidden">

      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <ImageSlot
          src={heroImage}
          alt="UNNATI — Spaces for a better tomorrow"
          label={'Place image at:\nsrc/assets/images/hero/hero-content-dark.png'}
          className="h-full w-full"
          imgClassName="h-full w-full object-cover object-center"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />

      {/* Hero Content */}
      <div className="absolute inset-x-0 top-[18%] px-6 md:px-12 lg:px-20">
        <div className="">
          <h1 className="font-display font-light text-[40px] leading-[1.1] text-white sm:text-[56px] md:text-[72px]">
            Spaces for a better tomorrow
          </h1>
          <p className="mt-6 mb-8 font-sans text-[16px] text-white/80">
            Thoughtfully designed residences and communities that stand the test of time.
          </p>
        </div>
        <div className="mt-100">
          <Button variant="primary">
            Explore Our Projects
          </Button>
        </div>
      </div>
    </section>
  );
}