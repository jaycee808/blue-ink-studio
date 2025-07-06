import Hero from './components/Hero';
import AboutHero from './components/AboutHero';
import ServicesGrid from './components/ServicesGrid';
import PortfolioHero from './components/PortfolioHero';
import ContactHero from './components/ContactHero';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutHero />
      <ServicesGrid />
      {/* <PortfolioHero /> */}
      <ContactHero />
    </main>
  );
}
