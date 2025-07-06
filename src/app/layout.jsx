import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero'

export const metadata = {
  title: 'Blue Ink Studio',
  description: 'Digital Design with Purpose.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="hero-bg-wrapper">
        <Navbar />
        <Hero />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}