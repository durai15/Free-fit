import { AnimationController } from '@/components/AnimationController';
import { CategorySection } from '@/components/CategorySection/CategorySection';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { Newsletter } from '@/components/Newsletter/Newsletter';
import { ProductCarousel } from '@/components/ProductCarousel/ProductCarousel';
import { SplashScreen } from '@/components/SplashScreen';
import { StorySection } from '@/components/StorySection/StorySection';
import { Testimonials } from '@/components/Testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <SplashScreen />
      <AnimationController />
      <Header />
      <main>
        <Hero />
        <ProductCarousel />
        <CategorySection />
        <StorySection />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
