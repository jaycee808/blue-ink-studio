import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import PortfolioHero from './components/PortfolioHero';
import ContactHero from './components/ContactHero';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <PortfolioHero />
      <ContactHero />
    </main>
  );
}
